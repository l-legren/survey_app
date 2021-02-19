import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import instance from "./axios";

const Answers = ({ surveyId }) => {
    const history = useHistory();
    const [questionsAnswers, setquestionsAnswers] = useState([]);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        instance
            .get(`/get-questions/${surveyId}`)
            .then(({ data }) => {
                console.log("This is data", data);
                setquestionsAnswers(data);
            })
            .catch((err) => {
                console.log("Error fetching from DB", err);
            });
    }, []);

    const handleChange = (e) => {
        setAnswers({
            ...answers,
            [e.target.id]: e.target.value,
        });
    };

    const submitAnswers = (e) => {
        e.preventDefault();
        instance
            .post("/submit-answers", {
                surveyId: surveyId,
                answers: answers,
            })
            .then(() => {
                console.log("Added Answers to DB");
                history.push("/thanks");
            });
    };

    return (
        <div className="container vertical general">
            <div className="container vertical central">
                <h2>Answers Page</h2>
                <form method="POST">
                    {questionsAnswers.map((item, idx) => {
                        return (
                            <div key={idx} style={{ width: "100%" }}>
                                <ul>
                                    <li key={idx}>
                                        <h4
                                            style={{
                                                paddingBottom: 0,
                                                margin: 0,
                                            }}
                                        >{`Question ${idx + 1}`}</h4>
                                        <p>{item.question}</p>
                                        <input
                                            onChange={(e) => handleChange(e)}
                                            id={item.id}
                                            type="text"
                                            placeholder="Answer here"
                                        />
                                    </li>
                                </ul>
                            </div>
                        );
                    })}
                    <input
                        className="button"
                        type="submit"
                        value="Submit"
                        onClick={(e) => submitAnswers(e)}
                    />
                </form>
            </div>
        </div>
    );
};

export default Answers;
