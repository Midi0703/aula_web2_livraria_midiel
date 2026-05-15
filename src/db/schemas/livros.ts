import {
  int,
  mssqlTable,
  varchar,
  bit,
  datetime,
  text,
} from 'drizzle-orm/mssql-core';
import { autoresTabela } from './autores';

export const livrosTabela = mssqlTable('livros', {
  id: int('id').primaryKey().identity(),
  titulo: varchar('titulo', { length: 100 }).notNull(),
  descricao: text('descricao').notNull(),
  idAutor: int('idAutor')
    .notNull()
    .references(() => autoresTabela.id),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
  ativo: bit('ativo').notNull().default(true),
});

export type Livro = typeof livrosTabela.$inferSelect;
export type CriarLivro = typeof livrosTabela.$inferInsert;
