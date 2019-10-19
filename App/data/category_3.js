const questions = [
    {
        question: "Determinado circuito precisa ser alimentado com 60 V e 0,8 A. Dispondo-se de uma fonte de 300 V, deve- se colocar em série com o circuito uma resistência de",
        answers: [
            { id: 1, text: "12 Ohm" },
            { id: 2, text: "60 Ohm" } ,
            { id: 3, text: "300 Ohm" },
            { id: 4, text: "1,2 kilo Ohm" }
        ]
    },
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
        question: "Quatro resistências estão ligadas em série. A tensão aplicada ao conjunto é de 50 V. As quedas de tensão nos terminais das três primeiras são, respetivamente: 25 V, 10 V e 13 V. Qual é a queda de tensão nos terminais da última resistência?",
        answers: [
            { id: 1, text: "10V" },
            { id: 2, text: "5V" } ,
            { id: 3, text: "2V", correct: true },
            { id: 4, text: "1V" }
        ]
    }
];

export default questions;
