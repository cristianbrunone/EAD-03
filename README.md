# 📋 Cadastro de Usuário - EAD SENAI

Projeto desenvolvido como parte da atividade EAD do curso SENAI. Trata-se de um **formulário multi-etapas (stepper wizard)** com interface responsiva, sidebar fixa e navegação intuitiva.

---

## ✨ Funcionalidades

- Formulário dividido em **7 passos** (wizard/stepper).
- **Barra de progresso** dinâmica que indica o avanço do preenchimento.
- **Sidebar fixa** com ícones de navegação e menu hambúrguer para mobile.
- **Layout responsivo** com adaptação para diferentes tamanhos de tela.
- Máscaras de entrada para campos como **CPF, telefone, celular, CEP, CNPJ e cartão de crédito**.
- **Validação de campos** obrigatórios e formatação antes de enviar.
- **Botões de navegação**:
  - Anterior
  - Próximo
  - Limpar
  - Salvar (última etapa)
- Estrutura clara e organizada com HTML, CSS e JavaScript separados.
- Utilização de **Bootstrap 5.3** e **Bootstrap Icons** para facilitar o design e ícones.

---

## 🚀 Tecnologias Utilizadas

- **HTML5**  
- **CSS3** (Flexbox + Media Queries)  
- **JavaScript Vanilla**  
- **Bootstrap 5.3**  
- **Bootstrap Icons**

---

## 🎨 Layout e Componentes

- **Sidebar**  
  Menu lateral fixo com links e ícones. Em mobile, vira menu hambúrguer com overlay.  
  A logo do Senai fica fixa na parte inferior da sidebar.

- **Cabeçalho (Header)**  
  Exibe o título da aplicação e o botão para abrir o menu no mobile.

- **Formulário (Stepper Wizard)**  
  O formulário está organizado em 7 etapas:  
  1. Informações Pessoais  
  2. Contato  
  3. Credenciais de Acesso  
  4. Informações Profissionais  
  5. Preferências e Redes Sociais  
  6. Pagamento e Dados Bancários  
  7. Outros Recursos  

- **Barra de Progresso**  
  Atualizada automaticamente conforme a navegação pelos passos.

- **Rodapé**  
  Rodapé fixo ao final da página com créditos do projeto.

---

## 📝 Detalhes de Implementação

### Máscaras de Campo (JS)
- CPF: `000.000.000-00`
- Telefone: `(00) 0000-0000`
- Celular: `(00) 00000-0000`
- CEP: `00000-000`
- CNPJ: `00.000.000/0000-00`
- Cartão de Crédito: `0000 0000 0000 0000`

### Validação de Campos
- Nome obrigatório.
- CPF no formato correto.
- Celular no formato correto.
- Exibição de alertas caso algum campo obrigatório não seja preenchido corretamente.

### Navegação por Etapas
- O usuário pode ir e voltar nos passos com os botões "Anterior" e "Próximo".
- O botão "Salvar Formulário" aparece apenas no último passo.
- O botão "Limpar" reseta todos os campos do formulário.

---

## 📱 Responsividade

- **Sidebar** oculta automaticamente em telas menores e aparece via menu hambúrguer.
- Componentes do formulário se ajustam para telas mobile (colunas e espaçamento).
- Botões e fontes redimensionados em resoluções menores.

---

## ✅ Requisitos Atendidos

✔️ Interface limpa, simples e intuitiva  
✔️ Estrutura de código organizada (HTML, CSS, JS separados)  
✔️ Layout responsivo para desktop e mobile  
✔️ Máscaras de campos com feedback visual  
✔️ Validação de formulários antes do envio  
✔️ Acessibilidade básica (aria-labels no menu)  
✔️ Componentes Bootstrap e ícones Bootstrap Icons  

---

## 🔧 Como Rodar o Projeto

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em um navegador de sua preferência.
3. Opcional: utilize uma extensão de servidor local, como **Live Server** do VSCode, para melhor experiência.

---

## 🖼️ Prévia do Projeto

(Adicionar capturas de tela aqui, se desejar)

---

## 📚 Créditos

Desenvolvido para fins educacionais no curso **ADS SENAI**.

---

## 📝 Licença

Este projeto é livre para uso educacional.
