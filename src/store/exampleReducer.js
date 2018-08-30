
const initialState = {
  color: "Rojo",
  nombre: "Juan"
}

const ACTION_TYPES = {
  CHANGE_COLOR: 'CHANGE_COLOR',
  CHANGE_NAME: 'CHANGE_NAME'
}

export function exampleReducer(state = initialState, action) {
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