// Elementos do menu
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Abrir/Fechar menu no mobile
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
  menuToggle.classList.toggle("active");

  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
});

// Fecha ao clicar no overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", false);
});

// Máscaras de campos
function maskInput(selector, maskFunction) {
  const element = document.querySelector(selector);
  if (!element) return;
  element.addEventListener("input", (e) => {
    e.target.value = maskFunction(e.target.value);
  });
}

// Funções de máscaras
const masks = {
  cpf(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  },
  telefone(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  },
  celular(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  },
  cep(value) {
    return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
  },
  cnpj(value) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  },
  cartao(value) {
    return value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
  },
};

// Aplicação das máscaras
maskInput("#cpf", masks.cpf);
maskInput("#telefone", masks.telefone);
maskInput("#celular", masks.celular);
maskInput("#cep", masks.cep);
maskInput("#cnpj", masks.cnpj);
maskInput("#cartao", masks.cartao);

// Validação básica de formulário
const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome");
  const cpf = document.getElementById("cpf");
  const celular = document.getElementById("celular");

  let valid = true;
  let messages = [];

  if (!nome.value.trim()) {
    valid = false;
    messages.push("O campo Nome é obrigatório.");
  }

  if (!cpf.value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
    valid = false;
    messages.push("CPF inválido. Use o formato 000.000.000-00.");
  }

  if (!celular.value.match(/^\(\d{2}\) \d{5}-\d{4}$/)) {
    valid = false;
    messages.push("Celular inválido. Use o formato (00) 00000-0000.");
  }

  if (!valid) {
    alert(messages.join("\n"));
  } else {
    alert("Formulário enviado com sucesso!");
    form.reset();
  }
});
