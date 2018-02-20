import reduxHelper from '../common/redux'

export const reduxUtil = reduxHelper('person')

export const actionTypes = {
  UPDATE_PROFILE: reduxUtil.defineAction('PROFILE')
}

export const actions = {
  updateProfile: reduxUtil.createAction(actionTypes.UPDATE_PROFILE)
}
