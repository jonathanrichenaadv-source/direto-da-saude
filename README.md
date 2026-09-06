# Site — Direito à Saúde

Site estático preparado para GitHub Pages.

## 1. O que você precisa editar antes de publicar

### `index.html`
Substitua:

- `SEUUSUARIO` pelo seu usuário do GitHub.
- `SEUREPOSITORIO` já definido como `direito-saude`.
- Ajuste textos, cidade, nome do escritório e demais informações que desejar.

### `script.js`
Troque:

```js
const WHATSAPP_NUMBER = "5511973969770";
```

pelo seu número real no formato:

```text
55 + DDD + número
```

Exemplo:

```text
5511973969770
```

## 2. Como publicar no GitHub Pages

1. Crie uma conta no GitHub, se ainda não tiver.
2. Clique em **New repository**.
3. Sugestão de nome: `direito-saude`.
4. Marque o repositório como **Public**.
5. Envie estes arquivos para a raiz do repositório:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `robots.txt`
   - `sitemap.xml`
6. Abra o repositório e vá em **Settings → Pages**.
7. Em **Build and deployment**, selecione:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
8. Salve.
9. O GitHub mostrará a URL pública do site.

Normalmente ela terá este formato:

```text
https://SEUUSUARIO.github.io/direito-saude/
```

## 3. Domínio próprio

Depois você pode comprar um domínio, por exemplo:

```text
jonathanrichena.adv.br
```

ou outro disponível, e apontá-lo para o GitHub Pages.

## 4. SEO

O site já possui:

- `title`
- `meta description`
- Open Graph
- dados estruturados `LegalService`
- `robots.txt`
- `sitemap.xml`
- estrutura semântica e responsiva

Depois de definir o domínio final, atualize os links em:

- `index.html`
- `robots.txt`
- `sitemap.xml`

## 5. Publicidade jurídica

O texto foi escrito de maneira informativa, evitando:

- promessa de resultado;
- expressões como “causa ganha”;
- comparação com outros advogados;
- linguagem ostensivamente mercantil;
- afirmação de especialização formal sem comprovação.

Antes de campanhas pagas, vale revisar a versão final conforme as regras de publicidade profissional aplicáveis à advocacia.


## Dados profissionais já configurados

- Nome: Jonathan Richena Advocacia
- OAB/SP: 544.387
- WhatsApp: (11) 97396-9770

Ainda falta apenas substituir no `index.html`, `robots.txt` e `sitemap.xml`:
- `SEUUSUARIO` já definido como `jonathanrichenaadv-source`
- `SEUREPOSITORIO` já definido como `direito-saude`


## Configuração final do GitHub Pages

Usuário GitHub:
`jonathanrichenaadv-source`

Nome de repositório configurado:
`direito-saude`

URL esperada do site:
`https://jonathanrichenaadv-source.github.io/direito-saude/`

Se você criar o repositório com outro nome, será necessário atualizar novamente:
- canonical e og:url no `index.html`
- `robots.txt`
- `sitemap.xml`


## GitHub configurado

- Usuário: `jonathanrichenaadv-source`
- Repositório sugerido/configurado: `direito-saude`
- URL esperada do site: `https://jonathanrichenaadv-source.github.io/direito-saude/`

Se você usar outro nome de repositório, os links de SEO precisarão ser atualizados.
