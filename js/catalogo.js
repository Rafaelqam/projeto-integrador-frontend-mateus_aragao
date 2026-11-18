"use strict";
// Aula 09: dados, condições, laços e resumo. Aulas 11/12: funções, DOM e eventos.
const iniciais = [
  {id:1,nome:"Bulbasaur",tipo:"Grama",regiao:"Kanto",geracao:1,evolucao:"Ivysaur",favorito:false},
  {id:2,nome:"Charmander",tipo:"Fogo",regiao:"Kanto",geracao:1,evolucao:"Charmeleon",favorito:false},
  {id:3,nome:"Squirtle",tipo:"Água",regiao:"Kanto",geracao:1,evolucao:"Wartortle",favorito:false},
  {id:4,nome:"Chikorita",tipo:"Grama",regiao:"Johto",geracao:2,evolucao:"Bayleef",favorito:false},
  {id:5,nome:"Cyndaquil",tipo:"Fogo",regiao:"Johto",geracao:2,evolucao:"Quilava",favorito:false},
  {id:6,nome:"Totodile",tipo:"Água",regiao:"Johto",geracao:2,evolucao:"Croconaw",favorito:false},
  {id:7,nome:"Treecko",tipo:"Grama",regiao:"Hoenn",geracao:3,evolucao:"Grovyle",favorito:false},
  {id:8,nome:"Torchic",tipo:"Fogo",regiao:"Hoenn",geracao:3,evolucao:"Combusken",favorito:false},
  {id:9,nome:"Mudkip",tipo:"Água",regiao:"Hoenn",geracao:3,evolucao:"Marshtomp",favorito:false},
  {id:10,nome:"Turtwig",tipo:"Grama",regiao:"Sinnoh",geracao:4,evolucao:"Grotle",favorito:false},
  {id:11,nome:"Chimchar",tipo:"Fogo",regiao:"Sinnoh",geracao:4,evolucao:"Monferno",favorito:false},
  {id:12,nome:"Piplup",tipo:"Água",regiao:"Sinnoh",geracao:4,evolucao:"Prinplup",favorito:false},
  {id:13,nome:"Snivy",tipo:"Grama",regiao:"Unova",geracao:5,evolucao:"Servine",favorito:false},
  {id:14,nome:"Tepig",tipo:"Fogo",regiao:"Unova",geracao:5,evolucao:"Pignite",favorito:false},
  {id:15,nome:"Oshawott",tipo:"Água",regiao:"Unova",geracao:5,evolucao:"Dewott",favorito:false},
  {id:16,nome:"Chespin",tipo:"Grama",regiao:"Kalos",geracao:6,evolucao:"Quilladin",favorito:false},
  {id:17,nome:"Fennekin",tipo:"Fogo",regiao:"Kalos",geracao:6,evolucao:"Braixen",favorito:false},
  {id:18,nome:"Froakie",tipo:"Água",regiao:"Kalos",geracao:6,evolucao:"Frogadier",favorito:false},
  {id:19,nome:"Rowlet",tipo:"Grama",regiao:"Alola",geracao:7,evolucao:"Dartrix",favorito:false},
  {id:20,nome:"Litten",tipo:"Fogo",regiao:"Alola",geracao:7,evolucao:"Torracat",favorito:false},
  {id:21,nome:"Popplio",tipo:"Água",regiao:"Alola",geracao:7,evolucao:"Brionne",favorito:false},
  {id:22,nome:"Grookey",tipo:"Grama",regiao:"Galar",geracao:8,evolucao:"Thwackey",favorito:false},
  {id:23,nome:"Scorbunny",tipo:"Fogo",regiao:"Galar",geracao:8,evolucao:"Raboot",favorito:false},
  {id:24,nome:"Sobble",tipo:"Água",regiao:"Galar",geracao:8,evolucao:"Drizzile",favorito:false},
  {id:25,nome:"Sprigatito",tipo:"Grama",regiao:"Paldea",geracao:9,evolucao:"Floragato",favorito:false},
  {id:26,nome:"Fuecoco",tipo:"Fogo",regiao:"Paldea",geracao:9,evolucao:"Crocalor",favorito:false},
  {id:27,nome:"Quaxly",tipo:"Água",regiao:"Paldea",geracao:9,evolucao:"Quaxwell",favorito:false}
];
const lista = document.querySelector("#catalogo-lista");
const busca = document.querySelector("#busca-pokemon");
const filtro = document.querySelector("#filtro-tipo");
const resumo = document.querySelector("#resumo-catalogo");
const favoritos = document.querySelector("#total-favoritos");
const alternar = document.querySelector("#alternar-favoritos");
const formulario = document.querySelector("#form-avaliacao");
const retorno = document.querySelector("#retorno-avaliacao");
let apenasFavoritos = false;

