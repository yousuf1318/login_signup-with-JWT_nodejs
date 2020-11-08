
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'yousuf',
      database : 'yousuf'
    }
  });


knex.schema.hasTable('users2').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users2', function(t) {
        t.increments('id').primary();
        t.string('first_name', 100);
        t.string('last_name', 100);
        t.string("email")
        t.string("password")
        // t.text('bio');
      });
    }
  });

module.exports=knex;