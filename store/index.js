export const state = () => ({
  isShowModal: false,
  isShowMenu: false
})

export const mutations = {
  MutateShowModal(state, show) {
    state.isShowModal = show
  },
  MutateShowMenu(state, show) {
    state.isShowMenu = show
  },
}

export const actions = {
  showModal({ commit }) {
    commit('MutateShowModal', true)
  },
  hideModal({ commit }) {
    commit('MutateShowModal', false)
  },
  showMenu({ commit }) {
    commit('MutateShowMenu', true)
  },
  hideMenu({ commit }) {
    commit('MutateShowMenu', false)
  },
}
