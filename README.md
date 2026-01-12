# 🎯 Sorteador — Gerador de Números Aleatórios

![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen?style=for-the-badge)

> Projeto prático desenvolvido durante a trilha de aprendizado da **Rocketseat**, focado em lógica de programação, controle de fluxo e transições dinâmicas de interface com **JavaScript Vanilla**.

---

## ✨ Funcionalidades

- **Sorteio Personalizado:** Definição de quantidade de números, valor mínimo e valor máximo.
- **Lógica de Repetição:** Switch que permite ao usuário escolher se os números podem se repetir ou devem ser únicos.
- **Validação de Inputs:** Sistema que impede sorteios inválidos (como quantidade zero ou intervalos impossíveis) através de alertas de segurança.
- **Transição de Telas:** Troca dinâmica entre a configuração do sorteio e a exibição dos resultados sem recarregar a página.
- **Reset de Fluxo:** Botão para reiniciar o sorteio que limpa automaticamente os campos e prepara o sistema para uma nova rodada.

---

## 💻 Tecnologias utilizadas

- **HTML5** — Estrutura semântica para acessibilidade e organização.
- **CSS3** — Layout moderno com Flexbox, variáveis globais e efeitos de hover avançados.
- **JavaScript (ES6+)** — Lógica de aleatoriedade, manipulação do DOM e controle de estado das telas.

---

## 🌐 Veja o projeto online
Acesse o projeto publicado no **GitHub Pages**:  
🔗 [Clique aqui para ver o Sorteador](https://luciaavilla.github.io/Sorteador-de-numeros/)

---

## 📂 Estrutura do projeto
```
/Numbers-Sorteador de números
├─ index.html
├─ styles/
├─ script.js
├─ img/
└─ README.md
```

---

## 🧠 Aprendizados em JavaScript

Neste desafio, apliquei conceitos fundamentais de desenvolvimento web para criar uma aplicação robusta:

- **Lógica de Aleatoriedade:** Uso do objeto `Math` (`Math.random` e `Math.floor`) para gerar números dentro de intervalos específicos.
- **Estruturas de Repetição:** Implementação de loops `while` para garantir que a quantidade solicitada de números seja atingida.
- **Controle de Arrays:** Uso de métodos como `.includes()` para validar a unicidade dos números e `.push()` para armazenamento dos resultados.
- **Manipulação Dinâmica de Classes:** Uso de `classList.add` e `remove` para gerenciar a visibilidade de componentes (escondendo/mostrando telas).
- **Tratamento de Fluxo:** Uso de `event.preventDefault()` e `return` para validar dados antes da execução da lógica principal.

---

👩‍💻 Desenvolvido com 💛 por **Lucia Avilla**, unindo os estudos da [Rocketseat](https://www.rocketseat.com.br/) com a formação em **ADS**.
