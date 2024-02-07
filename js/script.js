import ehUmCPF from "./valida-cpf.js"; // chamando a function de valida-cpf.js
import ehMaiorDeIdade from "./valida-idade.js";
const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // o default de um botão submit é recarregar a página
    const listaRespostas = {
        // "chave cadastro": valor do item em si;
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value
    };
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
    window.location.href = './abrir-conta-form-2.html';
});

// seleciona todos elementos 'required'
camposDoFormulario.forEach((campo) => { // para cada um dos campos 'required'
    campo.addEventListener("blur", () => verificaCampo(campo)); // ele vai esperar pelo 'blur' que é quando tira o foco do input
    campo.addEventListener("invalid", evento => evento.preventDefault()); // ele oculta a mensagem padrão do HTML 5 para campo inválido campo.validity = false em alguma das propriedades de validação
});

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {  // chave porque é objeto
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caracteres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caracteres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo); // podemos usar como função daqui porque importamos
    }
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    });
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();
    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}