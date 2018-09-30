CREATE VIEW color_geometry AS
  SELECT
    *,
    ST_GeomFromText('POINT(' || r || ' ' || g || ' ' || b || ')') AS geo,
    ('POINT(' | r || ' ' || g || ' ' || b || ')') as text_point
  FROM colors;
