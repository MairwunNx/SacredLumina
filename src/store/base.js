export default {
  state: {
    directoryPath: 'undefined',
    gladPageXPos: 'reading value ...',
    gladPageYPos: 'reading value ...',
    seraPageXPos: 'reading value ...',
    seraPageYPos: 'reading value ...',
    magePageXPos: 'reading value ...',
    magePageYPos: 'reading value ...',
    welfPageXPos: 'reading value ...',
    welfPageYPos: 'reading value ...'
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
    },
    magePageXPosMutation (state, payload) {
      state.magePageXPos = payload
    },
    magePageYPosMutation (state, payload) {
      state.magePageYPos = payload
    },
    welfPageXPosMutation (state, payload) {
      state.welfPageXPos = payload
    },
    welfPageYPosMutation (state, payload) {
      state.welfPageYPos = payload
    }
  },
  actions: {
    setDirectoryPath: ({ commit }, payload) => commit('directoryPathMutation', payload),
    setGladPageXPos: ({ commit }, payload) => commit('gladPageXPosMutation', payload),
    setGladPageYPos: ({ commit }, payload) => commit('gladPageYPosMutation', payload),
    setSeraPageXPos: ({ commit }, payload) => commit('seraPageXPosMutation', payload),
    setSeraPageYPos: ({ commit }, payload) => commit('seraPageYPosMutation', payload),
    setMagePageXPos: ({ commit }, payload) => commit('magePageXPosMutation', payload),
    setMagePageYPos: ({ commit }, payload) => commit('magePageYPosMutation', payload),
    setWElfPageXPos: ({ commit }, payload) => commit('welfPageXPosMutation', payload),
    setWElfPageYPos: ({ commit }, payload) => commit('welfPageYPosMutation', payload)
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
    },
    getMagePageXPos (state) {
      return state.magePageXPos
    },
    getMagePageYPos (state) {
      return state.magePageYPos
    },
    getWElfPageXPos (state) {
      return state.welfPageXPos
    },
    getWElfPageYPos (state) {
      return state.welfPageYPos
    }
  }
}
