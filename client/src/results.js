import { useEffect, useState } from "react";
import instance from "./axios";
import copy from "copy-to-clipboard";

const Results = ({ surveyId }) => {
    const [questionsSurvey, setQuestionsSurvey] = useState([]);
    const [shareLink, setShareLink] = useState("");

    useEffect(() => {
        console.log("I am mounting");
        instance
            .get(`/get-questions/${surveyId}`)
            .then(({ data }) => {
                // console.log("This is data", data);
                setQuestionsSurvey(data);
                setShareLink(data[0].share_link);
            })
            .catch((err) => {
                console.log("Error fetching from DB", err);
            });
    }, []);

    const copyToClipboard = (e) => {
        console.log("Copying to Clipboard", e.target);
        copy(`http://localhost:3000/answers/${surveyId}/${shareLink}`);
    };

    return (
        <div className="container vertical general">
            <div className="container vertical central">
                <h2>Results page</h2>
                <button className="button" onClick={(e) => copyToClipboard(e)}>
                    Copy Link to Clipboard
                </button>
                {questionsSurvey.map((item, idx) => {
                    return (
                        <div key={idx} style={{ width: "100%" }}>
                            <ul>
                                <li key={idx}>
                                    <h4
                                        style={{ paddingBottom: 0, margin: 0 }}
                                    >{`Question ${idx + 1}`}</h4>
                                    <p>{item.question}</p>
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Results;
