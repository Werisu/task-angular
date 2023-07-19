import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { Observable, map } from 'rxjs';
import {
  AngularFireDatabase,
  SnapshotAction,
} from '@angular/fire/compat/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  formNewName = '';
  formNewAge = '';
  passwordView = false;

  listRef: any;
  list!: Observable<any[]>;

  constructor(
    public authx: AuthService,
    private database: AngularFireDatabase
  ) {
    this.listRef = database.list('list');
    this.list = this.listRef
      .snapshotChanges()
      .pipe(
        map((changes: SnapshotAction<User>[]) =>
          changes.map((c) => ({key: c.payload.key, ...c.payload.val()})),
        )
      );
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  addItem() {
    this.listRef.push({
      name: this.formNewName,
      age: this.formNewAge,
      email: this.authx.user.email
    });
    this.formNewName = '';
    this.formNewAge = '';
  }

  deleteItem(key: string) {
    this.listRef.remove(key);
  }
}

export interface User {
  key: string;
  name: string;
  email: string;
  age: number;
}
