# map


## Introduction

Il est bon de savoir que la méthode **map** permet de créer un nouveau tableau en transformant chaque élément du tableau initial.

## Exercices

### 1. Fonction `doublerNombres`

Écrire une fonction doublerNombres qui prend un tableau de nombres et retourne un tableau où chaque nombre est multiplié par 2.

```javascript
function doublerNombres (nombres) {

}
```

### 2. Fonction `carreNombres`

Écrire une fonction carreNombres qui retourne un tableau contenant le carré de chaque nombre.

```javascript
function carreNombres (nombres) {

}
```

### 3. Fonction `nombresEnTexte`

Écrire une fonction nombresEnTexte qui transforme chaque nombre en chaîne de caractères.

```javascript
function nombresEnTexte (nombres) {

}
```

### 4. Fonction `nomsEnMajuscules`

Écrire une fonction nomsEnMajuscules qui met tous les noms en majuscules.

```javascript
function nomsEnMajuscules (noms) {

}
```

### 5. Fonction `premiereLettreMajuscule`

Écrire une fonction premiereLettreMajuscule qui met seulement la première lettre de chaque mot en majuscule.

```javascript
function premiereLettreMajuscule (mots) {

}
```


### 6. Fonction `troisPremieresLettres`

Écrire une fonction troisPremieresLettres qui retourne seulement les trois premières lettres en majuscules.

```javascript
function troisPremieresLettres (pays) {

}
troisPremieresLettres(['finland', 'denmark', 'sweden', 'norway', 'iceland'])
```

### 7. Fonction `obtenirNoms`

Écrire une fonction obtenirNoms qui retourne un tableau contenant seulement les noms.

```javascript
function obtenirNoms (utilisateurs) {

}
var utilisateurs = [
  { nom: "Ali", age: 20 },
  { nom: "Sara", age: 25 },
  { nom: "Youssef", age: 30 }
];
obtenirNoms(utilisateurs)
```

### 8. Fonction `agesPlusDix`

Créer une fonction agesPlusDix qui ajoute 10 à chaque âge.

```agesPlusDix
function agesPlusTen (utilisateurs) {

}
```

### 9. Fonction `utilisateursEnTexte`

Créer une fonction utilisateursEnTexte qui retourne un tableau de chaînes sous la forme :
"Ali a 20 ans".

```javascript
function utilisateursEnTexte (utilisateurs) {

}
utilisateursEnTexte([
  { nom: "Ali", age: 20 },
  { nom: "Sara", age: 25 }
])  => ["Ali a 20 ans", "Sara a 25 ans"]


```

### 10. Fonction `ajouterTaxe`

Créer une fonction ajouterTaxe qui ajoute 20% à chaque prix.

```javascript
function ajouterTaxe(prix) {

}
ajouterTaxe([10, 20, 50]) =>
[12, 24, 60]

```

### 11. Fonction `formaterPrix`

Créer une fonction formaterPrix qui retourne des chaînes sous la forme :
"Prix: 10 DT".

```javascript
function formaterPrix(prix) {

}
formaterPrix([10, 20, 50]) =>
["Prix: 10 DT", "Prix: 20 DT", "Prix: 50 DT"]


```

### 12. Fonction `reductionProduits`

Créer une fonction reductionProduits qui applique une réduction de 10% sur chaque produit.

```javascript
function reductionProduits(produits) {

}

reductionProduits( [
  { nom: "Phone", prix: 1000 },
  { nom: "PC", prix: 2000 }
]) => [
  { nom: "Phone", prix: 900 },
  { nom: "PC", prix: 1800 }
]

```

### 13. Fonction `etiquettesProduits`

Créer une fonction etiquettesProduits qui retourne :
"Phone - 1000 DT".

```javascript
function etiquettesProduits(produits) {

}

etiquettesProduits( [
  { nom: "Phone", prix: 1000 },
  { nom: "PC", prix: 2000 }
])  => ["Phone - 1000 DT", "PC - 2000 DT"]

```

### 14. Fonction `prixAvecDevise`

Créer une fonction prixAvecDevise qui retourne :
"1000 TND".

```javascript
function prixAvecDevise(products) {

}
prixAvecDevise([
  { prix: 1000 },
  { prix: 2000 }
])  => ["1000 TND", "2000 TND"]


```

### 15. Fonction `notesSur20`

Créer une fonction notesSur20 qui retourne :
"10/20".


```javascript
function notesSur20(notes) {

}
notesSur20([10, 15, 20]) => ["10/20", "15/20", "20/20"]


```

### 16. Fonction `notesAvecMention`

Créer une fonction notesAvecMention qui retourne :
"15 : Bien", "20 : Excellent", etc.

```javascript
function notesAvecMention(notes) {

}
notesAvecMention([8, 12, 15, 18, 20]) => [
  "8 : Insuffisant",
  "12 : Passable",
  "15 : Bien",
  "18 : Très Bien",
  "20 : Excellent"
]


```
