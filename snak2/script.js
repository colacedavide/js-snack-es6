const squadre = [
    {
        nome: "squadra-uno",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra-due",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra-tre",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra-quattro",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra5-cinque",
        punti: 0,
        falli: 0
    },
    {
        nome: "squadra-sei",
        punti: 0,
        falli: 0
    },

]

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = Math.floor(Math.random()*10) ;  //generiamo un  numero intero tra 0 e 100
}

for (let i = 0; i < squadre.length; i++) {
    squadre[i].falli = Math.floor(Math.random()*6) ;  //generiamo un  numero intero tra 0 e 100
}
 const array = [];

//ciclo

 for(let i = 0; i < squadre.length; i++){
    
    const punti = {
        'name': squadre[i].nome ,  
        'falli' : squadre[i].falli 
        
        
    };
    
   array.push(punti);
}

console.log(array);
