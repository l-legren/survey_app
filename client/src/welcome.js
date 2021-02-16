import { useHistory } from "react-router-dom";

const Welcome = () => {
    const history = useHistory();

    const routeChange = () => {
        console.log("click works");
        let path = "new";
        history.push(path);
    };

    return (
        <div className="container general">
            <div className="container vertical central">
                <h1>SURVEY APP</h1>
                <p>
                    I am baby biodiesel cronut tumeric, wolf unicorn pop-up
                    sriracha williamsburg truffaut vaporware stumptown you
                    probably have not heard of them skateboard chartreuse
                    flexitarian. Vegan mixtape cray keytar messenger bag
                    pinterest four dollar toast next level. Schlitz marfa DIY
                    banh mi waistcoat offal. Franzen farm-to-table tattooed af
                    occupy.
                </p>
                <button className="button" onClick={routeChange}>
                    CREATE SURVEY
                </button>
            </div>
        </div>
    );
};

export default Welcome;
