// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomain(emailadres) {
   const name = emailadres.indexOf("@");
   const emailDomain = emailadres.substring(name + 1, emailadres.length);
   return emailDomain;
//console.log(emailDomain); de andere manier zonder returnfunctie
}

// getEmailDomain("n.eeken-education.nl");
// getEmailDomain("t.mellink@novi.nl");
// getEmailDomain("a.wiersma@outlook.com");

const Nova = getEmailDomain("n.eeken-education.nl");
const Theo = getEmailDomain("t.mellink@novi.nl");
const Andre = getEmailDomain("a.wiersma@outlook.com");

console.log(Nova);
console.log(Theo);
console.log(Andre);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(emailadres) {
   const student = emailadres.includes("@novi-education.nl");
   const medewerker = emailadres.includes("@novi.nl");
   const extern = emailadres.includes("@outlook.com");
   if (student === true) {
      return "Student";
   }
   else if (medewerker === true) {
      return "Medewerker";
   }
   else if(extern === true) {
      return "Extern";
   }
   else {
      return "Extern";
   }
   // else {
   //    console.log("Extern");
   // }
}
const adresStudent = typeOfEmail("n.eeken@novi-education.nl");
const adresMedewerker = typeOfEmail("t.mellink@novi.nl");
const adresExtern1 = typeOfEmail("novi.nlaapjesk@outlook.com");
const adresExtern2 = typeOfEmail("a.wiersma@outlook.com");

console.log(adresStudent);
console.log(adresMedewerker);
console.log(adresExtern1);
console.log(adresExtern2);


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(emailadres) {
   const lastCharacter = emailadres.lastIndexOf(".") ;
   // console.log(lastCharacter);
   // console.log(emailadres.length); even testen of inderdaad posities overeenkomen
   const validity = emailadres.includes("@") && !emailadres.includes(",") && !(emailadres.length -1 === lastCharacter);
   return validity;
}

const adres1 = checkEmailValidity("n.eeken@novi.nl");
const adres2 = checkEmailValidity("tessmellink@novi.nl");
const adres3 = checkEmailValidity("n.eekenanovi.nl");
const adres4 = checkEmailValidity("n.eeken@novinl.");
const adres5 = checkEmailValidity("tessmellink@novi,nl");

console.log(adres1);
console.log(adres2);
console.log(adres3);
console.log(adres4);
console.log(adres5);