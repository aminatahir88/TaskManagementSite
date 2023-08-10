<template>
  <div>
    <v-container>
      <h1 class="text-center">Delete a Task</h1>
      <v-list>
        <v-list-item v-for="(task, index) in tasks" :key="index">
          <v-list-item-content>
            <v-list-item-title>Title: {{ task.title }}</v-list-item-title>
            <v-list-item-title>Description: {{ task.description }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <br><br>
           <br> <v-btn class="login-button" @click="deleteTask(index)">Delete</v-btn> <br>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getTasks']),
    tasks() {
      return this.getTasks;
    },
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.login-button {
  border-radius: 20px;
  font-weight: bold;
  background-color: #4caf50; /* Green color */
  color: white;
}
</style>
