function pegainfo(){

   mvol     = document.getElementById('mvol').value;
   tempcol  = document.getElementById('tempcol').value;
   bicos    = document.getElementById('bicos').value;
   espbicos = document.getElementById('espbicos').value;
   dist     = document.getElementById('dist').value;
   tempdist = document.getElementById('tempdist').value;
   cap      = document.getElementById('cap').value;
   dosedef  = document.getElementById('dosedef').value;

   vapbico = (mvol/tempcol);
   vatotal = ((vapbico/bicos)/1000);
   vetrat = (dist/tempdist);
   atrat = (((bicos*espbicos)*vetrat)*0,36);
   volcalda = (vetrat/atrat);
   defptank = ((cap/volcalda)*dosedef);
   areapul = (cap/defptank);
   temprab = (areapul/atrat);

   document.getElementById('1').innerHTML = `${vapbico}`;
   document.getElementById('2').innerHTML = `${vatotal} `; 
   document.getElementById('3').innerHTML = `${vetrat}  `; 
   document.getElementById('4').innerHTML = `${atrat}   `;     
   document.getElementById('5').innerHTML = `${volcalda}`; 
   document.getElementById('6').innerHTML = `${defptank}`; 
   document.getElementById('7').innerHTML = `${areapul} `; 
   document.getElementById('8').innerHTML = `${temprab} `; 
   
}
