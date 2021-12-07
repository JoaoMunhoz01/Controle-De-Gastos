const db = require('./_database');

async function createTables() {
    await db.connect();

    await db.query(`CREATE TABLE person(
        userName VARCHAR PRIMARY KEY,
        password VARCHAR NOT NULL,
        fName VARCHAR NOT NULL,
        lName VARCHAR NOT NULL 
    )`);
    await db.end();

    console.log('Tabelas criadas');
}

createTables();