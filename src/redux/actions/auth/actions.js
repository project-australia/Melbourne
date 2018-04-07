import {
  AUTH_LOGGED_STATUS,
  AUTH_RESET_PASSWORD
} from '../../types/AuthTypes'
import {
  USER_SET_PROFILE
} from '../../types/UserTypes'

import { findUserById } from '../../../services/backend/userService'
import { setTokenAuth } from '../../../config/headers'
import { handleMessage } from '../toastr/actions'

import { firebase } from './../../../config/firebase'

const createAction = (type, payload) => ({ type, payload })

export function resetPassword (email) {
  return async (dispatch) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      dispatch(createAction(AUTH_RESET_PASSWORD, true))
    } catch (error) {
      dispatch(createAction(AUTH_RESET_PASSWORD, false))
    }
  }
}

export function signinSignup (email, password) {
  return (dispatch) => {
    firebase.auth().fetchProvidersForEmail(email)
      .then((providers) => {
        if (providers.length === 0) {
          return firebase.auth().createUserWithEmailAndPassword(email, password)
        } else {
          return firebase.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then(async (user) => {
        await setTokenAuth(user.pa)
        if (user && user.uid) {
          const userProfile = await findUserById(user.uid)
          dispatch([
            createAction(USER_SET_PROFILE, userProfile),
            createAction(AUTH_LOGGED_STATUS, true)
          ])
        }
      })
      .catch((error) => {
        dispatch(handleMessage('error', 'login', error.message))
      })
  }
}

export function signOut () {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut()
      dispatch([
        createAction(USER_SET_PROFILE, {}),
        createAction(AUTH_LOGGED_STATUS, false)
      ])
    } catch (error) {
      dispatch([
        createAction(USER_SET_PROFILE, {}),
        createAction(AUTH_LOGGED_STATUS, false)
      ])
    }
  }
}

export const updateProfile = async function () {
  return async (dispatch) => {
    try {
      const user = await firebase.auth().currentUser
      user.updateProfile({
        displayName: 'Jane Q. User',
        photoURL: 'https://example.com/jane-q-user/profile.jpg'
      })
      return dispatch(createAction(AUTH_LOGGED_STATUS, false))
    } catch (error) {
      console.log('error', error)
      return dispatch(createAction(AUTH_LOGGED_STATUS, false))
    }
  }
}
