import { actions as fetchActions, actionTypes as fetchTypes } from './fetch'
import { actions as navActions, actionTypes as navTypes } from './nav'
import { actions as personActions, actionTypes as personTypes } from './person'

export const actions = {
  ...fetchActions,
  ...navActions,
  ...personActions
}

export const types = {
  ...fetchTypes,
  ...navTypes,
  ...personTypes
}

export const getActionType = (actionType) => {
  const [, action] = actionType.split('/')
  return action
}
