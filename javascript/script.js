// var passengersYearsOld = parseInt(prompt('Buongiorno! Quanti anni ha?'));
// console.log(passengersYearsOld);
// var passengersKm = parseInt(prompt('Quanti km vorrebbe percorrere nella sua tratta?'));
// console.log(passengersKm);


var ticketPriceForKm = 0.21;
var ticketPrice = passengersKm * ticketPriceForKm;
console.log(ticketPrice);

document.getElementById('prezzo_del_biglietto').innerHTML ='il prezzo del suo biglietto è ' + ticketPrice + '€';

if (passengersYearsOld <= 18) {
  ticketPrice = ticketPrice - ((ticketPrice * 20) / 100)
  console.log(ticketPrice);
} else if (passengersYearsOld >= 65) {
  ticketPrice = ticketPrice - ((ticketPrice * 40) / 100)
  console.log(ticketPrice);
}


document.getElementById('prezzo_scontato').innerHTML ='il prezzo del suo biglietto con lo sconto under18/over65 è ' + ticketPrice + '€';
