"use strict";(self.webpackChunktask_angular=self.webpackChunktask_angular||[]).push([[811],{3811:(yr,E,d)=>{d.r(E),d.d(E,{KanbanModule:()=>mr});var T=d(6895),k=d(4778),wt=d(4004),w=d(7579),Rt=d(8996),R=d(9751),_=d(8421),x=d(4482),L=d(5403);var $t=d(5577);const{isArray:zt}=Array;var Nt=d(515),Ct=d(7669);var Zt=d(9646),Yt=d(7359);const Kt=(e,n)=>(e.push(n),e);var u=d(7340);function t(e,n){return[...n&&"before"===n.animateChildren?[(0,u.IO)("@*",(0,u.pV)(),{optional:!0})]:[],(0,u.ru)([(0,u._7)(e),...n&&n.animateChildren&&"together"!==n.animateChildren?[]:[(0,u.IO)("@*",(0,u.pV)(),{optional:!0})]]),...n&&"after"===n.animateChildren?[(0,u.IO)("@*",(0,u.pV)(),{optional:!0})]:[]]}const Be=()=>(0,u.oQ)([(0,u.jt)("{{duration}}ms {{delay}}ms",(0,u.F4)([(0,u.oB)({visibility:"visible",opacity:0,easing:"ease",offset:0}),(0,u.oB)({opacity:1,easing:"ease",offset:1})]))]),Ze=1e3;function Xt(e){return(0,u.X$)(e&&e.anchor||"fadeInOnEnter",[(0,u.eR)(":enter",[(0,u.oB)({visibility:"hidden"}),...t(Be(),e)],{params:{delay:e&&e.delay||0,duration:e&&e.duration||Ze}})])}var a=d(4650),c=d(433),er=d(9532),ar=d(3702);function tr(e,n){if(1&e){const r=a.EpF();a.TgZ(0,"div",20)(1,"button",21),a.NdJ("click",function(){const l=a.CHM(r).$implicit,f=a.oxw(3);return a.KtG(f.deleteTask(l.key))}),a.O4$(),a.TgZ(2,"svg",22),a._UZ(3,"path",23),a.qZA()(),a.kcU(),a.TgZ(4,"span",24),a._uU(5),a.qZA(),a.TgZ(6,"h4",25),a._uU(7),a.qZA(),a.TgZ(8,"div",26)(9,"div",27),a.O4$(),a.TgZ(10,"svg",28),a._UZ(11,"path",29),a.qZA(),a.kcU(),a.TgZ(12,"span",30),a._uU(13,"Dec 12"),a.qZA()(),a.TgZ(14,"div",31),a.O4$(),a.TgZ(15,"svg",32),a._UZ(16,"path",33),a.qZA(),a.kcU(),a.TgZ(17,"span",30),a._uU(18,"4"),a.qZA()(),a.TgZ(19,"div",34),a.O4$(),a.TgZ(20,"svg",28),a._UZ(21,"path",35),a.qZA(),a.kcU(),a.TgZ(22,"span",30),a._uU(23,"1"),a.qZA()(),a._UZ(24,"img",36),a.qZA()()}if(2&e){const r=n.$implicit;a.xp6(5),a.Oqu(r.tags),a.xp6(2),a.hij(" ",r.description," ")}}function rr(e,n){if(1&e){const r=a.EpF();a.TgZ(0,"div",11)(1,"div",12)(2,"span",13),a._uU(3),a.qZA(),a.TgZ(4,"span",14),a._uU(5,"6"),a.qZA(),a.TgZ(6,"button",15),a.NdJ("click",function(){const l=a.CHM(r).$implicit,f=a.oxw(2);return a.KtG(f.toggleModal(l[0]))}),a.O4$(),a.TgZ(7,"svg",16),a._UZ(8,"path",17),a.qZA()()(),a.kcU(),a.TgZ(9,"div",18),a.YNc(10,tr,25,2,"div",19),a.qZA()()}if(2&e){const r=n.$implicit;a.xp6(3),a.Oqu(r[0]),a.xp6(7),a.Q6J("ngForOf",r[1])}}function nr(e,n){if(1&e&&(a.TgZ(0,"div",8),a.YNc(1,rr,11,2,"div",9),a._UZ(2,"div",10),a.qZA()),2&e){const r=n.ngIf;a.Q6J("@fadeInOnEnter",void 0),a.xp6(1),a.Q6J("ngForOf",r)}}function ir(e,n){if(1&e&&(a.TgZ(0,"option",58),a._uU(1),a.qZA()),2&e){const r=n.$implicit;a.Q6J("value",r),a.xp6(1),a.hij(" ",r," ")}}function sr(e,n){if(1&e){const r=a.EpF();a.TgZ(0,"span",59),a.NdJ("click",function(){const l=a.CHM(r).$implicit,f=a.oxw(2);return a.KtG(f.removeTag(l))}),a._uU(1),a.qZA()}if(2&e){const r=n.$implicit;a.xp6(1),a.Oqu(r)}}function lr(e,n){if(1&e){const r=a.EpF();a.TgZ(0,"div",37)(1,"div",38)(2,"div",39)(3,"div",40)(4,"h3",41),a._uU(5,"Nova Tarefa"),a.qZA(),a.TgZ(6,"button",42),a.NdJ("click",function(){a.CHM(r);const i=a.oxw();return a.KtG(i.toggleModal())}),a.TgZ(7,"span",43),a._uU(8," \xd7 "),a.qZA()()(),a.TgZ(9,"div",44)(10,"form",45),a.NdJ("onSubmit",function(){a.CHM(r);const i=a.oxw();return a.KtG(i.onSubmit())}),a.TgZ(11,"div",46)(12,"select",47),a.NdJ("click",function(){a.CHM(r);const i=a.oxw();return a.KtG(i.listCategories())}),a.YNc(13,ir,2,2,"option",48),a.qZA()(),a.TgZ(14,"div",46)(15,"label",49),a._uU(16,"Descri\xe7\xe3o"),a.qZA(),a._UZ(17,"textarea",50),a.qZA(),a.TgZ(18,"div",51)(19,"label",52),a._uU(20,"Tags"),a.qZA(),a.TgZ(21,"div"),a.YNc(22,sr,2,1,"span",53),a.qZA(),a.TgZ(23,"input",54),a.NdJ("keyup.Enter",function(){a.CHM(r);const i=a.oxw();return a.KtG(i.addTag())}),a.qZA()()()(),a.TgZ(24,"div",55)(25,"button",56),a.NdJ("click",function(){a.CHM(r);const i=a.oxw();return a.KtG(i.toggleModal())}),a._uU(26," Fechar "),a.qZA(),a.TgZ(27,"button",57),a.NdJ("click",function(){a.CHM(r);const i=a.oxw();return i.addTask(),a.KtG(i.toggleModal())}),a._uU(28," Adicionar Tarefa "),a.qZA()()()()()}if(2&e){const r=a.oxw();a.xp6(10),a.Q6J("formGroup",r.newTaskForm),a.xp6(3),a.Q6J("ngForOf",r.categories),a.xp6(9),a.Q6J("ngForOf",r.listTags)}}function dr(e,n){1&e&&a._UZ(0,"div",60)}const fr=[{path:"",component:(()=>{class e{constructor(r,s,i){this.formBuilder=r,this.database=s,this.authService=i,this.showModal=!1,this.listTags=[],this.categories=[],this.listRef=s.list("tasks"),this.list=this.listRef.snapshotChanges().pipe((0,wt.U)(l=>l.map(f=>({key:f.payload.key,...f.payload.val()}))))}ngOnInit(){this.listCategories(),this.newTaskForm=this.formBuilder.group({description:[""],tags:[""],status:[""]}),this.listGroup=this.agrupar()}agrupar(){let r=new w.x;return this.list.subscribe(s=>{let i=[];(0,Rt.D)(s).pipe(function _t(e,n,r,s){return(0,x.e)((i,l)=>{let f;n&&"function"!=typeof n?({duration:r,element:f,connector:s}=n):f=n;const h=new Map,b=y=>{h.forEach(y),y(l)},O=y=>b(g=>g.error(y));let A=0,kt=!1;const D=new L.Q(l,y=>{try{const g=e(y);let o=h.get(g);if(!o){h.set(g,o=s?s():new w.x);const I=function cr(y,g){const o=new R.y(I=>{A++;const v=g.subscribe(I);return()=>{v.unsubscribe(),0==--A&&kt&&D.unsubscribe()}});return o.key=y,o}(g,o);if(l.next(I),r){const v=(0,L.x)(o,()=>{o.complete(),v?.unsubscribe()},void 0,void 0,()=>h.delete(g));D.add((0,_.Xf)(r(I)).subscribe(v))}}o.next(f?f(y):y)}catch(g){O(g)}},()=>b(y=>y.complete()),O,()=>h.clear(),()=>(kt=!0,0===A));i.subscribe(D)})}(l=>l.status),(0,$t.z)(l=>function Bt(...e){const n=(0,Ct.jO)(e),r=function Ft(e){return 1===e.length&&zt(e[0])?e[0]:e}(e);return r.length?new R.y(s=>{let i=r.map(()=>[]),l=r.map(()=>!1);s.add(()=>{i=l=null});for(let f=0;!s.closed&&f<r.length;f++)(0,_.Xf)(r[f]).subscribe((0,L.x)(s,h=>{if(i[f].push(h),i.every(b=>b.length)){const b=i.map(O=>O.shift());s.next(n?n(...b):b),i.some((O,A)=>!O.length&&l[A])&&s.complete()}},()=>{l[f]=!0,!i[f].length&&s.complete()}));return()=>{i=l=null}}):Nt.E}((0,Zt.of)(l.key),l.pipe(function Mt(){return(0,x.e)((e,n)=>{(function St(e,n){return(0,x.e)((0,Yt.U)(e,n,arguments.length>=2,!1,!0))})(Kt,[])(e).subscribe(n)})}())))).subscribe(l=>{i.push(l)}),console.log(i),r.next(i)}),r.asObservable()}toggleModal(r){this.showModal=!this.showModal,this.newTaskForm.get("status")?.setValue(r)}addTag(){this.listTags.push(this.newTaskForm.value.tags),this.newTaskForm.get("tags")?.reset()}addTask(){this.listRef.push({description:this.newTaskForm.value.description,tags:this.listTags,status:this.newTaskForm.value.status,author:this.authService.userLogged}),this.newTaskForm.get("description")?.reset(),this.listTags=["fazer"]}deleteTask(r){this.listRef.remove(r)}removeTag(r){this.listTags=this.listTags.filter(s=>s!==r)}onSubmit(){}listCategories(){this.categories=["fazer","fazendo","feito"]}}return e.\u0275fac=function(r){return new(r||e)(a.Y36(c.qu),a.Y36(er.KQ),a.Y36(ar.e))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-kanban"]],decls:12,vars:5,consts:[[1,"flex","flex-col","w-full","h-screen","overflow-auto","text-gray-700"],[1,"px-10","mt-6"],[1,"text-2xl","font-bold"],["class","flex flex-grow px-10 mt-4 space-x-6 overflow-auto",4,"ngIf"],["role","button",1,"fixed","bottom-0","right-0","flex","items-center","justify-center","h-8","pl-1","pr-2","mb-6","mr-4","text-blue-100","bg-blue-600","rounded-full","shadow-lg","hover:bg-blue-600",3,"click"],[1,"ml-1","text-sm","leading-none"],["class","overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex",4,"ngIf"],["class","opacity-25 fixed inset-0 z-40 bg-black",4,"ngIf"],[1,"flex","flex-grow","px-10","mt-4","space-x-6","overflow-auto"],["class","flex flex-col flex-shrink-0 w-72 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200 rounded-lg p-3",4,"ngFor","ngForOf"],[1,"flex-shrink-0","w-6"],[1,"flex","flex-col","flex-shrink-0","w-72","bg-gradient-to-tr","from-blue-200","via-indigo-200","to-pink-200","rounded-lg","p-3"],[1,"flex","items-center","flex-shrink-0","h-10","px-2"],[1,"block","text-sm","font-semibold"],[1,"flex","items-center","justify-center","w-5","h-5","ml-2","text-sm","font-semibold","text-indigo-500","bg-white","rounded","bg-opacity-30"],[1,"flex","items-center","justify-center","w-6","h-6","ml-auto","text-indigo-500","rounded","hover:bg-indigo-500","hover:text-indigo-100",3,"click"],["fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 6v6m0 0v6m0-6h6m-6 0H6"],[1,"flex","flex-col","pb-2","overflow-auto"],["class","relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100","draggable","true",4,"ngFor","ngForOf"],["draggable","true",1,"relative","flex","flex-col","items-start","p-4","mt-3","bg-white","rounded-lg","cursor-pointer","bg-opacity-90","group","hover:bg-opacity-100"],[1,"absolute","top-0","right-0","flex","items-center","justify-center","hidden","w-5","h-5","mt-3","mr-2","text-gray-500","rounded","hover:bg-gray-200","hover:text-gray-700","group-hover:flex",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"w-4","h-4","fill-current"],["d","M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"],[1,"flex","items-center","h-6","px-3","text-xs","font-semibold","text-pink-500","bg-pink-100","rounded-full"],[1,"mt-3","text-sm","font-medium"],[1,"flex","items-center","w-full","mt-3","text-xs","font-medium","text-gray-400"],[1,"flex","items-center"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"w-4","h-4","text-gray-300","fill-current"],["fill-rule","evenodd","d","M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule","evenodd"],[1,"ml-1","leading-none"],[1,"relative","flex","items-center","ml-4"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"relative","w-4","h-4","text-gray-300","fill-current"],["fill-rule","evenodd","d","M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z","clip-rule","evenodd"],[1,"flex","items-center","ml-4"],["fill-rule","evenodd","d","M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z","clip-rule","evenodd"],["src","https://randomuser.me/api/portraits/women/26.jpg",1,"w-6","h-6","ml-auto","rounded-full"],[1,"overflow-x-hidden","overflow-y-auto","fixed","inset-0","z-50","outline-none","focus:outline-none","justify-center","items-center","flex"],[1,"relative","w-auto","my-6","mx-auto","max-w-6xl"],[1,"border-0","rounded-lg","shadow-lg","relative","flex","flex-col","w-full","bg-white","outline-none","focus:outline-none"],[1,"flex","items-start","justify-between","p-5","border-b","border-solid","border-slate-200","rounded-t"],[1,"text-3xl","font-semibold"],[1,"p-1","ml-auto","bg-transparent","border-0","text-black","opacity-5","float-right","text-3xl","leading-none","font-semibold","outline-none","focus:outline-none",3,"click"],[1,"bg-transparent","text-black","opacity-5","h-6","w-6","text-2xl","block","outline-none","focus:outline-none"],[1,"relative","p-6","flex-auto"],[3,"formGroup","onSubmit"],[1,"mb-6"],["formControlName","status","name","status","required","",1,"block","w-full","p-2.5","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","dark:placeholder-gray-400","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"click"],[3,"value",4,"ngFor","ngForOf"],["for","message",1,"block","mb-2","text-sm","font-medium"],["id","message","rows","4","placeholder","Descreva a tarefa","formControlName","description","name","description","required","",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","dark:placeholder-gray-400","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"mb-6","flex","gap-2","flex-col"],["for","tags",1,"block","mb-2","text-sm","font-medium"],["role","button","class","bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",3,"click",4,"ngFor","ngForOf"],["name","tags","formControlName","tags","type","text","id","tags","placeholder","Design","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5",3,"keyup.Enter"],[1,"flex","items-center","justify-end","p-6","border-t","border-solid","border-slate-200","rounded-b"],["type","button",1,"text-red-500","background-transparent","font-bold","uppercase","px-6","py-2","text-sm","outline-none","focus:outline-none","mr-1","mb-1","ease-linear","transition-all","duration-150",3,"click"],["type","button",1,"bg-emerald-500","text-white","active:bg-emerald-600","font-bold","uppercase","text-sm","px-6","py-3","rounded","shadow","hover:shadow-lg","outline-none","focus:outline-none","mr-1","mb-1","ease-linear","transition-all","duration-150",3,"click"],[3,"value"],["role","button",1,"bg-blue-100","text-blue-800","text-xs","font-medium","mr-2","px-2.5","py-0.5","rounded","dark:bg-blue-900","dark:text-blue-300",3,"click"],[1,"opacity-25","fixed","inset-0","z-40","bg-black"]],template:function(r,s){1&r&&(a.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"h1",2),a._uU(4,"Quadro de Tarefas"),a.qZA()(),a.YNc(5,nr,3,2,"div",3),a.ALo(6,"async"),a.qZA()(),a.TgZ(7,"a",4),a.NdJ("click",function(){return s.toggleModal()}),a.TgZ(8,"span",5),a._uU(9,"Novo"),a.qZA()(),a.YNc(10,lr,29,3,"div",6),a.YNc(11,dr,1,0,"div",7)),2&r&&(a.xp6(5),a.Q6J("ngIf",a.lcZ(6,3,s.listGroup)),a.xp6(5),a.Q6J("ngIf",s.showModal),a.xp6(1),a.Q6J("ngIf",s.showModal))},dependencies:[T.sg,T.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.Q7,c.sg,c.u,T.Ov],data:{animation:[Xt()]}}),e})()}];let ur=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[k.Bz.forChild(fr),k.Bz]}),e})(),mr=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[T.ez,ur,c.UX]}),e})()}}]);