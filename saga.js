/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, fetUsersSuccess} from './actions'

es6promise.polyfill()

function* getProfile (user){
  const res = yield fetch(`${user.url}`)
  const profile = yield res.json()
  user.profile = profile
  return user;
}

function* fetchGithubUsersByLocation(action) {
  try {
    const res = yield fetch(`https://api.github.com/search/users?q=location:Bangalore`)
    const users = yield res.json()

    const usersProfile = yield all(users.items.map(user=> call(getProfile, user)))
    yield put(fetUsersSuccess(usersProfile))
  } catch (err) {
    // console.log(err)
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_USERS, fetchGithubUsersByLocation),
  ])
}

export default rootSaga
