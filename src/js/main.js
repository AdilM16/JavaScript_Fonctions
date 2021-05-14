// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)
// let addition = (nb1, nb2) => {
//     console.log(nb1+nb2);
// }
// addition(4,5);

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)
// let soustraction = (nb1, nb2) => {
    // console.log(nb1-nb2);
// }
// soustraction(5,4);

// EXO3
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)
// let multiplication = (nb1, nb2) => {
    // return nb1*nb2;
// }
// console.log(multiplication(2,2));

// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)
// let division = (nb1, nb2) => {
    // return nb1/nb2;
// }
// console.log(division(4,2));

// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)
// let modulo = (nb1, nb2) => {
    // return nb1%nb2;
// }
// console.log(modulo(10,3));
// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)
// let carre = (chiffre) => {
    // return Math.sqrt(chiffre);
// }
// console.log(carre(9));
// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)
// let exposant = (nb1,nb2) => {
//     return Math.pow(nb1,nb2);
// }
// console.log(exposant(2,2));
// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;
// let capitalize = (chaine) => {
//     return chaine.charAt(0).toUpperCase()+chaine.substr(1)
// }
// console.log(capitalize("brah"));
// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)
// let calcul = (nb1,operator,nb2) => {
//     switch(operator){
//         case "+":
//             return nb1+nb2;
//         case "-":
//             return nb1-nb2;
//         case "*":
//             return nb1*nb2;
//         case "/":
//             return nb1/nb2;
//         default:
//             return "Veuillez entrer un opérateur valide !"
//     }
// }
//nb1 = prompt("Veuillez encoder un chiffre");
//operator = prompt("Veuillez encoder un operateur");
//nb2 = prompt("Veuillez encoder un chiffre");

//console.log(calcul(nb1,operator,nb2));
// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)
//          let reverseNum = (num) => {
//              let x = Math.pow(10, (num + '').length - 1);
//              while (num > 0){
//              return (num % 10) * x + reverseNum(Math.floor(num / 10));    
//              }
//              return 0;
//          } 
//          console.log(reverseNum(prompt("Entrez un chiffre")));

// let reverseNumber = (num) => {
//     return parseInt(num.toString().split("").reverse().join(""));
// }
// console.log(reverseNumber(prompt("Entrez un chiffre")));

// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

// let divPar2 = (nbr) => {
//     let reponse = (nbr/2);
//     switch (nbr % 2) {
//         case 0:
//             alert(`Le num ${nbr} est divisible par 2 ( ${nbr} : 2 = ${reponse} )`)
//         default:
//             alert("Ce nombre n'est pas divisible par 2");
//     }
// }

// nbr = prompt("entrez un nombre");
// console.log(divPar2(nbr));


// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"
// let logIn = (rep) => {
//     while(rep != "mdp"){
//         rep = prompt("Réessayez");
//     }
//     alert("Vous êtes connecté");
// }

// logIn(prompt("Quel est le mot de passe ?"));


// EXO BONUS "C'EST LE BORDEL"
let classeCoding19 = [];

let ajouter = (prenom, phrase) => {

    //je split ma chaine de caractères à chaque fois que je trouve une , et mets chaque éléments dans mon tableau tabTemp
    let tabTemp = prenom.split(',');   // tabTemp = ["Nasila", "Mouna", "Stan", "Jean"] 
    
    for(let i = 0; i < tabTemp.length; i++){
        classeCoding19.push(tabTemp[i]);
    }
    console.log(phrase);
    console.log(classeCoding19);

}

let retirer = (prenom, phrase, nbr) => {
    classeCoding19.splice(classeCoding19.indexOf(prenom), nbr);
    console.log(phrase);
    console.log(classeCoding19);
}

ajouter("Fanny", "Il est 08h43, Fanny entre en classe !");

ajouter("Chris", "Il est 08h44, Chris rentre, allume son PC et commence à mettre ses notes à jour");

ajouter("Nasila, Mouna, Stan, Jean", "Nasila, Mouna, Stan, Jean rejoignent la classe à 08h45");

retirer("Stan", "Stan et Jean voient Django le chat passer devant la porte, et décident de le rejoindre et de ne jamais revenir !", 2);

ajouter("Ali, Agim", "A 08h55, Ali et Agim rentrent en classe en faisant un max de bruit !")

ajouter("Antoine", "Antoine rentre en classe à 08h56");
retirer("Antoine", "Antoine descend prendre sa tasse de café",1);

