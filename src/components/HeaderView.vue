<template>
  <div class="flex-1 p-4">
    <v-toolbar color="green lighten-3">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="headline font-weight-light">TASK MANAGEMENT WEB APPLICATION</v-toolbar-title> 
      <v-spacer></v-spacer>
      <router-link to="/task-created">
        <v-btn block color="black">ADD A NEW TASK</v-btn>
      </router-link>
    </v-toolbar>
  </div>
</template>

<style>
.headline {
  font-size: 24px; 
}
</style>
