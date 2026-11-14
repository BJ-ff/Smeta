var S={q:{},cu:[],mq:{},mp:{},mc:[],mg:15,xp:{},xm:{},mcol:{},kk:{},pp:{},fz:null,col:{},k:1,d:0,v:0,cl:'',ad:'',tab:'p'};
try{var z=localStorage.getItem('elsm2');if(z)Object.assign(S,JSON.parse(z))}catch(e){}
S.xp=S.xp||{};S.xm=S.xm||{};S.mcol=S.mcol||{};S.kk=S.kk||{};S.pp=S.pp||{};S.cs=S.cs||{};S.cs.w=S.cs.w||[];S.cs.m=S.cs.m||[];
S.cs.w.forEach(function(e){D.push([e.n,[],e.del?1:0])});
S.cs.m.forEach(function(e){M.push([e.n,[],e.del?1:0])});
for(var q9 in S.xp)if(D[q9])S.xp[q9].forEach(function(e){D[q9][1].push([e[0],e[1],1])});
for(var q9 in S.xm)if(M[q9])S.xm[q9].forEach(function(e){M[q9][1].push([e[0],e[1],1])});
var $=function(i){return document.getElementById(i)};
function fm(x){return Math.round(x).toLocaleString('ru-RU')}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
function save(){try{localStorage.setItem('elsm2',JSON.stringify(S))}catch(e){}}
function build(){
 var h='';
 D.forEach(function(c,ci){
  h+='<div class="cat'+(S.col[ci]?' cl':'')+'" id="c'+ci+'"><button class="ch" onclick="fold('+ci+')"><span class="ar">▾</span><span class="t">'+esc(c[0])+'</span><span class="s" id="s'+ci+'"></span></button><div class="cb">';
  c[1].forEach(function(it,ii){var id=ci+'-'+ii;
   h+='<div class="it" id="r'+id+'" data-n="'+esc(it[0].toLowerCase())+'"><div class="nm">'+esc(it[0])+'<span class="pr"><input class="pe" id="pe'+id+'" type="number" step="any" min="0" inputmode="decimal" value="'+pf(id,it)+'" onchange="setpp(\''+id+'\',this.value)"> сом</span></div><div class="ct"><button onclick="adj(\''+id+'\',-1)">−</button><input type="number" min="0" step="any" inputmode="decimal" id="i'+id+'" value="'+(S.q[id]||0)+'" oninput="setq(\''+id+'\',this.value)"><button onclick="adj(\''+id+'\',1)">+</button></div>'+(it[2]?'<button class="x" onclick="rmX(0,'+ci+','+ii+')">✕</button>':'')+'</div>'});
  h+='</div></div>'});
 $('cats').innerHTML=h;$('mcats').innerHTML=mb();mcList();$('mg').value=S.mg;addBtns();
 $('k').value=S.k;$('d').value=S.d;$('v').value=S.v;$('cl').value=S.cl;$('ad').value=S.ad;
 cuList();calc()}
function fold(i){S.col[i]=!S.col[i];$('c'+i).classList.toggle('cl',!!S.col[i]);save()}
function foldAll(f){D.forEach(function(c,i){S.col[i]=f;$('c'+i).classList.toggle('cl',f)});save()}
function adj(id,dl){var v=Math.max(0,(parseFloat($('i'+id).value)||0)+dl);$('i'+id).value=v;setq(id,v)}
function setq(id,v){v=Math.max(0,parseFloat(v)||0);if(v)S.q[id]=v;else delete S.q[id];calc()}
function filt(){var t=$('q').value.trim().toLowerCase();
 D.forEach(function(c,ci){var any=false;
  c[1].forEach(function(it,ii){var e=$('r'+ci+'-'+ii),m=!t||e.dataset.n.indexOf(t)>-1;e.style.display=m?'':'none';if(m)any=true});
  $('c'+ci).style.display=any?'':'none';
  if(t&&any)$('c'+ci).classList.remove('cl');else $('c'+ci).classList.toggle('cl',!!S.col[ci])})}
