// ==================== ELEMENTOS DO MENU ====================
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.querySelector(".overlay");

// ==================== MENU HAMBURGUER ====================

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");

  const isOpen = sidebar.classList.contains("open");

  if (window.innerWidth <= 768) {
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen
      ? `<i class="ri-close-line"></i>`
      : `<i class="ri-menu-line"></i>`;
  }
});


overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");

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
const progressBar = document.querySelector(".progress-bar");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });

  prevBtn.style.display = index === 0 ? "none" : "inline-block";
  nextBtn.style.display = index === steps.length - 1 ? "none" : "inline-block";
  submitBtn.classList.toggle("d-none", index !== steps.length - 1);

  const progress = ((index + 1) / steps.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressBar.innerText = `${index + 1} de ${steps.length}`;
}

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

showStep(currentStep);
