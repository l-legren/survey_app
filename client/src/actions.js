export function addingQuestion(questions) {
    return {
        type: "ADD_QUESTION",
        questions: questions,
    };
}

export function deletingQuestion() {
    return {
        type: "DELETE_QUESTION",
    };
}
