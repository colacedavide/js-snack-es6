//creo lista bici

const biciclette = [
  {
    nome: "Mountain Bike ",
    peso: 13.5
  },
  {
    nome: "Bici da corsa ",
    peso: 6.8
  },
  {
    nome: "City Bike ",
    peso: 15.2
  },
  {
    nome: "Gravel Bike ",
    peso: 8.9
  },
  {
    nome: "E-Bike",
    peso: 24.3
  },
  {
    nome: "Bici pieghevole ",
    peso: 11.8
  }
];
 let biciPiuLeggera = biciclette[0];
// Ciclo per confrontare tutte le bici
for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciPiuLeggera.peso) {
    biciPiuLeggera = biciclette[i];  // aggiorno se trovo una più leggera
  }
}
console.log("La bici più leggera è:");
console.log(`${biciPiuLeggera.nome} con ${biciPiuLeggera.peso} kg`)