function addCu(){var n=$('cn').value.trim(),p=parseFloat($('cp').value)||0,q=parseFloat($('cq').value)||0;
 if(!n){$('cn').focus();return}
 S.cu.push({n:n,p:p,q:q});$('cn').value='';$('cp').value='';$('cq').value=1;cuList();calc()}
function cuList(){
 $('cul').innerHTML=S.cu.map(function(c,i){return '<div class="it" style="padding-left:0;padding-right:0"><div class="nm">'+esc(c.n)+'<span class="pr">'+fm(c.p)+' сом</span></div><div class="ct"><input type="number" min="0" step="any" value="'+c.q+'" oninput="S.cu['+i+'].q=Math.max(0,parseFloat(this.value)||0);calc()"></div><button class="x" onclick="S.cu.splice('+i+',1);cuList();calc()">✕</button></div>'}).join('')}
function sv(){S.k=parseFloat($('k').value);if(isNaN(S.k))S.k=1;S.d=parseFloat($('d').value)||0;S.v=parseFloat($('v').value)||0;S.mg=parseFloat($('mg').value);if(isNaN(S.mg))S.mg=0;S.cl=$('cl').value;S.ad=$('ad').value;calc()}
function mb(){var h='';
 M.forEach(function(c,ci){h+='<div class="cat'+(S.mcol[ci]?' cl':'')+'"><button class="ch" onclick="mfold('+ci+',this)"><span class="ar">▾</span><span class="t">'+esc(c[0])+'</span></button><div class="cb">';
  c[1].forEach(function(it,ii){var id=ci+'-'+ii,p=S.mp[id]!=null?S.mp[id]:it[1];
   h+='<div class="it"><div class="nm">'+esc(it[0])+'</div><input class="pi" type="number" min="0" step="any" inputmode="decimal" title="Закупочная цена" value="'+p+'" oninput="setp(\''+id+'\',this.value)"><div class="ct"><button onclick="madj(\''+id+'\',-1)">−</button><input type="number" min="0" step="any" inputmode="decimal" id="mi'+id+'" value="'+(S.mq[id]||0)+'" oninput="setmq(\''+id+'\',this.value)"><button onclick="madj(\''+id+'\',1)">+</button></div>'+(it[2]?'<button class="x" onclick="rmX(1,'+ci+','+ii+')">✕</button>':'')+'</div>'});
  h+='</div></div>'});return h}
function setp(id,v){S.mp[id]=Math.max(0,parseFloat(v)||0);calc()}
function setmq(id,v){v=Math.max(0,parseFloat(v)||0);if(v)S.mq[id]=v;else delete S.mq[id];calc()}
function madj(id,dl){var v=Math.max(0,(parseFloat($('mi'+id).value)||0)+dl);$('mi'+id).value=v;setmq(id,v)}
function addMc(){var n=$('mn').value.trim(),p=parseFloat($('mpp').value)||0,q=parseFloat($('mqq').value)||0;if(!n){$('mn').focus();return}S.mc.push({n:n,p:p,q:q});$('mn').value='';$('mpp').value='';$('mqq').value=1;mcList();calc()}
function mcList(){$('mcl').innerHTML=S.mc.map(function(c,i){return '<div class="it" style="padding-left:0;padding-right:0"><div class="nm">'+esc(c.n)+'</div><input class="pi" type="number" min="0" step="any" value="'+c.p+'" oninput="S.mc['+i+'].p=Math.max(0,parseFloat(this.value)||0);calc()"><div class="ct"><input type="number" min="0" step="any" value="'+c.q+'" oninput="S.mc['+i+'].q=Math.max(0,parseFloat(this.value)||0);calc()"></div><button class="x" onclick="S.mc.splice('+i+',1);mcList();calc()">✕</button></div>'}).join('')}
function mlines(){var L=[],f=1+S.mg/100;M.forEach(function(c,ci){c[1].forEach(function(it,ii){var id=ci+'-'+ii,q=S.mq[id];if(q){var p=S.mp[id]!=null?S.mp[id]:it[1];L.push({n:it[0],q:q,b:p,p:p*f})}})});S.mc.forEach(function(c){if(c.q)L.push({n:c.n,q:c.q,b:c.p,p:c.p*f})});return L}
var A=[];try{A=JSON.parse(localStorage.getItem('elsm_arch')||'[]')}catch(e){}
var cur=null;
function svA(){try{localStorage.setItem('elsm_arch',JSON.stringify(A))}catch(e){}}
function snap(){return {q:S.q,cu:S.cu,mq:S.mq,mp:S.mp,mc:S.mc,mg:S.mg,kk:S.kk,k:S.k,d:S.d,v:S.v,cl:S.cl,ad:S.ad}}
function saveA(){var T=window.T,m=$('msg');if(!T.L.length&&!T.ML.length){m.textContent='Смета пуста';return}
 var o=JSON.parse(JSON.stringify(snap()));o.tot=T.tot;o.fz={};D.forEach(function(c,ci){c[1].forEach(function(it,ii){var id=ci+'-'+ii;if(S.q[id])o.fz[id]=pf(id,it)})});o.dt=new Date().toLocaleDateString('ru-RU');
 var i=cur?A.findIndex(function(x){return x.id===cur}):-1;
 if(i>-1){o.id=cur;A[i]=o}else{o.id=Date.now();cur=o.id;A.unshift(o)}
 svA();m.textContent='Сохранено в архив'}
