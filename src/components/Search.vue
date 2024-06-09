<!-- Rechercher des produits -->
<script setup>
import { ref } from 'vue';

const nom = ref('');
</script>

<template>
  <div id="form">
    <form @submit.prevent="$emit('search', nom)">
      <label for="input">Nom du produit recherché :</label>
      <br>
      <input id="input" type="text" v-model="nom" placeholder="Produit recherché..." required />
      <br>
      <input id="Bouton" type="submit" value="Rechercher" />
    </form>
  </div>
</template>

<style scoped>
#Bouton {
  text-decoration: none;
  background-color: #AD1457;
  border-radius: 5px;
  color: #ffffff; /* couleur typo bouton */
  font-family: Arial, sans-serif;
  font-weight: bold;
  height: 30px;
  width: 130px;
  margin: 0 auto;
}

#Bouton:hover {
  color: #000000;
}

#form {
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;
}

form { /* position et contour de la bordure */
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 1em;
  border-radius: 10px;
  border: solid 2px #AD1457;
  background-color: #FCE4EC;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
}

label {
  color: #AD1457;
  font-family: Arial, sans-serif; /* Police de caractères */
  font-size: 20px; /* Taille de la police */
  font-weight: normal;
}

input {
  height: 30px;
  border-radius: 5px;
  background-color: #FCE4EC;
  font-family: 'Courier New', Courier, monospace;
  font-weight: normal;
}

::placeholder {
  color: #000000;
  font-family: 'Courier New', Courier, monospace;
  font-size: 12px;
  font-weight: normal;
  padding: 0.5em;
}
</style>
