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
            <v-btn color="green" @click="add">Add Cat</v-btn>
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
      cat:{id:null , name:'', age: null }
    }
  },
  methods: {
    async add() {
      this.cat.id = new Date().toISOString()
      await this.$store.dispatch('addCat', this.cat);
      this.$router.push('/');
    }
  }
};
</script>