import reduxHelper from '../common/redux'

export const reduxUtil = reduxHelper('fetch')

export const actionTypes = {
  FETCH_GITHUB_USER: reduxUtil.defineAction('GITHUB_USER')
}

export const actions = {
  fetchGithubUser: reduxUtil.createAction(actionTypes.FETCH_GITHUB_USER)
}
