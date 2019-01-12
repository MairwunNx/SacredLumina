export default {
  state: {
    directoryPath: 'undefined',
    gladPageXPos: 'reading value ...',
    gladPageYPos: 'reading value ...'
  },
  mutations: {
    directoryPathMutation (state, payload) {
      state.directoryPath = payload
    },
    gladPageXPosMutation (state, payload) {
      state.gladPageXPos = payload
    },
    gladPageYPosMutation (state, payload) {
      state.gladPageYPos = payload
    }
  },
  actions: {
    setDirectoryPath: ({ commit }, payload) => commit('directoryPathMutation', payload),
    setGladPageXPos: ({ commit }, payload) => commit('gladPageXPosMutation', payload),
    setGladPageYPos: ({ commit }, payload) => commit('gladPageYPosMutation', payload)
  },
  getters: {
    getDirectoryPath: (state) => state.directoryPath,
    getGladPageXPos: (state) => state.gladPageXPos,
    getGladPageYPos: (state) => state.gladPageYPos
  }
}
