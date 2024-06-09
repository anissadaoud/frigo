<!-- Formulaire pour ajouter un produit -->
<script setup>
let nom = "";
let qte = "";
let photo = "";
</script>

<template>
  <div id="formulaire">
    <form @submit.prevent="$emit('add', nom, qte, photo)">
      <h3>Ajouter un produit au frigo :</h3>
      <br>
      <div>
        <label for="nom">Nom du produit à ajouter :</label>
        <br>
        <input id="nom" class="input" name="nom" v-model="nom" placeholder="Produit à ajouter..." required />
      </div>
      <div>
        <label for="qte">Quantité du produit à ajouter :</label>
        <br>
        <input id="qte" class="input" name="qte" v-model="qte" type="number" placeholder="Quantité à ajouter..." min="1" step="1" required />
      </div>
      <div>
        <label for="photo">Photo du produit à ajouter :</label>
        <br>
        <input id="photo" class="input" name="photo" v-model="photo" placeholder="URL de la photo..." />
      </div>
      <br>
      <button class="boutonSubmit" type="submit">Ajouter</button>
    </form>
  </div>
</template>

<style scoped>
label {
  color: #AD1457;
  font-family: Arial, sans-serif;
  font-size: 15px;
  font-weight: normal;
}

#formulaire {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 1em;
  border-radius: 10px;
  background-color: #FCE4EC;
  font-size: 1em;
  color: #000000;
}

h3 {
  color: #AD1457;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.boutonSubmit {
  height: 30px;
  width: 80px;
  border-radius: 5px;
  color: #AD1457;
  background-color: #FCE4EC;
  cursor: pointer;
  margin: 0 auto;
}

.boutonSubmit:hover {
  color: #000000;
}

.input {
  height: 30px;
  width: 365px;
  border-radius: 5px;
  background-color: #FCE4EC;
  font-family: 'Courier New', Courier, monospace;
  font-weight: normal;
  margin-top: 0.5em;
}

::placeholder {
  color: #000000;
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
  font-weight: normal;
}
</style>
