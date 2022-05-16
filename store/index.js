import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1,
        taskName: 'Sleep',
        taskDescription: 'Sleep well',
        completed: false},
      { id: 2,  taskName: 'Eat', taskDescription: 'Eat candies', completed: false},
      { id: 3,  taskName: 'Drink', taskDescription: 'water ofc', completed: false},
      { id: 4,  taskName: 'Get high', taskDescription: '4 20', completed: false},
      { id: 5,  taskName: 'Pet a cat', taskDescription: 'kitty kitty kitty', completed: false},
      { id: 6,  taskName: 'Play some dotA', taskDescription: 'Have fun!', completed: false},
    ],
  },

  getters: {
  },

  mutations: {
    checkTodo: (state, { id }) => {
      const index = state.todos.findIndex(todo => todo.id === id)

      state.todos[index].completed = !state.todos[index].completed
    },

    deleteTodo: (state, { id }) => {
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(index, 1)
    }
  },

  actions: {
    checkTodo: ({ commit }, { id }) => {
      commit("checkTodo", { id })
    },

    deleteTodo: ({ commit }, { id }) => {
      commit("deleteTodo", { id })
    },
  },

  modules: {
  }
})
