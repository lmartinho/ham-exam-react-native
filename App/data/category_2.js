/**
 * Set of questions for the category 2 exam.
 * @see {@link https://www.anacom.pt/streaming/perguntasCategoria2.pdf?contentId=1383816&field=ATTACHED_FILE} Example questions for the category 2 exam, in pt-PT.
 */
const questions = [
    {
        question: "Por um circuito resistivo de 120 Ohm circula uma corrente de 0,15 A, quando alimentado por uma tensão de 18 V. Se for alimentado por uma tensão de 36 V, a corrente",
        answers: [
            { id: 1, text: "diminui para 0,075 A" },
            { id: 2, text: "aumenta para 0,300 A", correct: true } ,
            { id: 3, text: "diminui para 1/4 do valor" },
            { id: 4, text: "aumenta para 4 vezes o valor" }
        ]
    },
    {
        question: "Determinado circuito precisa ser alimentado com 60 V e 0,8 A. Dispondo-se de uma fonte de 300 V, deve- se colocar em série com o circuito uma resistência de",
        answers: [
            { id: 1, text: "12 Ohm" },
            { id: 2, text: "60 Ohm" } ,
            { id: 3, text: "300 Ohm", correct: true },
            { id: 4, text: "1,2 kilo Ohm" }
        ]
    },
    {
        question: "Quatro resistências estão ligadas em série. A tensão aplicada ao conjunto é de 50 V. As quedas de tensão nos terminais das três primeiras são, respetivamente: 25 V, 10 V e 13 V. Qual é a queda de tensão nos terminais da última resistência?",
        answers: [
            { id: 1, text: "10V" },
            { id: 2, text: "5V" } ,
            { id: 3, text: "2V", correct: true },
            { id: 4, text: "1V" }
        ]
    },
    {
        question: "Qual a unidade em que se expressa a capacidade de uma bateria?",
        answers: [
            { id: 1, text: "A/h" },
            { id: 2, text: "A.h", correct: true },
            { id: 3, text: "VA" },
            { id: 4, text: "V/h" }
        ]
    },
    {
        question: "Qual o consumo de energia associado a um equipamento de 1 W que opera durante uma hora?",
        answers: [
            { id: 1, text: "1 J" },
            { id: 2, text: "24 J" },
            { id: 3, text: "60 J" },
            { id: 4, text: "3600 J", correct: true}
        ]
    },
    {
        question: "A capacidade de uma bateria é de 20 A.h. Esta bateria é aplicada a um circuito ao qual fornece uma corrente constante de 2 A. Qual a previsão teórica do tempo de funcionamento do referido circuito?",
        answers: [
            { id: 1, text: "1 hora" },
            { id: 2, text: "2 horas" },
            { id: 3, text: "5 horas" },
            { id: 4, text: "10 horas", correct: true}
        ]
    },
    {
        question: "Um gerador com a f.e.m. de 100 V e com 0,5 Ohm de resistência interna, debita sobre um circuito exterior uma corrente de 10 A. Qual é a tensão aos terminais do gerador?",
        answers: [
            { id: 1, text: "80 V" },
            { id: 2, text: "90 V" },
            { id: 3, text: "95 V", correct: true },
            { id: 4, text: "100 V"}
        ]
    },
    {
        question: "Qual a força eletromotriz de duas baterias de 12 V ligadas em série?",
        answers: [
            { id: 1, text: "6 V" },
            { id: 2, text: "12 V" },
            { id: 3, text: "24 V", correct: true },
            { id: 4, text: "Nenhuma das respostas está correta" },
        ]
    },
    {
        question: "Teoricamente, num circuito de corrente contínua, poderemos afirmar que a corrente de curto-circuito é",
        answers: [
            { id: 1, text: "infinita", correct: true },
            { id: 2, text: "nula" },
            { id: 3, text: "sempre igual a 1 Ampère" },
            { id: 4, text: "igual à corrente de circuito aberto" },
        ]
    },
    {
        question: "Qual das situações deveremos evitar ou ter cuidados especiais?",
        answers: [
            { id: 1, text: "Ligação de fontes de tensão em série" },
            { id: 2, text: "Ligação de fontes de tensão em paralelo" },
            { id: 3, text: "Manutenção de fontes de tensão em vazio" },
            { id: 4, text: "Nenhuma das respostas está correta", correct: true },
        ]
    },
    {
        question: "A intensidade de campo elétrico é expressa em",
        answers: [
            { id: 1, text: "metro" },
            { id: 2, text: "Volt por metro", correct: true },
            { id: 3, text: "Watt" },
            { id: 4, text: "Volt" }
        ]
    },
    {
        question: "A intensidade do campo elétrico",
        answers: [
            { id: 1, text: "cresce com a raiz quadrada da distância" },
            { id: 2, text: "decresce com a raiz quadrada da distância" },
            { id: 3, text: "decresce com o quadrado da distância", correct: true },
            { id: 4, text: "cresce com o quadrado da distância" }
        ]
    },
    {
        question: "Uma corrente a passar num condutor cria na sua proximidade",
        answers: [
            { id: 1, text: "um campo elétrico" },
            { id: 2, text: "um campo magnético", correct: true },
            { id: 3, text: "uma corrente elétrica" },
            { id: 4, text: "uma região luminosa" }
        ]
    },
    {
        question: "O que é o campo magnético?",
        answers: [
            { id: 1, text: "É um campo, numa dada região do espaço, onde se manifesta a ação do efeito gravitacional" },
            { id: 2, text: "É um campo numa dada região do espaço, onde se manifesta a ação de uma carga elétrica estática" },
            { id: 3, text: "É um campo, numa dada região do espaço, onde se manifesta a ação de cargas elétricas em movimento num condutor", correct: true },
            { id: 4, text: "É um campo, numa dada região do espaço, tendo necessariamente ar, onde se manifesta a ação de fontes de luz coerente" }
        ]
    },
    {
        question: "Qual das afirmações está correta?",
        answers: [
            { id: 1, text: "Uma carga positiva estática produz um campo magnético em que as linhas de força do campo são concêntricas" },
            { id: 2, text: "Um condutor onde flui uma corrente elétrica não produz qualquer campo magnético, a menos que esteja imerso numa substância líquida" },
            { id: 3, text: "As linhas do campo magnético, de um condutor onde flui uma corrente elétrica, são perpendiculares ao condutor", correct: true },
            { id: 4, text: "As linhas do campo magnético de um condutor onde flui uma corrente elétrica formam círculos concêntricos ao redor do condutor" }
        ]
    },
    {
        question: "Qual a frequência cujo comprimento de onda é 14,117 m?",
        answers: [
            { id: 1, text: "14,117 MHz" },
            { id: 2, text: "28,234 MHz" },
            { id: 3, text: "21,250 MHz", correct: true },
            { id: 4, text: "7,000 MHz" },
        ]
    },
    {
        question: "O comprimento de onda da frequência de 25 MHz é",
        answers: [
            { id: 1, text: "10 m" },
            { id: 2, text: "12 m", correct: true },
            { id: 3, text: "15 m" },
            { id: 4, text: "18 m" }
        ]
    },
    {
        question: "Qual das seguintes características não está associada às ondas eletromagnéticas?",
        answers: [
            { id: 1, text: "Polarização" },
            { id: 2, text: "Amplitude" },
            { id: 3, text: "Frequência" },
            { id: 4, text: "Temperatura", correct: true }
        ]
    },
    {
        question: "Qual a unidade de medida de frequência?",
        answers: [
            { id: 1, text: "Farad" },
            { id: 2, text: "Henry" },
            { id: 3, text: "Hertz", correct: true },
            { id: 4, text: "Watt" }
        ]
    },
    {
        question: "Exprima 7,54 MHz em kHz.",
        answers: [
            { id: 1, text: "754 kHz" },
            { id: 2, text: "7 540 kHz", correct: true },
            { id: 3, text: "0,754 kHz" },
            { id: 4, text: "0,0754 kHz" }
        ]
    },
    {
        question: "O período T de uma onda sinusoidal é",
        answers: [
            { id: 1, text: "o dobro da sua frequência" },
            { id: 2, text: "metade da sua frequência" },
            { id: 3, text: "o inverso da sua frequência", correct: true },
            { id: 4, text: "o produto da sua frequência pelo seu comprimento de onda" }
        ]
    },
    {
        question: "O valor eficaz de uma onda sinusoidal com 1 Volt de amplitude máxima é",
        answers: [
            { id: 1, text: "0,707 V", correct: true },
            { id: 2, text: "1,414 V" },
            { id: 3, text: "0V" },
            { id: 4, text: "2V" }
        ]
    },
    {
        question: "A uma determinada frequência f corresponde um determinado período T. Se a frequência duplicar o período",
        answers: [
            { id: 1, text: "duplica" },
            { id: 2, text: "não se altera" },
            { id: 3, text: "passa para um quarto" },
            { id: 4, text: "passa para metade", correct: true  }
        ]
    },
    {
        question: "Se um voltímetro indicar uma tensão de 34 volt r.m.s. na medição de uma onda sinusoidal, qual é aproximadamente a sua tensão de pico?",
        answers: [
            { id: 1, text: "123 volt" },
            { id: 2, text: "96 volt" },
            { id: 3, text: "55 volt" },
            { id: 4, text: "48 volt", correct: true }
        ]
    },
    {
        question: "O período de uma onda sinusoidal exprime-se em",
        answers: [
            { id: 1, text: "metros" },
            { id: 2, text: "segundos", correct: true },
            { id: 3, text: "Hertz" },
            { id: 4, text: "metros por segundo" }
        ]
    },
    {
        question: "Qual das afirmações está correta?",
        answers: [
            { id: 1, text: "Uma onda quadrada pode ser representada por um conjunto de ondas sinusoidais", correct: true },
            { id: 2, text: "Obtém-se a onda sinusoidal fundamental de uma onda quadrada, aplicando um filtro passa-baixo" },
            { id: 3, text: "As ondas quadradas são fundamentais na representação e processamento dos sinais digitais" },
            { id: 4, text: "Todas as respostas anteriores estão corretas" }
        ]
    },
    {
        question: "A frequência de uma onda quadrada expressa-se em",
        answers: [
            { id: 1, text: "zeros e uns" },
            { id: 2, text: "segundos" },
            { id: 3, text: "Hertz", correct: true },
            { id: 4, text: "metros" }
        ]
    },
    {
        question: "O dispositivo que transforma os sinais de voz em sinais elétricos, designa-se por",
        answers: [
            { id: 1, text: "microfone", correct: true },
            { id: 2, text: "amplificador" },
            { id: 3, text: "auscultador" },
            { id: 4, text: "misturador" }
        ]
    },
    {
        question: "Qual é a largura de faixa necessária numa emissão de modulação de frequência em que o desvio de frequência é 25 kHz e a máxima frequência de modulação é 3 kHz?",
        answers: [
            { id: 1, text: "22 kHz" },
            { id: 2, text: "25 kHz" },
            { id: 3, text: "28 kHz" },
            { id: 4, text: "56 kHz", correct: true }
        ]
    },
    {
        question: "Define-se índice de modulação em frequência modulada como a relação entre o",
        answers: [
            { id: 1, text: "desvio máximo e a mais alta frequência de modulação", correct: true },
            { id: 2, text: "desvio mínimo e a mais alta frequência de modulação" },
            { id: 3, text: "desvio máximo e a mais baixa frequência de modulação" },
            { id: 4, text: "desvio mínimo e a mais baixa frequência de modulação" }
        ]
    },
    {
        question: "Num emissor de modulação de frequência, modulado a ± 5 kHz, a segunda harmónica tem o desvio de",
        answers: [
            { id: 1, text: "± 2,5 kHz" },
            { id: 2, text: "± 5,0 kHz" },
            { id: 3, text: "± 10 kHz", correct: true },
            { id: 4, text: "± 20 kHz" },
        ]
    }
];

export default questions;
