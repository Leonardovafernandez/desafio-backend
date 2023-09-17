import { Request, Response } from 'express';
import knex from '../services/connectionSQL';

const listGrades = async (req: Request, res: Response) => {
  console.log("Entrou na função de listagem");
  try {
    const resultados = await knex('resultado')
      .select('resultado.id', 'bimestre.nome as bimestre', 'disciplina.nome as disciplina', 'resultado.nota', 'resultado.criadoem', 'resultado.atualizadoem')
      .join('bimestre', 'resultado.bimestre_id', 'bimestre.id')
      .join('disciplina', 'resultado.disciplina_id', 'disciplina.id');

    res.json(resultados);
  } catch (error) {
    console.error('Erro ao listar resultados:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export default listGrades;