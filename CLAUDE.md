# CLAUDE.md — Portfólio Higor Cristian Groto

> Documento de referência para IAs (Claude Code e outras) trabalharem neste repositório. Gerado a partir de uma análise completa do código-fonte real (não apenas da documentação anterior). Sempre que este arquivo divergir do código, o código é a fonte da verdade — mas por favor atualize este arquivo quando isso acontecer.

## 1. Sobre o projeto

Portfólio pessoal de **Higor Cristian Groto**, Engenheiro de Controle e Automação formado em Mecatrônica, baseado em Maringá-PR. O site é uma vitrine de projetos de hardware/robótica (macro pad, robô de mesa, volantes de simulador), com visual escuro inspirado no GitHub, bilíngue (pt/en), 100% estático.

- **Repositório:** `higorgroto/higorgroto.github.io` (o nome do repo precisa ser exatamente esse para funcionar como GitHub user site)
- **URL de produção:** `https://higorgroto.github.io`
- **Local (pasta do projeto):** `portfolio` (dentro do rar enviado; anteriormente referenciado como `portfolio_v2_k3`)
- **Hospedagem:** GitHub Pages, deploy automático via GitHub Actions a cada push na branch `main`

## 2. Stack real (verificado no `package.json`)

| Tecnologia | Versão | Observação |
|---|---|---|
| Astro | `^4.16.0` | **Não é v5+** como um doc antigo indicava — confirmar antes de usar features específicas do Astro 5 |
| `@astrojs/sitemap` | `3.2.1` (fixado, `--save-exact`) | Versões mais novas causam erro de `reduce` no build — **não atualizar sem testar** |
| `@astrojs/tailwind` | `^5.1.0` | devDependency |
| Tailwind CSS | `^3.4.0` | devDependency |
| `sharp` | `^0.33.0` | serviço de otimização de imagem do Astro (`astro/assets/services/sharp`) |
| TypeScript | `^5.6.0` | `astro/tsconfigs/strict` |
| Node | `20` | fixado em `.nvmrc` e no workflow do GitHub Actions |

Não há React, Vue, MDX de fato (apesar de o content collection usar `type: 'content'` com Markdown puro `.md`, não `.mdx`), nem framework de UI além de Astro + Tailwind.

## 3. Estrutura real do projeto

```text
portfolio/
├── .github/workflows/deploy.yml   # CI/CD: build + deploy no GitHub Pages
├── .nvmrc                          # "20"
├── .gitignore                      # node_modules/, dist/, .astro/, .DS_Store, *.log, .env
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   ├── .nojekyll                   # obrigatório — evita o GitHub tentar build Jekyll
│   ├── images/profile-default.jpeg
│   └── robots.txt
└── src/
    ├── components/
    │   ├── Sidebar.astro           # sidebar fixa desktop + header/drawer mobile, perfil, contatos, nav
    │   ├── HomeContent.astro       # seções da home (Projetos + Sobre + Contato), recebe lang
    │   ├── ProjectDetail.astro     # página de projeto (cover, corpo, galeria, vídeos, nav), recebe project + lang
    │   ├── ProjectCard.astro       # card de projeto na listagem (usa <Image>)
    │   ├── SearchFilter.astro      # busca por texto (client-side, vanilla JS)
    │   ├── Lightbox.astro          # visualizador de galeria (teclado, swipe touch, contador)
    │   ├── VideoPlayer.astro       # embed YouTube ou <video> local
    │   ├── LanguageSelector.astro  # troca pt/en navegando para /en/... ou /...
    │   ├── ProjectNav.astro        # navegação "projeto anterior / próximo"
    │   └── SeoHead.astro           # meta tags, Open Graph, Twitter Card, JSON-LD
    ├── content/
    │   ├── config.ts               # schemas Zod das collections "projects" e "projects-en"
    │   ├── projects/               # entrada de cada projeto (frontmatter bilíngue + corpo em pt)
    │   │   ├── macro-pad/
    │   │   ├── mini-tinbot/
    │   │   ├── volante-caseiro/
    │   │   └── volante-direct-drive/
    │   └── projects-en/            # só o corpo em inglês, um arquivo por slug (sem frontmatter)
    │       ├── macro-pad.md
    │       ├── mini-tinbot.md
    │       ├── volante-caseiro.md
    │       └── volante-direct-drive.md
    ├── i18n/
    │   ├── ui.ts                   # dicionário de textos pt/en + função t()
    │   └── utils.ts                # getLang()/langPath()/switchLangPath() — i18n por caminho (/en/)
    ├── layouts/
    │   └── Layout.astro            # layout único (html/head/body, Sidebar + <slot>), recebe lang
    ├── pages/
    │   ├── index.astro             # home pt: Layout + HomeContent
    │   ├── projects/[...slug].astro # projeto individual pt (SSG via getStaticPaths)
    │   └── en/
    │       ├── index.astro          # home en
    │       └── projects/[...slug].astro # projeto individual en
    ├── styles/global.css           # tema github-dark via CSS vars + classes .prose-custom
    ├── types/project.ts            # tipos TS espelhando o schema do content collection
    └── env.d.ts                    # referencia .astro/types.d.ts
```

