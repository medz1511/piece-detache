const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
// creation de la variable qui va representer l'article
const article = pieces[0]
// creation des element de  l'article 
const imgElement = document.createElement("img")
imgElement.src = article.image

const nomElement = document.createElement("div")
nomElement.innerText = article.nom

const prixElement = document.createElement("div")
prixElement.innerText = `Prix ${article.prix} $ `

const descriptionElement = document.createElement("div")
descriptionElement.innerText = article.description

const disponibiliteElement = document.createElement("div")
disponibiliteElement.innerText = article.disponibilite


const espaceAffichage = document.querySelector('section.fiches')

espaceAffichage.appendChild(imgElement)
espaceAffichage.appendChild(nomElement)
espaceAffichage.appendChild(prixElement)
espaceAffichage.appendChild(descriptionElement)
espaceAffichage.appendChild(imgElement)

// imgElement = article.nom