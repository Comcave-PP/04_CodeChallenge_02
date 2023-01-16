/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const firstname = prompt("Wie heißt du denn?");
const alter = prompt("Wie alt bist du?");

switch (true){
    case (alter < 6):
        console.log(firstname + " " + "trinkt Milch");
        break;
    case (alter > 5) && (alter < 13):
        console.log(firstname + " " + "trinkt Saft");
        break;
    case (alter > 12) && (alter < 18):
        console.log(firstname + " " + "trinkt Cola");
        break;
    default:
        console.log(firstname + " " + "trinkt Wein");
        break;
}
    

