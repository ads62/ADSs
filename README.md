# ADS | Agência Digital & Sites — site institucional

Site estático (HTML + CSS + JS puro, sem build, sem dependências). Não precisa de `package.json` nem instalação — é só abrir ou publicar.

## Estrutura
```
index.html         → estrutura da página
css/style.css       → todo o design (cores, tipografia, layout)
js/data.js          → dados do portfólio (nome, categoria, imagem, link, avaliação)
js/i18n.js          → textos em PT / EN / ES
js/main.js          → tema claro/escuro, idioma, renderização do portfólio e avaliações
assets/img/         → logo (dark/light), favicon e imagens dos projetos
```

## O que editar
- **WhatsApp**: o número do WhatsApp já está configurado (`5535988284531`) em `index.html` — troque nos links `wa.me/` caso mude no futuro.
- **Avaliações reais**: em `js/data.js`, preencha `review` (texto real do cliente) e `stars` (nota real, 1 a 5) para cada projeto. Enquanto `review` estiver `null`, o site mostra `[INSERIR AVALIAÇÃO REAL]` — nada foi inventado.
- **Textos**: `js/i18n.js`, um bloco por idioma (`pt`, `en`, `es`).
- **Projetos do portfólio**: `js/data.js` — adicione/remova objetos no array `ADS_PROJECTS`.
- **Cores**: variáveis no topo de `css/style.css` (`--blue`, `--ink`, etc).

## Publicar no GitHub Pages
1. Crie um repositório e suba todos os arquivos desta pasta (mantendo a estrutura).
2. No repositório, vá em **Settings → Pages**.
3. Em "Branch", selecione `main` (ou a branch usada) e a pasta `/root`.
4. Salve — o GitHub gera a URL pública em alguns minutos.

Qualquer outro provedor de hospedagem estática (Vercel, Netlify, etc.) também funciona: basta apontar para a pasta raiz deste projeto, sem comando de build.
