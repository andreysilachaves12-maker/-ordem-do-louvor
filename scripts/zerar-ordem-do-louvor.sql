-- REINICIO CONTROLADO - SOMENTE banco D1 "ordem-do-louvor".
-- ATENCAO: apaga permanentemente os cadastros da aplicacao.
-- Antes de executar, exporte uma copia de seguranca do banco.
-- O esquema e a vinculacao DB sao preservados para o aplicativo continuar funcionando.
DELETE FROM hinos;
DELETE FROM perfil_sessoes;
DELETE FROM sessoes;
DELETE FROM perfis;
DELETE FROM regentes;
DELETE FROM grupos;
DELETE FROM tentativas;
DELETE FROM sqlite_sequence WHERE name = 'hinos';
