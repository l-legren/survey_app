const { query } = require("express");
const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/surveyapp"
);

module.exports.newSurvey = (title) => {
    const q = `INSERT INTO 
    surveys(title) VALUES ($1) 
    RETURNING id`;
    const params = [title];

    return db.query(q, params);
};

module.exports.addQuestions = (survey_id, order, question, share_link) => {
    const q = `INSERT INTO 
    questions(survey_id, order_q, question, share_link) 
    VALUES ($1, $2, $3, $4)`;
    const params = [survey_id, order, question, share_link];

    return db.query(q, params);
};

module.exports.getQuestions = (survey_id) => {
    const q = `SELECT * FROM questions
    WHERE survey_id = $1`;
    const params = [survey_id];

    return db.query(q, params);
};

module.exports.addAnswers = (survey_id, question_id, answer) => {
    const q = `INSERT INTO answers
    (survey_id, question_id, answer)
    VALUES ($1, $2, $3)`;
    const params = [survey_id, question_id, answer];

    return db.query(q, params);
};