function arch(){var t=($('aq').value||'').toLowerCase(),sum=0,h='';
 var F=A.filter(function(x){return !t||((x.cl||'')+' '+(x.ad||'')).toLowerCase().indexOf(t)>-1});
 F.forEach(function(x){sum+=x.tot;h+='<div class="card"><div style="display:flex;justify-content:space-between;gap:8px"><b>'+esc(x.cl||'Без имени')+'</b><b style="color:var(--ok)">'+fm(x.tot)+' сом</b></div><div style="color:var(--mu);font-size:13px">'+esc(x.ad||'—')+' · '+x.dt+'</div><div class="row"><button class="btn" onclick="opA('+x.id+')">Открыть</button><button class="btn sec" onclick="opA('+x.id+',1)">Копия</button><button class="btn sec" onclick="delA('+x.id+')">Удалить</button></div></div>'});
 $('al').innerHTML=h||'<div class="em">Архив пуст</div>';
 $('at').textContent=F.length?'Объектов: '+F.length+' · на сумму '+fm(sum)+' сом':''}
function opA(id,dup){var x=A.find(function(y){return y.id===id});if(!x)return;
 var c=JSON.parse(JSON.stringify(x));S.q=c.q;S.cu=c.cu;S.mq=c.mq;S.mp=c.mp;S.mc=c.mc;S.mg=c.mg;S.kk=c.kk||{};S.fz=dup?null:(c.fz||null);S.k=c.k;S.d=c.d;S.v=c.v;S.cl=c.cl;S.ad=c.ad;
 cur=dup?null:id;build();tab('s');$('msg').textContent=dup?'Копия открыта — сохраните её в архив':(S.fz?'Цены как при сохранении сметы':'')}
function delA(id){if(window.__dl!==id){window.__dl=id;$('at').textContent='Нажмите «Удалить» ещё раз для подтверждения';return}
 window.__dl=null;A=A.filter(function(x){return x.id!==id});if(cur===id)cur=null;svA();arch()}
