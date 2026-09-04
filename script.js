const WHATSAPP='';
function formText(form,title){const d=new FormData(form);return title+'\n\n'+[...d.entries()].map(([k,v])=>`${k}: ${v}`).join('\n')}
function openWA(text){if(!WHATSAPP){alert('Estrutura pronta. Falta apenas inserir o número oficial do WhatsApp da Fretall para ativar o envio.');return false}window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,'_blank');return false}
function quoteSubmitting(form){
  const btn=document.getElementById('quoteSubmit');
  const ok=document.getElementById('quoteSuccess');
  if(btn){btn.disabled=true;btn.textContent='ENVIANDO...'}
  if(ok) ok.classList.remove('show');
  setTimeout(()=>{
    if(ok) ok.classList.add('show');
    if(btn){btn.disabled=false;btn.textContent='SOLICITAR COTAÇÃO'}
    form.reset();
  },1800);
  return true;
}
function partnerSubmitting(form){
  const selected = group => [...form.querySelectorAll(`[data-group="${group}"]:checked`)].map(el=>el.value).join(', ');
  document.getElementById('partnerVeiculos').value = selected('veiculos');
  document.getElementById('partnerServicos').value = selected('servicos');
  document.getElementById('partnerLicencas').value = selected('licencas');

  const btn=document.getElementById('partnerSubmit');
  const ok=document.getElementById('partnerSuccess');
  if(btn){btn.disabled=true;btn.textContent='ENVIANDO...'}
  if(ok) ok.classList.remove('show');
  setTimeout(()=>{
    if(ok) ok.classList.add('show');
    if(btn){btn.disabled=false;btn.textContent='QUERO SER PARCEIRO FRETALL'}
    form.reset();
  },1800);
  return true;
}
