// Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti informazioni, facendo attenzione che il numero generato abbia senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per tiri da 3 punti
// Tutti i giocatori verranno visualizzati tramite il loro codice (in una select, una lista, …).
// Una volta cliccato sul codice giocatore, nel corpo principale verranno visualizzate le statistiche corrispondenti.

// CREO UN ARRAY DI characters globale
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //totale 26 lettere
var player_codes = [];
// Genero un giocatore e creo un function globale
function player_generate() {

  var player_code = ""; //il var lo devo lasciare fuori dal DO xke dopo non mi lo riconosce gli oggetti sotto......
  do {
    player_code = "";
    // Genero le 3 lettere e le concateno
    for (var i = 0; i < 3; i++) {
      var char_position = number_generator(0,25); // nell array characters si parte da 0....
      var char = characters.charAt(char_position);
      player_code += char;
    }
    // Genero le 3 cifre e le concateno
    for (var i = 0; i < 3; i++) {
      player_code += number_generator(0,9);
    }
  } while (player_codes.includes(player_code));

  player_codes.push(player_code);
  // Genero numero di punti
  var punti = number_generator(0,40);
  // Genero numero di rimbalzi
  var rimbalzi = number_generator(0,300);
  // Genero Falli
  var falli = number_generator(0,5); //5 falli e il massimo di falli permessi se no sei espulso !!!!
  // Genero percentuali per i tiri 2 punti
  var percentuali_2 = (number_generator(0,1000) / 10).toFixed(1);
  // Genero percentuali per i tiri da 3 punti
  var percentuali_3 = (100 - percentuali_2).toFixed(1);
  // Genero il giocatore (OGGETTO)
  var player = {
    'Codice Player': player_code,
    'Punti': punti,
    'Rimbalzi': rimbalzi,
    'Falli': falli,
    'Percentuali 2 punti': percentuali_2,
    'Percentuale 3 punti': percentuali_3,
  }
  return player;
}
// Genero 100 oggetti ( players)
var players = [];

for (var i = 0; i < 100; i++) {
  var player = player_generate();
  players.push(player);
}
console.log(player);
// GENERATORE DI NUMERI
function number_generator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
