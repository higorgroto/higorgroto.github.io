# RESUME.md — Portfolio Higor Groto

## Sobre o Projeto

Portfólio pessoal de Higor Cristian Groto — engenheiro de software e entusiasta de robótica, eletrônica e projetos open-source. O site é uma vitrine interativa de projetos técnicos, com foco em design minimalista, acessibilidade, internacionalização (pt/en) e performance.

Construído com **Astro** + **Tailwind CSS**, utiliza conteúdo estático (MD) para os projetos, com geração de páginas dinâmicas, SEO otimizado e layout inspirado no design escuro do GitHub.

## Tecnologias

| Tecnologia | Uso |
|---|---|
| Astro (v5+) | Framework estático / SSG |
| TypeScript | Tipagem do código |
| Tailwind CSS | Estilização utilitária |
| MDX / Markdown | Conteúdo dos projetos |
| i18n (pt/en) | Internacionalização manual via `src/i18n/` |
| SEO / JSON-LD | Componentes `SeoHead.astro` |
| Lightbox | Visualizador de imagens personalizadas |
| VideoPlayer | Suporte a YouTube e vídeos locais |

## Estrutura do Projeto

```text
portfolio_v2_k3/
├── src/
│   ├── components/          # Componentes Astro reutilizáveis
│   │   ├── Sidebar.astro     # Menu lateral fixo + busca + filtros
│   │   ├── ProjectCard.astro # Card de projeto na listagem
│   │   ├── SearchFilter.astro # Filtro por texto/tags
│   │   ├── Lightbox.astro    # Visualizador de imagens
│   │   ├── VideoPlayer.astro # Player de vídeo (YouTube / local)
│   │   ├── LanguageSelector.astro # Seletor pt/en
│   │   ├── ProjectNav.astro  # Navegação entre projetos
│   │   └── SeoHead.astro     # Meta tags SEO + JSON-LD
│   ├── content/              # Conteúdo estático (Astro Content Collections)
│   │   ├── config.ts         # Schema dos projetos
│   │   └── projects/         # Um diretório por projeto (MD + imagens)
│   │       ├── macro-pad/
│   │       ├── mini-tinbot/
│   │       └── volante-direct-drive/
│   ├── layouts/              # Layout base (`Layout.astro`)
│   ├── pages/                # Rotas da aplicação
│   │   ├── index.astro       # Página inicial (lista de projetos)
│   │   ├── about.astro       # Sobre o autor (não encontrado no projeto atual)
│   │   └── projects/[...slug].astro # Página de projeto individual
│   ├── i18n/                 # Internacionalização
│   │   ├── ui.ts             # Chaves de texto (pt/en)
│   │   └── utils.ts          # Funções auxiliares
│   └── styles/
│       └── global.css        # Estilos globais (fontes, cores base)
├── public/
│   ├── images/               # Imagens estáticas (ex: profile-default.jpeg)
│   └── robots.txt
├── astro.config.mjs          # Configuração Astro
├── tailwind.config.mjs       # Configuração Tailwind
├── tsconfig.json             # Configuração TypeScript
└── package.json
```

## Conteúdo e Projetos

O site apresenta **3 projetos principais**, cada um documentado com arquivo `index.md` no diretório correspondente em `src/content/projects/`:

1. **Macro Pad** — Teclado macro programável com firmware customizado
2. **Mini Tinbot** — Robô pequeno para exploração e educação
3. **Volante Direct Drive** — Sistema de direção com feedback direto para simuladores

Cada projeto contém:
- Título, descrição, tags, imagens
- Seções de código / configuração via Markdown
- Suporte a vídeos (YouTube ou local)
- Imagens com lightbox interativo

## Padrões e Convenções a Seguir

- **Componentes em `.astro`** — Não misturar React/Vue sem necessidade.
- **Conteúdo em Markdown** — Projetos devem ser adicionados como pastas em `src/content/projects/` com arquivo `index.md`.
- **i18n manual** — Textos da interface estão em `src/i18n/ui.ts`; textos de conteúdo devem incluir versões `pt` e `en` quando aplicável.
- **Tailwind utilitário** — Evitar CSS customizado além de `global.css`; preferir classes utilitárias.
- **SEO obrigatório** — Toda página deve incluir `SeoHead.astro` com `lang`, `title` e `description` definidos.
- **Imagens otimizadas** — Usar `import.meta.glob()` e componentes `Image` do Astro quando possível.
- **Acessibilidade** — Componentes incluem `aria-label`, `role`, `aria-modal`; manter esses padrões.

## Como Executar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build
```

## Notas Importantes

- A página `about.astro` não existe no diretório atual, embora exista referência no `Layout.astro` ou `Sidebar.astro`.
- O site é hospedado em `https://higorgroto.github.io` (indicado no `SeoHead.astro`).

---
*Gerado em 2026-08-28 — para referência rápida do projeto portfolio_v2_k3.*