**Não existe `src/pages/about.astro`** — e, ao contrário do que um doc anterior dizia, não há nenhuma referência a esse arquivo em `Layout.astro` ou `Sidebar.astro`. A seção "Sobre" é apenas uma `<section id="about">` dentro de `index.astro`, e o menu aponta para `#about` (scroll na mesma página). Não é um bug pendente — é assim que o site é estruturado (single-page com âncoras para Projetos/Sobre/Contato + páginas dedicadas por projeto).

`tsconfig.json` define aliases (`@/*`, `@components/*`, `@layouts/*`, `@i18n/*`, `@content/*`, `@styles/*`, `@types/*`), mas **nenhum arquivo do código os usa hoje** — todos os imports são relativos (`../components/...`). Ou seja, os aliases estão configurados mas não adotados na prática.

## 4. Schema de conteúdo (`src/content/config.ts`)

```ts
const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    title_en: z.string(),
    description: z.string(),
    description_en: z.string(),
    excerpt: z.string(),
    excerpt_en: z.string(),
    date: z.coerce.date(),
    cover: image().optional(),
    gallery: z.array(image()).optional(),
    videos: z.array(z.object({
      type: z.enum(['local', 'youtube']),
      src: z.string(),
      title: z.string().optional(),
      title_en: z.string().optional(),
    })).optional(),
    search: z.string().optional(),
  }),
});
```

Pontos importantes:
- **Não existe campo `tags`** no schema, apesar de um doc antigo mencionar "tags" — o que existe é `search` (string livre com palavras-chave em pt/en usada só para a busca client-side, não exibida na UI).
- `title`, `description`, `excerpt` e suas versões `_en` são **obrigatórios** (não opcionais) — todo projeto precisa ter as duas versões preenchidas.
- `cover` e `gallery` usam o helper `image()` do Astro (import otimizado, tipado como `ImageMetadata`), e `cover` é tecnicamente opcional no schema embora todos os 4 projetos atuais o definam.
- `status` **não existe mais** — o campo foi removido em 2026-09-14 a pedido do Higor ("nada de Concluído/Em Andamento"). Não reintroduzir sem pedido explícito.
- `date` ordena os projetos na home (mais recente primeiro) e também define qual é "próximo/anterior" em `ProjectNav`.

Além de `projects`, existe a collection **`projects-en`** (`src/content/projects-en/`), também `type: 'content'` mas **sem schema e sem frontmatter**. Cada arquivo é nomeado pelo slug do projeto (`macro-pad.md`, `mini-tinbot.md`, ...) e contém apenas o corpo do Markdown traduzido para inglês. `ProjectDetail.astro` faz `getEntry('projects-en', project.slug)` quando `lang === 'en'` e cai no corpo em português se a tradução não existir.

## 5. Os 4 projetos atuais

| Slug | Título | Data | Galeria | Vídeos |
|---|---|---|---|---|
| `macro-pad` | Macro Pad Mecânico | 2024-07-12 | 3 imagens | — |
| `mini-tinbot` | Mini-Tinbot | 2024-12-01 | — (só cover) | — |
| `volante-caseiro` | Volante Caseiro | 2026-08-28 | 12 imagens | — |
| `volante-direct-drive` | Base de Volante Direct Drive | 2026-07-01 | 14 imagens | — |

Resumo técnico de cada um (para dar contexto rápido à IA sem precisar reler o Markdown inteiro):

- **Macro Pad Mecânico** — 20 teclas mecânicas, matriz 4×5, Arduino Leonardo USB-C (HID nativo), diodos 1N4007 anti-ghosting, firmware QMK (via QMK MSYS), case impresso em ABS preto/branco.
- **Mini-Tinbot** — TCC de Engenharia Mecatrônica. Robô de mesa com Lolin C3 Mini (ESP32-C3), display TFT IPS ST7789 (172×320) para expressões faciais animadas, 4 servomotores, áudio via DFPlayer Mini + microSD, interface web de controle, OTA, Wi-Fi. Firmware em C++/PlatformIO, modelagem em Fusion 360.
- **Volante Caseiro** — Volante para simuladores com 12 botões frontais + 4 borboletas magnéticas traseiras (16 entradas digitais no total), todas programáveis. ESP32-S2 Lolin Mini usando USB nativo (`USB.h`/`USBHID.h`) com descriptor HID customizado de 16 botões — sem placa controladora externa. Estrutura impressa em PETG/PLA, adesivo vinil fibra de carbono, quick release automotivo, conector USB-C traseiro.
- **Base de Volante Direct Drive** — Motor BLDC de hoverboard (36V, 350W) como force feedback, driver MKS XDrive Mini, encoder magnético MT6701, torque máx. 10 Nm, frame em PETG, comunicação USB-C.