ajouter("Yassine", "A 08h59, Yassine arrive avec sa petite plante et salue tout le monde avec un grand sourire !");

ajouter("Seifedin, Haroune", "Seifedin et Haroune rentrent tranquillement et observent tout le monde à 09h00.")

ajouter("Elvis, Ilias E., Ilias D.", "A 09h03 Elvis, Ilias D et Ilias E. arrivent et observent Nasila qui a l'air d'être traaaaanquiiiille");

ajouter("Kevin", "A 09h04, Kevin rentre avec sa tasse de café");

ajouter("VanHoa, Nathan", "VanHoa et Nathan rentrent en classe tout contents de n'être que 5min en retard")

retirer("Fanny", "Fanny leur dit qu'ils sont en retard puis elle sort", 1);

ajouter("Adil", "Adil rentre à 09h10 avec son café, tout content et souriant !");

ajouter("Fanny", "Fanny rentre en classe et commence à donner cours");

ajouter("Lira", "A 09h30 Lira rentre en faisant le minimum de bruit possible mais toute la classe le regarde !");





// let classeCoding19 = [];
// let absent = [];
// let heure8;
// let heure9;
// for (let heure8 =0; heure8 < 60; heure8++){
//     if(heure8==43){
//         classeCoding19.push("Fanny");
//         console.log("Fanny arrive en classe à 8h43",classeCoding19);
//     }
//     if(heure8==44){
//         classeCoding19.push("Chris");
//         console.log("Chris entre allume son pc et commence",classeCoding19);
//     }
//     if(heure8==45){
//         classeCoding19.push("Nasila","Stan","Mouna","Jean");
//         console.log("Nasila, Stan, Mouna, Jean rejoignent la classe..",classeCoding19);
//     }
//     if(heure8==51){
//         classeCoding19.splice(3,5);
//         classeCoding19.push("Mouna");
//         console.log("Stan et Jean voyent Django el Gato passer devant la porte, et décident de le rejoindre et de ne jamais revenir..",classeCoding19);
//     }
//     if(heure8==55){
//         classeCoding19.push("Ali","Agim");
//         console.log("Ali et Agim entrent en classe en faisant un maximum de bruit, toujours les mêmes..",classeCoding19);
//     }
//     if(heure8==56){
//         classeCoding19.push("Antoine");
//         console.log(classeCoding19);
//         absent = classeCoding19.splice(6,1);
//         console.log("Antoine rentre en classe puis redescend prendre sa tasse de café",classeCoding19);
//     }
//     if(heure8==59){
//         classeCoding19.push("Yassine");
//         console.log("Yassine arrive avec sa petite plante et salue tout le monde avec un grand sourire",classeCoding19);
//     }
// }
// //Boucle 9H
// for (let heure9 =0; heure9 < 60; heure9++){
//     if(heure9==0){
//         classeCoding19.push("Seifedin","Haroune");
//         console.log("Seifedin et Haroune rentrent tranquillement et observent tout le monde",classeCoding19);
//     }
//     if(heure9==3){
//         classeCoding19.push("Elvis","Ilias D","Ilias El");
//         console.log("Elvis, Ilias D et Ilias El rentrent et observent Nasila qui à l'air d'être tranquilleeee",classeCoding19);
//     }
//     if(heure9==4){
//         classeCoding19.push("Kevin");
//         console.log("Kevin rentre en classe avec sa tasse de café",classeCoding19);
//     }
//     if(heure9==5){
//         classeCoding19.push("Van Hoa","Nathan");
//         classeCoding19.splice(0,1)
//         console.log("Van Hoa et Nathan rentrent en classe tous contents de n'être que 5 minutes en retard, Fanny leurs dit qu'iles sont en retard et puis elle sort",classeCoding19);
//     }
//     if(heure9==10){
//         classeCoding19.push("Adil");
//         console.log("Adil rentre avec sa petite tasse de café, tout content et souriant",classeCoding19);
//     }    
//     if(heure9==20){
//         classeCoding19.push("Fanny");
//         console.log("Fanny rentre en classe et commence à donner cours",classeCoding19);
//     }    
//     if(heure9==30){
//         classeCoding19.push("Lira");
//         console.log("Lira rentre en faisant le minimum de bruit possible mais toute la classe le regarde",classeCoding19);
//     }
// }
// console.log(`Les élèves qu'on n'a plus jamais revu..${absent}`);
