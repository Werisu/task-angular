"use strict";(self.webpackChunktask_angular=self.webpackChunktask_angular||[]).push([[655],{2655:(w,g,i)=>{i.r(g),i.d(g,{LoginModule:()=>y});var d=i(6895),u=i(9051),m=i(4004),e=i(4650),p=i(3702),f=i(5197),s=i(433);function c(t,r){if(1&t&&(e.TgZ(0,"div",25)(1,"div",26),e._uU(2," Danger "),e.qZA(),e.TgZ(3,"div",27)(4,"p"),e._uU(5),e.qZA()()()),2&t){const o=e.oxw();e.xp6(5),e.Oqu(o.authx.error)}}const h=[{path:"",component:(()=>{class t{constructor(o,n){this.authx=o,this.database=n,this.email="",this.password="",this.formNewName="",this.formNewAge="",this.passwordView=!1,this.listRef=n.list("list"),this.list=this.listRef.snapshotChanges().pipe((0,m.U)(a=>a.map(l=>({key:l.payload.key,...l.payload.val()}))))}ngOnInit(){}addItem(){this.listRef.push({name:this.formNewName,age:this.formNewAge,email:this.authx.user.email}),this.formNewName="",this.formNewAge=""}deleteItem(o){this.listRef.remove(o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(p.e),e.Y36(f.KQ))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:38,vars:4,consts:[[1,"h-screen","bg-gradient-to-tl","from-green-400","to-indigo-900","w-full","py-16","px-4"],[1,"flex","flex-col","items-center","justify-center"],["src","assets/images/logo-taskfire-retangulo.png","alt","",1,"logo","w-32","drop-shadow-[0_10px_8px_rgba(255,255,255,.4)]","p-0","m-0"],["role","alert",4,"ngIf"],[1,"bg-white","shadow","rounded","lg:w-1/3","md:w-1/2","w-full","p-10","mt-16"],["tabindex","0",1,"focus:outline-none","text-2xl","font-extrabold","leading-6","text-gray-800"],["tabindex","0",1,"focus:outline-none","text-sm","mt-4","font-medium","leading-none","text-gray-500"],["href","javascript:void(0)",1,"hover:text-gray-500","focus:text-gray-500","focus:outline-none","focus:underline","hover:underline","text-sm","font-medium","leading-none","text-gray-800","cursor-pointer"],["aria-label","Continue with google","role","button",1,"focus:outline-none","focus:ring-2","focus:ring-offset-1","focus:ring-gray-700","py-3.5","px-4","border","rounded-lg","border-gray-700","flex","items-center","w-full","mt-10",3,"click"],["src","https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg","alt","google"],[1,"text-base","font-medium","ml-4","text-gray-700"],[1,"w-full","flex","items-center","justify-between","py-5"],[1,"w-full","bg-gray-400"],[1,"text-base","font-medium","leading-4","px-2.5","text-gray-400"],["id","email",1,"text-sm","font-medium","leading-none","text-gray-800"],["aria-labelledby","email","type","email","name","email",1,"bg-gray-200","border","rounded","text-xs","font-medium","leading-none","text-gray-800","py-3","w-full","pl-3","mt-2",3,"ngModel","ngModelChange"],[1,"mt-6","w-full"],["for","pass",1,"text-sm","font-medium","leading-none","text-gray-800"],[1,"relative","flex","items-center","justify-center"],["id","pass","name","password",1,"bg-gray-200","border","rounded","text-xs","font-medium","leading-none","text-gray-800","py-3","w-full","pl-3","mt-2",3,"type","ngModel","ngModelChange"],[1,"absolute","right-0","mt-2","mr-3","cursor-pointer",3,"click"],["src","https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg","alt","viewport"],[1,"mt-8"],["role","button",1,"focus:ring-2","focus:ring-offset-2","focus:ring-indigo-700","text-sm","font-semibold","leading-none","text-white","focus:outline-none","bg-indigo-700","border","rounded","hover:bg-indigo-600","py-4","w-full",3,"click"],[1,"footer","absolute","bottom-0","flex","w-full","justify-center"],["role","alert"],[1,"bg-red-500","text-white","font-bold","rounded-t","px-4","py-2"],[1,"border","border-t-0","border-red-400","rounded-b","bg-red-100","px-4","py-3","text-red-700"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.YNc(3,c,6,1,"div",3),e.TgZ(4,"div",4)(5,"p",5),e._uU(6," Fa\xe7a login na sua conta "),e.qZA(),e.TgZ(7,"p",6),e._uU(8," N\xe3o tem conta? "),e.TgZ(9,"a",7),e._uU(10," Crie aqui"),e.qZA()(),e.TgZ(11,"button",8),e.NdJ("click",function(){return n.authx.googleSignIn()}),e._UZ(12,"img",9),e.TgZ(13,"p",10),e._uU(14," Google "),e.qZA()(),e.TgZ(15,"div",11),e._UZ(16,"hr",12),e.TgZ(17,"p",13),e._uU(18,"OU"),e.qZA(),e._UZ(19,"hr",12),e.qZA(),e.TgZ(20,"div")(21,"label",14),e._uU(22," Email "),e.qZA(),e.TgZ(23,"input",15),e.NdJ("ngModelChange",function(l){return n.email=l}),e.qZA()(),e.TgZ(24,"div",16)(25,"label",17),e._uU(26," Senha "),e.qZA(),e.TgZ(27,"div",18)(28,"input",19),e.NdJ("ngModelChange",function(l){return n.password=l}),e.qZA(),e.TgZ(29,"div",20),e.NdJ("click",function(){return n.passwordView=!n.passwordView}),e._UZ(30,"img",21),e.qZA()()(),e.TgZ(31,"div",22)(32,"button",23),e.NdJ("click",function(){return n.authx.emailSignIn(n.email,n.password)}),e._uU(33," Entrar "),e.qZA()()()()(),e.TgZ(34,"div",24)(35,"div")(36,"small"),e._uU(37,"Todos os direitos reservados \xa9 2023"),e.qZA()()()),2&o&&(e.xp6(3),e.Q6J("ngIf",n.authx.error),e.xp6(20),e.Q6J("ngModel",n.email),e.xp6(5),e.Q6J("type",n.passwordView?"text":"password")("ngModel",n.password))},dependencies:[d.O5,s.Fj,s.JJ,s.On]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(h),u.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,x,s.u5]}),t})()}}]);