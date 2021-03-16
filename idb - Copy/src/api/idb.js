import Localbase from "localbase";

let db = new Localbase("catDb");
db.config.debug = true;

export default {
  async getCats() {
    return await db.collection("cats").get();
  },

  async editCat(cat) {
    await db.collection("cats").doc({id: cat.id}).set(cat);
    console.log("updated");
  },

  async addCat(cat) {
    console.log('adding... ' + JSON.stringify(cat));
    await db.collection("cats").add(cat);
    console.log("added");
  },

  async deleteCat(cat) {
    await db.collection("cats").doc({id: cat.id}).delete();
    console.log("deleted");
  },
};
