const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./db");
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});

app.post("/questions-survey", (req, res) => {
    console.log("This is my req.body", req.body);
    const { title, questions } = req.body;
    let arrOfQuestions = Object.entries(questions);
    db.newSurvey(title)
        .then(({rows}) => {
            console.log("Added to database survey nr.", rows);
            let surveyId = rows[0].id;
            for (let i = 0; i < arrOfQuestions.length; i++) {
                db.addQuestions(
                    surveyId,
                    arrOfQuestions[i][0],
                    arrOfQuestions[i][1]
                ).then(() => {
                    console.log("succesfull added");
                });
            }
        })
        .catch((error) => {
            console.log("error inserting in db", error);
        });
});
