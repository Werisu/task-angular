"use strict";(self.webpackChunktask_angular=self.webpackChunktask_angular||[]).push([[357],{2357:(b,s,a)=>{a.r(s),a.d(s,{DashboadModule:()=>Z});var d=a(6895),i=a(4778),t=a(4650);let u=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],decls:0,vars:0,template:function(r,n){}}),e})();var h=a(3702),g=a(7158);const p=function(){return["/todoapp/home"]},c=function(){return["/todoapp/kanban"]},m=function(){return["/todoapp/users"]},v=function(){return["/todoapp/perfil"]};let f=(()=>{class e{constructor(r,n){this.authService=r,this.auth=n,this.isAtivo=!0}ngOnInit(){this.getUser()}signOut(){this.authService.signOut()}getUser(){this.authService.getUser().subscribe(r=>{this.userLogger=r,this.photoURL=this.userLogger.photoURL})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(h.e),t.Y36(g.gx))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidebar"]],decls:48,vars:11,consts:[["data-drawer-target","default-sidebar","data-drawer-toggle","default-sidebar","aria-controls","default-sidebar","type","button",1,"inline-flex","items-center","p-2","mt-2","ml-3","text-sm","text-gray-500","rounded-lg","sm:hidden","hover:bg-gray-100","focus:outline-none","focus:ring-2","focus:ring-gray-200","dark:text-gray-400","dark:hover:bg-gray-700","dark:focus:ring-gray-600"],[1,"sr-only"],["aria-hidden","true","fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["clip-rule","evenodd","fill-rule","evenodd","d","M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"],["id","default-sidebar","aria-label","Sidebar",1,"fixed","top-0","left-0","z-40","w-64","h-screen","transition-transform","-translate-x-full","sm:translate-x-0"],[1,"h-full","px-3","pe-0","py-4","overflow-y-auto","bg-gray-50","dark:bg-gray-800"],[1,"flex","flex-row","items-center","justify-start","gap-[12px]","mb-4"],["alt","",1,"relative","rounded-2xl","w-14","h-14","object-cover",3,"src"],[1,"flex","flex-col","items-start","justify-center"],[1,"relative","inline-block","w-[150px]"],[1,"relative","text-sm","text-gray-shades-light-gray-3","inline-block","w-[150px]"],[1,"space-y-2","font-medium"],[1,"relative"],["routerLinkActive","active",1,"flex","items-center","p-2","text-gray-900","rounded-l-full","dark:text-white","hover:bg-green-100","dark:hover:bg-white","group","dark:hover:text-gray-700","active:bg-blue-600",3,"routerLink"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 22 21",1,"w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-gray-700"],["d","M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"],["d","M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"],[1,"ml-3"],["routerLinkActive","active",1,"flex","items-center","p-2","text-gray-900","rounded-l-full","dark:text-white","hover:bg-gray-100","dark:hover:bg-white","group","dark:hover:text-gray-700",3,"routerLink"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 18 18",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-gray-700"],["d","M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"],[1,"flex-1","ml-3","whitespace-nowrap"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 18",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-gray-700"],["d","M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"],["role","button",1,"flex","items-center","p-2","text-gray-900","rounded-l-full","dark:text-white","hover:bg-gray-100","dark:hover:bg-white","group","dark:hover:text-gray-700",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 18 16",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-gray-700"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-gray-700"],["d","M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"],["d","M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"],["d","M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"]],template:function(r,n){if(1&r&&(t.TgZ(0,"button",0)(1,"span",1),t._uU(2,"Open sidebar"),t.qZA(),t.O4$(),t.TgZ(3,"svg",2),t._UZ(4,"path",3),t.qZA()(),t.kcU(),t.TgZ(5,"aside",4)(6,"div",5)(7,"div",6),t._UZ(8,"img",7),t.TgZ(9,"div",8)(10,"b",9),t._uU(11),t.qZA(),t.TgZ(12,"div",10),t._uU(13),t.qZA()()(),t.TgZ(14,"ul",11)(15,"li",12)(16,"a",13),t.O4$(),t.TgZ(17,"svg",14),t._UZ(18,"path",15)(19,"path",16),t.qZA(),t.kcU(),t.TgZ(20,"span",17),t._uU(21,"Inicio"),t.qZA()()(),t.TgZ(22,"li",12)(23,"a",18),t.O4$(),t.TgZ(24,"svg",19),t._UZ(25,"path",20),t.qZA(),t.kcU(),t.TgZ(26,"span",21),t._uU(27,"Kanban"),t.qZA()()(),t.TgZ(28,"li",12)(29,"a",18),t.O4$(),t.TgZ(30,"svg",22),t._UZ(31,"path",23),t.qZA(),t.kcU(),t.TgZ(32,"span",21),t._uU(33,"Usu\xe1rios"),t.qZA()()(),t.TgZ(34,"li",12)(35,"a",24),t.NdJ("click",function(){return n.signOut()}),t.O4$(),t.TgZ(36,"svg",25),t._UZ(37,"path",26),t.qZA(),t.kcU(),t.TgZ(38,"span",21),t._uU(39,"Sair"),t.qZA()()(),t.TgZ(40,"li",12)(41,"a",18),t.O4$(),t.TgZ(42,"svg",27),t._UZ(43,"path",28)(44,"path",29)(45,"path",30),t.qZA(),t.kcU(),t.TgZ(46,"span",21),t._uU(47,"Perfil"),t.qZA()()()()()()),2&r){let l;t.xp6(8),t.Q6J("src",null==n.photoURL?"assets/images/avatar.png":n.photoURL,t.LSH),t.xp6(3),t.Oqu(null!==(l=null==n.userLogger?null:n.userLogger.displayName)&&void 0!==l?l:"Usu\xe1rio"),t.xp6(2),t.hij(" ",null==n.userLogger?null:n.userLogger.email," "),t.xp6(3),t.Q6J("routerLink",t.DdM(7,p)),t.xp6(7),t.Q6J("routerLink",t.DdM(8,c)),t.xp6(6),t.Q6J("routerLink",t.DdM(9,m)),t.xp6(12),t.Q6J("routerLink",t.DdM(10,v))}},dependencies:[i.rH,i.Od],styles:['.active[_ngcontent-%COMP%]{background-color:#fff;color:gray}.active[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:transparent;top:-50px;height:50px;width:25px;right:0;border-bottom-right-radius:25px;box-shadow:0 25px #fff}.active[_ngcontent-%COMP%]:after{content:"";position:absolute;background-color:transparent;bottom:-50px;height:50px;width:25px;right:0;border-top-right-radius:25px;box-shadow:0 -25px #fff}']}),e})();const x=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboad"]],decls:4,vars:0,consts:[[1,"p-4","sm:ml-64"]],template:function(r,n){1&r&&(t._UZ(0,"app-header")(1,"app-sidebar"),t.TgZ(2,"div",0),t._UZ(3,"router-outlet"),t.qZA())},dependencies:[i.lC,u,f]}),e})(),children:[{path:"home",component:(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-painel"]],decls:3,vars:0,consts:[[1,"p-4","border-2","border-gray-200","border-dashed","rounded-lg","dark:border-gray-700"]],template:function(r,n){1&r&&(t.TgZ(0,"div")(1,"div",0),t._uU(2," Dashboard "),t.qZA()())}}),e})()},{path:"kanban",loadChildren:()=>a.e(811).then(a.bind(a,3811)).then(e=>e.KanbanModule)},{path:"perfil",loadChildren:()=>a.e(944).then(a.bind(a,9944)).then(e=>e.PerfilModule)},{path:"users",loadChildren:()=>a.e(371).then(a.bind(a,2371)).then(e=>e.UsersModule)},{path:"",redirectTo:"home",pathMatch:"full"}]}];let y=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.Bz.forChild(x),i.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,y]}),e})()}}]);