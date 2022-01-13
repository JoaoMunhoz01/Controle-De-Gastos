const db = require('./_database');

async function createTables() {
    await db.connect();

    await db.query(`CREATE TABLE IF NOT EXISTS public.person
    (
        "username" character varying COLLATE pg_catalog."default" NOT NULL,
        password character varying COLLATE pg_catalog."default" NOT NULL,
        "fname" character varying COLLATE pg_catalog."default" NOT NULL,
        "lname" character varying COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT person_pkey PRIMARY KEY ("username")
    )`);

    await db.query(`CREATE TABLE IF NOT EXISTS public.gastos
    (
        "valor" character varying COLLATE pg_catalog."default" NOT NULL,
        "dtvenc" character varying COLLATE pg_catalog."default" NOT NULL,
        "username" character varying COLLATE pg_catalog."default" NOT NULL,
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( CYCLE INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
        "nome" character varying COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT gastos_pkey PRIMARY KEY (id),
        CONSTRAINT "username" FOREIGN KEY ("username")
            REFERENCES public.person (username) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
    )
    
    WITH (
        autovacuum_enabled = TRUE
    )`);
    await db.end();

    console.log('Tabelas criadas');
}

createTables();
