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


const Name = prompt("Wie heißt du denn?");
const Alter = prompt("Wie alt bist du?");

/*** Mit Switch-Case ****/
switch (true) {
    case (Alter >= 0) && (Alter < 6):
        console.log(Name + " " + "trinkt Milch");
        break;
    case (Alter >= 6) && (Alter < 13):
        console.log(Name + " " + "trinkt Saft");
        break;
    case (Alter >= 13) && (Alter < 18):
        console.log(Name + " " + "trinkt Cola");
        break;
    case (Alter >= 18):
        console.log(Name + " " + "trinkt Wein");
        break;
    default:
        console.log("Ungültiges Alter eingegeben");
        break;
}


/*** Mit if-else ***/
// if(Alter >= 0 && Alter < 6)
// {
//     console.log(Name + " " + "trinkt Milch")
// }
// else if(Alter >= 6 && Alter < 13)
// {
//     console.log(Name + " " + "trinkt Saft");
// }
// else if(Alter >= 13 && Alter < 18)
// {
//     console.log(Name + " " + "trinkt Cola");
// }
// else if(Alter >= 18)
// {
//     console.log(Name + " " + "trinkt Wein");
// }
// else
// {
//     console.log("Ungültiges Alter eingegeben");
// }




