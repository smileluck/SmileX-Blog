export const state = () => ({
  tenantId: '297516356822106112',
  unifyPass: null, // 统一密码
  smallHeader: false
})

export const getters = {
  getTenantId(state) {
    return state.tenantId
  },
  getUnifyPass(state) {
    return state.unifyPass
  },
  getSmallHeader(state) {
    return state.smallHeader
  },
}

export const mutations = {
  setUnifyPass(state, passToken) {
    state.unifyPass = passToken
  },
  setSmallHeader(state, smallHeader) {
    state.smallHeader = smallHeader
  }
}
