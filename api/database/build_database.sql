BEGIN;

DROP TABLE IF EXISTS words cascade;

CREATE TABLE words (
  word_id   SERIAL    PRIMARY KEY   NOT NULL,
  english    VARCHAR(50)   NOT NULL,
  spanish    VARCHAR(50)   NOT NULL,
  category    VARCHAR(50)   NOT NULL
);

SELECT * FROM words;

COMMIT;
