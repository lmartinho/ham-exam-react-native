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
            { id: 3, text: "95 V" },
            { id: 4, text: "100 V"}
        ]
    },
    {
        question: "Qual a força eletromotriz de duas baterias de 12 V ligadas em série?",
        answers: [
            { id: 1, text: "6 V" },
            { id: 1, text: "12 V" },
            { id: 1, text: "24 V" },
            { id: 1, text: "Nenhuma das respostas está correta" },
        ]
    },
    {
        question: "Teoricamente, num circuito de corrente contínua, poderemos afirmar que a corrente de curto-circuito é",
        answers: [
            { id: 1, text: "infinita", correct: true },
            { id: 1, text: "nula" },
            { id: 1, text: "sempre igual a 1 Ampère" },
            { id: 1, text: "igual à corrente de circuito aberto" },
        ]
    },
    {
        question: "Qual das situações deveremos evitar ou ter cuidados especiais?",
        answers: [
            { id: 1, text: "Ligação de fontes de tensão em série", correct: true },
            { id: 1, text: "Ligação de fontes de tensão em paralelo" },
            { id: 1, text: "Manutenção de fontes de tensão em vazio" },
            { id: 1, text: "Nenhuma das respostas está correta" },
        ]
    }
];

export default questions;
