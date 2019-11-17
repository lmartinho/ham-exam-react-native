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
            { id: 3, text: "Comporta-se como um curto-circuito", correct: true },
            { id: 4, text: "Comporta-se como um circuito aberto" },
        ]
    },
    {
        question: "Qual das igualdades é verdadeira?",
        answers: [
            { id: 1, text: "1 μH = 0,001 H" },
            { id: 2, text: "1 mH = 0,001 H", correct: true },
            { id: 3, text: "1 nH = 0,000 000 1 H" },
            { id: 4, text: "1 μH = 0,001 H" },
        ]
    },
    {
        question: "Qual das afirmações é verdadeira?",
        answers: [
            { id: 1, text: "Os transformadores transformam corrente contínua em corrente alternada" },
            { id: 2, text: "Os transformadores transformam corrente alternada em corrente contínua" },
            { id: 3, text: "As frequências dos sinais no primário e no secundário dum transformador são iguais", correct: true },
            { id: 4, text: "Os transformadores são utilizados fundamentalmente para transformar uma tensão contínua dum dado valor numa tensão contínua de valor mais elevado" },
        ]
    },
    {
        question: "Um transformador com o primário ligado à rede elétrica, apresenta nos terminais do secundário em vazio o valor de 5,2 V",
        answers: [
            { id: 1, text: "de tensão contínua" },
            { id: 2, text: "de tensão alternada", correct: true },
            { id: 3, text: "de tensão retificada" },
            { id: 4, text: "de tensão retificada em apenas metade do período" },
        ]
    },
    {
        question: "Qual das seguintes afirmações é verdadeira?",
        answers: [
            { id: 1, text: "Um transformador é constituído em geral por dois enrolamentos, separados galvanicamente,aos quais se dão os nomes de primário e secundário", correct: true },
            { id: 2, text: "Os transformadores só são utilizados em frequências acima de 1 kHz" },
            { id: 3, text: "Um transformador além de transformar tensões e correntes contínuas, também é utilizado em aplicações de transformação de impedâncias" },
            { id: 4, text: "Os transformadores só são utilizados em frequências abaixo de 5 Hz" },
        ]
    },
    {
        question: "Qual razão para a existência de tensão no secundário de um transformador quando está ligada uma fonte de tensão alternada ao primário do transformador?",
        answers: [
            { id: 1, text: "Acoplamento capacitivo" },
            { id: 2, text: "Acoplamento através de corrente dielétrica" },
            { id: 3, text: "Indutância mútua", correct: true },
            { id: 4, text: "Capacidade mútua" },
        ]
    },
    {
        question: "Um díodo de junção é constituído por",
        answers: [
            { id: 1, text: "uma junção entre duas substâncias semicondutoras", correct: true },
            { id: 2, text: "uma junção entre duas substâncias condutoras" },
            { id: 3, text: "uma junção entre duas substâncias isolantes" },
            { id: 4, text: "uma junção entre uma substância condutora e outra semicondutora" },
        ]
    },
    {
        question: "Num díodo de junção, chama-se tensão de Zener",
        answers: [
            { id: 1, text: "à tensão de polarização direta máxima" },
            { id: 2, text: "a qualquer valor de tensão alternada aplicada ao díodo" },
            { id: 3, text: "ao valor de tensão inversa que produz um aumento significativo da corrente inversa", correct: true },
            { id: 4, text: "à tensão de saturação" },
        ]
    },
    {
        question: "Os portadores maioritários num material tipo P são",
        answers: [
            { id: 1, text: "as lacunas", correct: true },
            { id: 2, text: "os eletrões" },
            { id: 3, text: "os neutrões" },
            { id: 4, text: "os fotões" },
        ]
    },
    {
        question: "No díodo apresentado na figura, o valor da máxima tensão inversa é aproximadamente",
        answers: [
            { id: 1, text: "0V" },
            { id: 2, text: "70V" },
            { id: 3, text: "100V" },
            { id: 4, text: "141V", correct: true },
        ],
        explanation: "Um díodo em polarização inversa vai oferecer resistência infinita, logo a tensão entre os seus terminais sera o máximo da fonte de tensão, ou seja para 100 V rms 100 V / raiz quadrada de 2 ou, aproximadamente, 141V"
    },
    {
        question: "Na figura, identifique o símbolo que representa o díodo Zener:",
        answers: [
            { id: 1, text: "D1" },
            { id: 2, text: "D2" },
            { id: 3, text: "D3" },
            { id: 4, text: "D4", correct: true },
        ],
        // @TODO: Add image
        image: ""
    },
    {
        question: "Os díodos de junção não ideais quando polarizados diretamente têm tipicamente uma queda de tensão aos seus terminais",
        answers: [
            { id: 1, text: "entre -2 V e -1 V" },
            { id: 2, text: " entre -1 V e 0 V" },
            { id: 3, text: "entre 0 V e 1 V", correct: true },
            { id: 4, text: "entre 1 V e 2 V" },
        ],
        // @TODO: Add image
        image: "",
        explanation: "Reduzida impedência implica voltagem reduzida também. Examinando uma datasheet de um díodo também verificamos que é algo entre 0 V e 1 V, quando polarizado diretamente."
    },
    {
        question: "Uma ponte retificadora é constituída duma forma geral por",
        answers: [
            { id: 1, text: "resistências" },
            { id: 2, text: "condensadores e transístores" },
            { id: 3, text: "termístores" },
            { id: 4, text: "díodos", correct: true },
        ]
    },
    {
        question: "Um transístor PNP pode ser formado por",
        answers: [
            { id: 1, text: "duas lâminas muito finas de germânio de tipo N que envolvem uma lâmina espessa de germânio de tipo P" },
            { id: 2, text: "uma lâmina muito fina de germânio de tipo N colocada entre duas lâminas espessas de germânio de tipo P", correct: true },
            { id: 3, text: "um material emissor de eletrões e de protões" },
            { id: 4, text: "um emissor e uma base, podendo ter ou não ter coletor" },
        ]
    },
    {
        question: "Na figura, identifique o terminal base",
        answers: [
            { id: 1, text: "A", correct: true },
            { id: 2, text: "B" },
            { id: 3, text: "C" },
            { id: 4, text: "Não há base" },
        ]
    },
    {
        question: "Na figura, a que terminais correspondem as letras indicadas no seguinte transístor:",
        answers: [
            { id: 1, text: "A - emissor, B - base e C - coletor" },
            { id: 2, text: "A - base, B - coletor e C - emissor" },
            { id: 3, text: "A - base, B - emissor e C - coletor", correct: true },
            { id: 4, text: "A - coletor, B - emissor e C - base" },
        ],
        // @TODO: Add image
        image: ""
    },
    {
        question: "Os circuitos com transístores podem ser utilizados como",
        answers: [
            { id: 1, text: "amplificadores" },
            { id: 2, text: "comutadores" },
            { id: 3, text: "osciladores" },
            { id: 4, text: "Todas as hipóteses estão corretas" },
        ]
    },
    {
        question: "Duma forma geral considera-se que os transístores de junção bipolar têm as seguintes três zonas de funcionamento:",
        answers: [
            { id: 1, text: "inversa, corte e saturação" },
            { id: 2, text: "inversa, ativa e saturação" },
            { id: 3, text: "corte, ativa e saturação", correct: true },
            { id: 4, text: "ativa, saturação e inversa" },
        ]
    },
    {
        question: "Em que zona de funcionamento deverá trabalhar um transístor de junção bipolar que é o único elemento ativo num circuito amplificador?",
        answers: [
            { id: 1, text: "Na zona ativa", correct: true },
            { id: 2, text: "Na zona de corte" },
            { id: 3, text: "Na zona de saturação" },
            { id: 4, text: "Na zona inversa de saturação" },
        ]
    },
    {
        question: "A polarização de um transístor corresponde",
        answers: [
            { id: 1, text: "à determinação das tensões e correntes alternadas (AC) que garantem o funcionamento do transístor na zona ativa" },
            { id: 2, text: "à determinação das tensões e correntes contínuas (DC) que garantem o funcionamento do transístor na zona de corte"},
            { id: 3, text: "à determinação das tensões e correntes alternadas (AC) que garantem o funcionamento do transístor na zona de corte" },
            { id: 4, text: "à determinação das tensões e correntes contínuas (DC) que garantem o  funcionamento do transístor na zona ativa", correct: true },
        ]
    },
    {
        question: "Uma montagem de emissor comum, devidamente polarizada para garantir o funcionamento do transístor exclusivamente na zona ativa",
        answers: [
            { id: 1, text: "duma forma geral, inverte e amplifica o sinal de entrada", correct: true },
            { id: 2, text: "duma forma geral, não possui qualquer ganho" },
            { id: 3, text: "duma forma geral, comporta-se da mesma forma que um seguidor de emissor" },
            { id: 4, text: "duma forma geral, reduz ligeiramente o sinal de entrada, mantendo a fase" },
        ]
    },
    {
        question: "Um tétrodo possui",
        answers: [
            { id: 1, text: "3 elementos" },
            { id: 2, text: "4 elementos", correct: true },
            { id: 3, text: "5 elementos" },
            { id: 4, text: "6 elementos" },
        ]
    },
    {
        question: "Porque é que as válvulas têm vindo a perder terreno relativamente aos elementos designados como de estado sólido (por exemplo transístores), na eletrónica em geral?",
        answers: [
            { id: 1, text: "Devido à pouca linearidade das válvulas quando utilizadas em amplificadores de áudio" },
            { id: 2, text: "Pelo facto dos dispositivos a válvulas serem extremamente perigosos" },
            { id: 3, text: "Devido ao menor tamanho dos dispositivos de estado sólido", correct: true },
            { id: 4, text: "Todas as respostas estão corretas" },
        ]
    },
    {
        question: "Os amplificadores sintonizados",
        answers: [
            { id: 1, text: "possuem circuitos ressonantes na entrada e na saída" },
            { id: 2, text: "são úteis para a amplificação de sinais em banda estreita" },
            { id: 3, text: "apresentam uma resposta tipicamente passa-banda", correct: true },
            { id: 4, text: "Todas as hipóteses estão corretas" },
        ]
    },
    {
        question: "Um filtro passa baixo destina-se",
        answers: [
            { id: 1, text: "a rejeitar as frequências mais baixas" },
            { id: 2, text: "a rejeitar as frequências mais altas", correct: true },
            { id: 3, text: "a rejeitar as frequências mais baixas e as frequências mais altas, deixando passar uma dada gama de frequências" },
            { id: 4, text: "a deixar passar as frequências mais baixas e as frequências mais altas, rejeitando uma dada gama de frequências" },
        ]
    },
    {
        question: "Um filtro rejeita banda destina-se",
        answers: [
            { id: 1, text: "a rejeitar as frequências mais baixas" },
            { id: 2, text: "a rejeitar as frequências mais altas" },
            { id: 3, text: "a rejeitar as frequências mais baixas e as frequências mais altas, deixando passar uma dada gama de frequências" },
            { id: 4, text: "a deixar passar as frequências mais baixas e as frequências mais altas, rejeitando uma dada gama de frequências", correct: true },
        ]
    },
    {
        question: "Se num circuito se quiser filtrar as harmónicas de um dado sinal, deve-se utilizar",
        answers: [
            { id: 1, text: "um filtro passa alto" },
            { id: 2, text: "um filtro passa baixo", correct: true },
            { id: 3, text: "um filtro passa banda" },
            { id: 4, text: "um filtro rejeita banda" },
        ]
    },
    {
        question: "Numa fonte de alimentação não comutada com transformador, a introdução de um díodo em série entre o secundário do transformador e um circuito de carga",
        answers: [
            { id: 1, text: "faz uma retificação de meia onda que não é adequada se o circuito de carga necessitar de uma tensão contínua", correct: true },
            { id: 2, text: "faz uma retificação de onda completa que não é adequada se o circuito de carga necessitar de uma tensão contínua" },
            { id: 3, text: "faz uma retificação de um quarto de onda que não é adequada se o circuito de carga necessitar de uma tensão contínua" },
            { id: 4, text: "não provoca qualquer efeito, não sendo adequada se o circuito de carga necessitar de uma tensão contínua" },
        ]
    },
    {
        question: "É possível fazer uma retificação de onda completa a partir de um sinal de corrente alternada, proveniente de um transformador, só com dois díodos?",
        answers: [
            { id: 1, text: "Não, pois só uma ponte retificadora o permite fazer" },
            { id: 2, text: "Sim, se no secundário se tiver acesso a uma tomada central", correct: true },
            { id: 3, text: " Não, pois precisa-se pelo menos de um transístor" },
            { id: 4, text: "Sim se se tiver também uma resistência em série com cada um dos díodos" },
        ]
    },
    {
        question: "Uma ponte retificadora efetua",
        answers: [
            { id: 1, text: "uma retificação de um oitavo de onda" },
            { id: 2, text: "uma retificação de um quarto de onda" },
            { id: 3, text: "uma retificação de meia onda" },
            { id: 4, text: "uma retificação de onda completa", correct: true },
        ]
    },
    {
        question: "Um condensador ligado ao secundário de um transformador, usado para absorver picos de tensão de curta duração, designa-se",
        answers: [
            { id: 1, text: "condensador retificador" },
            { id: 2, text: "condensador de ajuste" },
            { id: 3, text: "condensador \"feedback\" de picos" },
            { id: 4, text: "condensador supressor de picos", correct: true },
        ],
        explanation: "Retificador é o circuito que mantem a polarização constante. Não há resultados no Google para condensador de ajuste nem feedback de picos. Supressor de picos parece-me fazer sentido, mas tenho dúvidas."
    },
    {
        question: "Qual o fator de segurança que oferece uma resistência de drenagem da fonte de alimentação?",
        answers: [
            { id: 1, text: "Funciona como fusível da tensão em excesso" },
            { id: 2, text: "Descarrega o condensador de filtragem", correct: true },
            { id: 3, text: "Exclui os riscos de choques produzidos pelas bobinas de indução" },
            { id: 4, text: "Elimina a corrente do \"loop\" de terra" },
        ]
    },
    {
        question: "Se num amplificador de emissor à massa, a corrente no coletor for de 45 mA e a corrente na base 1,5 mA, qual é o ganho de corrente em regime contínuo?",
        answers: [
            { id: 1, text: "43,5" },
            { id: 2, text: "30", correct: true },
            { id: 3, text: "46,5" },
            { id: 4, text: "40" },
        ]
    },
    {
        question: "Diz-se que há amplificação de tensão",
        answers: [
            { id: 1, text: "se a um certo valor de tensão alternada aplicado à entrada de um circuito, corresponde uma tensão, também alternada mas de maior amplitude, na saída do mesmo circuito", correct: true },
            { id: 2, text: "se a um certo valor de tensão contínua aplicado à entrada de um circuito, corresponde uma tensão alternada na saída do mesmo circuito" },
            { id: 3, text: "se a um certo valor de tensão alternada aplicado à entrada de um circuito, corresponde uma tensão contínua na saída do mesmo circuito" },
            { id: 4, text: "se uma tensão de audiofrequência aplicada à entrada de um circuito, corresponde uma tensão de radiofrequência na saída do mesmo circuito" },
        ]
    },
    {
        question: "Uma corrente de 20 mA circula entre a base e o emissor de um transístor que apresenta um ganho de 40. Em consequência, entre coletor e emissor circula uma corrente de",
        answers: [
            { id: 1, text: "0,5 mA" },
            { id: 2, text: "2 mA" },
            { id: 3, text: "40 mA" },
            { id: 4, text: "0,8 A", correct: true },
        ]
    },
    {
        question: "Qual das seguintes opções descreve um amplificador linear?",
        answers: [
            { id: 1, text: "Um amplificador que transforma sinais AC em sinais DC" },
            { id: 2, text: "Um amplificador cuja saída mantém a forma de onda de entrada", correct: true },
            { id: 3, text: "Um amplificador de classe C de elevada eficiência" },
            { id: 4, text: "Um amplificador usado como multiplicador de frequências" },
        ]
    },
    {
        question: "Que circuito é usado para processar os sinais provenientes do amplificador de RF e do oscilador local e que depois os envia para o filtro de IF num recetor super-heterodino?",
        answers: [
            { id: 1, text: "Modulador balanceado" },
            { id: 2, text: "Amplificador de IF" },
            { id: 3, text: "Misturador", correct: true },
            { id: 4, text: "Detetor" },
        ]
    },
    {
        question: "Que tipo de recetor é apropriado para a receção de CW ou de SSB mas que não necessita de um andar de mistura ou de um amplificador de IF?",
        answers: [
            { id: 1, text: "Um recetor super-regenerativo" },
            { id: 2, text: "Um recetor do tipo TRF (\"Tuned Radio Frequency\")", correct: true },
            { id: 3, text: "Um recetor super-heterodino" },
            { id: 4, text: "Um recetor de conversão direta" },
        ],
        explanation: "Analisado diagrama de blocos de um recetor TRF vemos que não existe andar de mistura, nem IF. O amplificador é de banda base"
    },
    {
        question: "Como se pode designar em alternativa a mistura de dois sinais de RF?",
        answers: [
            { id: 1, text: "Heterodinagem", correct: true },
            { id: 2, text: "Sintetização" },
            { id: 3, text: "Cancelamento" },
            { id: 4, text: "Filtragem" },
        ]
    },
    {
        question: "Os recetores de CW estão associados a que tipo de modulação?",
        answers: [
            { id: 1, text: "A1A", correct: true },
            { id: 2, text: "A3E" },
            { id: 3, text: "J3E" },
            { id: 4, text: "F3E" },
        ]
    },
    {
        question: "Os recetores de FM estão associados a que tipo de modulação?",
        answers: [
            { id: 1, text: "A1A" },
            { id: 2, text: "A3E" },
            { id: 3, text: "J3E" },
            { id: 4, text: "F3E" },
        ]
    },
    {
        question: "Num recetor de FM, qual a função do circuito designado como discriminador?",
        answers: [
            { id: 1, text: "É um circuito gerador de sinais de FM" },
            { id: 2, text: "É um circuito que filtra dois sinais adjacentes muito próximos" },
            { id: 3, text: "É um circuito com comutação de bandas automático" },
            { id: 4, text: "É um circuito de deteção de sinais FM", correct: true },
        ]
    },
    {
        question: "Que parte de um recetor combina um sinal de entrada de 14,250 MHz com um sinal de um oscilador local de 13,795 MHz, para produzir um sinal de frequência intermédia de 455 kHz?",
        answers: [
            { id: 1, text: "Misturador", correct: true },
            { id: 2, text: "BFO" },
            { id: 3, text: "VFO" },
            { id: 4, text: "Multiplicador" },
        ]
    },
    {
        question: "Quanto é que a potência de um emissor tem que reduzir para que num recetor distante a leitura do indicador de nível (unidades S) mude de S9 para S8?",
        answers: [
            { id: 1, text: "Aproximadamente 5 vezes" },
            { id: 2, text: "Aproximadamente 4 vezes", correct: true },
            { id: 3, text: "Aproximadamente 3 vezes" },
            { id: 4, text: "Aproximadamente 2 vezes" },
        ]
    },
    {
        question: "Onde se encontra de uma forma geral o \"squelch\"?",
        answers: [
            { id: 1, text: "No emissor" },
            { id: 2, text: "Numa ponte de SWR" },
            { id: 3, text: "No recetor", correct: true },
            { id: 4, text: "Numa ponte de díodos" },
        ]
    },
    {
        question: "O  que mede o medidor S?",
        answers: [
            { id: 1, text: "Condutância" },
            { id: 2, text: "Impedância" },
            { id: 3, text: "Intensidade do sinal recebido", correct: true },
            { id: 4, text: "Potência do transmissor" },
        ]
    },
    {
        question: "Num recetor, como funciona um detetor de díodo?",
        answers: [
            { id: 1, text: "Pela retificação e filtragem de sinais de RF", correct: true },
            { id: 2, text: "Pela rutura da tensão de Zener" },
            { id: 3, text: "Pela mistura de sinais com ruído na zona de transição do díodo" },
            { id: 4, text: "Pela verificação da variação da reactância no díodo em relação à frequência" },
        ]
    },
    {
        question: "Num recetor super-heterodino, o andar designado como \"misturador\"",
        answers: [
            { id: 1, text: "combina sinais de duas frequências diferentes para obter uma frequência intermédia", correct: true },
            { id: 2, text: "combina as bandas laterais de modo a obter um sinal mais forte" },
            { id: 3, text: "faz a discriminação contra os sinais SSB e AM" },
            { id: 4, text: "insere uma portadora para obter um verdadeiro sinal FM" },
        ]
    },
    {
        question: "Num recetor super-heterodino, o BFO é um",
        answers: [
            { id: 1, text: "atenuador de frequências desnecessárias" },
            { id: 2, text: "oscilador de frequências básicas" },
            { id: 3, text: "oscilador de frequência de batimento", correct: true },
            { id: 4, text: "oscilador da banda de filtragem" },
        ],
        explanation: "Beat Frequency Oscillator serve para criar um sinal de frequência audio a partir de transmissões radiotelegráficas."
    },
    {
        question: "Num recetor de FM, o andar designado por \"limitador\"",
        answers: [
            { id: 1, text: "limita o sinal a uma amplitude constante", correct: true },
            { id: 2, text: "rejeita sinais SSB e CW" },
            { id: 3, text: "limita o desvio de frequência do sinal" },
            { id: 4, text: "limita o desvio de fase do sinal" },
        ]
    },
    {
        question: "Que circuito é usado para combinar os sinais do oscilador de portadora e do amplificador de voz e enviar o resultado para o filtro num emissor de banda lateral única de fonia?",
        answers: [
            { id: 1, text: "Misturador" },
            { id: 2, text: "Detetor" },
            { id: 3, text: "Amplificador de IF" },
            { id: 4, text: "Modulador balanceado", correct: true },
        ]
    },
    {
        question: "Uma malha de captura de fase que contém um oscilador controlado por tensão, está associada a um modulador de",
        answers: [
            { id: 1, text: "amplitude" },
            { id: 2, text: "frequência", correct: true },
            { id: 3, text: "amplitude com portadora suprimida" },
            { id: 4, text: "onda contínua" },
        ]
    },
    {
        question: "O sinal na saída de um emissor de modulação de frequência resulta",
        answers: [
            { id: 1, text: "da variação da amplitude da portadora em função do sinal que a modula" },
            { id: 2, text: "da variação da frequência da portadora em função do sinal que a modula", correct: true },
            { id: 3, text: "da variação da fase da portadora em função do sinal que a modula" },
            { id: 4, text: "da variação do ruído da portadora em função do sinal que a modula" },
        ]
    },
    {
        question: "O sinal na saída de um emissor de modulação de amplitude resulta",
        answers: [
            { id: 1, text: "da variação da amplitude da portadora em função do sinal que a modula", correct: true },
            { id: 2, text: "da variação da frequência da portadora em função do sinal que a modula" },
            { id: 3, text: "da variação da fase da portadora em função do sinal que a modula" },
            { id: 4, text: "da variação do ruído da portadora em função do sinal que a modula" },
        ]
    },
    {
        question: "Num emissor, onde deve ser instalado um filtro para reduzir emissões espúrias?",
        answers: [
            { id: 1, text: "Na fonte de alimentação" },
            { id: 2, text: "No recetor" },
            { id: 3, text: "A seguir ao andar de saída do emissor", correct: true },
            { id: 4, text: "No microfone" },
        ],
        explanation: "A fase final de um circuito de amplificação de RF alimenta um filtro-passa baixo que atenua harmónicas da portadora e sinais espúrios"
    },
    {
        question: "O que é um \"buffer\"?",
        answers: [
            { id: 1, text: "É um circuito que, de uma forma geral, serve de amplificador", correct: true },
            { id: 2, text: "É um circuito que, de ma forma geral, serve de fonte de alimentação" },
            { id: 3, text: "É um circuito que, de uma forma geral, serve de isolador" },
            { id: 4, text: "É um circuito que, de uma forma geral, serve de filtro" },
        ]
    },
    {
        question: "No emissor o que é VFO?",
        answers: [
            { id: 1, text: "É um oscilador de frequência áudio" },
            { id: 2, text: "É um oscilador fixo controlado por um \"varicap\"" },
            { id: 3, text: "É um oscilador de fase virtual" },
            { id: 4, text: "É um oscilador de frequência variável", correct: true },
        ]
    },
    {
        question: "Qual das seguintes afirmações descreve uma vantagem de uma fonte de alimentação comutada relativamente a uma fonte linear convencional?",
        answers: [
            { id: 1, text: "O facto de utilizar uma frequência de comutação elevada permite maiores tensões na saída" },
            { id: 2, text: "Necessita de menos circuitos e componentes" },
            { id: 3, text: "A utilização de altas frequências de comutação permite a utilização de componentes mais pequenos", correct: true },
            { id: 4, text: "Todas as afirmações anteriores estão corretas" },
        ]
    },
    {
        question: "Qual é a vantagem de um emissor controlado a cristal?",
        answers: [
            { id: 1, text: "Frequência de saída estável", correct: true },
            { id: 2, text: "Excelente clareza na modulação" },
            { id: 3, text: "Facilidade na mudança de faixas de frequências" },
            { id: 4, text: "Facilidade na mudança de frequência" },
        ]
    },
    {
        question: "Qual das seguintes emissões utiliza, duma forma geral, menor largura de banda?",
        answers: [
            { id: 1, text: "Banda lateral única", correct: true },
            { id: 2, text: "Modulação de frequência" },
            { id: 3, text: "Dupla banda lateral" },
            { id: 4, text: "Modulação de fase" },
        ]
    }
];

export default questions;
