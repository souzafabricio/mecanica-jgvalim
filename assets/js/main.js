"use strict";
document.querySelectorAll('.wa-link').forEach(a=>{
  const m=a.dataset.msg; if(m) a.href='https://wa.me/5519999814101?text='+encodeURIComponent(m);
});
document.getElementById('yr').textContent=new Date().getFullYear();

(function(){
  const items=['Diagnóstico com scanner','Revisão','Freios','Suspensão','Motor','Embreagem','Transmissão','Arrefecimento','Injeção eletrônica'];
  const html=items.map(t=>'<span>'+t+'</span>').join('');
  document.getElementById('tick').innerHTML=html+html;
})();

document.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',()=>{
  const old=b.textContent;
  const done=()=>{b.textContent='Copiado';setTimeout(()=>b.textContent=old,2000)};
  const sel=()=>{const r=document.createRange();r.selectNodeContents(document.getElementById(b.dataset.target));const s=getSelection();s.removeAllRanges();s.addRange(r)};
  try{navigator.clipboard.writeText(b.dataset.copy).then(done).catch(sel)}catch(e){sel()}
}));

// Compartilhar cartão: envia a imagem quando o navegador permite; senão abre o WhatsApp com os dados do cartão
(function(){
  const btn=document.getElementById('shareBtn'),msg=document.getElementById('shareMsg');
  const text='*JG João Gabriel Valim Assi – Oficina Mecânica*\nQualidade, compromisso e atendimento.\n\n📍 Jardim da Glória, São João da Boa Vista – SP\n📱 WhatsApp: (19) 99981-4101 – https://wa.me/5519999814101\n✉️ joaoassi03@gmail.com\n📷 https://www.instagram.com/jg.mecanica_019/';
  const site=/^https?:/.test(location.protocol)?location.origin+location.pathname.replace(/index\.html$/,''):'';
  const fullText=site?text+'\n\n🌐 '+site:text;
  btn.href='https://api.whatsapp.com/send?text='+encodeURIComponent(fullText);
  let file=null;
  fetch(btn.dataset.image).then(r=>r.ok?r.blob():Promise.reject()).then(b=>{
    const f=new File([b],'cartao-jg-mecanica.jpg',{type:b.type||'image/jpeg'});
    if(navigator.canShare&&navigator.canShare({files:[f]})) file=f;
  }).catch(()=>{});
  btn.addEventListener('click',e=>{
    if(!file) { msg.textContent='Abrindo o WhatsApp com os dados do cartão. Escolha o contato.'; return; }
    e.preventDefault();
    navigator.share({files:[file],text:fullText}).then(()=>{msg.textContent='Cartão enviado para o app escolhido.'})
      .catch(err=>{ if(err&&err.name!=='AbortError'){ msg.textContent='Abrindo o WhatsApp…'; window.open(btn.href,'_blank'); } });
  });
})();

(function(){
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach((el,i)=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add('pre');el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)}});
})();
