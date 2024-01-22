import ehUmCPF from "./valida-cpf"; // chamando a function de valida-cpf.js
const camposDoFormulario = documento.querySelectorAll("[required]");
// seleciona todos elementos 'required'
camposDoFormulario.forEach((campo) => { // para cada um dos campos 'required'
    campo.addEventListener("blur", () => veificaCampo(campo)); // ele vai esperar pelo 'blur' que é quando tira o foco do input
});

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo); // podemos usar como função daqui porque importamos
    }
}