import { useDispatch } from "react-redux";
import { deletingQuestion } from "./actions";

const NewQuestion = () => {
    const dispatch = useDispatch();

    const deleteLastQuestion = () => {
        dispatch(deletingQuestion());
    };

    return (
        <>
            <div className="question container">
                <input
                    type="text"
                    placeholder="Insert your question here"
                ></input>
                <div className="delete" onClick={deleteLastQuestion}>
                    X
                </div>
            </div>
        </>
    );
};

export default NewQuestion;
