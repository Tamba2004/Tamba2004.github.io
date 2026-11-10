try{const t=localStorage.getItem('th');if(t)document.documentElement.dataset.theme=t}catch(e){}
const $=s=>document.querySelector(s),E='alansoh343@gmail.com';
const esc=t=>t.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
$('#theme').onclick=()=>{const r=document.documentElement,d=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;r.dataset.theme=d?'light':'dark'};
/* révélations au scroll + halo souris */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.c');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});
if(document.querySelector('#hterm')){
/* terminal du hero (auto-frappe) */
(async()=>{const h=$('#hterm'),sl=ms=>new Promise(r=>setTimeout(r,ms));
const L=[['whoami','<span class="g">wilfried</span> · développeur junior'],['stack --primary','<span class="b">C#</span> · .NET · Blazor\n<span class="b">Python</span> · <span class="b">Java</span>'],['status','<span class="g">●</span> en cours : pipeline ETL\n<span class="g">●</span> objectif : un poste junior en développement']];
for(const[c,o]of L){h.innerHTML+='<span class="g">$</span> ';for(const ch of c){h.innerHTML+=ch;await sl(45)}h.innerHTML+='\n';await sl(250);h.innerHTML+=o+'\n\n';await sl(500)}
h.innerHTML+='<span class="g">$</span> <span class="m">▍</span>'})();
}
if(document.querySelector('#out')){
/* terminal interactif */
const out=$('#out'),inp=$('#in'),P=t=>{out.innerHTML+=t+'\n';out.scrollTop=out.scrollHeight};
const C={
help:()=>`<span class="y">Commandes :</span>\n  whoami · skills · projects · formation · contact\n  demo · theme · clear · sudo hire wilfried`,
whoami:()=>`<span class="g">Wilfried Tamba Soh</span>, 22 ans, Montréal\nÉtudiant en développement web (Collège LaSalle).\nObjectif : un poste junior en développement, à Montréal.`,
skills:()=>`<span class="b">C#</span> ████████ langage principal (.NET, Blazor)\n<span class="b">Python</span> ██████░░ actif (Django)\n<span class="b">Java</span> ██████░░ actif (Spring Boot, Batch)\n<span class="b">SQL</span> · HTML/CSS/JS · POO · structures de données\n<span class="b">Swift</span> · <span class="b">Kotlin</span> en cours · maths & stats · Office`,
projects:()=>`<span class="g">MaintenanceSystem</span>  gestion d’incidents (réalisé)\n<span class="g">Pipeline ETL</span>       Java/Spring Batch/PostgreSQL (en cours)\n<span class="g">Student Manager</span>    Swift (scolaire)\n<span class="g">Révision ASP.NET</span>   cours Web serveur II\n<span class="g">Python</span>             exercices`,
formation:()=>`DEC 420.B0 Développement Web et Programmation\nCollège LaSalle, Montréal`,
contact:()=>`<span class="g">${E}</span>\nMontréal, QC`,
theme:()=>{$('#theme').click();return '<span class="m">thème basculé</span>'},
clear:()=>{out.innerHTML='';return ''},
demo:()=>{setTimeout(()=>location.href='projets.html#demo',400);return '<span class="m">→ ouverture de la démo…</span>'},
'sudo hire wilfried':()=>`<span class="g">[sudo] permission accordée ✔</span>\nÉcris-moi : ${E}`};
function exec(v){v=v.trim().toLowerCase();if(!v)return;P(`<span class="g">$</span> ${esc(v)}`);const f=C[v];if(f){const r=f();if(r)P(r)}else P(`<span class="r">commande introuvable :</span> ${esc(v)} — tape <span class="y">help</span>`)}
inp.addEventListener('keydown',e=>{if(e.key==='Enter'){exec(inp.value);inp.value=''}});
['help','whoami','skills','projects','contact','sudo hire wilfried'].forEach(c=>{const b=document.createElement('button');b.className='chip';b.textContent=c;b.onclick=()=>exec(c);$('#chips').append(b)});
P('<span class="g">Bienvenue.</span> Tape <span class="y">help</span> ou clique sur un raccourci.\n');
}
if(document.querySelector('#kp')){
/* démo MaintenanceSystem */
const EQ=['Pompe P-102','Convoyeur C-07','Compresseur K-3','Chaudière B-1'],TE=['Équipe A','Équipe B','Équipe C'],PR=['Haute','Moyenne','Basse'],ST=['Ouvert','En cours','Résolu'];
let I=[{id:1,t:'Fuite d’huile sur le joint',e:EQ[0],p:'Haute',s:'En cours',a:'Équipe A'},{id:2,t:'Bruit anormal au roulement',e:EQ[1],p:'Moyenne',s:'Ouvert',a:''},{id:3,t:'Remplacement du filtre',e:EQ[2],p:'Basse',s:'Résolu',a:'Équipe B'}],nid=4,F='Tous';
const opt=(a,v)=>a.map(x=>`<option${x===v?' selected':''}>${x}</option>`).join('');
$('#ne').innerHTML=opt(EQ);$('#np').innerHTML=opt(PR,'Moyenne');
function rd(){
$('#kp').innerHTML=ST.map(x=>`<div class="c kpi"><b>${I.filter(i=>i.s===x).length}</b><span>${x}</span></div>`).join('');
$('#fl').innerHTML=['Tous',...ST].map(x=>`<button class="chip${x===F?' on':''}" data-f="${x}">${x}</button>`).join('');
const L=I.filter(i=>F==='Tous'||i.s===F);
$('#il').innerHTML=L.length?L.map(i=>`<div class="c inc"><div class="ttl"><b>${esc(i.t)}</b><small>${i.e}</small></div><span class="pr ${i.p}">${i.p}</span><select data-id="${i.id}" data-a="as" aria-label="Technicien"><option value="">Non assigné</option>${opt(TE,i.a)}</select><button class="btn alt sm" data-id="${i.id}" data-a="adv">${i.s==='Ouvert'?'Prendre en charge':i.s==='En cours'?'Marquer résolu':'Rouvrir'}</button><button class="chip" data-id="${i.id}" data-a="del" aria-label="Supprimer">✕</button></div>`).join(''):'<p class="sub">Aucun incident dans cette vue.</p>'}
document.addEventListener('click',e=>{const f=e.target.closest('[data-f]');if(f){F=f.dataset.f;rd();return}
const b=e.target.closest('[data-a]');if(!b||b.tagName==='SELECT')return;const i=I.find(x=>x.id==b.dataset.id);
if(b.dataset.a==='adv'){const k=ST.indexOf(i.s);i.s=ST[(k+1)%3];if(i.s==='En cours'&&!i.a)i.a=TE[0]}else I=I.filter(x=>x!==i);rd()});
document.addEventListener('change',e=>{if(e.target.dataset&&e.target.dataset.a==='as'){I.find(x=>x.id==e.target.dataset.id).a=e.target.value}});
function add(){const t=$('#nt').value.trim();if(!t)return;I.unshift({id:nid++,t,e:$('#ne').value,p:$('#np').value,s:'Ouvert',a:''});$('#nt').value='';F='Tous';rd()}
$('#nb').onclick=add;$('#nt').addEventListener('keydown',e=>{if(e.key==='Enter')add()});rd();
}
if(document.querySelector('#tree')){
/* arbre de compétences */
const LB={a:'Acquis',e:'En cours',o:'Objectif'},cnt={a:0,e:0,o:0};let SEL=null;
/* ===== AJOUTER UNE COMPÉTENCE : ['Nom','a' (acquis) | 'e' (en cours) | 'o' (objectif),'Description'] dans la bonne branche ===== */
const T=[['⚙','C# / .NET',[['POO & structures de données','a','Les fondations : classes, héritage, collections et algorithmes de base.'],['ASP.NET MVC & API Web','a','Contrôleurs, vues, routes et API avec ASP.NET.'],['Blazor','a','Interfaces web interactives dans l’écosystème .NET.'],['Entity Framework Core','a','Accès aux données depuis C# avec un ORM, utilisé dans MaintenanceSystem.'],['Architecture propre','o','Bien séparer domaine, services et accès aux données.']]],
['🗄','Données',[['SQL','a','Requêtes, jointures et modélisation de base.'],['SQL Server','a','Base de données de mon projet MaintenanceSystem.'],['PostgreSQL','e','La base de données de mon projet ETL.'],['Optimisation des requêtes','o','Index, plans d’exécution et performance.']]],
['☕','Java',[['POO en Java','a','Classes, interfaces, exceptions, collections et Streams.'],['Spring Boot','a','Créer des applications et des API avec Spring Boot.'],['Spring Batch','e','Jobs, steps, readers, processors et writers.'],['Tests JUnit & Mockito','o','Des tests unitaires fiables pour mes projets.']]],
['🐍','Python',[['Bases & structures de données','a','Listes, dictionnaires et programmation orientée objet.'],['Django','a','Framework web Python : modèles, vues et templates.'],['pandas','o','Manipulation et nettoyage de données.'],['Tests automatisés','o','pytest et bonnes pratiques de test.']]],
['🌐','Web',[['HTML, CSS & JavaScript','a','Des pages responsives et interactives, comme ce portfolio.'],['API REST','e','Concevoir et consommer des API.']]],
['📱','Mobile',[['Swift (iOS)','e','Je l’apprends en ce moment : applications iOS.'],['Kotlin (Android)','e','Je l’apprends en ce moment : développement Android.']]],
['☁','DevOps',[['Linux','a','Ligne de commande et système d’exploitation.'],['Git','a','Travailler proprement en équipe sur un projet.'],['CI/CD','o','Automatiser build, tests et déploiement.'],['Cloud & conteneurs','o','Docker et déploiement dans le cloud.']]],
['∑','Maths & stats',[['Mathématiques','a','Bases solides, utiles pour la logique et les algorithmes.'],['Statistiques','a','Lecture et analyse de données.']]],
['🗂','Bureautique',[['Word','a','Rédaction et mise en forme de documents.'],['Excel','a','Tableaux, formules et analyse de données.'],['PowerPoint','a','Présentations claires et soignées.'],['Outlook & Teams','a','Communication et organisation au quotidien.']]]];
T.forEach(([ic,n,ns])=>{const b=document.createElement('div');b.innerHTML=`<div class="bh">${ic} ${n}</div>`;
ns.forEach(([t,s,d])=>{cnt[s]++;const x=document.createElement('div');x.className='c nd '+s;x.innerHTML=`<span>${t}</span><i class="mono">${s==='a'?'✓':s==='e'?'◐':'🔒'}</i>`;
x.onclick=()=>{SEL&&SEL.classList.remove('sel');SEL=x;x.classList.add('sel');$('#ni').innerHTML=`<b>${t}</b> <span class="pill">${LB[s]}</span><p class="m0">${d}</p>`};b.append(x)});$('#tree').append(b)});
$('#lg').innerHTML=`<b>${cnt.a}</b> acquises · <b>${cnt.e}</b> en cours · <b>${cnt.o}</b> objectifs`;
}
if(document.querySelector('#projs')){
/* ===== AJOUTER UN PROJET : copie un bloc {…} dans PROJETS (sépare-les par une virgule) ===== */
const PROJETS=[
{repo:'maintenance-incident-management',nom:'MaintenanceSystem',branche:'main',statut:'Réalisé',desc:'Système de gestion d’incidents de maintenance industrielle.',tags:['Blazor Server','ASP.NET Core','Entity Framework Core','SQL Server'],details:['Tableau de bord de suivi','Création et suivi des incidents','Liste des équipements','Liste des techniciens'],lien:'https://github.com/Tamba2004/maintenance-incident-management'},
{nom:'Pipeline ETL multi-formats',branche:'feat/etl-pipeline',statut:'En cours',desc:'Traitement de données pensé pour des clients de grande entreprise.',tags:['Java','Spring Batch','PostgreSQL'],details:['Données réelles (météo d’Environnement Canada)','Règles de validation poussées','Rapports d’exécution lisibles','Erreurs partielles gérées : une ligne rejetée n’arrête pas le lot'],lien:''},
{repo:'Student_Manager',nom:'Student Manager',branche:'main',statut:'Scolaire',desc:'Projet scolaire en Swift.',tags:['Swift'],details:[],lien:'https://github.com/Tamba2004/Student_Manager'},
{repo:'dw4_aspnet-revision',nom:'Révision ASP.NET (DW4)',branche:'main',statut:'Scolaire',desc:'Révisions du cours Web serveur II (ASP.NET).',tags:['ASP.NET','Révision'],details:[],lien:'https://github.com/Tamba2004/dw4_aspnet-revision'},
{repo:'python',nom:'Python',branche:'main',statut:'Scolaire',desc:'Code Python versionné sur GitHub.',tags:['Python'],details:[],lien:'https://github.com/Tamba2004/python'}
];
const renderProj=()=>$('#projs').innerHTML=PROJETS.map(p=>`<article class="c proj"><div class="top"><span class="br mono">⎇ ${p.branche}</span><span class="pill">${p.statut}</span></div><h3>${p.nom}</h3><p>${p.desc}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>${p.maj?`<small class="mono m0">Mis à jour le ${p.maj}</small>`:''}${p.details.length?`<ul class="more">${p.details.map(d=>`<li>${d}</li>`).join('')}</ul><button class="link" data-tog>Voir le détail →</button>`:''}${p.lien?` <a class="link" href="${p.lien}" target="_blank" rel="noopener">Voir le code ↗</a>`:''}</article>`).join('');renderProj();
/* ===== SYNCHRO GITHUB AUTOMATIQUE : tout nouveau dépôt public apparaît ici sans rien modifier ===== */
const GH='Tamba2004';
(async()=>{try{let d=JSON.parse(sessionStorage.getItem('gh')||'null');
if(!d){const r=await fetch(`https://api.github.com/users/${GH}/repos?per_page=100&sort=pushed`);if(!r.ok)return;d=await r.json();sessionStorage.setItem('gh',JSON.stringify(d))}
const by=Object.fromEntries(PROJETS.filter(p=>p.repo).map(p=>[p.repo,p]));
d.filter(r=>!r.fork&&r.name!==GH&&r.name!=='WILFRIED.TAMBA').forEach(r=>{const day=r.pushed_at.slice(0,10);if(by[r.name])by[r.name].maj=day;else PROJETS.push({repo:r.name,nom:r.name.replace(/[-_]/g,' '),branche:r.default_branch,statut:'GitHub',desc:r.description||'Projet publié sur GitHub.',tags:[r.language].filter(Boolean).concat(r.topics||[]),details:[],lien:r.html_url,maj:day})});
renderProj()}catch(e){}})();
document.addEventListener('click',e=>{const b=e.target.closest('[data-tog]');if(!b)return;const p=b.closest('.proj');p.classList.toggle('open');b.textContent=p.classList.contains('open')?'Masquer ↑':'Voir le détail →'});
}
if(document.querySelector('#lk')){
/* ===== AJOUTER UN LIEN (LinkedIn, GitHub…) : ['LinkedIn','https://…'] ===== */
const LIENS=[['LinkedIn','https://www.linkedin.com/in/wilfried-alan-tamba-soh-928bb1346/'],['GitHub','https://github.com/Tamba2004']];
$('#lk').innerHTML=LIENS.map(([n,u])=>`<a class="row2" href="${u}" target="_blank" rel="noopener" style="margin-bottom:12px"><span class="ic2">↗</span><span><small class="mono">Profil</small><b>${n}</b></span><em>→</em></a>`).join('');
$('#copy').onclick=()=>{(navigator.clipboard?navigator.clipboard.writeText(E):Promise.reject()).catch(()=>{}).finally(()=>{const t=$('#toast');t.textContent='Adresse copiée ✔';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)})};
}
if(document.querySelector('#bg')){
/* fond animé */
(()=>{const c=$('#bg'),x=c.getContext('2d');let w,h,N=[];const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight;N=Array.from({length:Math.min(50,w/20|0)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}))};rs();addEventListener('resize',rs);
const m={x:-999,y:-999};addEventListener('pointermove',e=>{m.x=e.clientX;m.y=e.clientY});
const f=()=>{x.clearRect(0,0,w,h);const a=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()||'#38e2a0';x.strokeStyle=a;x.fillStyle=a;
for(const p of N){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;x.globalAlpha=.7;x.beginPath();x.arc(p.x,p.y,1.5,0,7);x.fill()}
for(let i=0;i<N.length;i++){for(let j=i+1;j<N.length;j++){const d=Math.hypot(N[i].x-N[j].x,N[i].y-N[j].y);if(d<130){x.globalAlpha=(1-d/130)*.3;x.beginPath();x.moveTo(N[i].x,N[i].y);x.lineTo(N[j].x,N[j].y);x.stroke()}}
const d=Math.hypot(N[i].x-m.x,N[i].y-m.y);if(d<170){x.globalAlpha=(1-d/170)*.6;x.beginPath();x.moveTo(N[i].x,N[i].y);x.lineTo(m.x,m.y);x.stroke()}}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)requestAnimationFrame(f)};f()})();
}
