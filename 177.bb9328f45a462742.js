"use strict";(self.webpackChunktask_angular=self.webpackChunktask_angular||[]).push([[177],{8177:(Nn,le,f)=>{f.r(le),f.d(le,{KanbanModule:()=>Cn});var R=f(6895),de=f(9051),T=f(4004),ue=f(7579),F=f(8996),X=f(9751),fe=f(8421),M=f(4482),Y=f(5403);var Lr=f(5577);const{isArray:Dr}=Array;var kr=f(515),Rr=f(7669);var Q=f(9646),Cr=f(7359);const zr=(e,t)=>(e.push(t),e);var m=f(7340);function i(e,t){return[...t&&"before"===t.animateChildren?[(0,m.IO)("@*",(0,m.pV)(),{optional:!0})]:[],(0,m.ru)([(0,m._7)(e),...t&&t.animateChildren&&"together"!==t.animateChildren?[]:[(0,m.IO)("@*",(0,m.pV)(),{optional:!0})]]),...t&&"after"===t.animateChildren?[(0,m.IO)("@*",(0,m.pV)(),{optional:!0})]:[]]}const ht=()=>(0,m.oQ)([(0,m.jt)("{{duration}}ms {{delay}}ms",(0,m.F4)([(0,m.oB)({visibility:"visible",opacity:0,easing:"ease",offset:0}),(0,m.oB)({opacity:1,easing:"ease",offset:1})]))]),bt=1e3;function Sr(e){return(0,m.X$)(e&&e.anchor||"fadeInOnEnter",[(0,m.eR)(":enter",[(0,m.oB)({visibility:"hidden"}),...i(ht(),e)],{params:{delay:e&&e.delay||0,duration:e&&e.duration||bt}})])}f(9568);var r=f(4650),A=f(433),lr=f(5197),Xr=f(3702),Qr=f(4986),v=f(4976),H=f(8675);function W(){return(0,M.e)((e,t)=>{let a,n=!1;e.subscribe((0,Y.x)(t,s=>{const d=a;a=s,n&&t.next([d,s]),n=!0}))})}var V=f(2940),Hr=f(1884),dr=f(9300),q=f(2011),Wr=f(3942),l=f(2810),ur=f(2090),Vr=f(4859);function p(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new l.WA("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}function fr(){if(typeof Uint8Array>"u")throw new l.WA("unimplemented","Uint8Arrays are not available in this environment.")}function cr(){if(!(0,l.Me)())throw new l.WA("unimplemented","Blobs are unavailable in Firestore in this environment.")}class z{constructor(t){this._delegate=t}static fromBase64String(t){return cr(),new z(l.Jj.fromBase64String(t))}static fromUint8Array(t){return fr(),new z(l.Jj.fromUint8Array(t))}toBase64(){return cr(),this._delegate.toBase64()}toUint8Array(){return fr(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}function ee(e){return function tn(e,t){if("object"!=typeof e||null===e)return!1;const a=e;for(const n of t)if(n in a&&"function"==typeof a[n])return!0;return!1}(e,["next","error","complete"])}class an{enableIndexedDbPersistence(t,a){return(0,l.ST)(t._delegate,{forceOwnership:a})}enableMultiTabIndexedDbPersistence(t){return(0,l.fH)(t._delegate)}clearIndexedDbPersistence(t){return(0,l.Fc)(t._delegate)}}class or{constructor(t,a,n){this._delegate=a,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof l.l7||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const a=this._delegate._getSettings();!t.merge&&a.host!==t.host&&(0,l.yq)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&delete(t=Object.assign(Object.assign({},a),t)).merge,this._delegate._setSettings(t)}useEmulator(t,a,n={}){(0,l.at)(this._delegate,t,a,n)}enableNetwork(){return(0,l.Ix)(this._delegate)}disableNetwork(){return(0,l.TF)(this._delegate)}enablePersistence(t){let a=!1,n=!1;return t&&(a=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,(0,l.Wi)("synchronizeTabs",a,"experimentalForceOwningTab",n)),a?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return(0,l.Mx)(this._delegate)}onSnapshotsInSync(t){return(0,l.sc)(this._delegate,t)}get app(){if(!this._appCompat)throw new l.WA("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new $(this,(0,l.hJ)(this._delegate,t))}catch(a){throw g(a,"collection()","Firestore.collection()")}}doc(t){try{return new _(this,(0,l.JU)(this._delegate,t))}catch(a){throw g(a,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new y(this,(0,l.B$)(this._delegate,t))}catch(a){throw g(a,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return(0,l.i3)(this._delegate,a=>t(new mr(this,a)))}batch(){return(0,l.qY)(this._delegate),new gr(new l.PU(this._delegate,t=>(0,l.GL)(this._delegate,t)))}loadBundle(t){return(0,l.Pb)(this._delegate,t)}namedQuery(t){return(0,l.L$)(this._delegate,t).then(a=>a?new y(this,a):null)}}class G extends l.u7{constructor(t){super(),this.firestore=t}convertBytes(t){return new z(new l.Jj(t))}convertReference(t){const a=this.convertDocumentKey(t,this.firestore._databaseId);return _.forKey(a,this.firestore,null)}}class mr{constructor(t,a){this._firestore=t,this._delegate=a,this._userDataWriter=new G(t)}get(t){const a=D(t);return this._delegate.get(a).then(n=>new N(this._firestore,new l.xU(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,a.converter)))}set(t,a,n){const s=D(t);return n?(p("Transaction.set",n),this._delegate.set(s,a,n)):this._delegate.set(s,a),this}update(t,a,n,...s){const d=D(t);return 2===arguments.length?this._delegate.update(d,a):this._delegate.update(d,a,n,...s),this}delete(t){const a=D(t);return this._delegate.delete(a),this}}class gr{constructor(t){this._delegate=t}set(t,a,n){const s=D(t);return n?(p("WriteBatch.set",n),this._delegate.set(s,a,n)):this._delegate.set(s,a),this}update(t,a,n,...s){const d=D(t);return 2===arguments.length?this._delegate.update(d,a):this._delegate.update(d,a,n,...s),this}delete(t){const a=D(t);return this._delegate.delete(a),this}commit(){return this._delegate.commit()}}class L{constructor(t,a,n){this._firestore=t,this._userDataWriter=a,this._delegate=n}fromFirestore(t,a){const n=new l.$q(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new S(this._firestore,n),a??{})}toFirestore(t,a){return a?this._delegate.toFirestore(t,a):this._delegate.toFirestore(t)}static getInstance(t,a){const n=L.INSTANCES;let s=n.get(t);s||(s=new WeakMap,n.set(t,s));let d=s.get(a);return d||(d=new L(t,new G(t),a),s.set(a,d)),d}}L.INSTANCES=new WeakMap;class _{constructor(t,a){this.firestore=t,this._delegate=a,this._userDataWriter=new G(t)}static forPath(t,a,n){if(t.length%2!=0)throw new l.WA("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new _(a,new l.my(a._delegate,n,new l.Ky(t)))}static forKey(t,a,n){return new _(a,new l.my(a._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new $(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new $(this.firestore,(0,l.hJ)(this._delegate,t))}catch(a){throw g(a,"collection()","DocumentReference.collection()")}}isEqual(t){return(t=(0,ur.m9)(t))instanceof l.my&&(0,l.Eo)(this._delegate,t)}set(t,a){a=p("DocumentReference.set",a);try{return a?(0,l.pl)(this._delegate,t,a):(0,l.pl)(this._delegate,t)}catch(n){throw g(n,"setDoc()","DocumentReference.set()")}}update(t,a,...n){try{return 1===arguments.length?(0,l.r7)(this._delegate,t):(0,l.r7)(this._delegate,t,a,...n)}catch(s){throw g(s,"updateDoc()","DocumentReference.update()")}}delete(){return(0,l.oe)(this._delegate)}onSnapshot(...t){const a=yr(t),n=hr(t,s=>new N(this.firestore,new l.xU(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return(0,l.cf)(this._delegate,a,n)}get(t){let a;return a="cache"===t?.source?(0,l.kl)(this._delegate):"server"===t?.source?(0,l.Xk)(this._delegate):(0,l.QT)(this._delegate),a.then(n=>new N(this.firestore,new l.xU(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(t){return new _(this.firestore,this._delegate.withConverter(t?L.getInstance(this.firestore,t):null))}}function g(e,t,a){return e.message=e.message.replace(t,a),e}function yr(e){for(const t of e)if("object"==typeof t&&!ee(t))return t;return{}}function hr(e,t){var a,n;let s;return s=ee(e[0])?e[0]:ee(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:d=>{s.next&&s.next(t(d))},error:null===(a=s.error)||void 0===a?void 0:a.bind(s),complete:null===(n=s.complete)||void 0===n?void 0:n.bind(s)}}class N{constructor(t,a){this._firestore=t,this._delegate=a}get ref(){return new _(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,a){return this._delegate.get(t,a)}isEqual(t){return(0,l.qK)(this._delegate,t._delegate)}}class S extends N{data(t){const a=this._delegate.data(t);return(0,l.K9)(void 0!==a,"Document in a QueryDocumentSnapshot should exist"),a}}class y{constructor(t,a){this.firestore=t,this._delegate=a,this._userDataWriter=new G(t)}where(t,a,n){try{return new y(this.firestore,(0,l.IO)(this._delegate,(0,l.ar)(t,a,n)))}catch(s){throw g(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,a){try{return new y(this.firestore,(0,l.IO)(this._delegate,(0,l.Xo)(t,a)))}catch(n){throw g(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new y(this.firestore,(0,l.IO)(this._delegate,(0,l.b9)(t)))}catch(a){throw g(a,"limit()","Query.limit()")}}limitToLast(t){try{return new y(this.firestore,(0,l.IO)(this._delegate,(0,l.vh)(t)))}catch(a){throw g(a,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new y(this.firestore,(0,l.IO)(this._delegate,(0,l.e0)(...t)))}catch(a){throw g(a,"startAt()","Query.startAt()")}}startAfter(...t){try{return new y(this.firestore,(0,l.IO)(this._delegate,(0,l.TQ)(...t)))}catch(a){throw g(a,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new y(this.firestore,(0,l.IO)(this._delegate,(0,l.Lx)(...t)))}catch(a){throw g(a,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new y(this.firestore,(0,l.IO)(this._delegate,(0,l.Wu)(...t)))}catch(a){throw g(a,"endAt()","Query.endAt()")}}isEqual(t){return(0,l.iE)(this._delegate,t._delegate)}get(t){let a;return a="cache"===t?.source?(0,l.UQ)(this._delegate):"server"===t?.source?(0,l.zN)(this._delegate):(0,l.PL)(this._delegate),a.then(n=>new te(this.firestore,new l.W(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...t){const a=yr(t),n=hr(t,s=>new te(this.firestore,new l.W(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return(0,l.cf)(this._delegate,a,n)}withConverter(t){return new y(this.firestore,this._delegate.withConverter(t?L.getInstance(this.firestore,t):null))}}class nn{constructor(t,a){this._firestore=t,this._delegate=a}get type(){return this._delegate.type}get doc(){return new S(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class te{constructor(t,a){this._firestore=t,this._delegate=a}get query(){return new y(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new S(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(a=>new nn(this._firestore,a))}forEach(t,a){this._delegate.forEach(n=>{t.call(a,new S(this._firestore,n))})}isEqual(t){return(0,l.qK)(this._delegate,t._delegate)}}class $ extends y{constructor(t,a){super(t,a),this.firestore=t,this._delegate=a}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new _(this.firestore,t):null}doc(t){try{return new _(this.firestore,void 0===t?(0,l.JU)(this._delegate):(0,l.JU)(this._delegate,t))}catch(a){throw g(a,"doc()","CollectionReference.doc()")}}add(t){return(0,l.ET)(this._delegate,t).then(a=>new _(this.firestore,a))}isEqual(t){return(0,l.Eo)(this._delegate,t._delegate)}withConverter(t){return new $(this.firestore,this._delegate.withConverter(t?L.getInstance(this.firestore,t):null))}}function D(e){return(0,l.Cf)(e,l.my)}class ae{constructor(...t){this._delegate=new l.Lz(...t)}static documentId(){return new ae(l.Xb.keyField().canonicalString())}isEqual(t){return(t=(0,ur.m9)(t))instanceof l.Lz&&this._delegate._internalPath.isEqual(t._internalPath)}}class E{constructor(t){this._delegate=t}static serverTimestamp(){const t=(0,l.Bt)();return t._methodName="FieldValue.serverTimestamp",new E(t)}static delete(){const t=(0,l.AK)();return t._methodName="FieldValue.delete",new E(t)}static arrayUnion(...t){const a=(0,l.vr)(...t);return a._methodName="FieldValue.arrayUnion",new E(a)}static arrayRemove(...t){const a=(0,l.Ab)(...t);return a._methodName="FieldValue.arrayRemove",new E(a)}static increment(t){const a=(0,l.nP)(t);return a._methodName="FieldValue.increment",new E(a)}isEqual(t){return this._delegate.isEqual(t._delegate)}}const sn={Firestore:or,GeoPoint:l.F8,Timestamp:l.EK,Blob:z,Transaction:mr,WriteBatch:gr,DocumentReference:_,DocumentSnapshot:N,Query:y,QueryDocumentSnapshot:S,QuerySnapshot:te,CollectionReference:$,FieldPath:ae,FieldValue:E,setLogLevel:function rn(e){(0,l.Ub)(e)},CACHE_SIZE_UNLIMITED:l.IX};!function dn(e){(function ln(e,t){e.INTERNAL.registerComponent(new Vr.wA("firestore-compat",a=>{const n=a.getProvider("app-compat").getImmediate(),s=a.getProvider("firestore").getImmediate();return t(n,s)},"PUBLIC").setServiceProps(Object.assign({},sn)))})(e,(t,a)=>new or(t,a,new an)),e.registerVersion("@firebase/firestore-compat","0.3.12")}(Wr.Z);var U=f(1205),un=f(2313),fn=f(9260);function br(e,t){return function cn(e,t=Qr.z){return new X.y(a=>{let n;return null!=t?t.schedule(()=>{n=e.onSnapshot({includeMetadataChanges:!0},a)}):n=e.onSnapshot({includeMetadataChanges:!0},a),()=>{n?.()}})}(e,t)}function re(e,t){return br(e,t).pipe((0,T.U)(a=>({payload:a,type:"query"})))}function J(e,t){return re(e,t).pipe((0,H.O)(void 0),W(),(0,T.U)(([a,n])=>{const s=n.payload.docChanges(),d=s.map(u=>({type:u.type,payload:u}));return a&&JSON.stringify(a.payload.metadata)!==JSON.stringify(n.payload.metadata)&&n.payload.docs.forEach((u,c)=>{const o=s.find(I=>I.doc.ref.isEqual(u.ref)),h=a?.payload.docs.find(I=>I.ref.isEqual(u.ref));o&&JSON.stringify(o.doc.metadata)===JSON.stringify(u.metadata)||!o&&h&&JSON.stringify(h.metadata)===JSON.stringify(u.metadata)||d.push({type:"modified",payload:{oldIndex:c,newIndex:c,type:"modified",doc:u}})}),d}))}function vr(e,t,a){return J(e,a).pipe((0,V.R)((n,s)=>function mn(e,t,a){return t.forEach(n=>{a.indexOf(n.type)>-1&&(e=function gn(e,t){switch(t.type){case"added":if(!e[t.newIndex]||!e[t.newIndex].doc.ref.isEqual(t.doc.ref))return ne(e,t.newIndex,0,t);break;case"modified":if(null==e[t.oldIndex]||e[t.oldIndex].doc.ref.isEqual(t.doc.ref)){if(t.oldIndex!==t.newIndex){const a=e.slice();return a.splice(t.oldIndex,1),a.splice(t.newIndex,0,t),a}return ne(e,t.newIndex,1,t)}break;case"removed":if(e[t.oldIndex]&&e[t.oldIndex].doc.ref.isEqual(t.doc.ref))return ne(e,t.oldIndex,1)}return e}(e,n))}),e}(n,s.map(d=>d.payload),t),[]),(0,Hr.x)(),(0,T.U)(n=>n.map(s=>({type:s.type,payload:s}))))}function ne(e,t,a,...n){const s=e.slice();return s.splice(t,a,...n),s}function Or(e){return(!e||0===e.length)&&(e=["added","removed","modified"]),e}class Ar{constructor(t,a,n){this.ref=t,this.query=a,this.afs=n}stateChanges(t){let a=J(this.query,this.afs.schedulers.outsideAngular);return t&&t.length>0&&(a=a.pipe((0,T.U)(n=>n.filter(s=>t.indexOf(s.type)>-1)))),a.pipe((0,H.O)(void 0),W(),(0,dr.h)(([n,s])=>s.length>0||!n),(0,T.U)(([n,s])=>s),v.iC)}auditTrail(t){return this.stateChanges(t).pipe((0,V.R)((a,n)=>[...a,...n],[]))}snapshotChanges(t){const a=Or(t);return vr(this.query,a,this.afs.schedulers.outsideAngular).pipe(v.iC)}valueChanges(t={}){return re(this.query,this.afs.schedulers.outsideAngular).pipe((0,T.U)(a=>a.payload.docs.map(n=>t.idField?Object.assign(Object.assign({},n.data()),{[t.idField]:n.id}):n.data())),v.iC)}get(t){return(0,F.D)(this.query.get(t)).pipe(v.iC)}add(t){return this.ref.add(t)}doc(t){return new _r(this.ref.doc(t),this.afs)}}class _r{constructor(t,a){this.ref=t,this.afs=a}set(t,a){return this.ref.set(t,a)}update(t){return this.ref.update(t)}delete(){return this.ref.delete()}collection(t,a){const n=this.ref.collection(t),{ref:s,query:d}=Ir(n,a);return new Ar(s,d,this.afs)}snapshotChanges(){return function on(e,t){return br(e,t).pipe((0,H.O)(void 0),W(),(0,T.U)(([a,n])=>n.exists?a?.exists?{payload:n,type:"modified"}:{payload:n,type:"added"}:{payload:n,type:"removed"}))}(this.ref,this.afs.schedulers.outsideAngular).pipe(v.iC)}valueChanges(t={}){return this.snapshotChanges().pipe((0,T.U)(({payload:a})=>t.idField?Object.assign(Object.assign({},a.data()),{[t.idField]:a.id}):a.data()))}get(t){return(0,F.D)(this.ref.get(t)).pipe(v.iC)}}class yn{constructor(t,a){this.query=t,this.afs=a}stateChanges(t){return t&&0!==t.length?J(this.query,this.afs.schedulers.outsideAngular).pipe((0,T.U)(a=>a.filter(n=>t.indexOf(n.type)>-1)),(0,dr.h)(a=>a.length>0),v.iC):J(this.query,this.afs.schedulers.outsideAngular).pipe(v.iC)}auditTrail(t){return this.stateChanges(t).pipe((0,V.R)((a,n)=>[...a,...n],[]))}snapshotChanges(t){const a=Or(t);return vr(this.query,a,this.afs.schedulers.outsideAngular).pipe(v.iC)}valueChanges(t={}){return re(this.query,this.afs.schedulers.outsideAngular).pipe((0,T.U)(n=>n.payload.docs.map(s=>t.idField?Object.assign({[t.idField]:s.id},s.data()):s.data())),v.iC)}get(t){return(0,F.D)(this.query.get(t)).pipe(v.iC)}}const xr=new r.OlP("angularfire2.enableFirestorePersistence"),Tr=new r.OlP("angularfire2.firestore.persistenceSettings"),hn=new r.OlP("angularfire2.firestore.settings"),bn=new r.OlP("angularfire2.firestore.use-emulator");function Ir(e,t=(a=>a)){return{query:t(e),ref:e}}let wr=(()=>{class e{constructor(a,n,s,d,u,c,o,h,I,j,B,ie,b,x,w,C,k){this.schedulers=o;const P=(0,q.on)(a,c,n),se=I;j&&(0,U.nw)(P,c,B,b,x,w,ie,C),[this.firestore,this.persistenceEnabled$]=(0,q.cc)(`${P.name}.firestore`,"AngularFirestore",P.name,()=>{const Z=c.runOutsideAngular(()=>P.firestore());if(d&&Z.settings(d),se&&Z.useEmulator(...se),s&&!(0,R.PM)(u)){const Fn=()=>{try{return(0,F.D)(Z.enablePersistence(h||void 0).then(()=>!0,()=>!1))}catch(zn){return typeof console<"u"&&console.warn(zn),(0,Q.of)(!1)}};return[Z,c.runOutsideAngular(Fn)]}return[Z,(0,Q.of)(!1)]},[d,se,s])}collection(a,n){let s;s="string"==typeof a?this.firestore.collection(a):a;const{ref:d,query:u}=Ir(s,n),c=this.schedulers.ngZone.run(()=>d);return new Ar(c,u,this)}collectionGroup(a,n){const s=n||(u=>u),d=this.firestore.collectionGroup(a);return new yn(s(d),this)}doc(a){let n;n="string"==typeof a?this.firestore.doc(a):a;const s=this.schedulers.ngZone.run(()=>n);return new _r(s,this)}createId(){return this.firestore.collection("_").doc().id}}return e.\u0275fac=function(a){return new(a||e)(r.LFG(q.Dh),r.LFG(q.xv,8),r.LFG(xr,8),r.LFG(hn,8),r.LFG(r.Lbi),r.LFG(r.R0b),r.LFG(v.HU),r.LFG(Tr,8),r.LFG(bn,8),r.LFG(U.zQ,8),r.LFG(U.Qv,8),r.LFG(U.L6,8),r.LFG(U._Q,8),r.LFG(U.rT,8),r.LFG(U.lh,8),r.LFG(U.f7,8),r.LFG(un.nm,8))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"any"}),e})(),vn=(()=>{class e{constructor(){fn.Z.registerVersion("angularfire",v.q4.full,"fst-compat")}static enablePersistence(a){return{ngModule:e,providers:[{provide:xr,useValue:!0},{provide:Tr,useValue:a}]}}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[wr]}),e})();const On=["column"];function An(e,t){if(1&e){const a=r.EpF();r.TgZ(0,"div",22),r.NdJ("dragstart",function(s){r.CHM(a);const d=r.oxw().$implicit,u=r.oxw().$implicit,c=r.oxw(2);return r.KtG(c.onDragStart(s,d,u))}),r.TgZ(1,"button",23),r.NdJ("click",function(){r.CHM(a);const s=r.oxw().index,d=r.oxw().$implicit,u=r.oxw(2);return r.KtG(u.deleteTask(d,s))}),r.O4$(),r.TgZ(2,"svg",24),r._UZ(3,"path",25),r.qZA()(),r.kcU(),r.TgZ(4,"span",26),r._uU(5),r.qZA(),r.TgZ(6,"h4",27),r._uU(7),r.qZA(),r.TgZ(8,"div",28)(9,"div",29),r.O4$(),r.TgZ(10,"svg",30),r._UZ(11,"path",31),r.qZA(),r.kcU(),r.TgZ(12,"span",32),r._uU(13,"Dec 12"),r.qZA()(),r.TgZ(14,"div",33),r.O4$(),r.TgZ(15,"svg",34),r._UZ(16,"path",35),r.qZA(),r.kcU(),r.TgZ(17,"span",32),r._uU(18,"4"),r.qZA()(),r.TgZ(19,"div",36),r.O4$(),r.TgZ(20,"svg",30),r._UZ(21,"path",37),r.qZA(),r.kcU(),r.TgZ(22,"span",32),r._uU(23,"1"),r.qZA()(),r._UZ(24,"img",38),r.qZA()()}if(2&e){const a=r.oxw().$implicit;r.xp6(5),r.Oqu(a.tags),r.xp6(2),r.hij(" ",a.description," ")}}function _n(e,t){if(1&e&&(r.ynx(0),r.YNc(1,An,25,2,"div",21),r.BQk()),2&e){const a=t.$implicit;r.xp6(1),r.Q6J("ngIf",!a.filed)}}const xn=function(e){return{"drag-over":e}};function Tn(e,t){if(1&e){const a=r.EpF();r.TgZ(0,"div",11,12),r.NdJ("dragover",function(s){r.CHM(a);const d=r.oxw(2);return r.KtG(d.onDragOver(s))})("dragenter",function(s){r.CHM(a);const d=r.oxw(2);return r.KtG(d.onDragEnter(s))})("dragleave",function(s){r.CHM(a);const d=r.oxw(2);return r.KtG(d.onDragLeave(s))})("drop",function(s){const u=r.CHM(a).$implicit,c=r.oxw().ngIf,o=r.oxw();return r.KtG(o.onDrop(s,u,c))}),r.TgZ(2,"div",13)(3,"span",14),r._uU(4),r.qZA(),r.TgZ(5,"span",15),r._uU(6,"6"),r.qZA(),r.TgZ(7,"button",16),r.NdJ("click",function(){const d=r.CHM(a).$implicit,u=r.oxw(2);return r.KtG(u.toggleModal(d))}),r.O4$(),r.TgZ(8,"svg",17),r._UZ(9,"path",18),r.qZA()()(),r.kcU(),r.TgZ(10,"div",19),r.YNc(11,_n,2,1,"ng-container",20),r.qZA()()}if(2&e){const a=t.$implicit,n=r.oxw(2);r.Q6J("ngClass",r.VKq(3,xn,n.isDraggingOver)),r.xp6(4),r.Oqu(a.group),r.xp6(7),r.Q6J("ngForOf",a.itens)}}function In(e,t){if(1&e&&(r.TgZ(0,"div",8),r.YNc(1,Tn,12,5,"div",9),r._UZ(2,"div",10),r.qZA()),2&e){const a=t.ngIf;r.Q6J("@fadeInOnEnter",void 0),r.xp6(1),r.Q6J("ngForOf",a)}}function wn(e,t){if(1&e&&(r.TgZ(0,"option",60),r._uU(1),r.qZA()),2&e){const a=t.$implicit;r.Q6J("value",a),r.xp6(1),r.hij(" ",a," ")}}function Un(e,t){if(1&e){const a=r.EpF();r.TgZ(0,"span",61),r.NdJ("click",function(){const d=r.CHM(a).$implicit,u=r.oxw(2);return r.KtG(u.removeTag(d))}),r._uU(1),r.qZA()}if(2&e){const a=t.$implicit;r.xp6(1),r.Oqu(a)}}function Ln(e,t){if(1&e){const a=r.EpF();r.TgZ(0,"div",39)(1,"div",40)(2,"div",41)(3,"div",42)(4,"h3",43),r._uU(5,"Nova Tarefa"),r.qZA(),r.TgZ(6,"button",44),r.NdJ("click",function(){r.CHM(a);const s=r.oxw();return r.KtG(s.toggleModal())}),r.TgZ(7,"span",45),r._uU(8," \xd7 "),r.qZA()()(),r.TgZ(9,"div",46)(10,"form",47),r.NdJ("onSubmit",function(){r.CHM(a);const s=r.oxw();return r.KtG(s.onSubmit())}),r.TgZ(11,"div",48)(12,"select",49),r.NdJ("click",function(){r.CHM(a);const s=r.oxw();return r.KtG(s.listCategories())}),r.YNc(13,wn,2,2,"option",50),r.qZA()(),r.TgZ(14,"div",48)(15,"label",51),r._uU(16,"Descri\xe7\xe3o"),r.qZA(),r._UZ(17,"textarea",52),r.qZA(),r.TgZ(18,"div",53)(19,"label",54),r._uU(20,"Tags"),r.qZA(),r.TgZ(21,"div"),r.YNc(22,Un,2,1,"span",55),r.qZA(),r.TgZ(23,"input",56),r.NdJ("keyup.Enter",function(){r.CHM(a);const s=r.oxw();return r.KtG(s.addTag())}),r.qZA()()()(),r.TgZ(24,"div",57)(25,"button",58),r.NdJ("click",function(){r.CHM(a);const s=r.oxw();return r.KtG(s.toggleModal())}),r._uU(26," Fechar "),r.qZA(),r.TgZ(27,"button",59),r.NdJ("click",function(){r.CHM(a);const s=r.oxw();return s.addTask(),r.KtG(s.toggleModal())}),r._uU(28," Adicionar Tarefa "),r.qZA()()()()()}if(2&e){const a=r.oxw();r.xp6(10),r.Q6J("formGroup",a.newTaskForm),r.xp6(3),r.Q6J("ngForOf",a.categories),r.xp6(9),r.Q6J("ngForOf",a.listTags)}}function Dn(e,t){if(1&e&&(r.TgZ(0,"option",60),r._uU(1),r.qZA()),2&e){const a=t.$implicit;r.Q6J("value",a),r.xp6(1),r.hij(" ",a," ")}}function En(e,t){if(1&e){const a=r.EpF();r.TgZ(0,"div",39)(1,"div",40)(2,"div",41)(3,"div",42)(4,"h3",43),r._uU(5,"Nova Lista"),r.qZA(),r.TgZ(6,"button",44),r.NdJ("click",function(){r.CHM(a);const s=r.oxw();return r.KtG(s.toggleModal())}),r.TgZ(7,"span",45),r._uU(8," \xd7 "),r.qZA()()(),r.TgZ(9,"div",46)(10,"form",47),r.NdJ("onSubmit",function(){r.CHM(a);const s=r.oxw();return r.KtG(s.onSubmit())}),r.TgZ(11,"div",48)(12,"select",49),r.NdJ("click",function(){r.CHM(a);const s=r.oxw();return r.KtG(s.listCategories())}),r.YNc(13,Dn,2,2,"option",50),r.qZA()()()(),r.TgZ(14,"div",57)(15,"button",58),r.NdJ("click",function(){r.CHM(a);const s=r.oxw();return r.KtG(s.toggleModal())}),r._uU(16," Fechar "),r.qZA(),r.TgZ(17,"button",59),r.NdJ("click",function(){r.CHM(a);const s=r.oxw();return s.addList(),r.KtG(s.toggleModalSession())}),r._uU(18," Adicionar "),r.qZA()()()()()}if(2&e){const a=r.oxw();r.xp6(10),r.Q6J("formGroup",a.newTaskForm),r.xp6(3),r.Q6J("ngForOf",a.categories)}}function kn(e,t){1&e&&r._UZ(0,"div",62)}const Rn=[{path:"",component:(()=>{class e{constructor(a,n,s,d,u){this.formBuilder=a,this.database=n,this.authService=s,this.db=d,this.firestore=u,this.showModal=!1,this.listTags=[],this.categories=[],this.isDraggingOver=!1,this.sessionModal=!1,this.taskModal=!1,this.listRef=n.list("tasks"),this.list=this.listRef.snapshotChanges().pipe((0,T.U)(c=>c.map(o=>({key:o.payload.key,...o.payload.val()}))))}ngOnInit(){this.listCategories(),this.newTaskForm=this.formBuilder.group({description:[""],tags:[""],status:[""]}),this.listGroup=this.agrupar()}agrupar(){let a=new ue.x;return this.list.subscribe(n=>{let s=[];(0,F.D)(n).pipe(function Ur(e,t,a,n){return(0,M.e)((s,d)=>{let u;t&&"function"!=typeof t?({duration:a,element:u,connector:n}=t):u=t;const c=new Map,o=b=>{c.forEach(b),b(d)},h=b=>o(x=>x.error(b));let I=0,j=!1;const B=new Y.Q(d,b=>{try{const x=e(b);let w=c.get(x);if(!w){c.set(x,w=n?n():new ue.x);const C=function ie(b,x){const w=new X.y(C=>{I++;const k=x.subscribe(C);return()=>{k.unsubscribe(),0==--I&&j&&B.unsubscribe()}});return w.key=b,w}(x,w);if(d.next(C),a){const k=(0,Y.x)(w,()=>{w.complete(),k?.unsubscribe()},void 0,void 0,()=>c.delete(x));B.add((0,fe.Xf)(a(C)).subscribe(k))}}w.next(u?u(b):b)}catch(x){h(x)}},()=>o(b=>b.complete()),h,()=>c.clear(),()=>(j=!0,0===I));s.subscribe(B)})}(d=>d.status),(0,Lr.z)(d=>function $r(...e){const t=(0,Rr.jO)(e),a=function Er(e){return 1===e.length&&Dr(e[0])?e[0]:e}(e);return a.length?new X.y(n=>{let s=a.map(()=>[]),d=a.map(()=>!1);n.add(()=>{s=d=null});for(let u=0;!n.closed&&u<a.length;u++)(0,fe.Xf)(a[u]).subscribe((0,Y.x)(n,c=>{if(s[u].push(c),s.every(o=>o.length)){const o=s.map(h=>h.shift());n.next(t?t(...o):o),s.some((h,I)=>!h.length&&d[I])&&n.complete()}},()=>{d[u]=!0,!s[u].length&&n.complete()}));return()=>{s=d=null}}):kr.E}((0,Q.of)(d.key),d.pipe(function Nr(){return(0,M.e)((e,t)=>{(function Fr(e,t){return(0,M.e)((0,Cr.U)(e,t,arguments.length>=2,!1,!0))})(zr,[])(e).subscribe(t)})}())))).subscribe(d=>{s.push(d)}),a.next(s)}),a.asObservable()}toggleModal(a){this.item=a,this.showModal=!this.showModal,this.taskModal=!this.taskModal,this.newTaskForm.get("status")?.setValue(a?.group)}toggleModalSession(){this.showModal=!this.showModal,this.sessionModal=!this.sessionModal}addTag(){this.listTags.push(this.newTaskForm.value.tags),this.newTaskForm.get("tags")?.reset()}addTask(){this.listRef.update(this.item.key,this.item?.itens?{group:this.item.group,itens:[...this.item.itens,{description:this.newTaskForm.value.description,tags:this.listTags}]}:{group:this.item.group,itens:[{description:this.newTaskForm.value.description,tags:this.listTags,filed:!1}]}),this.newTaskForm.get("description")?.reset(),this.listTags=[]}addList(){this.listRef.push({group:this.newTaskForm.value.status})}deleteTask(a,n){a.itens[n].filed=!0,this.listRef.update(a.key,a)}removeTag(a){this.listTags=this.listTags.filter(n=>n!==a)}onSubmit(){}listCategories(){this.categories=["fazer","fazendo","feito"]}onDragStart(a,n,s){a.dataTransfer.setData("text/plain",JSON.stringify(n)),a.target.classList.add("dragging"),this.eventoSelecionado=a,this.keyOriginOnDragStart=s}onDragOver(a){a.preventDefault()}onDragEnter(a){this.isDraggingOver=!0}onDragLeave(a){this.isDraggingOver=!1}onDrop(a,n,s){a.preventDefault();const d=a.dataTransfer.getData("text/plain");JSON.parse(d).status=n,this.eventoSelecionado.target.classList.remove("dragging"),this.moveItem(n,s)}moveItem(a,n){const s=n,d=s.find(h=>h.key===this.keyOriginOnDragStart.key),u=s.find(h=>h.key===a.key),c=d?.itens||[],o=c[0];o&&(u.itens=u.itens||[],u.itens.push(o),c.splice(0,1),this.listRef.update(d.key,d),this.listRef.update(u.key,u))}}return e.\u0275fac=function(a){return new(a||e)(r.Y36(A.qu),r.Y36(lr.KQ),r.Y36(Xr.e),r.Y36(lr.KQ),r.Y36(wr))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-kanban"]],viewQuery:function(a,n){if(1&a&&r.Gf(On,5),2&a){let s;r.iGM(s=r.CRH())&&(n.column=s.first)}},decls:13,vars:6,consts:[[1,"flex","flex-col","w-full","h-screen","overflow-auto","text-gray-700"],[1,"px-10","mt-6"],[1,"text-2xl","font-bold"],["class","flex flex-grow px-10 mt-4 space-x-6 overflow-auto",4,"ngIf"],["role","button",1,"fixed","bottom-0","right-0","flex","items-center","justify-center","h-8","pl-1","pr-2","mb-6","mr-4","text-blue-100","bg-blue-600","rounded-full","shadow-lg","hover:bg-blue-600",3,"click"],[1,"ml-1","text-sm","leading-none"],["class","overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex",4,"ngIf"],["class","opacity-25 fixed inset-0 z-40 bg-black",4,"ngIf"],[1,"flex","flex-grow","px-10","mt-4","space-x-6","overflow-auto"],["class","flex flex-col flex-shrink-0 w-72 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200 rounded-lg p-3",3,"ngClass","dragover","dragenter","dragleave","drop",4,"ngFor","ngForOf"],[1,"flex-shrink-0","w-6"],[1,"flex","flex-col","flex-shrink-0","w-72","bg-gradient-to-tr","from-blue-200","via-indigo-200","to-pink-200","rounded-lg","p-3",3,"ngClass","dragover","dragenter","dragleave","drop"],["column",""],[1,"flex","items-center","flex-shrink-0","h-10","px-2"],[1,"block","text-sm","font-semibold"],[1,"flex","items-center","justify-center","w-5","h-5","ml-2","text-sm","font-semibold","text-indigo-500","bg-white","rounded","bg-opacity-30"],[1,"flex","items-center","justify-center","w-6","h-6","ml-auto","text-indigo-500","rounded","hover:bg-indigo-500","hover:text-indigo-100",3,"click"],["fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 6v6m0 0v6m0-6h6m-6 0H6"],[1,"flex","flex-col","pb-2","overflow-auto"],[4,"ngFor","ngForOf"],["class","relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100","draggable","true","draggable","true",3,"dragstart",4,"ngIf"],["draggable","true","draggable","true",1,"relative","flex","flex-col","items-start","p-4","mt-3","bg-white","rounded-lg","cursor-pointer","bg-opacity-90","group","hover:bg-opacity-100",3,"dragstart"],[1,"absolute","top-0","right-0","flex","items-center","justify-center","hidden","w-5","h-5","mt-3","mr-2","text-gray-500","rounded","hover:bg-gray-200","hover:text-gray-700","group-hover:flex",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"w-4","h-4","fill-current"],["d","M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"],[1,"flex","items-center","h-6","px-3","text-xs","font-semibold","text-pink-500","bg-pink-100","rounded-full"],[1,"mt-3","text-sm","font-medium"],[1,"flex","items-center","w-full","mt-3","text-xs","font-medium","text-gray-400"],[1,"flex","items-center"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"w-4","h-4","text-gray-300","fill-current"],["fill-rule","evenodd","d","M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule","evenodd"],[1,"ml-1","leading-none"],[1,"relative","flex","items-center","ml-4"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"relative","w-4","h-4","text-gray-300","fill-current"],["fill-rule","evenodd","d","M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z","clip-rule","evenodd"],[1,"flex","items-center","ml-4"],["fill-rule","evenodd","d","M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z","clip-rule","evenodd"],["src","https://randomuser.me/api/portraits/women/26.jpg",1,"w-6","h-6","ml-auto","rounded-full"],[1,"overflow-x-hidden","overflow-y-auto","fixed","inset-0","z-50","outline-none","focus:outline-none","justify-center","items-center","flex"],[1,"relative","w-auto","my-6","mx-auto","max-w-6xl"],[1,"border-0","rounded-lg","shadow-lg","relative","flex","flex-col","w-full","bg-white","outline-none","focus:outline-none"],[1,"flex","items-start","justify-between","p-5","border-b","border-solid","border-slate-200","rounded-t"],[1,"text-3xl","font-semibold"],[1,"p-1","ml-auto","bg-transparent","border-0","text-black","opacity-5","float-right","text-3xl","leading-none","font-semibold","outline-none","focus:outline-none",3,"click"],[1,"bg-transparent","text-black","opacity-5","h-6","w-6","text-2xl","block","outline-none","focus:outline-none"],[1,"relative","p-6","flex-auto"],[3,"formGroup","onSubmit"],[1,"mb-6"],["formControlName","status","name","status","required","",1,"block","w-full","p-2.5","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","dark:placeholder-gray-400","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"click"],[3,"value",4,"ngFor","ngForOf"],["for","message",1,"block","mb-2","text-sm","font-medium"],["id","message","rows","4","placeholder","Descreva a tarefa","formControlName","description","name","description","required","",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","dark:placeholder-gray-400","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"mb-6","flex","gap-2","flex-col"],["for","tags",1,"block","mb-2","text-sm","font-medium"],["role","button","class","bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",3,"click",4,"ngFor","ngForOf"],["name","tags","formControlName","tags","type","text","id","tags","placeholder","Design","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5",3,"keyup.Enter"],[1,"flex","items-center","justify-end","p-6","border-t","border-solid","border-slate-200","rounded-b"],["type","button",1,"text-red-500","background-transparent","font-bold","uppercase","px-6","py-2","text-sm","outline-none","focus:outline-none","mr-1","mb-1","ease-linear","transition-all","duration-150",3,"click"],["type","button",1,"bg-emerald-500","text-white","active:bg-emerald-600","font-bold","uppercase","text-sm","px-6","py-3","rounded","shadow","hover:shadow-lg","outline-none","focus:outline-none","mr-1","mb-1","ease-linear","transition-all","duration-150",3,"click"],[3,"value"],["role","button",1,"bg-blue-100","text-blue-800","text-xs","font-medium","mr-2","px-2.5","py-0.5","rounded","dark:bg-blue-900","dark:text-blue-300",3,"click"],[1,"opacity-25","fixed","inset-0","z-40","bg-black"]],template:function(a,n){1&a&&(r.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"h1",2),r._uU(4,"Quadro de Tarefas"),r.qZA()(),r.YNc(5,In,3,2,"div",3),r.ALo(6,"async"),r.qZA()(),r.TgZ(7,"a",4),r.NdJ("click",function(){return n.toggleModalSession()}),r.TgZ(8,"span",5),r._uU(9,"Novo"),r.qZA()(),r.YNc(10,Ln,29,3,"div",6),r.YNc(11,En,19,2,"div",6),r.YNc(12,kn,1,0,"div",7)),2&a&&(r.xp6(5),r.Q6J("ngIf",r.lcZ(6,4,n.list)),r.xp6(5),r.Q6J("ngIf",n.showModal&&n.taskModal),r.xp6(1),r.Q6J("ngIf",n.showModal&&n.sessionModal),r.xp6(1),r.Q6J("ngIf",n.showModal))},dependencies:[R.mk,R.sg,R.O5,A._Y,A.YN,A.Kr,A.Fj,A.EJ,A.JJ,A.JL,A.Q7,A.sg,A.u,R.Ov],styles:[".drag-over[_ngcontent-%COMP%]{border:2px dashed blue;background-color:#add8e6}.kanban[_ngcontent-%COMP%]{display:flex;justify-content:center;min-height:400px;gap:10px;padding:10px}.column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:10px;background-color:#5f9ea0;min-width:200px;border-radius:5px}.item[_ngcontent-%COMP%]{background-color:#fff;padding:10px;border-radius:5px}.dragging[_ngcontent-%COMP%]{opacity:.5}"],data:{animation:[Sr()]}}),e})()}];let $n=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[de.Bz.forChild(Rn),de.Bz]}),e})(),Cn=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[R.ez,$n,A.UX,vn]}),e})()}}]);