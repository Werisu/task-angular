import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, from, groupBy, map, mergeMap, of, toArray, zip } from 'rxjs';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { AuthService } from '../../authentication/auth.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  animations: [
    fadeInOnEnterAnimation()
  ]
})
export class KanbanComponent implements OnInit {
  showModal = false;
  listTags: string[] = [];
  newTaskForm!: FormGroup;

  listRef: any;
  list!: Observable<any[]>;
  categories: string[] = [];
  listGroup!: Observable<any[]>;

  constructor(private formBuilder: FormBuilder, private database: AngularFireDatabase, private authService: AuthService) {
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

  toggleModal(status?: string){
    this.showModal = !this.showModal;
    this.newTaskForm.get('status')?.setValue(status);
  }

  addTag(){
    this.listTags.push(this.newTaskForm.value.tags);
    this.newTaskForm.get('tags')?.reset();
  }

  addTask(){
    this.listRef.push({
      description: this.newTaskForm.value.description,
      tags: this.listTags,
      status: this.newTaskForm.value.status,
      author: this.authService.userLogged
    });
    this.newTaskForm.get('description')?.reset();
    this.listTags = ['fazer'];
  }

  deleteTask(key: string){
    this.listRef.remove(key);
  }

  removeTag(tag: string){
    this.listTags = this.listTags.filter((item) => item !== tag);
  }

  onSubmit(){

  }

  listCategories(){
    this.categories = ['fazer', 'fazendo', 'feito'];
  }
}

export interface Task {
  description: string;
  tags: string[];
  status: string;
  author: User;
}
