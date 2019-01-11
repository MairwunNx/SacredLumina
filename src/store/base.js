export default {
  state: {
    directoryPath: 'undefined'
  },
  mutations: {
    directoryPathMutation (state, payload) {
      state.directoryPath = payload
    }
  },
  actions: {
    setDirectoryPath: ({ commit }, payload) => commit('directoryPathMutation', payload)
  },
  getters: {
    getDirectoryPath: (state) => state.directoryPath
  }
}
