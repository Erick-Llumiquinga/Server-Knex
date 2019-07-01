
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('sesion')
    .createTable('usuarios', function(t){
        t.bigIncrements('id');
        t.string('name').notNullable();
        t.string('lastname').notNullable();
        t.string('userName').notNullable();
        t.string('password').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.withSchema('sesion')
    .dropTableIfExist('usuarios');
};
