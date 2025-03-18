// ==================== ELEMENTOS DO MENU ====================
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// ==================== MENU HAMBURGUER ====================

// Clique no botão hamburguer
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");

  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);

  // Esconde o botão hamburguer quando abre a sidebar
  if (sidebar.classList.contains("open")) {
    menuToggle.style.display = "none";
  }
});

// Clique no overlay para fechar o menu
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");

  // Exibe o botão hamburguer novamente
  menuToggle.style.display = "flex";
  menuToggle.setAttribute("aria-expanded", false);
});


// ==================== MÁSCARAS DE CAMPOS ====================

function maskInput(selector, maskFunction) {
  const element = document.querySelector(selector);
  if (!element) return;

  element.addEventListener("input", (e) => {
    e.target.value = maskFunction(e.target.value);
  });
}

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


// ==================== VALIDAÇÃO DO FORMULÁRIO ====================

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


// ==================== CONTROLE DOS STEPS ====================
let currentStep = 0;
const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const submitBtn = document.getElementById("submitBtn");
const progressBar = document.getElementById("progressBar");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });

  // Atualiza botões
  prevBtn.style.display = index === 0 ? "none" : "inline-block";
  nextBtn.style.display = index === steps.length - 1 ? "none" : "inline-block";
  submitBtn.classList.toggle("d-none", index !== steps.length - 1);

  // Atualiza a barra de progresso
  const progress = ((index + 1) / steps.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressBar.innerText = `Passo ${index + 1} de ${steps.length}`;
}

// Botões
nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

// Inicializa
showStep(currentStep);

