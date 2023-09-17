import { Request, Response } from 'express';
import knex from '../services/connectionSQL';

const addGrade = async (req: Request, res: Response) => {
  console.log("Entrou na função de Adicionar");
  const { bimestre_id, disciplina_id, nota } = req.body;

  if (!bimestre_id || !disciplina_id || !nota) {
    return res.status(400).json({ error: 'Campos obrigatórios não fornecidos' });
  }

  console.log(bimestre_id, disciplina_id, nota);

  try {
    // Verifique se já existe um registro para o mesmo bimestre e disciplina
    const registroExistente = await knex('resultado')
      .where({ bimestre_id, disciplina_id })
      .first();

    let dataAtual = new Date();
    console.log(dataAtual);

    if (registroExistente) {
      // Se existir, atualize a data 'atualizadoEm'
      await knex('resultado')
        .where({ bimestre_id, disciplina_id })
        .update({ nota, atualizadoem: dataAtual });
    } else {
      // Se não existir, insira o novo registro com a data 'criadoEm'
      await knex('resultado').insert({
        bimestre_id,
        disciplina_id,
        nota,
        criadoem: dataAtual,
        atualizadoem: dataAtual,
      });
    }

    // Retorne o novo resultado
    const novoResultado = await knex('resultado')
      .where({ bimestre_id, disciplina_id })
      .first();

    res.status(201).json({
      id: novoResultado.id,
      bimestre: novoResultado.bimestre_id,
      disciplina: novoResultado.disciplina_id,
      nota: novoResultado.nota,
      criadoem: novoResultado.criadoem,
      atualizadoem: novoResultado.atualizadoem,
    });
  } catch (error) {
    console.error('Erro ao adicionar nota:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export default addGrade;

// toLocaleDateString()