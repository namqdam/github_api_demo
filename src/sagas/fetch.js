import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import github from '../api/github'
import { actionTypes as fetchTypes } from '../actions/fetch'
import { actionTypes as personTypes } from '../actions/person'

export function* getGithubUser({ payload }) {
  const { username } = payload
  yield put({ type: `${fetchTypes.FETCH_GITHUB_USER}:PENDING`, payload: null })

  try {
    const response = yield call(github.getGithubUser, ({ username }))
    const { data: user } = response

    yield all([
      put({ type: `${fetchTypes.FETCH_GITHUB_USER}:FULFILLED`, payload: user }),
      put({ type: personTypes.UPDATE_PROFILE, payload: user })
    ])
  } catch (error) {
    yield put({ type: `${fetchTypes.FETCH_GITHUB_USER}:REJECTED`, payload: error.response })
  }
}

const sagas = [
  takeLatest(fetchTypes.FETCH_GITHUB_USER, getGithubUser)
]

export default sagas