function cpT(t){var m=S.tab==='a'?$('at'):$('msg');try{navigator.clipboard.writeText(t).then(function(){m.textContent='Скопировано'},function(){m.textContent='Не удалось скопировать'})}catch(e){m.textContent='Не удалось скопировать'}}
function shareT(t,ti){try{if(navigator.share){navigator.share({title:ti,text:t}).catch(function(){cpT(t)});return}}catch(e){}cpT(t)}
function shr(){cp(1)}
function expA(){shareT('ELSM:'+JSON.stringify(A),'Архив смет')}
function impA(){var s=($('ib').value||'').trim().replace(/^ELSM:/,'');try{var a=JSON.parse(s);if(!Array.isArray(a))throw 0;var ids={};A.forEach(function(x){ids[x.id]=1});a.forEach(function(x){if(x&&x.id&&!ids[x.id])A.push(x)});A.sort(function(p,q){return q.id-p.id});svA();$('ib').value='';arch();$('at').textContent='Восстановлено. '+$('at').textContent}catch(e){$('at').textContent='Не удалось прочитать копию'}}
function mfold(ci,b){S.mcol[ci]=!S.mcol[ci];b.parentNode.classList.toggle('cl',!!S.mcol[ci]);save()}
function mfoldAll(f){M.forEach(function(c,i){S.mcol[i]=f});document.querySelectorAll('#mcats .cat').forEach(function(e){e.classList.toggle('cl',f)});save()}
function addBtns(){[['cats',0],['mcats',1]].forEach(function(z){var k=z[1],Z=k?M:D,cs=S.cs[k?'m':'w'],base=Z.length-cs.length;
 $(z[0]).querySelectorAll('.cat .cb').forEach(function(cb,ci){if(Z[ci][2]){cb.parentNode.style.display='none';return}
  var d=document.createElement('div');d.className='it';d.innerHTML='<button class="btn sec" style="width:100%" onclick="fx('+k+','+ci+',this)">＋ Добавить позицию</button>';cb.appendChild(d);
  if(ci>=base){var e=document.createElement('div');e.className='it';e.style.gap='8px';e.innerHTML='<button class="btn sec" style="flex:1" onclick="renSec('+k+','+ci+',this)">Переименовать</button><button class="btn sec" style="flex:1" onclick="delSec('+k+','+ci+',this)">Удалить раздел</button>';cb.appendChild(e)}});
 var c=document.createElement('div');c.className='card';c.innerHTML='<h3>＋ Новый раздел</h3><div class="row" style="margin:0"><input id="ns'+k+'" placeholder="Название раздела" style="flex:1"><button class="btn" onclick="addSec('+k+')">Создать</button></div>';$(z[0]).appendChild(c)})}
function addSec(k){var n=$('ns'+k).value.trim();if(!n){$('ns'+k).focus();return}S.cs[k?'m':'w'].push({n:n});(k?M:D).push([n,[],0]);build()}
function renSec(k,ci,b){var d=b.parentNode;d.innerHTML='<input id="rn'+k+ci+'" value="'+esc((k?M:D)[ci][0])+'" style="flex:1"><button class="btn" onclick="doRen('+k+','+ci+')">ОК</button>';$('rn'+k+ci).focus()}
function doRen(k,ci){var n=$('rn'+k+ci).value.trim();if(!n)return;var Z=k?M:D,cs=S.cs[k?'m':'w'];cs[ci-(Z.length-cs.length)].n=n;Z[ci][0]=n;build()}
function delSec(k,ci,b){if(b.dataset.c!=='1'){b.dataset.c='1';b.textContent='Точно удалить?';return}
 var Z=k?M:D,cs=S.cs[k?'m':'w'];cs[ci-(Z.length-cs.length)].del=1;Z[ci][1].length=0;Z[ci][2]=1;delete S[k?'xm':'xp'][ci];
 [k?S.mq:S.q,S.mp,S.kk,S.pp].forEach(function(o){Object.keys(o).forEach(function(a){if(a.split('-')[0]==ci)delete o[a]})});build()}
function fx(k,ci,b){var d=b.parentNode;d.style.display='block';d.innerHTML='<input placeholder="Название" id="xn'+k+ci+'" style="margin-bottom:6px"><div class="row" style="margin:0"><input type="number" step="any" min="0" inputmode="decimal" placeholder="'+(k?'Закупочная цена':'Цена')+'" id="xp'+k+ci+'" style="flex:1"><button class="btn" onclick="ax('+k+','+ci+')">Добавить</button></div>';$('xn'+k+ci).focus()}
function ax(k,ci){var n=$('xn'+k+ci).value.trim(),p=parseFloat($('xp'+k+ci).value)||0;if(!n){$('xn'+k+ci).focus();return}
 var X=k?S.xm:S.xp;X[ci]=X[ci]||[];X[ci].push([n,p]);(k?M:D)[ci][1].push([n,p,1]);build()}
