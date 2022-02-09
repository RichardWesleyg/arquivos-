const salajs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salajava = [6, 5, 8, 9, 5, 6]
const salapython = [7, 3,5, 8, 9,5]

function mediasala(notasDaSala){
    const somasDasNotas = notasDasSala.reduce((acum, atual)=> atual + acum,0)
    return somaDasNotas/notasDasSalas.length 
}

console.log(`media da sala de javaScript ${mediasala(salaJS)}`)
console.log(`media da sala de java ${mediasala(salaJava)}`)
console.log(`media da sala de python ${mediasala(salaPython)}`)

const notas = [10, 6.5 , 8 ,7]

const media = notas.reduce((acum,atual) => atual + acum, 0) /notas.length
console.log(media)