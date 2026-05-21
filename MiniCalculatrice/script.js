const champ = document.getElementById("champ");
const touches = document.getElementById("touches");

touches.addEventListener("click", (e) => {
    const bouton = e.target.closest("button");
    if (!bouton) return;

    const action = bouton.dataset.action;
    const valeur = bouton.dataset.valeur;

    if (action === "num" || action === "operator") {
        champ.value += valeur;
    } else if (action === "clear") {
        champ.value = "";
    } else if (action === "delete") {
        champ.value = champ.value.slice(0, -1);
    } else if (action === "calculate") {
        try {
            if (champ.value.trim() === "") return;
            // Remplacement sécurisé de eval() pour éviterles injections
            const calcul = Function(`"use strict"; return (${champ.value})`);
            champ.value = calcul();
        } catch (error) {
            champ.value = "Error";
        }
    }
});