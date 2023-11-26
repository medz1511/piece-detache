const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
// creation de la variable qui va representer l'article
// creation des element de  l'article 
for (let i = 0; i < pieces.length; i++) {
    const article = pieces[i]
    const imgElement = document.createElement("img")
    imgElement.src = article.image

    const nomElement = document.createElement("div")
    nomElement.innerText = article.nom

    const prixElement = document.createElement("div")
    prixElement.innerText = `Prix ${article.prix}  ${article.prix > 35 ? "$" : "$$"}`

    const descriptionElement = document.createElement("div")
    descriptionElement.innerText = article.description ?? "Pas de decription pour le moment."


    function statut() {
        let statut
        if (article.disponibilite == true) {
            statut = " En Stock "
        } else statut = "En rupture de stock "

        return statut

    }
    const disponibiliteElement = document.createElement("p")
    disponibiliteElement.innerText = statut()
    const paragraphe = document.createElement("p")
    const espaceAffichage = document.querySelector('section.fiches')

    espaceAffichage.appendChild(imgElement)
    espaceAffichage.appendChild(nomElement)
    espaceAffichage.appendChild(prixElement)
    espaceAffichage.appendChild(descriptionElement)
    espaceAffichage.appendChild(disponibiliteElement)

}

// imgElement = article.nom