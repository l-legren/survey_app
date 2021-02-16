import { useEffect, useState } from "react";
import axios from "axios";

const NewSurvey = () => {
    const [title, setTitle] = useState("");
    const [currentQuestions, setCurrentQuestions] = useState([]);
    const [questionsContent, setQuestionsContent] = useState({});

    const addQuestion = () => {
        setCurrentQuestions([...currentQuestions, "new question"]);
    };

    const deleteLastQuestion = () => {
        setCurrentQuestions([...currentQuestions].slice(0, -1));
    };

    const handleChange = (e) => {
        console.log("this is e", e.target);
        setQuestionsContent({
            ...questionsContent,
            [e.target.id]: e.target.value,
        });
        console.log("Questions total", questionsContent);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Button Works");
        axios.post("/questions-survey", {
            title: title,
            questions: questionsContent
        });
    };

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
                <form type="post">
                    <input
                        type="text"
                        name="title"
                        placeholder="Insert the title of your Survey"
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                    {currentQuestions.map((item, idx) => {
                        return (
                            <div key={idx} className="question container">
                                <input
                                    id={idx}
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
                    <input
                        type="submit"
                        className="button new-survey"
                        onClick={(e) => handleSubmit(e)}
                    />
                </form>
            </div>
        </div>
    );
};

export default NewSurvey;
