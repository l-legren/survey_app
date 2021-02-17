const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./db");
const uidSafe = require("uid-safe");
const csurf = require("csurf");
const cookieSession = require("cookie-session");

app.use(express.json());

const cookieSessionMiddleware = cookieSession({
    secret: "I am an hungry man",
    maxAge: 1000 * 60 * 60 * 24 * 14,
});

app.use(cookieSessionMiddleware);

app.use(express.urlencoded({ extended: false }));

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

app.use(compression());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.post("/questions-survey", (req, res) => {
    // console.log("This is my req.body", req.body);
    const { title, questions } = req.body;
    let arrOfQuestions = Object.entries(questions);
    db.newSurvey(title)
        .then(({ rows }) => {
            console.log("Added to database survey Nr.", rows);
            let surveyId = rows[0].id;
            uidSafe(18).then((uid) => {
                console.log("This is UID", uid);
                for (let i = 0; i < arrOfQuestions.length; i++) {
                    db.addQuestions(
                        surveyId,
                        arrOfQuestions[i][0],
                        arrOfQuestions[i][1],
                        uid
                    ).then(() => {
                        console.log("succesfull added");
                    });
                }
                res.json({
                    success: true,
                    // secretLink: uid,
                    surveyId: surveyId,
                });
            });
        })
        .catch((error) => {
            console.log("Error inserting in db", error);
            res.json({
                success: false,
            });
        });
});

app.get("/get-questions/:survey", (req, res) => {
    console.log("server woorking", req.params);
    const { survey } = req.params;
    db.getQuestions(survey)
        .then(({ rows }) => {
            // console.log("This is data from DB", rows)
            res.json(rows);
        })
        .catch((error) => {
            console.log("Error fetching questions from DB", err);
        });
});

// NEVER COMMENT OUT THIS LINE OF CODE!!!

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
