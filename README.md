# JG Mecânica — Site institucional

Site da **João Gabriel Valim Assi · Oficina Mecânica** (Jardim da Glória, São João da Boa Vista - SP).
HTML, CSS e JavaScript puros, sem build e sem dependências.

## Estrutura

```
.
├── index.html                  # Página única (seções: serviços, revisão, como funciona, cartão, contato)
├── assets/
│   ├── css/style.css           # Estilos (tokens de cor no :root, tema claro/escuro)
│   ├── js/main.js              # Links do WhatsApp, faixa animada, copiar dados, compartilhar cartão, animações
│   └── img/
│       ├── logo.webp           # Logo da oficina
│       ├── cartao-de-visita.jpg# Cartão enviado pelo botão "Compartilhar no WhatsApp"
│       ├── og-image.jpg        # Prévia do link no WhatsApp/redes (1200×630)
│       ├── favicon-32.png
│       └── apple-touch-icon.png
├── .nojekyll                   # Faz o GitHub Pages servir os arquivos sem processar com Jekyll
└── README.md
```

## Rodar localmente

Abra o `index.html` no navegador, ou sirva a pasta (recomendado, para o compartilhamento funcionar como no ar):

```bash
python -m http.server 8000
# acesse http://localhost:8000
```

## Publicar no GitHub Pages

1. Crie o repositório no GitHub e envie o código:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
   git push -u origin main
   ```
2. No repositório: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. No `index.html`, troque `SEU-USUARIO/NOME-DO-REPO` (canonical e tags `og:`) pelo endereço final. As tags `og:` precisam de URL absoluta para a prévia do cartão aparecer no WhatsApp.

## Onde editar

| O quê | Onde |
|---|---|
| Número do WhatsApp | `index.html` (links `wa.me`) e `assets/js/main.js` |
| Mensagem do botão "Compartilhar" | `assets/js/main.js` (constante `text`) |
| Cores | `assets/css/style.css`, bloco `:root` |
| Serviços | `index.html`, seção `#servicos` |

## Compartilhar cartão

No celular (Android/iPhone), o botão abre o menu de compartilhamento do sistema com a imagem do cartão anexada.
Em navegadores que não compartilham arquivos (a maioria no computador), abre o WhatsApp com os dados em texto e o link do site, que mostra o cartão como prévia.

---
Desenvolvido por [Riviera Dev](https://www.instagram.com/rivieradevbr/).
