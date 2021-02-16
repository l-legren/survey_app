import { useEffect, useState } from "react";
import instance from "./axios";

const Results = ({ linkURL, surveyId }) => {
    const [questionsSurvey, setQuestionsSurvey] = useState([]);

    useEffect(() => {
        console.log("I am mounting");
        instance
            .get(`/get-questions/${surveyId}`)
            .then(({ data }) => {
                console.log("This is data", data);
                setQuestionsSurvey(data);
                console.log(questionsSurvey);
            })
            .catch((err) => {
                console.log("Error fetching from DB", err);
            });
    }, []);

    return (
        <>
            <h1>Results page</h1>
            <a>{linkURL}</a>
            {questionsSurvey.map((item, idx) => {
                return (
                    <div key={idx}>
                        <ul>
                            <li key={idx}>{item.question}</li>
                        </ul>
                    </div>
                );
            })}
        </>
    );
};

export default Results;
