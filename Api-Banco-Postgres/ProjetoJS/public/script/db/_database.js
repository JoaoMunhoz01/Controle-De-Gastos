const { Pool } = require('pg');

const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'controlegastos',
        password: 'postgres',
        port: 5432
    });

const pg = require('pg');

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'controlegastos',
    password: 'postgres',
    port: 5432
});

module.exports = client;
