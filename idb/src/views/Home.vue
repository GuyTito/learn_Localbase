<template>

  <v-container>
    <v-row>
      <v-col cols="4" v-for="(cat, id) in cats" :key="id">
        <Cat :cat="cat" @delete="deleteCat" @edit="editCat" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="addCat">Add Cat</v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import Cat from '@/components/Cat';

export default {
  components: {
    Cat
  },
  computed: {
    cats() {
      return this.$store.state.cats;
    }
  },
  created() {
    this.$store.dispatch('getCats');
  },
  methods: {
    addCat() {
      this.$router.push({ name: 'add' });
    },
    async deleteCat(cat) {
      await this.$store.dispatch('deleteCat', cat);
      this.$store.dispatch('getCats');
    },
    editCat(cat) {
      this.$router.push({ name: 'edit', params: {cat: cat} });
    }
  }
};
</script>
