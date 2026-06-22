// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//Simulacion de pagina.
window.dataLayer = window.dataLayer || [];

window.dataLayer.push({

   
   //Menu
   name_entre_em_contato: 'entre_em_contato',
   name_download_pdf: 'download_pdf',

   //Form
   form_destination: '/obrigado.html',
   form_id_contato: 'contato',
   form_name_contato: 'contato',
   button_submit_text: 'Enviar',
      
   // view form success
   view_sucess_page: window.location.pathname.split('/').pop().split('.')[0],
   view_sucess_pag_path: window.location.hash ? window.location.hash.replace('#', '') : '',


});