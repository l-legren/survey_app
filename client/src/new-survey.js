import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addingQuestion } from "./actions";
import NewQuestion from "./question";

const NewSurvey = () => {
    const [currentQuestions, setCurrentQuestions] = useState([]);

    const addQuestion = () => {
        setCurrentQuestions([...currentQuestions, "new question"]);
    };

    const deleteLastQuestion = () => {
        setCurrentQuestions([...currentQuestions].slice(0, -1));
    };

    const handleChange = () => {
        
    }

    return (
        <div className="container general">
            <div className="container vertical central">
                <h1>New Survey</h1>
                <p>
                    I am baby biodiesel cronut tumeric, wolf unicorn pop-up
                    sriracha williamsburg truffaut vaporware stumptown you
                    probably have not heard of them skateboard chartreuse
                    flexitarian.
                </p>
                <form>
                    <input
                        type="text"
                        placeholder="Insert the title of your Survey"
                    ></input>
                    {currentQuestions.map((item, idx) => {
                        return (
                            <div key={idx} className="question container">
                                <input
                                    type="text"
                                    placeholder="Insert your question here"
                                    onChange={(e) => handleChange(e)}
                                ></input>
                                <div
                                    className="delete"
                                    onClick={deleteLastQuestion}
                                >
                                    X
                                </div>
                            </div>
                        );
                    })}
                    <h4 onClick={addQuestion}>add question here</h4>
                </form>
            </div>
        </div>
    );
};

export default NewSurvey;
