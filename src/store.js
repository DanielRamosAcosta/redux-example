import { createStore, applyMiddleware } from 'redux'

const initialState = {
  color: "Rojo",
  nombre: "Juan"
}

const ACTION_TYPES = {
  CHANGE_COLOR: 'CHANGE_COLOR',
  CHANGE_NAME: 'CHANGE_NAME'
}

function miReducer(state = initialState, action) {
  // console.log("he recibido la acción", action.type)
  // console.log("mi state es:", state)

  switch (action.type) {
    case ACTION_TYPES.CHANGE_COLOR: {
      return {
        ...state,
        color: action.color
      }
    }
    case ACTION_TYPES.CHANGE_NAME: {
      return {
        ...state,
        nombre: action.name
      }
    }
    default: {
      return state
    }
  }
}

const logger = store =>  next =>  action => {
  console.log("prev state", store.getState())
  console.log("action", action)
  next(action)
  console.log("next state", store.getState())
  console.log("")
}

export const store = createStore(
  miReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Action creators
export function createActionChangeColor(color) {
  return {
    type: ACTION_TYPES.CHANGE_COLOR,
    color
  }
}

export function createActionChangeName(name) {
  return {
    type: ACTION_TYPES.CHANGE_NAME,
    name
  }
}

// store.dispatch(createActionChangeColor("Verde"))
// store.dispatch(createActionChangeColor("Rosa"))
// store.dispatch(createActionChangeName("Paco"))
