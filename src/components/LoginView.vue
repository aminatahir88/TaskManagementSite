<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card class="elevation-3">
            <v-card-title class="text-center custom-font">
              <h1>Sign In</h1>
              <br />
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <div>
                    <input type="text" id="Username" v-model="username" placeholder="Enter Email" variant="outlined" required><br>
    </div>
               <br> <input label="Password" v-model="password" type="password" variant="outlined" required>
                <v-btn block class="login-button" type="submit">Login</v-btn>
                <br/>
                <router-link to="/signup">
                  <v-btn block class="signup-button" text>Create an account</v-btn>
                </router-link>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    name: 'LoginView',
    data() {
      return {
        username: "",
        password: "",
      };
    },
    computed: {
      ...mapGetters({ user: 'getUser' })
    },
    methods: {
      ...mapActions({ createUser: 'registerUser' }),
      login() {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
        const user = storedUsers.find(
          (user) => user.username === this.username && user.password === this.password);
  
        if (user) {
          this.$emit("login-success", { username: this.username });
          this.$router.push('/task-created');
        } 
        else {
          alert("Invalid username or password");
        }
      },
    },
  }
  </script>
  
  <style scoped>
  .custom-font {
    font-family: 'Roboto', sans-serif;
  }
  
  .login-button,
  .signup-button {
    border-radius: 15px;
    font-weight: bold;
    margin-top: 8px;
  }
  
  .login-button {
    background-color: #4caf50; /* Green color */
    color: white;
  }
  
  .signup-button {
    background-color: #2196f3; /* Blue color */
    color: white;
  }
  </style>
  