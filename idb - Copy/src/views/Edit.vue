<template>
  <div>

    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="cat.name" label="Name" required />
          </v-col>
          <v-col>
            <v-text-field v-model="cat.age" label="Age" required type="number" min="0" max="30" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="green" @click="edit">Update Cat</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

  </div>
</template>

<script>

export default {
  data() {
    return {
      cat: this.$route.params.cat
    }
  },
  methods: {
    async edit() {
      await this.$store.dispatch('editCat', this.cat);
      this.$router.push('/');
    }
  }
};
</script>