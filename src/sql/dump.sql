create database Desafio;

CREATE TABLE Bimestre (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL
);

CREATE TABLE Disciplina (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL
);

INSERT INTO Bimestre (nome) VALUES ('PRIMEIRO'), ('SEGUNDO'), ('TERCEIRO'), ('QUARTO');
INSERT INTO Disciplina (nome) VALUES ('Biologia'), ('Artes'), ('Geografia'), ('Sociologia');

CREATE TABLE Resultado (
  id SERIAL PRIMARY KEY,
  bimestre_id INT REFERENCES Bimestre(id),
  disciplina_id INT REFERENCES Disciplina(id),
  nota FLOAT,
  criadoEm TIMESTAMP,
  atualizadoEm TIMESTAMP
);