import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    TaskStatus(state, { index, completed }) {
      state.tasks[index].completed = completed;
    },
    updateTask(state, { index, task }) {
      state.tasks[index] = task;
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    TaskStatus({ commit }, { index, completed }) {
      commit('TaskStatus', { index, completed });
    },
    updateTask({ commit }, { index, task }) {
      commit('updateTask', { index, task });
    },
    deleteTask({ commit }, index) {
      commit('deleteTask', index);
    },
  },
  getters: {
    getTasks: state => state.tasks,
  },
});
