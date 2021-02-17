import { useEffect, useState } from "react";
import instance from "./axios";

const Answers = ({ surveyId }) => {
    const [questionsAnswers, setquestionsAnswers] = useState([]);

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

    console.log("Questions Survey", questionsAnswers);

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
                                            type="text"
                                            placeholder="Answer here"
                                        />
                                    </li>
                                </ul>
                            </div>
                        );
                    })}
                    <input className="button" type="submit" value='Submit'/>
                </form>
            </div>
        </div>
    );
};

export default Answers;
