import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./welcome";
import NewSurvey from "./new-survey";

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
            </BrowserRouter>
        </>
    );
};

export default App;
