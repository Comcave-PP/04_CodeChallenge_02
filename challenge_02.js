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
const alter = prompt("Wie alt bist du?");

/*** Mit Switch-Case ****/
// switch (true) {
//     case (alter >= 0) && (alter < 6):
//         console.log(Name + " " + "trinkt Milch");
//         break;
//     case (alter >= 6) && (alter < 13):
//         console.log(Name + " " + "trinkt Saft");
//         break;
//     case (alter >= 13) && (alter < 18):
//         console.log(Name + " " + "trinkt Cola");
//         break;
//     case (alter >= 18):
//         console.log(Name + " " + "trinkt Wein")
//     default:
//         console.log("Ungültiges Alter eingegeben");
//         break;
// }

/*** Mit if-else ***/
if(alter >= 0 && alter < 6)
{
    console.log(Name + " " + "trinkt Milch")
}
else if(alter >= 6 && alter < 13)
{
    console.log(Name + " " + "trinkt Saft");
}
else if(alter >= 13 && alter < 18)
{
    console.log(Name + " " + "trinkt Cola");
}
else if(alter >= 18)
{
    console.log(Name + " " + "trinkt Wein");
}
else
{
    console.log("Ungültiges Alter eingegeben");
}




