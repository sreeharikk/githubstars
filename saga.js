/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, fetUsersSuccess} from './actions'

es6promise.polyfill()

function* fetchGithubUsersByLocation(action) {
  try {
    const res = yield fetch(`https://api.github.com/search/users?q=location:Bangalore`)
    const data = yield res.json()
    yield put(fetUsersSuccess(data && data.items||[]))
  } catch (err) {
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_USERS, fetchGithubUsersByLocation),
  ])
}

export default rootSaga
