DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS surveys;

CREATE TABLE surveys (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    survey_id INT REFERENCES surveys(id),
    order_q INT NOT NULL,
    question VARCHAR NOT NULL
  );

CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    survey_id INT NOT NULL REFERENCES surveys(id),
    question_id INT NOT NULL REFERENCES questions(id),
    answer VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);