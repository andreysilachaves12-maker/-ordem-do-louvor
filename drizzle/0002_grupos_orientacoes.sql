ALTER TABLE hinos ADD COLUMN cantor TEXT;
--> statement-breakpoint
ALTER TABLE hinos ADD COLUMN orientacoes TEXT;
--> statement-breakpoint
CREATE TABLE grupos (nome TEXT PRIMARY KEY COLLATE NOCASE);
