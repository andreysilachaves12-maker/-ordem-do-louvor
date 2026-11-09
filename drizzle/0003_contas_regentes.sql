CREATE TABLE regentes (id TEXT PRIMARY KEY, usuario TEXT NOT NULL UNIQUE, salt TEXT NOT NULL, senha_hash TEXT NOT NULL);
--> statement-breakpoint
CREATE TABLE sessoes (token_hash TEXT PRIMARY KEY, regente_id TEXT NOT NULL REFERENCES regentes(id), expira INTEGER NOT NULL);
--> statement-breakpoint
CREATE TABLE tentativas (chave TEXT PRIMARY KEY, quantidade INTEGER NOT NULL, expira INTEGER NOT NULL);
--> statement-breakpoint
ALTER TABLE hinos ADD COLUMN regente_id TEXT REFERENCES regentes(id);
--> statement-breakpoint
CREATE INDEX hinos_regente_idx ON hinos(regente_id);