Ao adicionar um novo projeto: criar pasta em `src/content/projects/<slug>/`, incluir `index.md` com todo o frontmatter obrigatório (ver schema acima) + imagens/`cover.webp`, **e também criar `src/content/projects-en/<slug>.md` com o corpo traduzido para inglês** (só o Markdown, sem frontmatter). Depois seguir o padrão do README do repo (`npm install` → `npm run dev` para conferir → commit/push, deploy é automático).

## 6. Sistema de i18n — como funciona de verdade

- **O idioma é definido pelo caminho da URL**: tudo sob `/en/...` é inglês, o resto é português (`defaultLang = 'pt'` em `src/i18n/ui.ts`). O site tem as duas árvores de páginas em `src/pages/` (pt na raiz, en em `src/pages/en/`).
- **Histórico (importante para não regredir):** a primeira versão usava query string `?lang=en`. Isso nunca funcionou porque o site é `output: 'static'` (SSG puro, sem adapter): o Astro pré-renderiza cada rota uma única vez no build, então `Astro.request.url` não enxerga a query string que o visitante adiciona depois. O botão EN parecia não fazer nada. A correção (2026-09-14) foi migrar para rotas por caminho. **Não voltar a usar `?lang=` para decidir idioma em página pré-renderizada.**
- `src/i18n/utils.ts` expõe: `getLang(url)` (detecta `/en` ou `/en/...` no `url.pathname`), `langPath(lang, path)` (prefixa `/en` quando o idioma é `en`) e `switchLangPath(pathname, targetLang)` (usado pelo `LanguageSelector` para apontar para o caminho equivalente no outro idioma).
- Em `layout`/páginas, o idioma é passado explicitamente via prop `lang` (não é mais lido de `Astro.request.url` dentro dos componentes), o que também permite definir `<html lang="pt-BR">` vs `<html lang="en-US">` corretamente.
- Os textos de interface ficam em `src/i18n/ui.ts` (`ui.pt` / `ui.en`), acessados via `t(lang, 'chave')`. Se uma chave faltar no idioma ativo, cai no `defaultLang` (pt) e por último retorna a própria chave como string.
- **O corpo do Markdown de cada projeto agora é bilíngue também**: o frontmatter (`title`/`title_en`, `description`/`description_en`, `excerpt`/`excerpt_en`) carrega os metadados nos dois idiomas, e o corpo em inglês fica na collection paralela `projects-en` (ver seção 4). Ao adicionar/traduzir um projeto, os dois arquivos precisam existir — mas se o `projects-en/<slug>.md` faltar, o site mostra o corpo em português em vez de quebrar.

## 7. Design system (Tailwind)

Paleta "GitHub dark" definida em `tailwind.config.mjs` sob `theme.extend.colors.github` e espelhada em CSS vars em `global.css`:

| Token | Hex | Uso |
|---|---|---|
| `github-bg` | `#0d1117` | fundo geral |
| `github-bg-secondary` | `#161b22` | cards, sidebar drawer |
| `github-bg-tertiary` | `#21262d` | hover states, placeholders de imagem |
| `github-border` | `#30363d` | bordas em hover/foco |
| `github-border-subtle` | `#21262d` | bordas padrão |
| `github-text` | `#c9d1d9` | texto principal |
| `github-text-secondary` | `#8b949e` | texto secundário |
| `github-text-muted` | `#6e7681` | texto terciário/legendas |
| `github-accent` | `#58a6ff` | links, hover de título |
| `github-success` | `#3fb950` | status "concluído" |
| `github-warning` | `#d29922` | status "em andamento" |

Outros tokens custom: `spacing.sidebar = 260px`, `maxWidth.content = 1100px`, `borderRadius.card = 12px`, `borderRadius.image = 8px`. Fontes são system-stack (`-apple-system, Segoe UI...` para sans, `SFMono-Regular, Consolas...` para mono) — **sem Google Fonts nem fontes customizadas**. `darkMode: 'class'` mas na prática o `<html>` sempre tem `class="dark"` fixo em `Layout.astro` — **não há toggle de tema claro/escuro implementado**, o site é dark-only.

O corpo dos projetos (Markdown renderizado) usa a classe `.prose-custom` definida manualmente em `global.css` (não usa `@tailwindcss/typography`) — se for adicionar novos elementos Markdown (ex: `<table>`, `blockquote`, `code`), os estilos já existem lá.

