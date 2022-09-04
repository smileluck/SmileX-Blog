export const state = () => ({
  tenantId: '297516356822106112',
  unifyPass: null, // 统一密码
})

export const getters = {
  getTenantId(state) {
    return state.tenantId
  },
  getUnifyPass(state) {
    return state.unifyPass
  },
}

export const mutations = {
  setUnifyPass(state, passToken) {
    state.unifyPass = passToken
  },
}
