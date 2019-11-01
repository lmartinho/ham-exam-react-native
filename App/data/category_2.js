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
    },
    {
        question: "Para converter 2610 kHz em 145 kHz é necessário",
        answers: [
            { id: 1, text: "um oscilador de 2465 kHz", correct: true },
            { id: 2, text: "um transformador de 18/1" },
            { id: 3, text: "um amplificador sintonizado em 2610 kHz" },
            { id: 4, text: "um desmodulador de 145 kHz" }
        ]
    },
    {
        question: "Em modulação de amplitude, a que se dá o nome de faixas laterais?",
        answers: [
            { id: 1, text: "Ao conjunto de frequências situadas imediatamente abaixo e acima da frequência da portadora e que resultam da soma e da diferença entre a frequência da portadora e de cada uma das frequências que a modulam", correct: true },
            { id: 2, text: "A todas as frequências situadas aos lados da portadora" },
            { id: 3, text: "Ao conjunto de frequências que modulam a portadora" },
            { id: 4, text: "A todas as frequências que o recetor possa receber simultaneamente com a portadora" },
        ]
    },
    {
        question: "Em modulação de frequência, a que se dá o nome de desvio de frequência?",
        answers: [
            { id: 1, text: "À diferença entre o valor máximo de frequência que a onda modulada apresenta devido à modulação e a frequência da portadora", correct: true },
            { id: 2, text: "À diferença entre o valor máximo e o valor mínimo da frequência da onda modulada" },
            { id: 3, text: "Ao dobro da tolerância de frequência permitida regulamentarmente" },
            { id: 4, text: "Ao número de kHz que a frequência da portadora se afasta do seu valor nominal devido à falta de estabilidade do oscilador, na ausência de modulação" },
        ]
    },
    {
        question: "Qual é um dos inconvenientes da sobremodulação?",
        answers: [
            { id: 1, text: "Produz um aumento significativo da potência aparente do emissor" },
            { id: 2, text: "Provoca o aumento da largura de faixa ocupada pela emissão, o que poderá originar interferências na receção dos canais adjacentes", correct: true },
            { id: 3, text: "Produz uma emissão em faixa mais estreita" },
            { id: 4, text: "Provoca uma saturação na antena do emissor" }
        ]
    },
    {
        question: "Numa emissão em AM, a maior parte da potência é usada para transmitir",
        answers: [
            { id: 1, text: "a banda lateral inferior" },
            { id: 2, text: "a banda lateral superior" },
            { id: 3, text: "as duas bandas laterais" },
            { id: 4, text: "a portadora", correct: true }
        ]
    },
    {
        question: "Uma desvantagem da receção em AM em relação à receção em FM é",
        answers: [
            { id: 1, text: "a menor largura de faixa utilizada" },
            { id: 2, text: "a maior sensibilidade aos ruídos interferentes", correct: true },
            { id: 3, text: "a menor estabilidade" },
            { id: 4, text: "o maior consumo de energia" }
        ]
    },
    {
        question: "Numa comunicação em AM, transmite-se",
        answers: [
            { id: 1, text: "somente a faixa lateral inferior" },
            { id: 2, text: "somente a faixa lateral superior" },
            { id: 3, text: "somente as duas faixas laterais" },
            { id: 4, text: "somente a portadora e as duas faixas laterais", correct: true }
        ]
    },
    {
        question: "Em modulação de frequência nas faixas de UHF com espaçamento entre canais de 25 kHz, a largura de faixa necessária em geral para uma emissão radiofónica é de",
        answers: [
            { id: 1, text: "500 Hz" },
            { id: 2, text: "16 kHz", correct: true },
            { id: 3, text: "22,5 kHz" },
            { id: 4, text: "25 kHz" }
        ]
    },
    {
        question: "Em modulação de frequência, quanto maior é o desvio de frequência",
        answers: [
            { id: 1, text: "menos ruído se nota no recetor e maior é a faixa de frequências ocupada", correct: true },
            { id: 2, text: "menos ruído se nota no recetor e menor é a faixa de frequências ocupada" },
            { id: 3, text: "mais ruído se nota no recetor e maior é a faixa de frequências ocupada" },
            { id: 4, text: "mais ruído se nota no recetor e menor é a faixa de frequências ocupada" }
        ]
    },
    {
        question: "Uma modulação de faixa lateral única, ou SSB, é um tipo de modulação",
        answers: [
            { id: 1, text: "de frequência" },
            { id: 2, text: "de amplitude", correct: true },
            { id: 3, text: "de fase kHz" },
            { id: 4, text: "outro tipo" }
        ]
    },
    {
        question: "Na transmissão utilizando modulação em faixa lateral única, ou SSB, com portadora suprimida",
        answers: [
            { id: 1, text: "a portadora é transmitida" },
            { id: 2, text: "a maior potência é consumida pela portadora" },
            { id: 3, text: "a desmodulação é mais simples do que na modulação em dupla faixa lateral ou DSB" },
            { id: 4, text: "há uma maior economia do espectro", correct: true }
        ]
    },
    {
        question: "No âmbito das radiocomunicações o que significa a sigla CW?",
        answers: [
            { id: 1, text: "Capacitive Wiring" },
            { id: 2, text: "Condensador de Watt" },
            { id: 3, text: "Continuous Wave", correct: true },
            { id: 4, text: "Coil in Water" }
        ]
    },
    {
        question: "A largura de faixa ocupada por uma emissão",
        answers: [
            { id: 1, text: "é sempre menor que a largura de faixa necessária para essa emissão" },
            { id: 2, text: "não engloba todas as frequências radiadas pelo emissor", correct: true },
            { id: 3, text: "pode ser desconhecida, sem inconveniente" },
            { id: 4, text: "só pode ser medida nos Centros de Monitorização e Controlo do Espectro da ANACOM" }
        ]
    },
    {
        question: "Uma emissão em dupla faixa lateral é",
        answers: [
            { id: 1, text: "uma emissão em modulação de frequência" },
            { id: 2, text: "uma emissão em modulação de fase" },
            { id: 3, text: "uma emissão em modulação de amplitude", correct: true },
            { id: 4, text: "uma emissão em qualquer tipo de modulação" }
        ]
    },
    {
        question: "Qual das seguintes afirmações é verdadeira no que respeita à modulação de voz em banda lateral única?",
        answers: [
            { id: 1, text: "É um tipo de modulação em amplitude que suprime uma banda lateral e a portadora", correct: true },
            { id: 2, text: "É um tipo de modulação em amplitude que enfatiza as frequências mais elevadas" },
            { id: 3, text: "Reconstitui o sinal nas frequências elevadas com maior eficiência do que nas frequências baixas" },
            { id: 4, text: "É o único tipo de modulação de voz autorizado para operar em faixas HF entre os 14 e 30 MHz" }
        ]
    },
    {
        question: "Como se designa o processo de alteração do ângulo de fase de uma onda de RF para transmissão de informação?",
        answers: [
            { id: 1, text: "Convolução de fase" },
            { id: 2, text: "Modulação de fase", correct: true },
            { id: 3, text: "Convolução de ângulo" },
            { id: 4, text: "Inversão de radianos" }
        ]
    },
    {
        question: "Que tipo de transmissão provoca variação do nível instantâneo de potência do sinal de RF para transmissão de informação?",
        answers: [
            { id: 1, text: "Modulação por pulsos codificados" },
            { id: 2, text: "Modulação de fase" },
            { id: 3, text: "Modulação de frequência" },
            // Modulates the amplitude of the carrier thus affect signal power
            { id: 4, text: "Modulação de amplitude", correct: true }
        ]
    },
    {
        question: "Qual das seguintes emissões de fonia usa uma largura de banda mais estreita?",
        answers: [
            { id: 1, text: "Banda lateral única", correct: true },
            { id: 2, text: "Banda lateral dupla" },
            { id: 3, text: "Modulação de fase" },
            { id: 4, text: "Modulação de frequência" }
        ]
    },
    {
        question: "Qual é o índice de modulação de um sinal de fonia FM com um desvio máximo da portadora de ± 6kHz, quando modulada com uma frequência de modulação de 2kHz?",
        answers: [
            { id: 1, text: "6000" },
            { id: 2, text: "3", correct: true },
            { id: 3, text: "2000" },
            { id: 4, text: "12" }
        ]
    },
    {
        question: "Qual a potência associada a um sinal sinusoidal que faz passar uma corrente eficaz de 2 A numa resistência de 10 Ohm?",
        answers: [
            { id: 1, text: "20 W" },
            { id: 2, text: "5 W" },
            { id: 3, text: "40 W", correct: true },
            { id: 4, text: "200 W" }
        ]
    },
    {
        question: "Por precaução teve que se pôr um atenuador de 10 dB entre um pré-amplificador e um amplificador. Sabendo que o valor máximo na saída do pré-amplificador é de 50 W, qual a potência máxima à entrada do amplificador?",
        answers: [
            { id: 1, text: "60 W" },
            { id: 2, text: "10 W" },
            { id: 3, text: "1 W" },
            { id: 4, text: "5 W", correct: true }
        ]
    },
    {
        question: "Qual das seguintes frases é verdadeira?",
        answers: [
            { id: 1, text: "Um amplificador é tanto mais eficiente quanto maior potência conseguir debitar numa carga de 50 Ohm" },
            { id: 2, text: "Um amplificador é tanto mais eficiente quanto menor for a entrada para um dado sinal de saída" },
            { id: 3, text: "Um amplificador é tanto mais eficiente quanto menor for o consumo para uma dada potência de saída", correct: true },
            { id: 4, text: "Um amplificador é tanto mais eficiente quanto maior for o consumo para uma dada potência de saída" }
        ]
    },
    {
        question: "Um aumento de potência para o dobro ou a redução da mesma para metade resulta na variação de quantos dB?",
        answers: [
            { id: 1, text: "2 dB" },
            { id: 2, text: "3 dB", correct: true },
            { id: 3, text: "6 dB" },
            { id: 4, text: "12 dB" }
        ]
    },
    {
        question: "O sinal na entrada de um amplificador é de 1 V rms e à saída de 10 V rms. Este amplificador tem um ganho de",
        answers: [
            { id: 1, text: "3 dB" },
            { id: 2, text: "6 dB" },
            { id: 3, text: "10 dB", correct: true },
            { id: 4, text: "20 dB" }
        ]
    },
    {
        question: "Dois amplificadores com ganhos de 10 dB e de 40 dB estão ligados em cascata. O ganho do conjunto é de",
        answers: [
            { id: 1, text: "8 dB" },
            { id: 2, text: "30 dB" },
            { id: 3, text: "50 dB", correct: true },
            { id: 4, text: "400 dB" }
        ]
    },
    {
        question: "Qual a resistência total de duas resistências de 12,5 Ohm cada, quando ligadas em série?",
        answers: [
            { id: 1, text: "12,5 Ohm" },
            { id: 2, text: "25 Ohm", correct: true },
            { id: 3, text: "50 Ohm" },
            { id: 4, text: "37,5 Ohm" }
        ]
    },
    {
        question: "A associação que resulta numa resistência equivalente de 600 Ohm é a série das seguintes resistências",
        answers: [
            { id: 1, text: "100 Ohm, 80 Ohm, 20 Ohm" },
            { id: 2, text: "200 Ohm, 150 Ohm, 50 Ohm" },
            { id: 3, text: "200 Ohm, 200 Ohm, 200 Ohm", correct: true },
            { id: 4, text: "600 Ohm, 600 Ohm, 600 Ohm" }
        ]
    },
    {
        question: "Para obter uma resistência equivalente de 62,5 Ohm é necessário associar",
        answers: [
            { id: 1, text: "3 resistências de 10 Ohm em série" },
            { id: 2, text: "4 resistências de 250 Ohm em paralelo", correct: true },
            { id: 3, text: "5 resistências de 200 Ohm em série" },
            { id: 4, text: "10 resistências de 10 Ohm em paralelo" },
        ],
        explanation: "1/62,5 = (1/R)*N. 1/62,5 = N/R. R/N = 62,5. 250/4 = 62,5"
    },
    {
        question: "Se duas resistências de igual valor, estão associadas em paralelo, a resistência total será",
        answers: [
            { id: 1, text: "de igual valor" },
            { id: 2, text: "o dobro do valor de cada uma delas" },
            { id: 3, text: "metade de cada uma delas", correct: true },
            { id: 4, text: "um quarto do valor de cada uma delas" },
        ],
        explanation: "1/Req = 1/R + 1/R. 1/Req = 2/R. Req = R/2"
    },
    {
        question: "A resistência equivalente a uma associação de 10 resistências de 100 Ohm cada uma, em paralelo, é de",
        answers: [
            { id: 1, text: "1 Ohm" },
            { id: 2, text: "10 Ohm", correct: true },
            { id: 3, text: "12,5 Ohm" },
            { id: 4, text: "25 Ohm" },
        ],
        explanation: "1/Req = (1/R) * 10. 1/Req = 10/R. Req = R/10"
    },
    {
        question: "Aplicando um sinal sinusoidal a uma resistência ideal",
        answers: [
            { id: 1, text: "a corrente está em avanço relativamente à tensão" },
            { id: 2, text: "a tensão está em avanço relativamente à corrente" },
            { id: 3, text: "a tensão e a corrente estão em oposição de fase" },
            { id: 4, text: "a tensão e a corrente estão em fase", correct: true },
        ]
    },
    {
        question: "Qual a unidade de medida da capacidade?",
        answers: [
            { id: 1, text: "Farad", correct: true },
            { id: 2, text: "Henry" },
            { id: 3, text: "Hertz" },
            { id: 4, text: "Volt" },
        ],
        explanation: "Farad para capacidade. Henry para indutância. Hertz para frequência. Volt para força electromotriz."
    },
    {
        question: "Qual das igualdades é verdadeira?",
        answers: [
            { id: 1, text: "0,01 F = 10 000 pF" },
            { id: 2, text: "0,01 mF = 10 000 pF" },
            { id: 3, text: "0,01 μF = 10 000 pF", correct: true },
            { id: 4, text: "0,01 nF = 10 000 pF" },
        ],
        explanation: "pico é 10^-12. 10 000 * 10^-12 = 0,01 * 10^-6. 10^-6 = micro"
    },
    {
        question: "Numa associação de condensadores em paralelo, a capacidade resultante é igual",
        answers: [
            { id: 1, text: "ao produto das capacidades" },
            { id: 2, text: "à soma das capacidades", correct: true },
            { id: 3, text: "à diferença entre a capacidade maior e a menor" },
            { id: 4, text: "ao quociente da capacidade maior pela capacidade menor" },
        ]
    },
    {
        question: "Qual a vantagem de um condensador eletrolítico?",
        answers: [
            { id: 1, text: "Elevada precisão" },
            { id: 2, text: "Não ter polaridade" },
            { id: 3, text: "Capacidade elevada para um volume determinado", correct: true },
            { id: 4, text: "Condensador RF de custo reduzido" },
        ]
    },
    {
        question: "Como se comporta um condensador num circuito de corrente contínua?",
        answers: [
            { id: 1, text: "Apresenta elevada autoindução" },
            { id: 2, text: "Apresenta uma baixa resistência" },
            { id: 3, text: "Comporta-se como um curto-circuito" },
            { id: 4, text: "Comporta-se como um circuito aberto", correct: true },
        ],
        explanation: "Depois de carregar, um condensador impede o fluxo adicional de electrões"
    },
    {
        question: "Qual a unidade de medida do coeficiente de autoindução?",
        answers: [
            { id: 1, text: "Farad" },
            { id: 2, text: "Henry", correct: true },
            { id: 3, text: "Hertz" },
            { id: 4, text: "Volt" },
        ]
    },
    {
        question: "Como se comporta uma bobina num circuito de corrente contínua?",
        answers: [
            { id: 1, text: "Apresenta elevadas capacidades parasitas" },
            { id: 2, text: "Apresenta uma elevada resistência" },
            { id: 3, text: "Comporta-se como um curto-circuito" },
            { id: 4, text: "Comporta-se como um circuito aberto" },
        ]
    },
    
];

export default questions;
