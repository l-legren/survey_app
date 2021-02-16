import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./welcome";
import NewSurvey from "./new-survey";
import Results from "./results";

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
                        return <Results linkURL={props.match.params.id}/>;
                    }}
                />
            </BrowserRouter>
        </>
    );
};

export default App;
