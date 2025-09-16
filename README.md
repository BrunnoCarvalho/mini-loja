# Mini Loja React - 4 Versões de Estilização

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![StyledComponents](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

Este projeto demonstra a implementação da mesma tela de e-commerce em **4 abordagens diferentes de estilização** no React:

1. **CSS Global**  
2. **CSS Modules**  
3. **Tailwind CSS**  
4. **Styled Components**  

A tela inclui:

- **Navbar fixa:** logo, toggle de tema (claro/escuro com persistência) e badge do carrinho.  
- **Grid de produtos responsivo:**  
  - ≤480px: 1 coluna  
  - 481–768px: 2 colunas  
  - 769–1024px: 3 colunas  
  - ≥1025px: 4 colunas  
- **Card de produto:** imagem quadrada (1:1), título com ellipsis, preço, rating (★), tag (“Novo”/“Promo”), botão “Adicionar” com variantes **solid / outline / ghost**.  
- **Estados e interações:** hover, focus visível, disabled, loading com skeleton, dark mode.  
- **Acessibilidade:** navegação por teclado, `aria-*` apropriado, contraste ≥ 4.5:1.  
- **Animações:** transições suaves de 150–250ms.  
- **Dados simulados:** 6 produtos com lazy loading de imagens.  

---

## Como Rodar

1. Clone o repositório:

```bash
git clone https://github.com/BrunnoCarvalho/mini-loja.git
cd mini-loja
```
2. Instale as dependências:
```bash
npm install
```

3. Escolher qual versão executar:

No arquivo `main.jsx` , você precisa definir **qual versão do App será renderizada** dentro do `<StrictMode>`.

Cada versão do projeto tem um App diferente:

- `01-css-global/App` → CSS Global  
- `02-css-modules/AppCssModules` → CSS Modules  
- `03-tailwind/AppTailwind` → Tailwind CSS  
- `04-styled-components/AppStyledComponents` → styled-components  

> **Importante:** Não basta apenas descomentar a linha do import. É necessário substituir o `App` dentro do `<StrictMode>` pelo caminho correto da versão que você deseja executar.

4. Inicie o projeto:

```bash
npm run dev
```

5. Abra no navegador:
```bash
http://localhost:5173
```
## Observações

- **Dark Mode:** persistente entre reloads usando `localStorage`.  
- **Breakpoints e responsividade:** conforme especificado na tarefa.  
- **Skeleton Loading:** simula atraso sem causar layout shift.  
- **Botões:** variantes consistentes em todos os temas.  
- **Organização:** cada versão tem seus próprios componentes e estilos, isolando cada abordagem.  
- **Tokens:** cores, espaçamentos, bordas e sombras centralizados para facilitar manutenção.


## 🧑‍💻 Contato

Desenvolvido por Bruno Vivian Carvalho.

[![Linkedin Badge](https://img.shields.io/badge/-Bruno-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bvcarvalho/)](https://www.linkedin.com/in/bvcarvalho/)