## 8. Deploy e CI/CD

`.github/workflows/deploy.yml`:
1. Trigger: push em `main` ou `workflow_dispatch` manual.
2. `actions/checkout@v4` → `actions/setup-node@v4` (Node 20, cache npm) → `npm ci` → `npm run build` → `actions/upload-pages-artifact@v3` (path `./dist`) → `actions/deploy-pages@v4`.
3. Permissions: `contents: read`, `pages: write`, `id-token: write`. Concurrency group `pages`, sem cancelamento do deploy em andamento.

Gotchas de configuração já resolvidos (não repetir esses erros):
- **`site` em `astro.config.mjs` precisa ser exatamente `https://higorgroto.github.io`** — sem hífen no usuário (não é `higor-groto`).
- **GitHub Pages precisa estar configurado como fonte "GitHub Actions"**, não "Deploy from branch"/Jekyll.
- **`public/.nojekyll` é obrigatório** para o Pages não tentar processar o site com Jekyll.
- **`@astrojs/sitemap` fica travado em `3.2.1`** (instalado com `--save-exact`) — versões mais novas quebram o build com erro de `reduce`. Só atualizar essa dependência testando o build localmente antes.
- Histórico de commits confirma esses ajustes: "Adiciona .nojekyll...", "Remove sitemap temporariamente...", "Fixa @astrojs/sitemap na versao 3.2.1...".

## 9. Convenções a seguir

- Componentes só em `.astro` — não introduzir React/Vue sem necessidade real.
- Novo conteúdo de projeto = pasta em `src/content/projects/<slug>/` com `index.md` seguindo o schema exato da seção 4 (todos os campos `_en` são obrigatórios) + `src/content/projects-en/<slug>.md` com o corpo em inglês.
- **Todo texto novo de UI precisa entrar nos dois idiomas** em `src/i18n/ui.ts` (`ui.pt` e `ui.en`) — a chave ausente cai silenciosamente no português. Ao criar uma página nova, criar a versão em `src/pages/en/` também, usando `langPath()` nos links para não vazar para o idioma errado.
- Preferir classes utilitárias do Tailwind; `global.css` só tem o essencial (reset, vars, `.prose-custom`, scrollbar customizada).
- Toda página deve passar por `SeoHead.astro` (via `Layout.astro`) com `title`/`description`/`slug` definidos quando fizer sentido (ver `[...slug].astro` como referência).
- Imagens do content collection devem usar `image()` do schema + `<Image>` do Astro (não `<img>` direto) para aproveitar a otimização via `sharp` — exceção são imagens fora do content collection (ex: `profile-default.jpeg`, lightbox, que usam `<img>` normal pois vêm de `public/` ou de `ImageMetadata` já processado).
- Acessibilidade: os componentes existentes usam `aria-label`, `role="dialog"`, `aria-modal` (Lightbox) — manter esse padrão em componentes novos.
- Commits em português, estilo direto (ex: "Fixa @astrojs/sitemap na versao 3.2.1 (resolve bug de build)").
- **Estilo de escrita do conteúdo dos projetos:** o Higor prefere prosa natural e fluida em vez de texto fragmentado/"com cara de IA", e evita redundância entre `description`/`excerpt` e o corpo do Markdown — ver o texto do `volante-caseiro` como referência de tom.

## 10. Comandos

```bash
npm install       # instalar dependências
npm run dev       # ambiente de desenvolvimento (astro dev)
npm run build     # build de produção → gera ./dist
npm run preview   # servir o build de produção localmente (astro preview)
```

## 11. Pontos a confirmar com o Higor (não presumi nada aqui)

1. **E-mail de contato:** o código (Sidebar, index.astro, i18n/ui.ts) usa `higor.groto@outlook.com` em todos os lugares — mas há outro e-mail registrado em anotações anteriores (`higorgrotto01@gmail.com`). Qual é o correto/atual para constar na documentação e, se for o caso, ser atualizado no site?
2. ~~**`?lang=en` em produção:**~~ **resolvido em 2026-09-14** — a troca de idioma foi migrada de query string para rotas `/en/` (ver seção 6).
3. ~~**Corpo do Markdown sem tradução:**~~ **resolvido em 2026-09-14** — cada projeto agora tem o corpo em inglês na collection `projects-en` (ver seções 4 e 6).
4. **Aliases do `tsconfig.json` (`@/*`, `@components/*` etc.):** adotar nos imports (refatoração) ou remover do `tsconfig.json` já que não são usados hoje?

---
*Gerado em 2026-09-14 a partir da análise direta do código-fonte (`portfolio.rar`), não apenas da documentação anterior. Substitui a versão de 2026-08-28.*
