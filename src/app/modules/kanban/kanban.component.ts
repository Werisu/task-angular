import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, from, groupBy, map, mergeMap, of, toArray, zip } from 'rxjs';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { AuthService } from '../../authentication/auth.service';
import { User } from '@angular/fire/auth';
import { Task, Tasks } from 'src/app/models/task';

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

  constructor(private formBuilder: FormBuilder, private database: AngularFireDatabase, private authService: AuthService, private db: AngularFireDatabase) {
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
      description: [''],
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
      console.log(objetos);

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
    list.itens![index].filed = true;
    this.listRef.update(list.key!, list);
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
  onDragStart(event: any, item: any) {
    // Define os dados sendo arrastados (no nosso caso, o item)
    event.dataTransfer.setData('text/plain', JSON.stringify(item));
    event.target.classList.add('dragging');
    this.eventoSelecionado = event;
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

  onDrop(event: any, newStatus: string) {
    // Impede o comportamento padrão do navegador
    event.preventDefault();

    // Obtém os dados arrastados (o item)
    const data = event.dataTransfer.getData('text/plain');
    const item = JSON.parse(data);

    // Atualiza o status do item para o novo status da coluna
    item.status = newStatus;

    // Realiza qualquer lógica adicional necessária, como atualizar o banco de dados

    // Limpa os estilos ou realce visual
    console.log(newStatus);
    this.eventoSelecionado.target.classList.remove('dragging');

    // this.listRef.update(item.key, {
    //   status: newStatus
    // });
  }

  //R$ 331,02
  //R$ 555,04


}
