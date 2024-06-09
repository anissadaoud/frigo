<!-- Liste des produits -->
<script setup>
import AffichageProduits from "./AffichageProduits.vue";
import FormAjout from "./FormAjout.vue";
import Search from "./Search.vue";
import Produit from "../Produit.js";
import { onMounted, reactive } from 'vue';
import { url } from '../urlapi.js';

// Liste des produits dans le frigo
const produits = reactive([]);

// Liste des produits pour la recherche
const produitsSearch = reactive([]);

// Fonction pour récupérer les produits du frigo
function AfficheFrigo() {
  fetch(url, { method: "GET" })
    .then(response => response.json())
    .then(dataJSON => {
      console.log(dataJSON);
      produits.splice(0, produits.length); // Réinitialiser la liste des produits
      for (let p of dataJSON) {
        produits.push(new Produit(p.id, p.nom, p.qte, p.photo));
      }
    })
    .catch(error => console.log(error));
}

// Charger les produits au montage du composant
onMounted(() => {
  AfficheFrigo();
});

// Fonction pour supprimer un produit
function supprimerProduit(id) {
  const index = produits.findIndex(p => p.id === id);
  fetch(`${url}/${id}`, { method: "DELETE" })
    .then(response => response.json())
    .then(() => {
      produits.splice(index, 1);
      AfficheFrigo();
    })
    .catch(error => console.log(error));
}

// Fonction pour augmenter la quantité d'un produit
function augmenterQte(produit) {
  produit.setQte(1);
  fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produit)
  })
    .then(response => response.json())
    .then(() => AfficheFrigo())
    .catch(error => console.log(error));
}

// Fonction pour diminuer la quantité d'un produit
function diminuerQte(produit) {
  produit.setQte(-1);
  fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produit)
  })
    .then(response => response.json())
    .then(() => {
      if (produit.qte <= 0) {
        supprimerProduit(produit.id);
      } else {
        AfficheFrigo();
      }
    })
    .catch(error => console.log(error));
}

// Fonction pour ajouter un produit
function ajouteProduit(nom, qte, photo) {
  const nouveauProduit = { nom, qte, photo };
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nouveauProduit)
  })
    .then(response => response.json())
    .then(() => AfficheFrigo())
    .catch(error => console.log(error));
}

// Fonction pour rechercher des produits
function search(nom) {
  fetch(`${url}?search=${nom}`, { method: "GET" })
    .then(response => response.json())
    .then(dataJSON => {
      produitsSearch.splice(0, produitsSearch.length);
      dataJSON.forEach(p => produitsSearch.push(new Produit(p.id, p.nom, p.qte)));
      let texteHTML = produitsSearch.map(p => `<option>${p.nom} (quantité : ${p.qte})</option>`).join('');
      document.getElementById('search').innerHTML = texteHTML;
    })
    .catch(error => console.log(error));
}
</script>

<template>
  <div>
    <!-- Liste des produits -->
    <h3>Contenu</h3>
    <div id="listeProd">
      <ul>
        <li v-for="produit in produits" :key="produit.id">
          <AffichageProduits
            @eventDown="diminuerQte"
            @eventUp="augmenterQte"
            @eventSupp="supprimerProduit"
            :produit="produit"
          />
        </li>
      </ul>
    </div>

    <!-- Formulaire d'ajout de produit -->
    <h3>Ajouter un produit</h3>
    <div id="form">
      <FormAjout @add="ajouteProduit" />
    </div>

    <!-- Recherche de produit -->
    <h3>Rechercher un produit</h3>
    <div id="Recherche">
      <Search @search="search" />
    </div>
    <label>Résultat de la recherche :</label>
    <div id="select">
      <select id="search">
        <option value="" disabled selected>Résultat de la recherche...</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
h3 {
  background-color: #FCE4EC;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: normal;
  font-size: 2em;
  letter-spacing: 1px;
  color: #AD1457;
  text-align: center;
}

label {
  display: flex;
  color: #AD1457;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

#listeProd {
  font-size: 2em;
  color: black;
  overflow: hidden;
}

#listeProd ul {
  display: flex;
  flex-wrap: wrap;
}

#listeProd li {
  list-style-type: none;
}

#select {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
}

#search {
  display: flex;
  color: #000;
  font-family: 'Courier New', Courier, monospace;
  flex-direction: column;
  width: 400px;
  background-color: #FCE4EC;
  padding: 0.5em;
  border-radius: 10px;
  font-size: 1em;
}
</style>
