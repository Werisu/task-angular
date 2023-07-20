import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Tasks } from 'src/app/models/task';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  tasks: Tasks = [];
  NumberOfTasks = 0;

  constructor(public auth: Auth, private db: AngularFireDatabase){}

  ngOnInit(): void {
    this.getCollectionTask();
  }

  getUser(){
    return this.auth.currentUser?.displayName;
  }

  getCollectionTask(){
    this.db.list('tasks').valueChanges().subscribe((data: any) => {
      this.tasks = data;
      console.log(this.tasks);

      this.tasks.forEach((item) => {
        if(item.group == 'fazer'){
          this.NumberOfTasks = item.itens?.length ?? 0;
        }
      });
    });
  }

}
