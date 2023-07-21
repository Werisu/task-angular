import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, firstValueFrom, from, groupBy, map, mergeMap, of, toArray, zip } from 'rxjs';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { AuthService } from '../../authentication/auth.service';
import { User } from '@angular/fire/auth';
import { Task, Tasks } from 'src/app/models/task';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { or } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  animations: [
    fadeInOnEnterAnimation()
  ]
})
export class KanbanComponent implements OnInit {
  @ViewChild('column') column!: ElementRef;
  showModal = false;
  listTags: string[] = [];
  newTaskForm!: FormGroup;

  listRef: AngularFireList<Task>;
  list!: Observable<any[]>;
  categories: string[] = [];
  listGroup!: Observable<any[]>;

  isDraggingOver = false;
  eventoSelecionado: any;
  item: any;
  sessionModal: boolean = false;
  taskModal: boolean = false;
  keyOriginOnDragStart!: Task;

  constructor(private formBuilder: FormBuilder, private database: AngularFireDatabase, private authService: AuthService, private db: AngularFireDatabase, private firestore: AngularFirestore) {
    this.listRef = database.list('tasks');
   this.list = this.listRef
      .snapshotChanges()
      .pipe(
        map((changes: SnapshotAction<Task>[]) =>
          changes.map((c) => ({key: c.payload.key, ...c.payload.val()})),
        )
      );
  }

  ngOnInit(): void {
    this.listCategories();
    this.newTaskForm = this.formBuilder.group({
      description: ['', Validators.required],
      tags: [''],
      status: ['']
    });

    this.listGroup = this.agrupar();
  }

  agrupar(){
    let subject = new Subject<any[]>();
    this.list.subscribe((list) => {
      let objetos: any[] = [];
      from(list)
      .pipe(
        groupBy(
          task => task.status
        ),
        mergeMap(group => zip(of(group.key), group.pipe(toArray())))
      )
      .subscribe((x) => {
        objetos.push(x);
      });

      subject.next(objetos);
    });
    return subject.asObservable();
  }

  toggleModal(item?: any){
    this.item = item;
    this.showModal = !this.showModal;
    this.taskModal = !this.taskModal;
    this.newTaskForm.get('status')?.setValue(item?.group);
  }

  toggleModalSession(){
    this.showModal = !this.showModal;
    this.sessionModal = !this.sessionModal;
  }

  addTag(){
    this.listTags.push(this.newTaskForm.value.tags);
    this.newTaskForm.get('tags')?.reset();
  }

  addTask(){
    if(this.item?.itens){
      this.listRef.update(this.item.key, {
        group: this.item.group,
        itens: [
          ...this.item.itens,
          {
          description: this.newTaskForm.value.description,
          tags: this.listTags
          }
      ]
      });
    }else{
      this.listRef.update(this.item.key, {
        group: this.item.group,
        itens: [
          {
            description: this.newTaskForm.value.description,
            tags: this.listTags,
            filed: false
          }
        ]
      });
    }


    this.newTaskForm.get('description')?.reset();
    this.listTags = [];
  }

  addList(){
    this.listRef.push({
      group: this.newTaskForm.value.status
    });
  }

  deleteTask(list: Task, index: number){
    Swal.fire({
      title: 'Deseja arquivar essa tarefa?',
      showCancelButton: true,
      confirmButtonText: 'Sim, arquivar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        list.itens![index].filed = true;
        this.listRef.update(list.key!, list);
        Swal.fire('Arquivado!', '', 'success')
      }
    });
  }

  removeTag(tag: string){
    this.listTags = this.listTags.filter((item) => item !== tag);
  }

  onSubmit(){

  }

  listCategories(){
    this.categories = ['fazer', 'fazendo', 'feito'];
  }

  /**
   * É quando arrasta
   * @param event o evento
   * @param item o item
   *
   * item:
   * {
   * "key": "-N_9QHSnvXXhp1U2gv61",
   * "description": "Lavar o carro",
   * "status": "fazer",
   * "tags": [
   *    "Casa"
   * ]
   * }
   */
  onDragStart(event: any, item: any, origin: Task) {
    // Define os dados sendo arrastados (no nosso caso, o item)
    event.dataTransfer.setData('text/plain', JSON.stringify(item));
    event.target.classList.add('dragging');
    this.eventoSelecionado = event;
    this.keyOriginOnDragStart = origin;
  }

  /**
   * a localização na tela onde o item está sendo arrastado.
   * @param event o evento
   *
   * exemplo: clientX: 788, clientY: 323, entre outros
   */
  onDragOver(event: any) {
    // Permite a soltura na área de destino
    event.preventDefault();
  }

  onDragEnter(event: any) {
    // Adicione estilos ou realce visual para indicar a área de destino
    this.isDraggingOver = true;
  }

  onDragLeave(event: any) {
    // Remova os estilos ou realce visual quando o elemento sair da área de destino
    this.isDraggingOver = false;
  }

  onDrop(event: any, newStatus: any, dataTask: any) {
    // Impede o comportamento padrão do navegador
    event.preventDefault();

    // Obtém os dados arrastados (o item)
    const data = event.dataTransfer.getData('text/plain');
    const item = JSON.parse(data);

    // Atualiza o status do item para o novo status da coluna
    item.status = newStatus;

    // Realiza qualquer lógica adicional necessária, como atualizar o banco de dados

    // Limpa os estilos ou realce visual
    this.eventoSelecionado.target.classList.remove('dragging');


    this.moveItem(newStatus, dataTask);
  }

  moveItem(destino: Task, dataTask: any) {
    const data = dataTask;

    // Obter os itens de ambos os objetos
    const sourceGroup = data.find((item:any) => item.key === this.keyOriginOnDragStart.key!);
    const destinationGroup = data.find((item:any) => item.key === destino.key!);

    // Obter o primeiro item do objeto "-N_nYB4RNsNgNeJdl741"
    const items = sourceGroup?.itens || [];
    const firstItem = items[0];

    if (firstItem) {
      // Adicionar o primeiro item ao objeto "-N_nhXMvRVVOFiG_-phH"
      destinationGroup["itens"] = destinationGroup["itens"] || [];
      destinationGroup["itens"].push(firstItem);

      // Remover o primeiro item do objeto "-N_nYB4RNsNgNeJdl741"
      items.splice(0, 1);

      // Atualizar os documentos no Firestore

      this.listRef.update(sourceGroup.key!, sourceGroup);
      this.listRef.update(destinationGroup.key!, destinationGroup);
    }

  }

  // usando o "@angular/fire": "^7.6.1", como mover um item de uma coleção para outra coleção no Realtime Database?

}

interface Tarefa {
  key: string;
  group: string;
  itens: { description: string; filed?: boolean; tags?: string[] }[];
}

interface ItemOrigem {
  key: string;
  group: string;
  itens: any[]; // Defina o tipo dos itens de acordo com sua estrutura real
}
