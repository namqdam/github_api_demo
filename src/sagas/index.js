import { all } from 'redux-saga/effects'
import fetchSagas from './fetch'

const sagas = [
  ...fetchSagas
]

export default function* root() {
  yield all(sagas)
}
