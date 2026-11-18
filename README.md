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

## Como executar
Abra `index.html` em um navegador moderno. Não é necessário instalar dependências. Para desenvolvimento, pode utilizar o Live Server no VS Code.

## Estrutura
- `index.html`: estrutura e seções.
- `css/reset.css` e `css/style.css`: estilos.
- `js/catalogo.js`: dados, filtros, favoritos e interação com DOM.
- `assets/`: imagens, vídeos e legendas.

## Acessibilidade e segurança
Botões nativos, navegação por teclado, `aria-pressed`, `aria-live`, rótulos de formulário e `:focus-visible`. Os cartões são montados sem inserir texto de usuário via `innerHTML`.

**Nota:** os favoritos são mantidos apenas enquanto a página está aberta; a avaliação não é salva nem enviada a um servidor.
