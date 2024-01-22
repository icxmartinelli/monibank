export default function ehUmCPF(campo) { // exportada como padrão quando esse arquivo é chamado
    const cpf = campo.value.replace(/\.|-/g, ""); // está removendo '.' e '-'
    validaNumerosRepetidos(cpf);
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
    return numerosRepetidos.includes(cpf); // vai percorrer a lista e se achar o cpf retorna verdadeiro
}