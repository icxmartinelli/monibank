export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);
    // console.log(validaIdade(dataNascimento));
}

function validaIdade(data) {
    const dataAtual = new Date(); //new date vai pegar a data atual
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}