function doublerNombres (nombres) {
    let result =nombres.map(element=>{
        return element*2
    })
    return result
}
console.log(doublerNombres([1,2,3,4]))

function carreNombres (nombres) {
let result = nombres.map(element=>{
    return element*element
})
return result
}
console.log(carreNombres([1,2,3,4]))

function nombresEnTexte (nombres) {
return nombres.map(element=>{
     return String(element)
})
}
console.log(nombresEnTexte([1,2,3,4]))

function nomsEnMajuscules (noms) {
    let result=noms.map(Element=>{
        return Element.toUpperCase()
    })
return result
}
console.log(nomsEnMajuscules(["amine","ahmed"]))

function premiereLettreMajuscule (mots) {
let result=mots.map((element)=>{
    let mot=element.slice(1,element.length)
    return (element[0].toUpperCase())+mot
})
return result
}
console.log(premiereLettreMajuscule(["amine","ahmed"]))

function troisPremieresLettres (mots) {
return mots.map((element)=>{
    let mot=element.slice(0,3)
    return (mot.toUpperCase())
})

}
console.log(troisPremieresLettres(["amine","ahmed"]))

var utilisateurs = [
  { nom: "Ali", age: 20 },
  { nom: "Sara", age: 25 },
  { nom: "Youssef", age: 30 }
];

function obtenirNoms (utilisateurs) {
return utilisateurs.map((obj)=>{
    return obj.nom
})
}
console.log(obtenirNoms(utilisateurs))

function agesPlusTen (utilisateurs) {
    return utilisateurs.map(obj=>{
        return obj.age+=10
    })
}
console.log(agesPlusTen(utilisateurs))
let utilisateursEnText=[
  { nom: "Ali", age: 20 },
  { nom: "Sara", age: 25 }
]

function utilisateursEnTexte (utilisateurs) {
return utilisateurs.map(obj=>{
    return obj.nom+" a "+obj.age+" ans"
})
}
console.log(utilisateursEnTexte(utilisateursEnText))
function ajouterTaxe(prix) {
return prix.map((element)=>{
    return element+(element*20/100)
})
}
console.log(ajouterTaxe([10,20,50],20))

function formaterPrix(prix) {
return prix.map(element=>{
    return "Prix: "+element+" DT"
})
}
console.log(formaterPrix([10,20,50]));
let reductionProduit = [
    { nom: "Phone", prix: 1000 },
    { nom: "PC", prix: 2000 }
]
function reductionProduits(produits) {
    return produits.map(obj => {
        return {
            nom: obj.nom ,
            prix: obj.prix - (obj.prix * 10) / 100
        }
    })
}
console.log(reductionProduits(reductionProduit));
let etiquet=[
  { nom: "Phone", prix: 1000 },
  { nom: "PC", prix: 2000 }
]
function etiquettesProduits(produits) {
return produits.map(obj=>{
    return obj.nom+"-"+obj.prix+" DT"
})
}
console.log(etiquettesProduits(etiquet))

function notesSur20(notes) {
return notes.map(element=>{
    return element+"/20"
})
}
console.log(notesSur20([10,15,17,20]))

function notesAvecMention(notes) {
    return notes.map(element=> {
        if (element< 10) {
            return element+ " : Insuffisant"
        } else if (element< 14) {
            return element+ " : Passable"
        } else if (element< 16) {
            return element+ " : Bien"
        } else if (element< 20) {
            return element+ " : Très Bien"
        } else {
            return element+ " : Excellent"
        }
    })
}

console.log(notesAvecMention([8, 12, 15, 18, 20]))