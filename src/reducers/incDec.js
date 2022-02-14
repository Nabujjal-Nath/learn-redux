const initialstate = 10;
const incrementDecrement = (state = initialstate, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;

    }
}
export default incrementDecrement;