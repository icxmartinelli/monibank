export default function ehUmCPF(campo) { // exportada como padrão quando esse arquivo é chamado
    const cpf = campo.value.replace(/\.|-/g, ""); // está removendo '.' e '-'
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        console.log("rapaz, esse cpf não existe");
    } else {
        console.log("sucesso, existe");
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    // console.log("repetido " + numerosRepetidos.includes(cpf) + " " + `${cpf.length}`);
    return numerosRepetidos.includes(cpf); // vai percorrer a lista e se achar o cpf retorna verdadeiro
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    // console.log("primeiro " + soma != cpf[9] + " " + soma);
    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}