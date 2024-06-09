// Un produit
export default class Produit {
  constructor(id, nom, qte, photo) {
    this._id = id;
    this._nom = nom;
    this._qte = qte;
    this._photo = photo;
  }

  get id() {
    return this._id;
  }

  get nom() {
    return this._nom;
  }

  get qte() {
    return this._qte;
  }

  get photo() {
    return this._photo;
  }

  // Modifier le nom
  setNom(nom) {
    this._nom = nom;
  }

  // Modifier la quantité
  setQte(quantité) {
    this._qte += quantité;
  }

  // Affichage du nom
  afficherNom() {
    return `${this._nom}`;
  }

  // Affichage de la quantité
  afficherQte() {
    return `Quantité = ${this._qte}`;
  }
}
