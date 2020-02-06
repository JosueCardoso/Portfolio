import { createStore } from "redux"

const INITIAL_STATE = {
  menuSelected: "home-menu",
  isVisible: false,
}

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "SET_MENU") {
    return {
      ...state,
      menuSelected: action.menuSelected
    }
  }

  if(action.type === "SET_VISIBLE"){
      return {
          ...state,
          isVisible: action.isVisible
      }
  }
  
  return state
}

const store = createStore(reducer)

export default store
