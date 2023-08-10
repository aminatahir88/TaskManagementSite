<template>
  <v-container>
    <h1 class="text-center">Click Here To Add New Task</h1>
    <v-form @submit.prevent="addNewTask">
      <input v-model="newTask.title" label="Task Title" placeholder="Enter Task Title"><br>
      <br> <input v-model="newTask.description" label="Task Description" placeholder="Enter Task Description">
      <div class="text-center">
        <v-btn class="action-button" type="submit">Add Task</v-btn> 
      </div>
    </v-form>
    <div class="text-center">
      <router-link to="/task-list">
        <v-btn block color="green" class="dynamic-button" text>See Tasks Lists</v-btn>
      </router-link>
      <router-link to="/task-deleted">
        <v-btn block color="green" class="dynamic-button" text>Want To Delete a Task?</v-btn>
      </router-link>
    </div>
    <router-view></router-view>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      newTask: {
        title: '',
        description: '',
        completed: false,
      },
    };
  },
  methods: {
    ...mapActions(['addTask']),
    addNewTask() {
      if (this.newTask.title.trim() === '') return;
      this.addTask({ ...this.newTask });
      this.newTask.title = '';
      this.newTask.description = '';
    },
  },
};
</script>

<style scoped>
.action-button {
  border-radius: 20px;
  font-weight: bold;
  margin-top: 10px;
  background-color: #4caf50; /* Green color */
  color: white;
}

.dynamic-button {
  border-radius: 50px; /* Make the buttons oval */
  font-weight: bold;
  margin-top: 10px;
  background-color: #4caf50; /* Green color */
  color: white;
  width: auto; /* Adjust width based on text length */
}
</style>