function rmX(k,ci,ii){var Z=k?M:D,X=k?S.xm:S.xp,base=Z[ci][1].filter(function(x){return !x[2]}).length;
 X[ci].splice(ii-base,1);Z[ci][1].splice(ii,1);
 [k?S.mq:S.q].concat(k?[S.mp]:[S.kk]).forEach(function(o){delete o[ci+'-'+ii];for(var j=ii+1;j<=Z[ci][1].length;j++){var a=ci+'-'+j;if(o[a]!=null){o[ci+'-'+(j-1)]=o[a];delete o[a]}}});build()}
function pf(id,it){var z=S.fz;if(z&&z[id]!=null)return z[id];return S.pp[id]!=null?S.pp[id]:it[1]}
function setpp(id,v){var p=id.split('-'),it=D[p[0]][1][p[1]];v=parseFloat(String(v).replace(',','.'));if(isNaN(v)||v<0||v===it[1])delete S.pp[id];else S.pp[id]=v;var e=$('pe'+id);if(e)e.value=pf(id,it);calc()}
function shareF(t){var nm=('Смета '+(S.cl||'без имени')+(S.ad?' '+S.ad:'')+' '+new Date().toLocaleDateString('ru-RU').split('.').join('-')).replace(/[^0-9A-Za-zА-Яа-яЁё -]/g,'')+'.txt';
 try{var f=new File([t],nm,{type:'text/plain'});if(navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:nm}).catch(function(){});return}}catch(e){}
 shareT(t,nm)}
function kf(id){return S.kk[id]!=null?S.kk[id]:1}
function setkk(id,v){v=parseFloat(String(v).replace(',','.'));if(isNaN(v)||v<0)v=1;if(v===1)delete S.kk[id];else S.kk[id]=v;calc()}
function lines(){var L=[];
 D.forEach(function(c,ci){c[1].forEach(function(it,ii){var id=ci+'-'+ii,q=S.q[id];if(q)L.push({id:id,n:it[0],q:q,b:pf(id,it),k:kf(id),p:pf(id,it)*kf(id)})})});
 S.cu.forEach(function(c,i){if(c.q)L.push({id:'c'+i,n:c.n,q:c.q,b:c.p,k:kf('c'+i),p:c.p*kf('c'+i)})});return L}
function calc(){
 var sub=0;
 D.forEach(function(c,ci){var s=0;c[1].forEach(function(it,ii){var id=ci+'-'+ii,q=S.q[id]||0;s+=q*pf(id,it)*kf(id);var e=$('r'+id);if(e)e.classList.toggle('on',q>0)});sub+=s;$('s'+ci).textContent=s?fm(s)+' сом':''});
 S.cu.forEach(function(c,i){sub+=c.q*c.p*kf('c'+i)});
 var a=sub*S.k,dis=a*S.d/100,ML=mlines(),mb0=0,ms=0;ML.forEach(function(l){mb0+=l.q*l.b;ms+=l.q*l.p});var tot=a-dis+ms+S.v,L=lines();
 $('bt').textContent=fm(tot);$('bn').textContent=L.length+ML.length;
 window.T={sub:sub,a:a,dis:dis,tot:tot,L:L,ML:ML,ms:ms};
 if($('mgi'))$('mgi').textContent='Закупка: '+fm(mb0)+' · Продажа: '+fm(ms)+' · Ваша маржа: '+fm(ms-mb0)+' сом';
 if(S.tab==='s')sm();
 save()}
