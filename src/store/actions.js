export function SetMenu(menuSelected) {
  return {
    type: "SET_MENU",
    menuSelected,
  }
}

export function SetVisible(isVisible) {
  return {
    type: "SET_VISIBLE",
    isVisible,
  }
}
