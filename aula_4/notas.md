## Programas usados

- react
- node
- create-react-app
- nvm
- npm
- npx
- ESLint: padroniza seu código com base nas melhores práticas

## Pastas

- node_modules: nem todos são usados em produção (vão ser carregados muitos)
    - **SEMPRE** ignorar essa pasta no .gitignore por ser muito pesada
- public: certos arquivos que poderão ser acessados publicamente quando o app for hospedado como o robots.txt (SEO) e outros metadados
    - Index.js: Arquivo principal do site
- package.json: Configura o projeto como um todo, incluindo
    - dependencies
    - scripts (como o projeto será executado quando o `npm run` for executado, incluindo start, test, etc.)
    - ESLint pode ser configurado aqui
    - browserlist: configura os navegadores que poderão ou não ser usados