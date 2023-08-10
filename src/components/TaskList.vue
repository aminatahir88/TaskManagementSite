<template>
  <div>
    <v-container>
      <h1 class="text-center">Task List</h1>
      <v-list>
        <v-list-item v-for="(task, index) in tasks" :key="index" :class="{ 'in-progress-task': task.inProgress, 'pending-task': task.pending, 'completed-task': task.completed }">
          <v-list-item-content>
            <v-list-item-title :style="{ backgroundColor: taskBackgroundColor(task) }">
              Title: {{ task.title }}
            </v-list-item-title>
            <v-list-item-title :style="{ backgroundColor: taskBackgroundColor(task) }">
              Description: {{ task.description }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list>
            <v-btn @click="updateTaskStatus(index, 'inProgress')" color="blue" class="action-button">In Progress</v-btn>
            <v-btn @click="updateTaskStatus(index, 'pending')" color="yellow" class="action-button">Pending</v-btn>
            <v-btn @click="updateTaskStatus(index, 'completed')" color="green" class="action-button">Completed</v-btn>
            <v-btn @click="updateTask(index)" color="black" class="action-button">Update Task</v-btn>
          </v-list>
        </v-list-item>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getTasks']),
    tasks() {
      return this.getTasks;
    },
  },
  methods: {
    ...mapActions(['TaskStatus', 'updateTask']),
    taskBackgroundColor(task) {
      if (task.inProgress) {
        return 'blue';
      } else if (task.pending) {
        return 'yellow';
      } else if (task.completed) {
        return 'green';
      } else {
        return 'initial';
      }
    },
    updateTaskStatus(index, status) {
      const statusObj = {
        inProgress: false,
        pending: false,
        completed: false,
      };
      statusObj[status] = true;
      this.TaskStatus({ index, ...statusObj });
      alert(`Task is now ${status}.`);
    },
    updateTask(index) {
      const updatedTitle = prompt('Enter the updated task title:');
      const updatedDescription = prompt('Enter the updated task description:');
      
      if (updatedTitle && updatedDescription) {
        const updatedTask = { ...this.tasks[index], title: updatedTitle, description: updatedDescription };
        this.updateTask({ index, task: updatedTask });
      }
    },
  },
};
</script>

<style scoped>
.action-button {
  border-radius: 20px;
  font-weight: bold;
  margin-top: 10px;
  color: white;
  width: 200px; /* Adjust the width */
  height: 60px; /* Adjust the height */
}

.in-progress-task {
  background-color: rgba(0, 0, 255, 0.688);
}

.pending-task {
  background-color: rgb(255, 255, 0);
}

.completed-task {
  background-color: #1cbe1c; /* Light green for completed tasks */
}
</style>
