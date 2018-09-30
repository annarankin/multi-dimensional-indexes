-- -- CREATE VIEW color_points AS
-- SELECT
--   *,
--   ST_GeomFromText('POINT(' || r || ' ' || g || ' ' || b || ')') AS geo,
--   ('POINT(' || r || ' ' || g || ' ' || b || ')') as text_point
-- FROM colors;

-- SELECT
--  ST_Distance(
--   ST_GeomFromText('POINT(132 27 45)'),
--   ST_GeomFromText('POINT(164 198 57)')
-- );

-- SELECT
--   name,
--   text_point,
--   ST_Distance(
--     ST_GeomFromText('POINT(51 153 255)'),
--     geo
--   ) as distance
-- FROM color_geometry
-- WHERE ST_Distance(
--   ST_GeomFromText('POINT(51 153 255)'),
--   geo
-- ) < 10;


-- CREATE VIEW hsl_geom AS
  SELECT
    *,
    ST_GeomFromText('POINT(' || h || ' ' || s || ' ' || l || ')') AS geo,
    ('POINT(' || h || ' ' || s || ' ' || l || ')') as text_point
  FROM "hsl-color-values";

SELECT
  name,
  text_point,
  ST_Distance(
    ST_GeomFromText('POINT(12 36 36)'),
    geo
  ) as distance
FROM "hsl-color-values"
WHERE ST_Distance(
  ST_GeomFromText('POINT(12 36 36)'),
  geo
) < 10;