function classificarTipo(tipo) {
  switch (tipo) {
    case "Fogo": return "tipo-fogo";
    case "Água": return "tipo-agua";
    case "Grama": return "tipo-grama";
    default: return "tipo-outro";
  }
}
function calcularResumo(itens, total = iniciais.length) {
  return { exibidos: itens.length, total, marcados: iniciais.reduce((soma, item) => soma + Number(item.favorito), 0) };
}
function obterFiltrados() {
  const termo = busca.value.trim().toLocaleLowerCase("pt-BR");
  return iniciais.filter(item => {
    const correspondeBusca = [item.nome,item.regiao,item.evolucao].some(valor => valor.toLocaleLowerCase("pt-BR").includes(termo));
    return correspondeBusca && (!filtro.value || item.tipo === filtro.value) && (!apenasFavoritos || item.favorito);
  });
}
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (conteudo !== undefined) elemento.textContent = conteudo;
  return elemento;
}
function criarCard(item) {
  const card = criarElemento("li","pokemon-card " + classificarTipo(item.tipo));
  const topo = criarElemento("div","pokemon-card-topo");
  const tipo = criarElemento("span","etiqueta",item.tipo);
  const geracao = criarElemento("span","geracao","Geração " + item.geracao);
  topo.append(tipo,geracao);
  const titulo = criarElemento("h3","",item.nome);
  const detalhe = criarElemento("p","",item.regiao + " • Evolui para " + item.evolucao);
  const botao = criarElemento("button","favoritar",item.favorito ? "★ Favorito" : "☆ Favoritar");
  botao.type = "button";
  botao.dataset.id = String(item.id);
  botao.setAttribute("aria-pressed",String(item.favorito));
  botao.setAttribute("aria-label",(item.favorito ? "Remover " : "Adicionar ") + item.nome + (item.favorito ? " dos favoritos" : " aos favoritos"));
  card.append(topo,titulo,detalhe,botao);
  return card;
}
function desenhar() {
  const filtrados = obterFiltrados();
  lista.replaceChildren(...filtrados.map(criarCard));
  const dados = calcularResumo(filtrados);
  resumo.textContent = dados.exibidos + " de " + dados.total + " Pokémon encontrados";
  favoritos.textContent = dados.marcados + " favorito(s) marcado(s)";
  alternar.setAttribute("aria-pressed",String(apenasFavoritos));
  alternar.textContent = apenasFavoritos ? "Mostrar todos" : "Ver só favoritos";
  if (!filtrados.length) lista.append(criarElemento("li","vazio","Nenhum Pokémon encontrado. Experimente outro filtro."));
}
function aoClicarLista(evento) {
  const botao = evento.target.closest("button[data-id]");
  if (!botao || !lista.contains(botao)) return;
  const item = iniciais.find(pokemon => pokemon.id === Number(botao.dataset.id));
  if (!item) return;
  item.favorito = !item.favorito;
  desenhar();
}
function aoEnviarAvaliacao(evento) {
  evento.preventDefault();
  const dados = new FormData(formulario);
  const nome = String(dados.get("nome") || "").trim();
  const pokemon = String(dados.get("pokemon") || "").trim();
  const nota = Number(dados.get("nota"));
  if (!nome || !pokemon || !Number.isFinite(nota) || nota < 0 || nota > 10) {
    retorno.textContent = "Confira o nome, o Pokémon e a nota entre 0 e 10.";
    return;
  }
  retorno.textContent = "Obrigado, " + nome + "! Sua avaliação de " + pokemon + " (" + nota + "/10) foi registrada nesta página. Não há envio para servidor.";
  formulario.reset();
}
function iniciarCatalogo() {
  if (!lista || !busca || !filtro || !resumo || !favoritos || !alternar) return;
  lista.addEventListener("click",aoClicarLista);
  busca.addEventListener("input",desenhar);
  filtro.addEventListener("change",desenhar);
  alternar.addEventListener("click",() => { apenasFavoritos = !apenasFavoritos; desenhar(); });
  if (formulario && retorno) formulario.addEventListener("submit",aoEnviarAvaliacao);
  desenhar();
}
iniciarCatalogo();
