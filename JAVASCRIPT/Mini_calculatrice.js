//MACHINE MINI-CALCULATRICE
// On a utilisé la méthode en jQuery  "appendTo()" pour ajouter un élément HTML existant à un autre élément dans le DOM (Document Object Model) 

const champ = document.getElementById("champ");

function appendToChamp(input){
    champ.value += input ; 
    // += nous permet d'ajouter d'autres éléments sans avoir supprimer les précedents 
}

function supprimer(){
    if(champ.value){
        champ.value = champ.value.slice(0,-1);
    }
}

function reset(){
    champ.value = "";
}

function calculate(){
    // d'abord, on va tester si on popurras faire le calcul 
    try{
        champ.value = eval(champ.value);
        // On utilise la fonction "eval()" qui prend la forme eval(9+1-5),la calcule et retourne le résultat après
    }
    catch // sinon, on met ceci c-à-d lorsque ça n'a pas marché , il va exécuter celui ci
    {
        champ.value ="Error...";
    }
}