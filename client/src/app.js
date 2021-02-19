import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./welcome";
import NewSurvey from "./new-survey";
import Results from "./results";
import Answers from "./answers";
import ThankYou from "./thanks";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return <Welcome />;
                    }}
                />
                <Route
                    path="/new"
                    render={() => {
                        return <NewSurvey />;
                    }}
                />
                <Route
                    path="/results/:id"
                    render={(props) => {
                        return <Results surveyId={props.match.params.id} />;
                    }}
                />
                <Route
                    path="/answers/:id"
                    render={(props) => {
                        return <Answers surveyId={props.match.params.id} />;
                    }}
                />
                <Route path="/thanks" render={() => <ThankYou />} />
            </BrowserRouter>
        </>
    );
};

export default App;
