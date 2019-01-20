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
    welfPageYPos: 'reading value ...',
    delfPageXPos: 'reading value ...',
    delfPageYPos: 'reading value ...',
    vampPageXPos: 'reading value ...',
    vampPageYPos: 'reading value ...',
    dwarfPageXPos: 'reading value ...',
    dwarfPageYPos: 'reading value ...',
    demonPageXPos: 'reading value ...',
    demonPageYPos: 'reading value ...',
    initialized: false
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
    },
    delfPageXPosMutation (state, payload) {
      state.delfPageXPos = payload
    },
    delfPageYPosMutation (state, payload) {
      state.delfPageYPos = payload
    },
    vampPageXPosMutation (state, payload) {
      state.vampPageXPos = payload
    },
    vampPageYPosMutation (state, payload) {
      state.vampPageYPos = payload
    },
    dwarfPageXPosMutation (state, payload) {
      state.dwarfPageXPos = payload
    },
    dwarfPageYPosMutation (state, payload) {
      state.dwarfPageYPos = payload
    },
    demonPageXPosMutation (state, payload) {
      state.demonPageXPos = payload
    },
    demonPageYPosMutation (state, payload) {
      state.demonPageYPos = payload
    },
    initializedMutation (state, payload) {
      state.initialized = payload
    }
  },
  actions: {
    setDirectoryPath ({ commit }, payload) {
      commit('directoryPathMutation', payload)
    },
    setGladPageXPos ({ commit }, payload) {
      commit('gladPageXPosMutation', payload)
    },
    setGladPageYPos ({ commit }, payload) {
      commit('gladPageYPosMutation', payload)
    },
    setSeraPageXPos ({ commit }, payload) {
      commit('seraPageXPosMutation', payload)
    },
    setSeraPageYPos ({ commit }, payload) {
      commit('seraPageYPosMutation', payload)
    },
    setMagePageXPos ({ commit }, payload) {
      commit('magePageXPosMutation', payload)
    },
    setMagePageYPos ({ commit }, payload) {
      commit('magePageYPosMutation', payload)
    },
    setWElfPageXPos ({ commit }, payload) {
      commit('welfPageXPosMutation', payload)
    },
    setWElfPageYPos ({ commit }, payload) {
      commit('welfPageYPosMutation', payload)
    },
    setDElfPageXPos ({ commit }, payload) {
      commit('delfPageXPosMutation', payload)
    },
    setDElfPageYPos ({ commit }, payload) {
      commit('delfPageYPosMutation', payload)
    },
    setVampPageXPos: ({ commit }, payload) => {
      commit('vampPageXPosMutation', payload)
    },
    setVampPageYPos: ({ commit }, payload) => {
      commit('vampPageYPosMutation', payload)
    },
    setDwarfPageXPos: ({ commit }, payload) => {
      commit('dwarfPageXPosMutation', payload)
    },
    setDwarfPageYPos: ({ commit }, payload) => {
      commit('dwarfPageYPosMutation', payload)
    },
    setDemonPageXPos: ({ commit }, payload) => {
      commit('demonPageXPosMutation', payload)
    },
    setDemonPageYPos: ({ commit }, payload) => {
      commit('demonPageYPosMutation', payload)
    },
    setInitialized: ({ commit }, payload) => {
      commit('initializedMutation', payload)
    }
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
    },
    getDElfPageXPos (state) {
      return state.delfPageXPos
    },
    getDElfPageYPos (state) {
      return state.delfPageYPos
    },
    getVampPageXPos (state) {
      return state.vampPageXPos
    },
    getVampPageYPos (state) {
      return state.vampPageYPos
    },
    getDwarfPageXPos (state) {
      return state.dwarfPageXPos
    },
    getDwarfPageYPos (state) {
      return state.dwarfPageYPos
    },
    getDemonPageXPos (state) {
      return state.demonPageXPos
    },
    getDemonPageYPos (state) {
      return state.demonPageYPos
    },
    getInitialized (state) {
      return state.initialized
    }
  }
}
