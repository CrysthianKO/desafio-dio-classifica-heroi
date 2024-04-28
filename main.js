/* Desafio da platarforma dio */
const prompt = require('prompt-sync')();
const classificaExperiencia = require('./model.js'); 


const nomeHeroi = prompt("Digite o nome do seu Heroi: ");
const experiencia = 8001;
const classificacao = classificaExperiencia(experiencia);

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + classificacao);