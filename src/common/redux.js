const helper = (moduleName) => {
  const defineAction = actionName => `${moduleName}/${actionName}`

  const createAction = type =>
    function actionCreator(payload) {
      return { type, payload: { ...payload } }
    }

  const createReducer = (cases, defaultState = {}) => (state, action = {}) => {
    if (state === undefined) {
      return defaultState
    }
    if (cases[action.type]) {
      return cases[action.type](state, action)
    }
    return state
  }

  return {
    defineAction,
    createAction,
    createReducer
  }
}

export default helper
