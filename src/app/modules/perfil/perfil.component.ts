import { Component, OnInit } from '@angular/core';
import { Auth, User, updateProfile } from '@angular/fire/auth';
import { getStorage, uploadBytes, ref } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public user = JSON.parse(`${sessionStorage.getItem('user')}`) as User;
  public form!: FormGroup;
  public providerData: any[] = [];
  public uploadPercent!: Observable<any>;

  private basePath = '/uploads';
  storage = getStorage();
  storageRef = ref(this.storage, 'some-child');

  constructor(private formBuilder: FormBuilder, private auth: Auth, private db: AngularFireDatabase) {}

  ngOnInit(): void {

    console.log(this.auth.currentUser);

    this.form = this.formBuilder.group({
      email: [this.user.email],
      displayName: [this.user.providerData[0].displayName],
      photoURL: [],
      phoneNumber: [this.user.providerData[0].phoneNumber],
    });
  }

  public uploadFile(event:any){
    // const file = event.target.files[0];
    // uploadBytes(this.storageRef, file).then((snapshot) => {
    //   console.log('Uploaded a blob or file!');
    // });
  }

  onSubmit(){
    console.log(this.form.value);
    updateProfile(this.auth.currentUser!, {
      displayName: this.form.value.displayName,
      photoURL: this.form.value.photoURL,
    }).then(() => {
      // Profile updated!
      // ...
    })
  }

}
