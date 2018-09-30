-- postgres 10.3

DROP TABLE IF EXISTS colors;
-- DROP TABLE IF EXISTS rgb_values;

CREATE TABLE colors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  r INTEGER,
  g INTEGER,
  b INTEGER
);

-- CREATE TABLE rgb_values (
--   id SERIAL PRIMARY KEY,
--   r INTEGER,
--   g INTEGER,
--   b INTEGER
-- );

INSERT INTO colors (name, r, g, b) VALUES
  ('red',     255, 0, 0),
  ('orange',  255, 128, 0),
  ('yellow',  255, 255, 0),
  ('green',   128, 255, 0),
  ('blue',    0, 128, 255),
  ('purple',  128, 0, 255);
