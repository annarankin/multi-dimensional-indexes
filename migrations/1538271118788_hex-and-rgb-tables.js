exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("rgb-color-values", {
    id: "id",
    name: { type: "varchar(255)", notNull: true },
    r: { type: "integer", notNull: true },
    g: { type: "integer", notNull: true },
    b: { type: "integer", notNull: true },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp")
    }
  });

  pgm.createTable("hsl-color-values", {
    id: "id",
    name: { type: "varchar(255)", notNull: true },
    h: { type: "integer", notNull: true },
    s: { type: "integer", notNull: true },
    l: { type: "integer", notNull: true },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp")
    }
  });
};

exports.down = (pgm) => {
  pgm.dropTable("hsl-color-values", { ifExists: true })
  pgm.dropTable("rgb-color-values", { ifExists: true })
};
