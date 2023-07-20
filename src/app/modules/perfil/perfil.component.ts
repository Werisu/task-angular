import { Component, OnInit } from '@angular/core';
import { Auth, User, updateEmail, updatePassword, updateProfile } from '@angular/fire/auth';
import { getStorage, uploadBytes, ref, Storage, getDownloadURL, percentage, uploadBytesResumable, UploadTaskSnapshot } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, finalize } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public user = JSON.parse(`${sessionStorage.getItem('user')}`) as User;
  public form!: FormGroup;
  public providerData: any[] = [];
  public uploadPercent!: number;

  public urlImage = '';
  public file: any = {};
  isLoading: boolean = false;
  userLogger?: User;

  constructor(private formBuilder: FormBuilder, private auth: Auth, private storage: Storage, private authService: AuthService) {}

  ngOnInit(): void {
    this.getUser();
    console.log(this.auth.currentUser);

    this.form = this.formBuilder.group({
      email: [this.user.email],
      displayName: [this.user.providerData[0].displayName],
      photoURL: [],
      password: [],
    });
  }

  getUser() {
    this.authService.getUser().subscribe(user => {
      this.userLogger = user;
    });
  }

  onSubmit(){
    updateProfile(this.auth.currentUser!, {
      displayName: this.form.value.displayName
    }).then(() => {
      sessionStorage.setItem('user', JSON.stringify(this.auth.currentUser));
      this.changeEmail();
    });
  }

  changePassword(){
    updatePassword(this.auth.currentUser!, this.form.value.password).then(() => {
      console.log('senha alterada');
    });
  }

  changeEmail(){
    updateEmail(this.auth.currentUser!, this.form.value.email).then(() => {
      console.log('email alterado');
    });
  }

  chooseFile(event: any){
    this.file = event.target.files[0];
    this.addData();
  }

  addData(){
    this.isLoading = true;
    const storageRef = ref(this.storage, 'users/' + this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      this.uploadPercent = progress;
    },
    (error) => {

    }, () => {
      this.isLoading = false;
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        this.urlImage = downloadURL;

        updateProfile(this.auth.currentUser!, {
          photoURL: this.urlImage,
        }).then(() => {
          sessionStorage.setItem('user', JSON.stringify(this.auth.currentUser));
        })

      });
    });
  }

  getForm(){
    console.log(this.form.value);
    console.log(this.form.get('photoURL')?.value);
  }

}
