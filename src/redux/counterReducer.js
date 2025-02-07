export function counterReducer(state = { counter: 0 }, action) {
  if (action.type == "increase") {
    return { counter: state.counter + 1 };
  }
  if (action.type == "decrease") {
    return { counter: state.counter - 1 };
  }
  return state;
}
