import { Component, OnInit } from '@angular/core';
import { Auth, User, updateProfile } from '@angular/fire/auth';
import { getStorage, uploadBytes, ref, Storage, getDownloadURL, percentage, uploadBytesResumable, UploadTaskSnapshot } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, finalize } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

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

  constructor(private formBuilder: FormBuilder, private auth: Auth, private storage: Storage) {}

  ngOnInit(): void {

    console.log(this.auth.currentUser);

    this.form = this.formBuilder.group({
      email: [this.user.email],
      displayName: [this.user.providerData[0].displayName],
      photoURL: [],
      phoneNumber: [this.user.providerData[0].phoneNumber],
    });
  }

  onSubmit(){
    updateProfile(this.auth.currentUser!, {
      displayName: this.form.value.displayName,
      photoURL: this.urlImage,
    }).then(() => {
      sessionStorage.setItem('user', JSON.stringify(this.auth.currentUser));
    })
  }

  async upload(
    event:any
  ): Promise<string> {

      const folder = 'users';
      const name = event.target.files[0].name;
      const file = event.target.files[0];

      const ext = file!.name.split('.').pop();
      const path = `${folder}/${name}`; {
      let url = '';
      let aux = '';

      if (file) {
        try {
          const storageRef = ref(this.storage, path);
          const task = uploadBytesResumable(storageRef, file);
          let aux = storageRef.fullPath;
          // this.uploadPercent = percentage(task);
          await task;
          url = await getDownloadURL(storageRef);
        } catch(e: any) {
          console.error(e);
        }
      } else {
        // handle invalid file
      }
      this.urlImage = url;
      return url;
    }
  }

  chooseFile(event: any){
    this.file = event.target.files[0];
    this.addData();
  }

  addData(){
    const storageRef = ref(this.storage, 'users/' + this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      this.uploadPercent = progress;
    },
    (error) => {

    }, () => {
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
