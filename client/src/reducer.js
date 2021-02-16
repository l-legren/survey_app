export default function reducer(state = {}, action) {

    if (action.type == "ADD_QUESTION") {
        state = { ...state, questions: action.questions };
    }

    if (action.type == "DELETE_QUESTION") {
        state = {
            ...state,
            questions: state.questions.slice(0,-1),
        };
    }

    console.log("State", state);
    return state;
}
