const db = require('./_database');

async function createTables() {
    await db.connect();

    await db.query(`CREATE TABLE IF NOT EXISTS public.gastos
    (
        "Valor" character varying COLLATE pg_catalog."default" NOT NULL,
        "Dtvenc" character varying COLLATE pg_catalog."default" NOT NULL,
        "user" character varying COLLATE pg_catalog."default" NOT NULL,
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( CYCLE INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
        "Nome" character varying COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT gastos_pkey PRIMARY KEY (id),
        CONSTRAINT "User" FOREIGN KEY ("user")
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
