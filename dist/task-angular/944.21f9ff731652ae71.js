"use strict";(self.webpackChunktask_angular=self.webpackChunktask_angular||[]).push([[944],{9944:(T,m,s)=>{s.r(m),s.d(m,{PerfilModule:()=>v});var u=s(6895),f=s(9051),g=s(7158),l=s(7512),e=s(4650),n=s(433);function c(t,o){1&t&&(e.TgZ(0,"button",30),e._uU(1," Enviar "),e.qZA())}function p(t,o){if(1&t&&(e.TgZ(0,"div",31)(1,"div",32),e._uU(2),e.qZA()()),2&t){const i=e.oxw();e.xp6(1),e.Akn("width: "+i.uploadPercent+"%"),e.xp6(1),e.hij(" ",i.uploadPercent,"%")}}function y(t,o){1&t&&(e.TgZ(0,"div",3)(1,"h2",4),e._uU(2," Personal Information "),e.qZA(),e.TgZ(3,"p",5),e._uU(4," Use a permanent address where you can receive mail. "),e.qZA(),e.TgZ(5,"div",6)(6,"div",33)(7,"label",34),e._uU(8,"First name"),e.qZA(),e.TgZ(9,"div",18),e._UZ(10,"input",35),e.qZA()(),e.TgZ(11,"div",33)(12,"label",36),e._uU(13,"Last name"),e.qZA(),e.TgZ(14,"div",18),e._UZ(15,"input",37),e.qZA()(),e.TgZ(16,"div",38)(17,"label",22),e._uU(18,"Email address"),e.qZA(),e.TgZ(19,"div",18),e._UZ(20,"input",39),e.qZA()(),e.TgZ(21,"div",33)(22,"label",40),e._uU(23,"Country"),e.qZA(),e.TgZ(24,"div",18)(25,"select",41)(26,"option"),e._uU(27,"United States"),e.qZA(),e.TgZ(28,"option"),e._uU(29,"Canada"),e.qZA(),e.TgZ(30,"option"),e._uU(31,"Mexico"),e.qZA()()()(),e.TgZ(32,"div",7)(33,"label",42),e._uU(34,"Street address"),e.qZA(),e.TgZ(35,"div",18),e._UZ(36,"input",43),e.qZA()(),e.TgZ(37,"div",44)(38,"label",45),e._uU(39,"City"),e.qZA(),e.TgZ(40,"div",18),e._UZ(41,"input",46),e.qZA()(),e.TgZ(42,"div",21)(43,"label",47),e._uU(44,"State / Province"),e.qZA(),e.TgZ(45,"div",18),e._UZ(46,"input",48),e.qZA()(),e.TgZ(47,"div",21)(48,"label",49),e._uU(49,"ZIP / Postal code"),e.qZA(),e.TgZ(50,"div",18),e._UZ(51,"input",50),e.qZA()()()())}function h(t,o){1&t&&(e.TgZ(0,"div",3)(1,"h2",4),e._uU(2," Notifications "),e.qZA(),e.TgZ(3,"p",5),e._uU(4," We'll always let you know about important changes, but you pick what else you want to hear about. "),e.qZA(),e.TgZ(5,"div",51)(6,"fieldset")(7,"legend",52),e._uU(8," By Email "),e.qZA(),e.TgZ(9,"div",53)(10,"div",54)(11,"div",55),e._UZ(12,"input",56),e.qZA(),e.TgZ(13,"div",57)(14,"label",58),e._uU(15,"Comments"),e.qZA(),e.TgZ(16,"p",59),e._uU(17," Get notified when someones posts a comment on a posting. "),e.qZA()()(),e.TgZ(18,"div",54)(19,"div",55),e._UZ(20,"input",60),e.qZA(),e.TgZ(21,"div",57)(22,"label",61),e._uU(23,"Candidates"),e.qZA(),e.TgZ(24,"p",59),e._uU(25," Get notified when a candidate applies for a job. "),e.qZA()()(),e.TgZ(26,"div",54)(27,"div",55),e._UZ(28,"input",62),e.qZA(),e.TgZ(29,"div",57)(30,"label",63),e._uU(31,"Offers"),e.qZA(),e.TgZ(32,"p",59),e._uU(33," Get notified when a candidate accepts or rejects an offer. "),e.qZA()()()()(),e.TgZ(34,"fieldset")(35,"legend",52),e._uU(36," Push Notifications "),e.qZA(),e.TgZ(37,"p",5),e._uU(38," These are delivered via SMS to your mobile phone. "),e.qZA(),e.TgZ(39,"div",53)(40,"div",64),e._UZ(41,"input",65),e.TgZ(42,"label",66),e._uU(43,"Everything"),e.qZA()(),e.TgZ(44,"div",64),e._UZ(45,"input",67),e.TgZ(46,"label",68),e._uU(47,"Same as email"),e.qZA()(),e.TgZ(48,"div",64),e._UZ(49,"input",69),e.TgZ(50,"label",70),e._uU(51,"No push notifications"),e.qZA()()()()()())}function x(t,o){1&t&&(e.TgZ(0,"button",71),e._uU(1," Cancel "),e.qZA())}const Z=[{path:"",component:(()=>{class t{constructor(i,a,r){this.formBuilder=i,this.auth=a,this.storage=r,this.user=JSON.parse(`${sessionStorage.getItem("user")}`),this.providerData=[],this.urlImage="",this.file={}}ngOnInit(){console.log(this.auth.currentUser),this.form=this.formBuilder.group({email:[this.user.email],displayName:[this.user.providerData[0].displayName],photoURL:[],phoneNumber:[this.user.providerData[0].phoneNumber]})}onSubmit(){(0,g.ck)(this.auth.currentUser,{displayName:this.form.value.displayName,photoURL:this.urlImage}).then(()=>{sessionStorage.setItem("user",JSON.stringify(this.auth.currentUser))})}chooseFile(i){this.file=i.target.files[0],this.addData()}addData(){const i=(0,l.iH)(this.storage,"users/"+this.file.name),a=(0,l.B0)(i,this.file);a.on("state_changed",r=>{const d=r.bytesTransferred/r.totalBytes*100;console.log("Upload is "+d+"% done"),this.uploadPercent=d},r=>{},()=>{(0,l.Jt)(a.snapshot.ref).then(r=>{console.log("File available at",r),this.urlImage=r,(0,g.ck)(this.auth.currentUser,{photoURL:this.urlImage}).then(()=>{sessionStorage.setItem("user",JSON.stringify(this.auth.currentUser))})})})}getForm(){console.log(this.form.value),console.log(this.form.get("photoURL")?.value)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(n.qu),e.Y36(g.gx),e.Y36(l.Ke))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-perfil"]],decls:44,vars:6,consts:[[1,"p-6"],[3,"formGroup","submit"],[1,"space-y-12"],[1,"border-b","border-gray-900/10","pb-12"],[1,"text-base","font-semibold","leading-7","text-gray-900"],[1,"mt-1","text-sm","leading-6","text-gray-600"],[1,"mt-10","grid","grid-cols-1","gap-x-6","gap-y-8","sm:grid-cols-6"],[1,"col-span-full"],["for","photo",1,"block","text-sm","font-medium","leading-6","text-gray-900"],[1,"mt-2","flex","items-center","gap-x-3"],["viewBox","0 0 24 24","fill","currentColor","aria-hidden","true",1,"h-12","w-12","text-gray-300"],["fill-rule","evenodd","d","M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z","clip-rule","evenodd"],["type","file","name","photoURL","formControlName","photoURL",3,"change"],["type","button","class","rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",4,"ngIf"],[2,"width","20%"],["class","w-full bg-gray-200 rounded-full dark:bg-gray-700",4,"ngIf"],[1,"sm:col-span-1"],["for","displayName",1,"block","text-sm","font-medium","leading-6","text-gray-900"],[1,"mt-2"],[1,"flex","rounded-md","shadow-sm","ring-1","ring-inset","ring-gray-300","focus-within:ring-2","focus-within:ring-inset","focus-within:ring-indigo-600","sm:max-w-md"],["type","text","name","displayName","id","displayName","formControlName","displayName","autocomplete","displayName","placeholder","Enjuru",1,"block","flex-1","border-0","bg-transparent","py-1.5","pl-1","text-gray-900","placeholder:text-gray-400","focus:ring-0","sm:text-sm","sm:leading-6"],[1,"sm:col-span-2"],["for","email",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["type","text","name","email","id","email","formControlName","email","autocomplete","email","placeholder","Enjuru",1,"block","flex-1","border-0","bg-transparent","py-1.5","pl-1","text-gray-900","placeholder:text-gray-400","focus:ring-0","sm:text-sm","sm:leading-6"],["for","phoneNumber",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["type","text","name","phoneNumber","id","phoneNumber","formControlName","phoneNumber","autocomplete","phoneNumber","placeholder","(99) 99999-9999",1,"block","flex-1","border-0","bg-transparent","py-1.5","pl-1","text-gray-900","placeholder:text-gray-400","focus:ring-0","sm:text-sm","sm:leading-6"],["class","border-b border-gray-900/10 pb-12",4,"ngIf"],[1,"mt-6","flex","items-center","justify-start","gap-x-6"],["type","button","class","text-sm font-semibold leading-6 text-gray-900",4,"ngIf"],["type","submit",1,"rounded-md","bg-indigo-600","px-3","py-2","text-sm","font-semibold","text-white","shadow-sm","hover:bg-indigo-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600"],["type","button",1,"rounded-md","bg-white","px-2.5","py-1.5","text-sm","font-semibold","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","hover:bg-gray-50"],[1,"w-full","bg-gray-200","rounded-full","dark:bg-gray-700"],[1,"bg-blue-600","text-xs","font-medium","text-blue-100","text-center","p-0.5","leading-none","rounded-full"],[1,"sm:col-span-3"],["for","first-name",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["type","text","name","first-name","id","first-name","autocomplete","given-name",1,"block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","last-name",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["type","text","name","last-name","id","last-name","autocomplete","family-name",1,"block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],[1,"sm:col-span-4"],["id","email","name","email","type","email","autocomplete","email",1,"block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","country",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["id","country","name","country","autocomplete","country-name",1,"block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:max-w-xs","sm:text-sm","sm:leading-6"],["for","street-address",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["type","text","name","street-address","id","street-address","autocomplete","street-address",1,"block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],[1,"sm:col-span-2","sm:col-start-1"],["for","city",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["type","text","name","city","id","city","autocomplete","address-level2",1,"block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","region",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["type","text","name","region","id","region","autocomplete","address-level1",1,"block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","postal-code",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["type","text","name","postal-code","id","postal-code","autocomplete","postal-code",1,"block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],[1,"mt-10","space-y-10"],[1,"text-sm","font-semibold","leading-6","text-gray-900"],[1,"mt-6","space-y-6"],[1,"relative","flex","gap-x-3"],[1,"flex","h-6","items-center"],["id","comments","name","comments","type","checkbox",1,"h-4","w-4","rounded","border-gray-300","text-indigo-600","focus:ring-indigo-600"],[1,"text-sm","leading-6"],["for","comments",1,"font-medium","text-gray-900"],[1,"text-gray-500"],["id","candidates","name","candidates","type","checkbox",1,"h-4","w-4","rounded","border-gray-300","text-indigo-600","focus:ring-indigo-600"],["for","candidates",1,"font-medium","text-gray-900"],["id","offers","name","offers","type","checkbox",1,"h-4","w-4","rounded","border-gray-300","text-indigo-600","focus:ring-indigo-600"],["for","offers",1,"font-medium","text-gray-900"],[1,"flex","items-center","gap-x-3"],["id","push-everything","name","push-notifications","type","radio",1,"h-4","w-4","border-gray-300","text-indigo-600","focus:ring-indigo-600"],["for","push-everything",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["id","push-email","name","push-notifications","type","radio",1,"h-4","w-4","border-gray-300","text-indigo-600","focus:ring-indigo-600"],["for","push-email",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["id","push-nothing","name","push-notifications","type","radio",1,"h-4","w-4","border-gray-300","text-indigo-600","focus:ring-indigo-600"],["for","push-nothing",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["type","button",1,"text-sm","font-semibold","leading-6","text-gray-900"]],template:function(i,a){1&i&&(e.TgZ(0,"div")(1,"div",0)(2,"form",1),e.NdJ("submit",function(){return a.onSubmit()}),e.TgZ(3,"div",2)(4,"div",3)(5,"h2",4),e._uU(6,"Perfil"),e.qZA(),e.TgZ(7,"p",5),e._uU(8," Aqui voc\xea pode alterar seus dados "),e.qZA(),e.TgZ(9,"div",6)(10,"div",7)(11,"label",8),e._uU(12,"Photo"),e.qZA(),e.TgZ(13,"div",9),e.O4$(),e.TgZ(14,"svg",10),e._UZ(15,"path",11),e.qZA(),e.kcU(),e.TgZ(16,"input",12),e.NdJ("change",function(d){return a.chooseFile(d)}),e.qZA(),e.YNc(17,c,2,0,"button",13),e.TgZ(18,"div",14),e.YNc(19,p,3,3,"div",15),e.qZA()()(),e.TgZ(20,"div",16)(21,"label",17),e._uU(22,"Nome de Usu\xe1rio"),e.qZA(),e.TgZ(23,"div",18)(24,"div",19),e._UZ(25,"input",20),e.qZA()()(),e.TgZ(26,"div",21)(27,"label",22),e._uU(28,"Email"),e.qZA(),e.TgZ(29,"div",18)(30,"div",19),e._UZ(31,"input",23),e.qZA()()(),e.TgZ(32,"div",16)(33,"label",24),e._uU(34,"Telefone"),e.qZA(),e.TgZ(35,"div",18)(36,"div",19),e._UZ(37,"input",25),e.qZA()()()()(),e.YNc(38,y,52,0,"div",26),e.YNc(39,h,52,0,"div",26),e.qZA(),e.TgZ(40,"div",27),e.YNc(41,x,2,0,"button",28),e.TgZ(42,"button",29),e._uU(43," Salvar "),e.qZA()()()()()),2&i&&(e.xp6(2),e.Q6J("formGroup",a.form),e.xp6(15),e.Q6J("ngIf",!1),e.xp6(2),e.Q6J("ngIf",!!a.uploadPercent),e.xp6(19),e.Q6J("ngIf",!1),e.xp6(1),e.Q6J("ngIf",!1),e.xp6(2),e.Q6J("ngIf",!1))},dependencies:[u.O5,n._Y,n.YN,n.Kr,n.Fj,n.JJ,n.JL,n.sg,n.u]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.Bz.forChild(Z),f.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,b,n.UX]}),t})()}}]);