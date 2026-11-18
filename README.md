# Wiki dos Pokémon Iniciais

Projeto Integrador de Desenvolvimento Front-end para Web. Uma wiki dedicada aos Pokémon iniciais de Kanto a Paldea, com informações de tipo, região e evolução.

## Funcionalidades
- Catálogo interativo com 27 Pokémon iniciais de nove gerações.
- Busca instantânea por nome, região ou evolução.
- Filtro por tipo (Grama, Fogo e Água).
- Marcação de favoritos e visualização exclusiva dos marcados.
- Contagem dinâmica de resultados e favoritos.
- Tabela de exemplos, lista por região, vídeo em WebM/MP4 com pôster e legendas VTT.
- Formulário de avaliação com validação no navegador e confirmação local (sem envio a servidor).

## Tecnologias e conteúdos estudados
- **HTML5:** semântica, listas, tabela, formulário acessível e multimídia (aulas 02–04).
- **CSS3:** reset, variáveis, box model, Flexbox, Grid responsivo, pseudo-classes e estados de foco (aulas 06–07).
- **JavaScript:** arrays de objetos, funções, condições, `switch`, `filter`, `map`, `reduce`, criação segura com `createElement`/`textContent`, eventos e delegação com `closest` e `dataset` (aulas 09, 11 e 12).


## Estrutura
- `index.html`: estrutura e seções.
- `css/reset.css` e `css/style.css`: estilos.
- `js/catalogo.js`: dados, filtros, favoritos e interação com DOM.
- `assets/`: imagens, vídeos e legendas.

## Revisão

Revisão feita por Adrian Asaf no dia 18/11/2026: Ficou bom o site, gostei! A página abre sem erro, o formulário tá certinho com label em todos os campos e validação, o vídeo com webm, mp4 e legenda ficou muito bom e o css tá bem organizado. O menu novo ficou legal e o foco aparece bem quando navega pelo teclado. Pra melhorar: o catálogo do catalogo.js não aparece na página porque o index.html não tem a seção com #catalogo-lista, #busca-pokemon e os outros ids, então não aparece nenhum card. Os links "Explorar iniciais" e "Vídeo" do menu não levam pra lugar nenhum, e o formulário não mostra a confirmação porque falta o id="form-avaliacao". Também faltou svg e canvas da aula 5. Os PRs 2, 3 e 4 ainda tão abertos. 8/10
