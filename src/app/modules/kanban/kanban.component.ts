import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  showModal = false;
  listTags: string[] = [];
  newTaskForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newTaskForm = this.formBuilder.group({
      description: [''],
      tags: ['']
    });
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }

  addTag(){
    this.listTags.push(this.newTaskForm.value.tags);
  }

  removeTag(tag: string){
    this.listTags = this.listTags.filter((item) => item !== tag);
  }

  onSubmit(){

  }
}