function sm(){var T=window.T;
 $('sm').innerHTML=(T.L.length||T.ML.length?'':'<div class="em">Выберите позиции на вкладках «Прайс» и «Материалы»</div>')+(T.L.length?'<table><thead><tr><th>Позиция</th><th class="r">Кол.</th><th class="r">Цена</th><th class="r">Коэф.</th><th class="r">Сумма</th></tr></thead><tbody>'+T.L.map(function(l){return '<tr><td>'+esc(l.n)+'</td><td class="r">'+l.q+'</td><td class="r">'+fm(l.b)+'</td><td class="r"><input type="number" step="0.05" min="0" inputmode="decimal" value="'+l.k+'" style="width:66px;padding:5px 6px;text-align:right" onchange="setkk(\''+l.id+'\',this.value)"></td><td class="r">'+fm(l.q*l.p)+'</td></tr>'}).join('')+'</tbody></table>':'')+(T.ML.length?'<h4 style="margin:14px 0 4px">Материалы</h4><table><thead><tr><th>Материал</th><th class="r">Кол.</th><th class="r">Цена</th><th class="r">Сумма</th></tr></thead><tbody>'+T.ML.map(function(l){return '<tr><td>'+esc(l.n)+'</td><td class="r">'+l.q+'</td><td class="r">'+fm(l.p)+'</td><td class="r">'+fm(l.q*l.p)+'</td></tr>'}).join('')+'</tbody></table>':'');
 $('tt').innerHTML='<div><span>Работы</span><b>'+fm(T.sub)+' сом</b></div>'+(S.k!==1?'<div><span>С коэффициентом ×'+S.k+'</span><b>'+fm(T.a)+' сом</b></div>':'')+(S.d?'<div><span>Скидка '+S.d+'%</span><b>−'+fm(T.dis)+' сом</b></div>':'')+(T.ms?'<div><span>Материалы</span><b>+'+fm(T.ms)+' сом</b></div>':'')+(S.v?'<div><span>Выезд / доставка</span><b>+'+fm(S.v)+' сом</b></div>':'')+'<div class="big"><span>Итого</span><span>'+fm(T.tot)+' сом</span></div>'}
function tab(t){S.tab=t;$('pp').classList.toggle('hid',t!=='p');$('ps').classList.toggle('hid',t!=='s');$('pm').classList.toggle('hid',t!=='m');$('tm').classList.toggle('on',t==='m');$('pa').classList.toggle('hid',t!=='a');$('ta').classList.toggle('on',t==='a');if(t==='a')arch();$('tp').classList.toggle('on',t==='p');$('ts').classList.toggle('on',t==='s');if(t==='s')sm();window.scrollTo(0,0)}
function cp(sh){var T=window.T,t='СМЕТА НА ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ\n';
 if(S.cl)t+='Заказчик: '+S.cl+'\n';if(S.ad)t+='Объект: '+S.ad+'\n';t+='\n';
 T.L.forEach(function(l,i){t+=(i+1)+'. '+l.n+' — '+l.q+' × '+fm(l.p)+' = '+fm(l.q*l.p)+' сом\n'});
 if(T.ML.length){t+='\nМатериалы:\n';T.ML.forEach(function(l,i){t+=(i+1)+'. '+l.n+' — '+l.q+' × '+fm(l.p)+' = '+fm(l.q*l.p)+' сом\n'})}t+='\nРаботы: '+fm(T.sub)+' сом';if(T.ms)t+='\nМатериалы: '+fm(T.ms)+' сом';if(S.k!==1)t+='\nКоэффициент: ×'+S.k;if(S.d)t+='\nСкидка: '+S.d+'%';if(S.v)t+='\nВыезд/доставка: '+fm(S.v)+' сом';t+='\nИТОГО: '+fm(T.tot)+' сом';
 if(sh===2)shareF(t);else if(sh)shareT(t,'Смета'+(S.cl?' — '+S.cl:''));else cpT(t)}
function rst(){if(!window.__c){window.__c=1;$('msg').textContent='Нажмите ещё раз для сброса';setTimeout(function(){window.__c=0;$('msg').textContent=''},3000);return}
 window.__c=0;S={q:{},cu:[],mq:{},mp:{},mc:[],mg:15,xp:S.xp,xm:S.xm,mcol:S.mcol,cs:S.cs,pp:S.pp,kk:{},fz:null,col:S.col,k:1,d:0,v:0,cl:'',ad:'',tab:'s'};build();$('msg').textContent='Сброшено'}
document.addEventListener('gesturestart',function(e){e.preventDefault()});
build();tab(S.tab||'p');
