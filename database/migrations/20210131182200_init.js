exports.up = function (knex) {
  return (
    knex.schema
      //ROLES TABLE
      .createTable("roles", (tbl) => {
        tbl.increments();

        tbl.string("name", 128).notNullable().unique();
      })
      //USERS TABLE
      .createTable("users", (tbl) => {
        tbl.increments();

        tbl.string("username", 128).notNullable().unique().index();
        tbl.string("password", 256).notNullable();

        tbl
          .integer("role")
          .unsigned()
          .references("roles.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
          .defaultTo(2);
      })
      //TRUCKS TABLE
      .createTable('trucks', tbl => {
        tbl.increments()
    
        tbl.string('truck_name')
        tbl.string('description')
        tbl.string('imageUrl')
    
        tbl.integer('price_range').unsigned()
        tbl.integer('customer_rating').unsigned()
        tbl.integer('avg_customer_rating').unsigned()
    
        tbl.string('location')
        tbl.string('departure_time')
      })
      //MENU TABLE
      .createTable('menu', tbl => {
        tbl.increments()
    
        tbl.string('menu_item_name')
        tbl.string('description')
        tbl.string('imageUrl')
      
        tbl.integer('menu_price').unsigned()
        tbl.integer('customer_rating').unsigned()
        tbl.integer('avg_customer_rating').unsigned()
      })
  );
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists("roles")
  .dropTableIfExists("users")
  .dropTableIfExists('trucks')
  .dropTableIfExists('menu');
};
