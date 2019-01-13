export default {
  state: {
    directoryPath: 'undefined',
    gladPageXPos: 'reading value ...',
    gladPageYPos: 'reading value ...',
    seraPageXPos: 'reading value ...',
    seraPageYPos: 'reading value ...'
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
    },
    seraPageXPosMutation (state, payload) {
      state.seraPageXPos = payload
    },
    seraPageYPosMutation (state, payload) {
      state.seraPageYPos = payload
    }
  },
  actions: {
    setDirectoryPath: ({ commit }, payload) => commit('directoryPathMutation', payload),
    setGladPageXPos: ({ commit }, payload) => commit('gladPageXPosMutation', payload),
    setGladPageYPos: ({ commit }, payload) => commit('gladPageYPosMutation', payload),
    setSeraPageXPos: ({ commit }, payload) => commit('seraPageXPosMutation', payload),
    setSeraPageYPos: ({ commit }, payload) => commit('seraPageYPosMutation', payload)
  },
  getters: {
    getDirectoryPath (state) {
      return state.directoryPath
    },
    getGladPageXPos (state) {
      return state.gladPageXPos
    },
    getGladPageYPos (state) {
      return state.gladPageYPos
    },
    getSeraPageXPos (state) {
      return state.seraPageXPos
    },
    getSeraPageYPos (state) {
      return state.seraPageYPos
    }
  }
}
