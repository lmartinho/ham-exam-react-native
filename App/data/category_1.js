/**
 * Set of questions for the category 1 exam.
 * @see {@link https://www.anacom.pt/streaming/perguntasCategoria1.pdf?contentId=1383815&field=ATTACHED_FILE} Example questions for the category 1 exam, in pt-PT.
 */
const questions = [
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
        question: "Determinado circuito precisa ser alimentado com 60 V e 0,8 A. Dispondo-se de uma fonte de 300 V, deve- se colocar em série com o circuito uma resistência de",
        answers: [
            { id: 1, text: "12 Ohm" },
            { id: 2, text: "60 Ohm" } ,
            { id: 3, text: "300 Ohm" },
            { id: 4, text: "1,2 kilo Ohm" }
        ]
    }
];

export default questions;
