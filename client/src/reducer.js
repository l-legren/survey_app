export default function reducer(state = {}, action) {
    if (action.type == "ADD_SECRET_KEY") {
        state = {
            ...state,
            secretLink: action.secretLink,
        };
    }

    console.log("State", state);
    return state;
}
