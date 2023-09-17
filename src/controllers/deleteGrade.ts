import { Request, Response } from 'express';
import knex from '../services/connectionSQL';

const deleteGrade = async (req: Request, res: Response) => {
  console.log("Entrou na função de deletar");
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'ID não fornecido' });
  }

  try {
    const result = await knex('resultado').where({ id }).del();

    if (result === 0) {
      return res.status(404).json({ error: 'Nota não encontrada' });
    }

    res.status(204).send(); // Retorna uma resposta sem conteúdo (no content)
  } catch (error) {
    console.error('Erro ao deletar nota:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export default deleteGrade;