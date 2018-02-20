import reduxHelper from '../common/redux'

export const reduxUtil = reduxHelper('navigate')

export const actionTypes = {
  NAV_HOME: reduxUtil.defineAction('HOME'),
  NAV_DETAIL: reduxUtil.defineAction('DETAIL')
}

export const actions = {
  navHome: reduxUtil.createAction(actionTypes.NAV_HOME),
  navDetail: reduxUtil.createAction(actionTypes.NAV_DETAIL)
}
