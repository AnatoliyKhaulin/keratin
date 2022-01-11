export const state = () => ({
  isShowModal: false,
})

export const mutations = {
  MutateShowModal(state, show) {
    state.isShowModal = show
  },
}

export const actions = {
  showModal({ commit }) {
    commit('MutateShowModal', true)
  },
  hideModal({ commit }) {
    commit('MutateShowModal', false)
  },
}
