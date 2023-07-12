import { Component, OnInit } from '@angular/core';
import { Auth, User, updateProfile } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Storage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public user = JSON.parse(`${sessionStorage.getItem('user')}`) as User;
  public form!: FormGroup;
  public providerData: any[] = [];
  public uploadPercent!: Observable<number | undefined>;

  constructor(private formBuilder: FormBuilder, private auth: Auth) {}

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
    console.log(this.form.value);
    updateProfile(this.auth.currentUser!, {
      displayName: this.form.value.displayName,
      photoURL: this.form.value.photoURL,
    }).then(() => {
      // Profile updated!
      // ...
    })
  }

  // async upload(
  //   folder: string,
  //   name: string,
  //   file: File | null
  // ): Promise<string> {

  //   const ext = file!.name.split('.').pop();
  //   const path = `${folder}/${name}.${ext}`; {
  //   let url = '';

  //   if (file) {
  //     try {
  //       const storageRef = ref(this.storage, path);
  //       const task = uploadBytesResumable(storageRef, file);
  //       this.uploadPercent = percentage(task);
  //       await task;
  //       url = await getDownloadURL(storageRef);
  //     } catch(e: any) {
  //       console.error(e);
  //     }
  //   } else {
  //     // handle invalid file
  //   }
  //   return url;
  // }
  // }

  async onFileChange(event:any){
    // const file = event.target.files[0];
    // if(file){
    //   const path = `users/${file.name}`;
    //   const uploadTask = this.storage.upload(path, file);

    //   this.uploadPercent = uploadTask.percentageChanges();
    //   // const url = (await uploadTask).ref.getDownloadURL();
    //   uploadTask.then((e) => {
    //     this.storage.ref(`users/${file.name}`).getDownloadURL().subscribe((urlResult) => {
    //       this.form.get('photoURL')?.setValue(urlResult);
    //     });
    //   });
    // }
  }

  getForm(){
    console.log(this.form.value);
    console.log(this.form.get('photoURL')?.value);
  }

}
