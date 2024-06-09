<script setup>
const { produit } = defineProps(["produit"]);
</script>

<template>
  <div id="produit">
    <div id="nomProd">{{ produit.afficherNom() }}</div>
    <img :src="produit.photo" alt="Image du produit" />
    <!-- Texte alternatif si l'image ne peut être affichée -->
    <br />
    <div id="qteProd">{{ produit.afficherQte() }}</div>
    <button id="moins" @click="$emit('eventDown', produit)">-</button>
    <button id="plus" @click="$emit('eventUp', produit)">+</button>
    <br />
    <button id="supp" @click="$emit('eventSupp', produit.id)">Supprimer</button>
  </div>
</template>

<style>
img {
  width: 120px;
  height: 100px;
}

#moins:hover, #plus:hover {
  width: 20px;
  background-color: rgb(245, 136, 136);
  border-radius: 5px;
}

#plus:hover {
  background-color: rgb(170, 188, 129);
}

#supp {
  height: 50px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

#supp:hover {
  background-color: #AD1457;
  border-radius: 5px;
  color: #FFF;
}

#produit {
  margin-top: 20px;
  margin-right: 20px;
  background-color: #FCE4EC;
  padding: 1em;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  font-size: 0.5em;
  text-align: center;
}

#produit:hover {
  background-color: #FCE4EC;
  border-radius: 10px;
  border: solid 2px #AD1457;
}

#nomProd {
  font-weight: bold;
}

#qteProd {
  font-family: 'Courier New', Courier, monospace;
  font-weight: normal;
}
</style>

