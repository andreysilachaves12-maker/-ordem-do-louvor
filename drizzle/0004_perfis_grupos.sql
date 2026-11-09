CREATE TABLE perfis (id TEXT PRIMARY KEY, nome TEXT NOT NULL, grupos TEXT NOT NULL);
--> statement-breakpoint
CREATE TABLE perfil_sessoes (token_hash TEXT PRIMARY KEY, perfil_id TEXT NOT NULL REFERENCES perfis(id), expira INTEGER NOT NULL);
--> statement-breakpoint
ALTER TABLE hinos ADD COLUMN perfil_id TEXT REFERENCES perfis(id);
--> statement-breakpoint
CREATE INDEX hinos_perfil_idx ON hinos(perfil_id);
