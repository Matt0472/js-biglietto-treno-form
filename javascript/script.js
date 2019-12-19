// var passengersYearsOld = parseInt(prompt('Buongiorno! Quanti anni ha?'));
// console.log(passengersYearsOld);
// var passengersKm = parseInt(prompt('Quanti km vorrebbe percorrere nella sua tratta?'));
// console.log(passengersKm);



var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener('click',
  function() {
    var inputNome = document.getElementById('nome-utente');
    var nomeUtente = inputNome.value;
    console.log(nomeUtente);

    var inputKm = document.getElementById('km');
    var kmDaPercorrere = parseInt(inputKm.value);
    console.log(kmDaPercorrere);

    var selectFasciaEta = document.getElementById('fascia-età');
    var fasciaEtà = selectFasciaEta.value;
    console.log(fasciaEtà);

    var ticketPriceForKm = 0.21;
    var ticketPrice = ticketPriceForKm * kmDaPercorrere;
    console.log(ticketPrice);

    var offerta = 'Tariffa Standard';

    if (fasciaEtà == 'minorenne') {
      ticketPrice = ticketPrice - ((ticketPrice * 20) / 100);
      offerta = 'Sconto Minorenne';
      console.log(ticketPrice);
    } else if (fasciaEtà == 'over65') {
      ticketPrice = ticketPrice - ((ticketPrice * 40) / 100);
      offerta = 'Sconto Over 65';
      console.log(ticketPrice);
    }

    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('nome-passeggero').innerHTML = nomeUtente;
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 9) + 1;
    document.getElementById('codice-cp').innerHTML = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;
    document.getElementById('prezzo').innerHTML = ticketPrice.toFixed(2);

    var ticketDiv = document.getElementById('ticket');
    ticketDiv.classList.remove('hidden');
    ticketDiv.classList.add('show');
  }
);

  var buttonAnnulla = document.getElementById('annulla');
  buttonAnnulla.addEventListener('click',
    function() {
      document.getElementById('nome-passeggero').innerHTML = '';
      document.getElementById('offerta').innerHTML = '';
      document.getElementById('carrozza').innerHTML = '';
      document.getElementById('codice-cp').innerHTML = '';
      document.getElementById('prezzo').innerHTML = '';

      document.getElementById('nome-utente').value = '';
      document.getElementById('km').value = '';
      document.getElementById('fascia-età').value = '';

      var ticketDiv = document.getElementById('ticket');
      ticketDiv.classList.add('hidden');
      ticketDiv.classList.remove('show');
    }
  );
