// ============================================================
// DADOS — Compreendendo a Bíblia
// Constantes de listagem (LICOES, ESTUDOS...) restauradas do
// data.js antigo + registro dos capítulos em js/dados/.
// ============================================================

const LICOES = [
  {
    id: 4,
    titulo: "Profetas do Novo Testamento",
    data: "17 de Outubro de 2026",
    semana: "Lição 4 - 4º Trimestre 2026",
    versiculo: "1Co 12:4-6",
    texto: "Ora, os dons são diversos, mas o Espírito é o mesmo. E também há diversidade nos serviços, mas o Senhor é o mesmo. E há diversidade nas realizações, mas o mesmo Deus é quem opera tudo em todos",
    resumo: "A lição aborda a continuidade do dom profético no Novo Testamento sob a atuação do mesmo Espírito Santo. Examina o papel profético supremo de Jesus, a relação entre apóstolos e profetas, e a atuação diversificada de homens e mulheres no ministério. Também adverte contra os enganos dos falsos profetas nos últimos dias, destacando a Bíblia e Cristo como o centro inegociável da fé.",
    leituras: [{"ref": "Mt 16:13-16", "versoes": {"naa": "Indo Jesus para a região de Cesareia de Filipe, perguntou a seus discípulos: — Quem os outros dizem que é o Filho do Homem? E eles responderam: — Uns dizem que é João Batista; outros dizem que é Elias; e outros dizem que é Jeremias ou um dos profetas. Ao que Jesus perguntou: — E vocês, quem dizem que eu sou? Respondendo, Simão Pedro disse: — O senhor é o Cristo, o Filho do Deus vivo.", "ntlh": "Jesus foi para a região que fica perto da cidade de Cesareia de Filipe. Ali perguntou aos discípulos: — Quem o povo diz que o Filho do Homem é? Eles responderam: — Alguns dizem que o senhor é João Batista; outros, que é Elias; e outros, que é Jeremias ou algum outro profeta. — E vocês? Quem vocês dizem que eu sou? — perguntou Jesus. Simão Pedro respondeu: — O senhor é o Messias, o Filho do Deus vivo.", "nvi": "Chegando Jesus à região de Cesareia de Filipe, perguntou aos seus discípulos: “Quem os outros dizem que o Filho do homem é?” Eles responderam: “Alguns dizem que é João Batista; outros, Elias; e, ainda outros, Jeremias ou um dos profetas”. “E vocês?”, perguntou ele. “Quem vocês dizem que eu sou?” Simão Pedro respondeu: “Tu és o Cristo, o Filho do Deus vivo”.", "acf": "E, chegando Jesus às partes de Cesaréia de Filipe, interrogou os seus discípulos, dizendo: Quem dizem os homens ser o Filho do homem? E eles disseram: Uns, João o Batista; outros, Elias; e outros, Jeremias, ou um dos profetas. Disse-lhes ele: E vós, quem dizeis que eu sou? E Simão Pedro, respondendo, disse: Tu és o Cristo, o Filho do Deus vivo."}}, {"ref": "Ef 2:20", "versoes": {"naa": "edificados sobre o fundamento dos apóstolos e profetas, sendo ele mesmo, Cristo Jesus, a pedra angular.", "ntlh": "Vocês são como um edifício e estão construídos sobre o alicerce que os apóstolos e os profetas colocaram. E a pedra fundamental desse edifício é o próprio Cristo Jesus.", "nvi": "edificados sobre o fundamento dos apóstolos e dos profetas, tendo Jesus Cristo como pedra angular,", "acf": "Edificados sobre o fundamento dos apóstolos e dos profetas, de que Jesus Cristo é a principal pedra da esquina;"}}, {"ref": "Ap 22:6", "versoes": {"naa": "Então o anjo me disse: — Estas palavras são fiéis e verdadeiras. O Senhor, o Deus dos espíritos dos profetas, enviou o seu anjo para mostrar aos seus servos as coisas que em breve devem acontecer.", "ntlh": "Então o anjo me disse: — Essas palavras são verdadeiras e merecem confiança. O Senhor Deus, que dá o seu Espírito aos profetas, enviou o seu anjo para mostrar aos seus servos as coisas que precisam acontecer logo.", "nvi": "O anjo me disse: “Estas palavras são dignas de confiança e verdadeiras. O Senhor, o Deus dos espíritos dos profetas, enviou o seu anjo para mostrar aos seus servos as coisas que em breve hão de acontecer.", "acf": "E disse-me: Estas palavras são fiéis e verdadeiras; e o Senhor, o Deus dos santos profetas, enviou o seu anjo, para mostrar aos seus servos as coisas que em breve hão de acontecer."}}, {"ref": "Lc 2:36-38", "versoes": {"naa": "Havia uma profetisa, chamada Ana, filha de Fanuel, da tribo de Aser. Ela era bem idosa, tendo vivido com o marido sete anos desde que tinha se casado. Agora era viúva de oitenta e quatro anos. Ela não deixava o templo, mas adorava noite e dia, com jejuns e orações. E, chegando naquela hora, dava graças a Deus e falava a respeito do menino a todos os que esperavam a redenção de Jerusalém.", "ntlh": "Havia ali também uma profetisa chamada Ana, que era viúva e muito idosa. Ela era filha de Fanuel, da tribo de Aser. Sete anos depois que ela havia casado, o seu marido morreu. Agora ela estava com oitenta e quatro anos de idade. Nunca saía do pátio do Templo e adorava a Deus dia e noite, jejuando e fazendo orações. Naquele momento ela chegou e começou a louvar a Deus e a falar a respeito do menino para todos os que esperavam a libertação de Jerusalém.", "nvi": "Estava ali a profetisa Ana, filha de Fanuel, da tribo de Aser. Era muito idosa; tinha vivido com seu marido sete anos depois de se casar e então permanecera viúva até a idade de oitenta e quatro anos. Nunca deixava o templo: adorava a Deus jejuando e orando dia e noite. Tendo chegado ali naquele exato momento, deu graças a Deus e falava a respeito do menino a todos os que esperavam a redenção de Jerusalém.", "acf": "E estava ali a profetisa Ana, filha de Fanuel, da tribo de Aser. Esta era já avançada em idade, e tinha vivido com o marido sete anos, desde a sua virgindade; E era viúva, de quase oitenta e quatro anos, e não se afastava do templo, servindo a Deus em jejuns e orações, de noite e de dia. E sobrevindo na mesma hora, ela dava graças a Deus, e falava dele a todos os que esperavam a redenção em Jerusalém."}}, {"ref": "At 21:9", "versoes": {"naa": "Filipe tinha quatro filhas solteiras, que profetizavam.", "ntlh": "Ele tinha quatro filhas solteiras que profetizavam.", "nvi": "Ele tinha quatro filhas virgens, que profetizavam.", "acf": "E tinha este quatro filhas virgens, que profetizavam."}}, {"ref": "Ef 6:10-18", "versoes": {"naa": "Quanto ao mais, sejam fortalecidos no Senhor e na força do seu poder. Vistam-se com toda a armadura de Deus, para poderem ficar firmes contra as ciladas do diabo. Porque a nossa luta não é contra o sangue e a carne, mas contra os principados e as potestades, contra os dominadores deste mundo tenebroso, contra as forças espirituais do mal, nas regiões celestiais. Por isso, peguem toda a armadura de Deus, para que vocês possam resistir no dia mau e, depois de terem vencido tudo, permanecer inabaláveis. Portanto, fiquem firmes, cingindo-se com a verdade e vestindo a couraça da justiça. Tenham os pés calçados com a preparação do evangelho da paz, segurando sempre o escudo da fé, com o qual poderão apagar todos os dardos inflamados do Maligno. Usem também o capacete da salvação e a espada do Espírito, que é a palavra de Deus. Orem em todo tempo no Espírito, com todo tipo de oração e súplica, e para isto vigiem com toda perseverança e súplica por todos os santos.", "ntlh": "Para terminar: tornem-se cada vez mais fortes, vivendo unidos com o Senhor e recebendo a força do seu grande poder. Vistam-se com toda a armadura que Deus dá a vocês, para ficarem firmes contra as armadilhas do Diabo. Pois nós não estamos lutando contra seres humanos, mas contra as forças espirituais do mal que vivem nas alturas, isto é, os governos, as autoridades e os poderes que dominam completamente este mundo de escuridão . Por isso peguem agora a armadura que Deus lhes dá. Assim, quando chegar o dia de enfrentarem as forças do mal, vocês poderão resistir aos ataques do inimigo e, depois de lutarem até o fim, vocês continuarão firmes, sem recuar. Portanto, estejam preparados. Usem a verdade como cinturão. Vistam-se com a couraça da justiça e calcem, como sapatos, a prontidão para anunciar a boa notícia de paz. E levem sempre a fé como escudo, para poderem se proteger de todos os dardos de fogo do Maligno . Recebam a salvação como capacete e a palavra de Deus como a espada que o Espírito Santo lhes dá. Façam tudo isso orando a Deus e pedindo a ajuda dele. Orem sempre, guiados pelo Espírito de Deus. Fiquem alertas. Não desanimem e orem sempre por todo o povo de Deus.", "nvi": "Finalmente, fortaleçam-se no Senhor e no seu forte poder. Vistam toda a armadura de Deus, para poderem ficar firmes contra as ciladas do Diabo, pois a nossa luta não é contra seres humanos , mas contra os poderes e autoridades, contra os dominadores deste mundo de trevas, contra as forças espirituais do mal nas regiões celestiais. Por isso, vistam toda a armadura de Deus, para que possam resistir no dia mau e permanecer inabaláveis, depois de terem feito tudo. Assim, mantenham-se firmes, cingindo-se com o cinto da verdade, vestindo a couraça da justiça e tendo os pés calçados com a prontidão do evangelho da paz. Além disso, usem o escudo da fé, com o qual vocês poderão apagar todas as setas inflamadas do Maligno. Usem o capacete da salvação e a espada do Espírito, que é a palavra de Deus. Orem no Espírito em todas as ocasiões, com toda oração e súplica; tendo isso em mente, estejam atentos e perseverem na oração por todos os santos.", "acf": "No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder. Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo. Porque não temos que lutar contra a carne e o sangue, mas, sim, contra os principados, contra as potestades, contra os príncipes das trevas deste século, contra as hostes espirituais da maldade, nos lugares celestiais. Portanto, tomai toda a armadura de Deus, para que possais resistir no dia mau e, havendo feito tudo, ficar firmes. Estai, pois, firmes, tendo cingidos os vossos lombos com a verdade, e vestida a couraça da justiça; E calçados os pés na preparação do evangelho da paz; Tomando sobretudo o escudo da fé, com o qual podereis apagar todos os dardos inflamados do maligno. Tomai também o capacete da salvação, e a espada do Espírito, que é a palavra de Deus; Orando em todo o tempo com toda a oração e súplica no Espírito, e vigiando nisto com toda a perseverança e súplica por todos os santos,"}}],
    abertura: {
      versiculo: "Ora, os dons são diversos, mas o Espírito é o mesmo. E também há diversidade nos serviços, mas o Senhor é o mesmo. E há diversidade nas realizações, mas o mesmo Deus é quem opera tudo em todos",
      periodo: "17 de outubro a 23 de outubro de 2026",
      resumo: "Verso para memorizar:\n\n“Ora, os dons são diversos, mas o Espírito é o mesmo. E também há diversidade nos serviços, mas o Senhor é o mesmo. E há diversidade nas realizações, mas o mesmo Deus é quem opera tudo em todos” (1Co 12:4-6).\n\nLeituras da semana:\n\nMt 16:13-16; Ef 2:20; Ap 22:6; Lc 2:36-38; At 21:9; Ef 6:10-18\n\nPai e filho viajavam por uma estrada. Em certo momento, o pai apontou para um carro e exclamou: “Filho, aquele é igual ao meu primeiro carro!” Quando chegaram em casa, o pai pegou o manual do primeiro carro e o do carro atual, mostrando ao filho as características de cada veículo e destacando especialmente as diferenças entre os tipos. Porém, ao comparar os motores, eram idênticos. Muita coisa havia mudado, mas o motor continuava o mesmo.\n\nDeus falou por meio de profetas tanto no Antigo quanto no Novo Testamento, e há continuidade e harmonia em suas mensagens porque o Espírito Santo – a Fonte, o “motor” da inspiração divina – permanece o mesmo. É o Espírito Santo que sempre capacita os verdadeiros profetas por meio do dom de profecia. Ele também mantém Cristo no centro das mensagens proféticas, como vemos em Hebreus 1:1 a 3.\n\nNesta semana, vamos estudar o dom de profecia no Novo Testamento, analisando o trabalho dos profetas, quem eles eram, como sua atuação se relacionava com a dos apóstolos e o perigo representado pelos falsos profetas.",
      reflexao: "Que Deus nos fale por meio desta lição."
    },
    perguntas: [
      {
        pergunta: "Qual é o papel profético de Jesus? Como essa questão foi respondida no tempo de Cristo?",
        resposta: "Jesus é o Messias prometido e o cumprimento das profecias do Antigo Testamento. Embora muitos o vissem como apenas um profeta redivivo, Pedro confessou acertadamente que Ele é o Cristo, o Filho do Deus vivo.",
        versoes: {}
      },
      {
        pergunta: "Qual era o papel de apóstolos e profetas em relação a Cristo e à igreja?",
        resposta: "Eles serviram como fundamento doutrinário da igreja primitiva, recebendo revelações divinas para edificar o corpo de crentes e anunciar a Cristo como a pedra angular.",
        versoes: {}
      },
      {
        pergunta: "O que 1 Coríntios 14:3; Efésios 4:11-13; e Apocalipse 22:6 revelam sobre o papel dos profetas do Novo Testamento?",
        resposta: "Eles tinham a incumbência de edificar, exortar, consolar e aperfeiçoar os santos para a unidade da fé, transmitindo revelações confiáveis e verdadeiras procedentes de Deus.",
        versoes: {}
      },
      {
        pergunta: "O que esses textos nos ensinam sobre profetisas?",
        resposta: "Ensinam que o dom profético foi legitimamente concedido por Deus a mulheres no Novo Testamento, demonstrando que Ele capacita servos de todas as idades para proclamar a Sua verdade.",
        versoes: {}
      },
      {
        pergunta: "Que advertência Jesus nos apresenta? Por que devemos levá-la tão a sério?",
        resposta: "Jesus adverte sobre o surgimento de falsos mestres e cristos com sinais convincentes; devemos levar isso a sério para não sermos seduzidos por enganos espirituais nos últimos dias.",
        versoes: {}
      },
      {
        pergunta: "De acordo com Efésios 6:10-18, como podemos nos proteger de qualquer tipo de engano?",
        resposta: "Vestindo toda a armadura de Deus por meio da oração, da fé, da couraça da justiça e do apego resoluto à verdade contida na Palavra de Deus.",
        versoes: {}
      },
    ],
    dias: [
      {
        dia: "Sábado",
        titulo: "Introdução: Profetas do Novo Testamento",
        resumo: "Assim como veículos de épocas distintas podem compartilhar do mesmo tipo de motor, as mensagens proféticas do Antigo e do Novo Testamento possuem plena continuidade e harmonia porque procedem do mesmo Espírito Santo.\n\nO Espírito capacita os mensageiros do Senhor e mantém Jesus Cristo no centro de toda a revelação divina. Ao longo desta semana, analisa-se a manifestação do dom de profecia na igreja apostólica e a necessidade de vigilância contra os enganos espirituais.",
        perguntas: [
        ]
      },
      {
        dia: "Domingo",
        titulo: "Jesus como Profeta",
        resumo: "Jesus é o cumprimento definitivo da promessa feita por meio de Moisés acerca de um profeta semelhante a ele. Ele é Aquele para quem todas as profecias veterotestamentárias apontavam, sendo o próprio Verbo encarnado e o Criador de todas as coisas.\n\nSua atuação profética dissipa as trevas espirituais deste mundo por meio do plano da redenção. Enquanto a Estrela da Manhã não regressa para estabelecer Seu reino eterno, Sua Palavra profética permanece como lâmpada segura para iluminar a caminhada cristã.",
        perguntas: [
          {
            pergunta: "Qual é o papel profético de Jesus? Como essa questão foi respondida no tempo de Cristo?",
            resposta: "Jesus é o Messias prometido e o cumprimento das profecias do Antigo Testamento. Embora muitos o vissem como apenas um profeta redivivo, Pedro confessou acertadamente que Ele é o Cristo, o Filho do Deus vivo.",
            versoes: {"naa": "Indo Jesus para a região de Cesareia de Filipe, perguntou a seus discípulos: — Quem os outros dizem que é o Filho do Homem? E eles responderam: — Uns dizem que é João Batista; outros dizem que é Elias; e outros dizem que é Jeremias ou um dos profetas. Ao que Jesus perguntou: — E vocês, quem dizem que eu sou? Respondendo, Simão Pedro disse: — O senhor é o Cristo, o Filho do Deus vivo. Então Jesus e os seus discípulos foram para as aldeias de Cesareia de Filipe. No caminho, perguntou-lhes: — Quem os outros dizem que eu sou? Os discípulos responderam: — Uns dizem que é João Batista; outros dizem que é Elias; e ainda outros dizem que é um dos profetas. Então Jesus perguntou: — E vocês, quem dizem que eu sou? Respondendo, Pedro lhe disse: — O senhor é o Cristo. E aconteceu que, enquanto Jesus estava orando em particular, achavam-se presentes os discípulos, a quem perguntou: — Quem as multidões dizem que eu sou? Eles responderam: — Uns dizem que é João Batista; outros dizem que é Elias; e ainda outros dizem que um dos antigos profetas ressuscitou. Então Jesus perguntou: — E vocês, quem dizem que eu sou? Respondendo, Pedro disse: — O Cristo de Deus.", "ntlh": "Jesus foi para a região que fica perto da cidade de Cesareia de Filipe. Ali perguntou aos discípulos: — Quem o povo diz que o Filho do Homem é? Eles responderam: — Alguns dizem que o senhor é João Batista; outros, que é Elias; e outros, que é Jeremias ou algum outro profeta. — E vocês? Quem vocês dizem que eu sou? — perguntou Jesus. Simão Pedro respondeu: — O senhor é o Messias, o Filho do Deus vivo. Depois Jesus e os seus discípulos foram para os povoados que ficam perto de Cesareia de Filipe. No caminho, ele lhes perguntou: — Quem o povo diz que eu sou? Os discípulos responderam: — Alguns dizem que o senhor é João Batista; outros, que é Elias; e outros, que é um dos profetas. — E vocês? Quem vocês dizem que eu sou? — perguntou Jesus. — O senhor é o Messias! — respondeu Pedro. Certa vez Jesus estava sozinho, orando, e os discípulos chegaram perto dele. Então ele perguntou: — Quem o povo diz que eu sou? Eles responderam: — Alguns dizem que o senhor é João Batista; outros, que é Elias; e outros, que é um dos profetas antigos que ressuscitou. — E vocês? Quem vocês dizem que eu sou? — perguntou Jesus. Pedro respondeu: — O Messias que Deus enviou.", "nvi": "Chegando Jesus à região de Cesareia de Filipe, perguntou aos seus discípulos: “Quem os outros dizem que o Filho do homem é?” Eles responderam: “Alguns dizem que é João Batista; outros, Elias; e, ainda outros, Jeremias ou um dos profetas”. “E vocês?”, perguntou ele. “Quem vocês dizem que eu sou?” Simão Pedro respondeu: “Tu és o Cristo, o Filho do Deus vivo”. Jesus e os seus discípulos dirigiram-se para os povoados nas proximidades de Cesareia de Filipe. No caminho, ele lhes perguntou: “Quem o povo diz que eu sou?” Eles responderam: “Alguns dizem que és João Batista; outros, Elias; e, ainda outros, um dos profetas”. “E vocês?”, perguntou ele. “Quem vocês dizem que eu sou?” Pedro respondeu: “Tu és o Cristo ”. Certa vez Jesus estava orando em particular, e com ele estavam os seus discípulos; então lhes perguntou: “Quem as multidões dizem que eu sou?” Eles responderam: “Alguns dizem que és João Batista; outros, Elias; e, ainda outros, que és um dos profetas do passado que ressuscitou”. “E vocês, o que dizem?”, perguntou. “Quem vocês dizem que eu sou?” Pedro respondeu: “O Cristo de Deus”.", "acf": "E, chegando Jesus às partes de Cesaréia de Filipe, interrogou os seus discípulos, dizendo: Quem dizem os homens ser o Filho do homem? E eles disseram: Uns, João o Batista; outros, Elias; e outros, Jeremias, ou um dos profetas. Disse-lhes ele: E vós, quem dizeis que eu sou? E Simão Pedro, respondendo, disse: Tu és o Cristo, o Filho do Deus vivo. E saiu Jesus, e os seus discípulos, para as aldeias de Cesaréia de Filipe; e no caminho perguntou aos seus discípulos, dizendo: Quem dizem os homens que eu sou? E eles responderam: João o Batista; e outros: Elias; mas outros: Um dos profetas. E ele lhes disse: Mas vós, quem dizeis que eu sou? E, respondendo Pedro, lhe disse: Tu és o Cristo. E aconteceu que, estando ele só, orando, estavam com ele os discípulos; e perguntou-lhes, dizendo: Quem diz a multidão que eu sou? E, respondendo eles, disseram: João o Batista; outros, Elias, e outros que um dos antigos profetas ressuscitou. E disse-lhes: E vós, quem dizeis que eu sou? E, respondendo Pedro, disse: O Cristo de Deus."}
          },
        ]
      },
      {
        dia: "Segunda-feira",
        titulo: "Apóstolos e profetas",
        resumo: "No Novo Testamento, os termos 'apóstolos' e 'profetas' designam mensageiros escolhidos diretamente por Deus para edificar o fundamento da igreja. Ambos partilhavam do mesmo nível de inspiração divina concedida pelo Espírito Santo.\n\nO dom de profecia não ficou restrito aos doze discípulos originais ou aos apóstolos em geral, estendendo-se a outros líderes da congregação primitiva. Toda a autoridade das mensagens transmitidas por eles concentrava-se na pessoa, ministério e sacrifício de Cristo.",
        perguntas: [
          {
            pergunta: "Qual era o papel de apóstolos e profetas em relação a Cristo e à igreja?",
            resposta: "Eles serviram como fundamento doutrinário da igreja primitiva, recebendo revelações divinas para edificar o corpo de crentes e anunciar a Cristo como a pedra angular.",
            versoes: {"naa": "edificados sobre o fundamento dos apóstolos e profetas, sendo ele mesmo, Cristo Jesus, a pedra angular.", "ntlh": "Vocês são como um edifício e estão construídos sobre o alicerce que os apóstolos e os profetas colocaram. E a pedra fundamental desse edifício é o próprio Cristo Jesus.", "nvi": "edificados sobre o fundamento dos apóstolos e dos profetas, tendo Jesus Cristo como pedra angular,", "acf": "Edificados sobre o fundamento dos apóstolos e dos profetas, de que Jesus Cristo é a principal pedra da esquina;"}
          },
        ]
      },
      {
        dia: "Terça-feira",
        titulo: "Funções dos profetas do Novo Testamento",
        resumo: "Os profetas neo-testamentários exerciam funções vitais de edificação, exortação e consolação do povo de Deus. O ministério profético atuava na capacitação dos crentes para a maturidade espiritual e na manutenção da unidade e fé em Cristo.\n\nEles também encorajavam os irmãos em tempos difíceis de perseguição, funcionando como instrumentos da voz consoladora de Deus. Suas advertências e ensinos derivavam da soberania divina, provendo segurança aos que confiavam na mensagem do Senhor.",
        perguntas: [
          {
            pergunta: "O que 1 Coríntios 14:3; Efésios 4:11-13; e Apocalipse 22:6 revelam sobre o papel dos profetas do Novo Testamento?",
            resposta: "Eles tinham a incumbência de edificar, exortar, consolar e aperfeiçoar os santos para a unidade da fé, transmitindo revelações confiáveis e verdadeiras procedentes de Deus.",
            versoes: {"naa": "Mas o que profetiza fala para as pessoas, edificando, exortando e consolando. E ele mesmo concedeu uns para apóstolos, outros para profetas, outros para evangelistas e outros para pastores e mestres, com vistas ao aperfeiçoamento dos santos para o desempenho do seu serviço, para a edificação do corpo de Cristo, até que todos cheguemos à unidade da fé e do pleno conhecimento do Filho de Deus, ao estado de pessoa madura, à medida da estatura da plenitude de Cristo, Então o anjo me disse: — Estas palavras são fiéis e verdadeiras. O Senhor, o Deus dos espíritos dos profetas, enviou o seu anjo para mostrar aos seus servos as coisas que em breve devem acontecer.", "ntlh": "Porém quem anuncia a mensagem de Deus fala para as pessoas, ajudando-as e dando-lhes coragem e consolo. Foi ele quem “deu dons às pessoas”. Ele escolheu alguns para serem apóstolos, outros para profetas, outros para evangelistas e ainda outros para pastores e mestres da Igreja. Ele fez isso para preparar o povo de Deus para o serviço cristão, a fim de construir o corpo de Cristo. Desse modo todos nós chegaremos a ser um na nossa fé e no nosso conhecimento do Filho de Deus. E assim seremos pessoas maduras e alcançaremos a altura espiritual de Cristo. Então o anjo me disse: — Essas palavras são verdadeiras e merecem confiança. O Senhor Deus, que dá o seu Espírito aos profetas, enviou o seu anjo para mostrar aos seus servos as coisas que precisam acontecer logo.", "nvi": "Mas quem profetiza o faz para edificação, encorajamento e consolação dos homens. E ele designou alguns para apóstolos, outros para profetas, outros para evangelistas, e outros para pastores e mestres, com o fim de preparar os santos para a obra do ministério, para que o corpo de Cristo seja edificado, até que todos alcancemos a unidade da fé e do conhecimento do Filho de Deus, e cheguemos à maturidade, atingindo a medida da plenitude de Cristo. O anjo me disse: “Estas palavras são dignas de confiança e verdadeiras. O Senhor, o Deus dos espíritos dos profetas, enviou o seu anjo para mostrar aos seus servos as coisas que em breve hão de acontecer.", "acf": "Mas o que profetiza fala aos homens, para edificação, exortação e consolação. E ele mesmo deu uns para apóstolos, e outros para profetas, e outros para evangelistas, e outros para pastores e doutores, Querendo o aperfeiçoamento dos santos, para a obra do ministério, para edificação do corpo de Cristo; Até que todos cheguemos à unidade da fé, e ao conhecimento do Filho de Deus, a homem perfeito, à medida da estatura completa de Cristo, E disse-me: Estas palavras são fiéis e verdadeiras; e o Senhor, o Deus dos santos profetas, enviou o seu anjo, para mostrar aos seus servos as coisas que em breve hão de acontecer."}
          },
        ]
      },
      {
        dia: "Quarta-feira",
        titulo: "Profetisas e jovens pastores",
        resumo: "O Novo Testamento confirma que Deus derramou Seu dom profético sobre homens e mulheres sem distinção, como se observa no ministério da idosa Ana e das quatro filhas solteiras do evangelista Filipe. Suas profecias eram autênticas, embora não fizessem parte do cânon bíblico.\n\nParalelamente, os apóstolos exerceram discipulado e mentoria com líderes mais jovens, tais como Timóteo e Tito. A liderança cristã foi fortalecida pelo encorajamento bíblico e pelas admoestações proféticas direcionadas a esses novos servos.",
        perguntas: [
          {
            pergunta: "O que esses textos nos ensinam sobre profetisas?",
            resposta: "Ensinam que o dom profético foi legitimamente concedido por Deus a mulheres no Novo Testamento, demonstrando que Ele capacita servos de todas as idades para proclamar a Sua verdade.",
            versoes: {"naa": "Havia uma profetisa, chamada Ana, filha de Fanuel, da tribo de Aser. Ela era bem idosa, tendo vivido com o marido sete anos desde que tinha se casado. Agora era viúva de oitenta e quatro anos. Ela não deixava o templo, mas adorava noite e dia, com jejuns e orações. E, chegando naquela hora, dava graças a Deus e falava a respeito do menino a todos os que esperavam a redenção de Jerusalém. Filipe tinha quatro filhas solteiras, que profetizavam.", "ntlh": "Havia ali também uma profetisa chamada Ana, que era viúva e muito idosa. Ela era filha de Fanuel, da tribo de Aser. Sete anos depois que ela havia casado, o seu marido morreu. Agora ela estava com oitenta e quatro anos de idade. Nunca saía do pátio do Templo e adorava a Deus dia e noite, jejuando e fazendo orações. Naquele momento ela chegou e começou a louvar a Deus e a falar a respeito do menino para todos os que esperavam a libertação de Jerusalém. Ele tinha quatro filhas solteiras que profetizavam.", "nvi": "Estava ali a profetisa Ana, filha de Fanuel, da tribo de Aser. Era muito idosa; tinha vivido com seu marido sete anos depois de se casar e então permanecera viúva até a idade de oitenta e quatro anos. Nunca deixava o templo: adorava a Deus jejuando e orando dia e noite. Tendo chegado ali naquele exato momento, deu graças a Deus e falava a respeito do menino a todos os que esperavam a redenção de Jerusalém. Ele tinha quatro filhas virgens, que profetizavam.", "acf": "E estava ali a profetisa Ana, filha de Fanuel, da tribo de Aser. Esta era já avançada em idade, e tinha vivido com o marido sete anos, desde a sua virgindade; E era viúva, de quase oitenta e quatro anos, e não se afastava do templo, servindo a Deus em jejuns e orações, de noite e de dia. E sobrevindo na mesma hora, ela dava graças a Deus, e falava dele a todos os que esperavam a redenção em Jerusalém. E tinha este quatro filhas virgens, que profetizavam."}
          },
        ]
      },
      {
        dia: "Quinta-feira",
        titulo: "Falsos profetas no Novo Testamento",
        resumo: "Jesus advertiu que o tempo do fim seria marcado pelo surgimento de falsos profetas operando grandes sinais e prodígios para enganar, se possível, até mesmo os escolhidos. A realização de milagres e prodígios não é, por si só, um atestado de autenticidade divina.\n\nPara enfrentar as hostes espirituais da maldade e não sucumbir aos ardis do engano, o cristão precisa estar revestido de toda a armadura de Deus. A proteção real contra as distorções teológicas consiste em permanecer firmado na oração, na justiça de Cristo e na verdade bíblica.",
        perguntas: [
          {
            pergunta: "Que advertência Jesus nos apresenta? Por que devemos levá-la tão a sério?",
            resposta: "Jesus adverte sobre o surgimento de falsos mestres e cristos com sinais convincentes; devemos levar isso a sério para não sermos seduzidos por enganos espirituais nos últimos dias.",
            versoes: {"naa": "— Então, se alguém disser a vocês: “Olhem! Aqui está o Cristo!” ou: “Ali está ele!”, não acreditem. Porque surgirão falsos cristos e falsos profetas, operando grandes sinais e prodígios, para enganar, se possível, os próprios eleitos.", "ntlh": "— Portanto, se alguém disser para vocês: “Vejam! O Messias está aqui” ou “O Messias está ali”, não acreditem. Porque aparecerão falsos profetas e falsos messias, que farão milagres e maravilhas para enganar, se possível, até o povo escolhido de Deus.", "nvi": "Se, então, alguém disser: ‘Vejam, aqui está o Cristo!’ ou: ‘Ali está ele!’, não acreditem. Pois aparecerão falsos cristos e falsos profetas que realizarão grandes sinais e maravilhas para, se possível, enganar até os eleitos.", "acf": "Então, se alguém vos disser: Eis que o Cristo está aqui, ou ali, não lhe deis crédito; Porque surgirão falsos cristos e falsos profetas, e farão tão grandes sinais e prodígios que, se possível fora, enganariam até os escolhidos."}
          },
          {
            pergunta: "De acordo com Efésios 6:10-18, como podemos nos proteger de qualquer tipo de engano?",
            resposta: "Vestindo toda a armadura de Deus por meio da oração, da fé, da couraça da justiça e do apego resoluto à verdade contida na Palavra de Deus.",
            versoes: {"naa": "Quanto ao mais, sejam fortalecidos no Senhor e na força do seu poder. Vistam-se com toda a armadura de Deus, para poderem ficar firmes contra as ciladas do diabo. Porque a nossa luta não é contra o sangue e a carne, mas contra os principados e as potestades, contra os dominadores deste mundo tenebroso, contra as forças espirituais do mal, nas regiões celestiais. Por isso, peguem toda a armadura de Deus, para que vocês possam resistir no dia mau e, depois de terem vencido tudo, permanecer inabaláveis. Portanto, fiquem firmes, cingindo-se com a verdade e vestindo a couraça da justiça. Tenham os pés calçados com a preparação do evangelho da paz, segurando sempre o escudo da fé, com o qual poderão apagar todos os dardos inflamados do Maligno. Usem também o capacete da salvação e a espada do Espírito, que é a palavra de Deus. Orem em todo tempo no Espírito, com todo tipo de oração e súplica, e para isto vigiem com toda perseverança e súplica por todos os santos.", "ntlh": "Para terminar: tornem-se cada vez mais fortes, vivendo unidos com o Senhor e recebendo a força do seu grande poder. Vistam-se com toda a armadura que Deus dá a vocês, para ficarem firmes contra as armadilhas do Diabo. Pois nós não estamos lutando contra seres humanos, mas contra as forças espirituais do mal que vivem nas alturas, isto é, os governos, as autoridades e os poderes que dominam completamente este mundo de escuridão . Por isso peguem agora a armadura que Deus lhes dá. Assim, quando chegar o dia de enfrentarem as forças do mal, vocês poderão resistir aos ataques do inimigo e, depois de lutarem até o fim, vocês continuarão firmes, sem recuar. Portanto, estejam preparados. Usem a verdade como cinturão. Vistam-se com a couraça da justiça e calcem, como sapatos, a prontidão para anunciar a boa notícia de paz. E levem sempre a fé como escudo, para poderem se proteger de todos os dardos de fogo do Maligno . Recebam a salvação como capacete e a palavra de Deus como a espada que o Espírito Santo lhes dá. Façam tudo isso orando a Deus e pedindo a ajuda dele. Orem sempre, guiados pelo Espírito de Deus. Fiquem alertas. Não desanimem e orem sempre por todo o povo de Deus.", "nvi": "Finalmente, fortaleçam-se no Senhor e no seu forte poder. Vistam toda a armadura de Deus, para poderem ficar firmes contra as ciladas do Diabo, pois a nossa luta não é contra seres humanos , mas contra os poderes e autoridades, contra os dominadores deste mundo de trevas, contra as forças espirituais do mal nas regiões celestiais. Por isso, vistam toda a armadura de Deus, para que possam resistir no dia mau e permanecer inabaláveis, depois de terem feito tudo. Assim, mantenham-se firmes, cingindo-se com o cinto da verdade, vestindo a couraça da justiça e tendo os pés calçados com a prontidão do evangelho da paz. Além disso, usem o escudo da fé, com o qual vocês poderão apagar todas as setas inflamadas do Maligno. Usem o capacete da salvação e a espada do Espírito, que é a palavra de Deus. Orem no Espírito em todas as ocasiões, com toda oração e súplica; tendo isso em mente, estejam atentos e perseverem na oração por todos os santos.", "acf": "No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder. Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo. Porque não temos que lutar contra a carne e o sangue, mas, sim, contra os principados, contra as potestades, contra os príncipes das trevas deste século, contra as hostes espirituais da maldade, nos lugares celestiais. Portanto, tomai toda a armadura de Deus, para que possais resistir no dia mau e, havendo feito tudo, ficar firmes. Estai, pois, firmes, tendo cingidos os vossos lombos com a verdade, e vestida a couraça da justiça; E calçados os pés na preparação do evangelho da paz; Tomando sobretudo o escudo da fé, com o qual podereis apagar todos os dardos inflamados do maligno. Tomai também o capacete da salvação, e a espada do Espírito, que é a palavra de Deus; Orando em todo o tempo com toda a oração e súplica no Espírito, e vigiando nisto com toda a perseverança e súplica por todos os santos,"}
          },
        ]
      },
      {
        dia: "Sexta-feira",
        titulo: "Mantendo Jesus e Sua Palavra no centro",
        resumo: "Todo profeta genuíno tem como missão prioritária conduzir as pessoas a um relacionamento redentor com Jesus e submetê-las à autoridade das Sagradas Escrituras. Isso se confirma de modo claro na trajetória e nos escritos de Ellen G. White.\n\nEla caracterizou o seu ministério profético como uma luz menor destinada a guiar os seres humanos para a luz maior, que é a Bíblia. A regra definitiva de fé e prática deve permanecer centrada exclusivamente na Palavra inspirada por Deus.",
        perguntas: [
        ]
      },
    ],
    estudoProfessor: {
      "titulo": "Profetas do Novo Testamento",
      "subtitulo": "Recurso Didático para Professores da Escola Sabatina - Lição 04",
      "versoChave": "Ora, os dons são diversos, mas o Espírito é o mesmo. E também há diversidade nos serviços, mas o Senhor é o mesmo. E há diversidade nas realizações, mas o mesmo Deus é quem opera tudo em todos. - 1 Coríntios 12:4-6",
      "objetivo": "Compreender que o mesmo Espírito Santo que atuou nos profetas do Antigo Testamento continua guiando a igreja no Novo Testamento através de dons espirituais, alinhando a vida aos ensinos de Cristo e desenvolvendo discernimento espiritual contra os enganos do tempo do fim.",
      "slides": [
        {
          "titulo": "Capa e Verso de Memorização",
          "topicos": [
            "Unidade trinitária na concessão e operação dos dons espirituais",
            "Diversidade de ministérios voltada para o bem comum da igreja",
            "Os dons existem para a edificação coletiva e não para a exaltação pessoal"
          ],
          "nota": "Destaque para a classe que o foco dos dons espirituais no Novo Testamento nunca é a exaltação do indivíduo, mas a unidade e a missão coletiva da igreja."
        },
        {
          "titulo": "A Harmonia entre os Testamentos",
          "topicos": [
            "O Espírito Santo é a fonte imutável da revelação através das eras",
            "A revelação do Novo Testamento cumpre e amplia o Antigo Testamento",
            "O sacrifício e a redenção em Cristo formam o centro de toda a profecia"
          ],
          "nota": "Responda à falsa ideia de que o Antigo Testamento foi abolido. Enfatize que a Bíblia dos apóstolos era o Antigo Testamento."
        },
        {
          "titulo": "O Cumprimento da Promessa de Moisés",
          "topicos": [
            "Tipologia bíblica entre o ministério de Moisés e a liderança de Jesus",
            "Diferença entre profetas humanos e a autoridade inerente de Cristo",
            "Reconhecimento pleno de Jesus como o Messias e Filho do Deus vivo"
          ],
          "nota": "Explique que definir Jesus apenas como profeta é incompleto; Ele é o Messias, o Criador e a plenitude da divindade."
        },
        {
          "titulo": "A Palavra Encarnada",
          "topicos": [
            "A Palavra de Deus manifestada de forma falada, escrita e encarnada",
            "Cristo como agente criador, Luz do Mundo e Estrela da Manhã",
            "A profecia bíblica centralizada na vida, morte, ressurreição e volta de Jesus"
          ],
          "nota": "Peça aos alunos para refletirem no impacto de o Criador do universo ter se humanizado para ser o nosso substituto e salvador."
        },
        {
          "titulo": "Chamado, Autoridade e Liderança",
          "topicos": [
            "Definição de apóstolo como enviado em missão por Cristo",
            "Distinção funcional entre o ofício apostólico e o dom de profecia",
            "Igualdade na autoridade inspirativa outorgada pelo Espírito Santo"
          ],
          "nota": "Esclareça que a autoridade das palavras proféticas não provém da posição eclesiástica da pessoa, mas da fonte divina da mensagem."
        },
        {
          "titulo": "A Pedra Angular e o Alicerce",
          "topicos": [
            "O fundamento da igreja edificado sobre apóstolos e profetas",
            "Jesus Cristo como a Pedra Angular que sustenta toda a estrutura da fé",
            "A revelação inclusiva da salvação para todos os povos em um só corpo"
          ],
          "nota": "Use a metáfora da construção civil: sem a pedra angular (Cristo), a estrutura rui; sem o fundamento (Escrituras), a igreja perde prumo."
        },
        {
          "titulo": "Edificar, Exortar e Consolar",
          "topicos": [
            "A profecia neotestamentária como proclamação da vontade divina presente",
            "Edificação contínua da maturidade espiritual dos crentes",
            "Exortação amorosa contra desvios e consolo em períodos difíceis"
          ],
          "nota": "Destaque que a profecia aplica a Palavra de Deus às lutas e necessidades reais dos crentes."
        },
        {
          "titulo": "O Crescimento do Corpo de Cristo",
          "topicos": [
            "Capacitação de cada membro para o serviço e aperfeiçoamento",
            "Promoção da unidade doutrinária rumo à estatura de Cristo",
            "Proteção da comunidade cristã contra enganos e ventos de doutrina"
          ],
          "nota": "Pergunte à classe como a voz profética nos ajuda a permanecer firmes em meio à confusão doutrinária do mundo moderno."
        },
        {
          "titulo": "Mensageiros Fiéis sem Livros na Bíblia",
          "topicos": [
            "Exemplos bíblicos de profetas como Ágabo, Judas e Silas",
            "Reconhecimento da inspiração profética fora dos livros canônicos",
            "Submissão de qualquer manifestação profética ao Cânon sagrado"
          ],
          "nota": "Esclareça que a ausência de um livro no Cânon não torna o ministério de um profeta menos inspirado ou falso."
        },
        {
          "titulo": "Deus Chama a Quem Quer",
          "topicos": [
            "O ministério da profetisa Ana servindo no templo e exaltando o Messias",
            "O exercício legítimo do dom profético pelas quatro filhas de Filipe",
            "Soberania de Deus ao derramar dons espirituais sem distinção de gênero"
          ],
          "nota": "Ressalte como a narrativa bíblica valoriza a atuação ativa das mulheres no avanço do reino e no testemunho profético."
        },
        {
          "titulo": "Preparando a Próxima Geração",
          "topicos": [
            "Discipulado e mentoria de Paulo com jovens líderes como Timóteo e Tito",
            "Reconhecimento e confirmação do ministério pela igreja",
            "Importância do exemplo de pureza, dedicação e firmeza na Palavra"
          ],
          "nota": "Incentive os membros da classe a apoiarem e mentorearem a juventude da igreja local nas responsabilidades missionárias."
        },
        {
          "titulo": "A Advertência Escatológica de Jesus",
          "topicos": [
            "Alerta sobre o surgimento de falsos profetas nos últimos dias",
            "Sinais e prodígios sobrenaturais usados como ferramentas de engano",
            "O perigo de mensagens que misturam verdades com ensinamentos errôneos"
          ],
          "nota": "Alerte a classe para não julgar a veracidade de um ministério apenas por manifestações emocionais ou milagres aparentes."
        },
        {
          "titulo": "Como Discernir o Verdadeiro do Falso",
          "topicos": [
            "Conformidade obrigatória com a lei de Deus e com o testemunho bíblico",
            "Avaliação do caráter, da vida diária e dos frutos espirituais do mensageiro",
            "Exaltação exclusiva de Jesus Cristo e obediência à Sua revelação"
          ],
          "nota": "Enfatize o exemplo dos crentes de Bereia, que examinavam diariamente as Escrituras para confirmar o ensino recebido."
        },
        {
          "titulo": "A Proteção Espiritual contra a Falsidade",
          "topicos": [
            "A realidade do conflito contra principados e potestades espirituais",
            "A apropriação diária da armadura da fé e da Espada do Espírito",
            "Oração perseverante e estudo bíblico constante como escudos de defesa"
          ],
          "nota": "Mostre que a única segurança sólida contra o engano é o arraigamento diário e pessoal no estudo da Bíblia."
        },
        {
          "titulo": "Ellen G. White e a Luz Menor",
          "topicos": [
            "O dom profético no remanescente escatológico descrito no Apocalipse",
            "Escritos proféticos que atuam como luz menor direcionando à Bíblia",
            "Inexistência de novas doutrinas e subordinação total ao Cânon bíblico"
          ],
          "nota": "Reforce que os escritos inspirados de Ellen White são uma bênção para fortalecer o estudo da Bíblia e a devoção pessoal a Cristo."
        },
        {
          "titulo": "Mantendo Jesus e a Bíblia no Centro",
          "topicos": [
            "Toda autêntica profecia conduz à exaltação e senhorio de Jesus",
            "Chamado ao amadurecimento espiritual, comunhão e fidelidade missionária",
            "A Bíblia Sagrada como a regra suprema e inegociável de fé e conduta"
          ],
          "nota": "Finalize com uma oração fervorosa pedindo discernimento, amor pelas Escrituras e prontidão para a breve volta de Jesus."
        }
      ],
      "aprofundamentos": [
        {
          "titulo": "A Tipologia de Moisés e a Superioridade do Logos Profético em Cristo",
          "texto": "No Antigo Testamento, a promessa de Deuteronômio 18:15 indicava que Deus suscitaria um profeta semelhante a Moisés. Embora a profecia encontre um cumprimento imediato no ministério dos profetas sucessores, o Novo Testamento aplica este texto de forma definitiva a Jesus Cristo. Contudo, Jesus transcende o modelo tipológico: enquanto os demais profetas atuavam como intermediários declarando a mensagem recebida, Jesus é o próprio Logos encarnado que fala com autoridade própria, sendo a personificação viva da salvação e o Criador de todas as coisas."
        },
        {
          "titulo": "A Relação Eclesiológica entre o Apostolado e o Dom Profético",
          "texto": "Existe uma distinção eclesiológica marcante entre apóstolos e profetas no Novo Testamento. Os apóstolos eram testemunhas oculares da ressurreição de Cristo, encarregados de estabelecer as diretrizes e a liderança da igreja nascente, enquanto os profetas atuavam diretamente na proclamação inspirada para edificação, exortação e consolo. Em termos de autoridade inspirativa, no entanto, ambos recebiam revelações diretamente do Espírito Santo, formando o fundamento eclesial cuja pedra angular é o próprio Cristo."
        },
        {
          "titulo": "A Distinção Teológica entre Profetas Canônicos e Não-Canônicos e o Papel do Espírito de Profecia",
          "texto": "A manifestação do dom profético nas Escrituras é mais abrangente do que os autores do Cânon bíblico. Diversos mensageiros autênticos desempenharam seus ministérios sem redigir livros sagrados. Da mesma forma, o ministério profético no tempo do fim atua na categoria não-canônica, servindo como uma luz menor destinada a clarear o entendimento da luz maior, que são as Sagradas Escrituras, sem adicionar doutrinas ou substituir o princípio da Sola Scriptura."
        },
        {
          "titulo": "Sinais Sobrenaturais versus Conformidade Doutrinária: O Combate à Escatologia do Engano",
          "texto": "As advertências de Cristo em Mateus 24 revelam que milagres e sinais grandiosos não servem de validação exclusiva para a verdade, visto que forças malignas realizam prodígios para enganar. O parâmetro definitivo de discernimento permanece a plena harmonia com a lei e o testemunho das Escrituras, além da coerência moral e fidelidade aos ensinos de Cristo manifestados na conduta do mensageiro."
        }
      ],
      "capa": "img/licoes/licao-2026-4t-4.png"
    }

  },
  {
    id: 3,
    titulo: "Profetas do Antigo Testamento",
    data: "10 de Outubro de 2026",
    semana: "Lição 3 - 4º Trimestre 2026",
    versiculo: "2Cr 20:20",
    texto: "Josafá se pôs em pé e disse: ‘Escutem, povo de Judá e moradores de Jerusalém! Creiam no Senhor, seu Deus, e vocês estarão seguros; creiam nos profetas do Senhor e vocês serão bem-sucedidos’",
    resumo: "A lição analisa o papel e a natureza dos profetas do Antigo Testamento como porta-vozes do Senhor enviados para guiar Seu povo. Revela que Deus escolheu seres humanos reais, imperfeitos e sujeitos a fraquezas, tanto homens quanto mulheres, para comunicar fielmente Sua vontade em meio a crises e à oposição de falsos profetas. Essa compreensão reforça a importância de confiar nas mensagens divinas preservadas nas Escrituras e reveladas pelo dom profético.",
    leituras: [{"ref": "Tg 5:17, 18", "versoes": {"naa": "Elias era homem semelhante a nós, sujeito aos mesmos sentimentos, e orou com fervor para que não chovesse sobre a terra, e, por três anos e seis meses, não choveu. Depois, orou de novo, e então o céu deu chuva, e a terra produziu os seus frutos.", "ntlh": "O profeta Elias era um ser humano como nós. Ele orou com fervor para que não chovesse, e durante três anos e meio não choveu sobre a terra. Depois orou outra vez, e então choveu, e a terra deu a sua colheita.", "nvi": "Elias era humano como nós. Ele orou fervorosamente para que não chovesse, e não choveu sobre a terra durante três anos e meio. Orou outra vez, e os céus enviaram chuva, e a terra produziu os seus frutos.", "acf": "Elias era homem sujeito às mesmas paixões que nós e, orando, pediu que não chovesse e, por três anos e seis meses, não choveu sobre a terra. E orou outra vez, e o céu deu chuva, e a terra produziu o seu fruto."}}, {"ref": "1Rs 19:1-16", "versoes": {"naa": "Acabe contou a Jezabel tudo o que Elias havia feito e como havia matado todos os profetas à espada. Então Jezabel mandou um mensageiro a Elias para dizer-lhe: — Que os deuses me castiguem se amanhã a estas horas eu não tiver feito com a sua vida o mesmo que você fez com a vida de cada um deles! Elias ficou com medo, levantou-se e, para salvar a vida, se foi e chegou a Berseba, que pertence a Judá. E ali ele deixou o seu servo. Ele mesmo, porém, foi para o deserto, caminhando um dia inteiro. Por fim, sentou-se debaixo de um zimbro. Sentiu vontade de morrer e orou: — Basta, SENHOR! Tira a minha vida, porque eu não sou melhor do que os meus pais. Deitou-se e dormiu debaixo de um zimbro. E eis que um anjo tocou nele e lhe disse: — Levante-se e coma. Elias olhou e viu, perto da sua cabeça, um pão assado sobre pedras em brasa e um jarro de água. Comeu, bebeu e tornou a dormir. O anjo do SENHOR voltou, tocou nele e lhe disse: — Levante-se e coma, porque a viagem será longa. Então Elias se levantou, comeu e bebeu. E, com a força daquela comida, caminhou quarenta dias e quarenta noites até Horebe, o monte de Deus. Ali entrou numa caverna, onde passou a noite. E eis que a palavra do SENHOR veio a ele e lhe disse: — O que você está fazendo aqui, Elias? Ele respondeu: — Tenho sido muito zeloso pelo SENHOR, Deus dos Exércitos, porque os filhos de Israel deixaram a tua aliança, derrubaram os teus altares e mataram os teus profetas à espada. Só fiquei eu, e eles estão querendo tirar-me a vida. Então foi-lhe dito: — Saia daí e fique diante do SENHOR no monte. Eis que o SENHOR estava passando. E um grande e forte vento fendia os montes e quebrava as rochas diante do SENHOR. Mas o SENHOR não estava no vento. Depois do vento, houve um terremoto. Mas o SENHOR não estava no terremoto. Depois do terremoto, veio um fogo. Mas o SENHOR não estava no fogo. E, depois do fogo, veio o som de um suave sussurro. Quando Elias ouviu isso, cobriu o rosto com o manto e, saindo, pôs-se à entrada da caverna. Eis que veio uma voz e lhe disse: — O que você está fazendo aqui, Elias? Ele respondeu: — Tenho sido muito zeloso pelo SENHOR, Deus dos Exércitos, porque os filhos de Israel deixaram a tua aliança, derrubaram os teus altares e mataram os teus profetas à espada. Só fiquei eu, e eles estão querendo tirar-me a vida. Então o SENHOR disse a Elias: — Vá, volte ao seu caminho para o deserto de Damasco. Chegando lá, unja Hazael como rei da Síria. Unja também Jeú, filho de Ninsi, como rei de Israel e Eliseu, filho de Safate, de Abel-Meolá, como profeta em seu lugar.", "ntlh": "O rei Acabe contou à sua esposa Jezabel tudo o que Elias havia feito e como havia matado à espada todos os profetas do deus Baal. Aí ela mandou um mensageiro a Elias com o seguinte recado: — Que os deuses me matem, se até amanhã a esta hora eu não fizer com você o mesmo que você fez com os profetas! Elias ficou com medo e, para salvar a vida, fugiu com o seu ajudante para a cidade de Berseba, que ficava na região de Judá. Deixou ali o seu ajudante e foi para o deserto, andando um dia inteiro. Aí parou, sentou-se na sombra de uma árvore e teve vontade de morrer. Então orou assim: — Já chega, ó SENHOR Deus! Acaba agora com a minha vida! Eu sou um fracasso, como foram os meus antepassados . Elias se deitou debaixo da árvore e caiu no sono. De repente, um anjo tocou nele e disse: — Levante-se e coma. Elias olhou em volta e viu perto da sua cabeça um pão assado nas pedras e uma jarra de água. Ele comeu, e bebeu, e dormiu de novo. O anjo do SENHOR Deus voltou e tocou nele pela segunda vez, dizendo: — Levante-se e coma; se não, você não aguentará a viagem. Elias se levantou, comeu e bebeu, e a comida lhe deu força bastante para andar quarenta dias e quarenta noites até o Sinai, o monte sagrado. Ali ele entrou numa caverna para passar a noite, e, de repente, o SENHOR Deus lhe perguntou: — O que você está fazendo aqui, Elias? Ele respondeu: — Ó SENHOR, Deus Todo-Poderoso, eu sempre tenho servido a ti e só a ti. Mas o povo de Israel quebrou a sua aliança contigo, derrubou os teus altares e matou todos os teus profetas. Eu sou o único que sobrou, e eles estão querendo me matar! O SENHOR Deus disse: — Saia e vá ficar diante de mim no alto do monte. Então o SENHOR passou por ali e mandou um vento muito forte, que rachou os morros e quebrou as rochas em pedaços. Mas o SENHOR não estava no vento. Quando o vento parou de soprar, veio um terremoto; porém o SENHOR não estava no terremoto. Depois do terremoto veio um fogo, mas o SENHOR não estava no fogo. E depois do fogo veio um sussurro calmo e suave. Quando Elias ouviu o sussurro, cobriu o rosto com a capa. Então saiu e ficou na entrada da caverna. E uma voz lhe disse: — O que você está fazendo aqui, Elias? Ele respondeu: — Ó SENHOR, Deus Todo-Poderoso, eu sempre tenho servido a ti e só a ti. Mas o povo de Israel quebrou a sua aliança contigo, derrubou os teus altares e matou todos os teus profetas. Eu sou o único que sobrou, e eles estão querendo me matar! Então o SENHOR Deus disse: — Volte para o deserto que fica perto de Damasco. Chegando lá, entre na cidade e unja Hazael como rei da Síria. Unja Jeú, filho de Ninsi, como rei de Israel e unja Eliseu, filho de Safate, de Abel-Meolá, como profeta, para ficar em lugar de você.", "nvi": "Ora, Acabe contou a Jezabel tudo o que Elias tinha feito e como havia matado todos aqueles profetas à espada. Por isso Jezabel mandou um mensageiro a Elias para dizer-lhe: “Que os deuses me castiguem com todo o rigor, se amanhã nesta hora eu não fizer com a sua vida o que você fez com a deles”. Elias teve medo e fugiu para salvar a vida. Em Berseba de Judá ele deixou o seu servo e entrou no deserto, caminhando um dia. Chegou a um pé de giesta, sentou-se debaixo dele e orou, pedindo a morte: “Já tive o bastante, SENHOR. Tira a minha vida; não sou melhor do que os meus antepassados”. Depois se deitou debaixo da árvore e dormiu. De repente um anjo tocou nele e disse: “Levante-se e coma”. Elias olhou ao redor e ali, junto à sua cabeça, havia um pão assado sobre brasas quentes e um jarro de água. Ele comeu, bebeu e deitou-se de novo. O anjo do SENHOR voltou, tocou nele e disse: “Levante-se e coma, pois a sua viagem será muito longa”. Então ele se levantou, comeu e bebeu. Fortalecido com aquela comida, viajou quarenta dias e quarenta noites, até chegar a Horebe, o monte de Deus. Ali entrou numa caverna e passou a noite. E a palavra do SENHOR veio a ele: “O que você está fazendo aqui, Elias?” Ele respondeu: “Tenho sido muito zeloso pelo SENHOR, o Deus dos Exércitos. Os israelitas rejeitaram a tua aliança, quebraram os teus altares, e mataram os teus profetas à espada. Sou o único que sobrou, e agora também estão procurando matar-me”. O SENHOR lhe disse: “Saia e fique no monte, na presença do SENHOR, pois o SENHOR vai passar”. Então veio um vento fortíssimo que separou os montes e esmigalhou as rochas diante do SENHOR, mas o SENHOR não estava no vento. Depois do vento houve um terremoto, mas o SENHOR não estava no terremoto. Depois do terremoto houve um fogo, mas o SENHOR não estava nele. E depois do fogo houve o murmúrio de uma brisa suave. Quando Elias ouviu, puxou a capa para cobrir o rosto, saiu e ficou à entrada da caverna. E uma voz lhe perguntou: “O que você está fazendo aqui, Elias?” Ele respondeu: “Tenho sido muito zeloso pelo SENHOR, o Deus dos Exércitos. Os israelitas rejeitaram a tua aliança, quebraram os teus altares e mataram os teus profetas à espada. Sou o único que sobrou, e agora também estão procurando matar-me”. O SENHOR lhe disse: “Volte pelo caminho por onde veio e vá para o deserto de Damasco. Chegando lá, unja Hazael como rei da Síria. Unja também Jeú, filho de Ninsi, como rei de Israel, e unja Eliseu, filho de Safate, de Abel-Meolá, para suceder a você como profeta.", "acf": "E ACABE fez saber a Jezabel tudo quanto Elias havia feito, e como totalmente matara todos os profetas à espada. Então Jezabel mandou um mensageiro a Elias, a dizer-lhe: Assim me façam os deuses, e outro tanto, se de certo amanhã a estas horas não puser a tua vida como a de um deles. O que vendo ele, se levantou e, para escapar com vida, se foi, e chegando a Berseba, que é de Judá, deixou ali o seu servo. Ele, porém, foi ao deserto, caminho de um dia, e foi sentar-se debaixo de um zimbro; e pediu para si a morte, e disse: Já basta, ó SENHOR; toma agora a minha vida, pois não sou melhor do que meus pais. E deitou-se, e dormiu debaixo do zimbro; e eis que então um anjo o tocou, e lhe disse: Levanta-te, come. E olhou, e eis que à sua cabeceira estava um pão cozido sobre as brasas, e uma botija de água; e comeu, e bebeu, e tornou a deitar-se. E o anjo do SENHOR tornou segunda vez, e o tocou, e disse: Levanta-te e come, porque te será muito longo o caminho. Levantou-se, pois, e comeu e bebeu; e com a força daquela comida caminhou quarenta dias e quarenta noites até Horebe, o monte de Deus. E ali entrou numa caverna e passou ali a noite; e eis que a palavra do SENHOR veio a ele, e lhe disse: Que fazes aqui Elias? E ele disse: Tenho sido muito zeloso pelo SENHOR Deus dos Exércitos, porque os filhos de Israel deixaram a tua aliança, derrubaram os teus altares, e mataram os teus profetas à espada, e só eu fiquei, e buscam a minha vida para ma tirarem. E Deus lhe disse: Sai para fora, e põe-te neste monte perante o SENHOR. E eis que passava o SENHOR, como também um grande e forte vento que fendia os montes e quebrava as penhas diante do SENHOR; porém o SENHOR não estava no vento; e depois do vento um terremoto; também o SENHOR não estava no terremoto; E depois do terremoto um fogo; porém também o SENHOR não estava no fogo; e depois do fogo uma voz mansa e delicada. E sucedeu que, ouvindo-a Elias, envolveu o seu rosto na sua capa, e saiu para fora, e pôs-se à entrada da caverna; e eis que veio a ele uma voz, que dizia: Que fazes aqui, Elias? E ele disse: Eu tenho sido em extremo zeloso pelo SENHOR Deus dos Exércitos, porque os filhos de Israel deixaram a tua aliança, derrubaram os teus altares, e mataram os teus profetas à espada, e só eu fiquei; e buscam a minha vida para ma tirarem. E o SENHOR lhe disse: Vai, volta pelo teu caminho para o deserto de Damasco; e, chegando lá, unge a Hazael rei sobre a Síria. Também a Jeú, filho de Ninsi, ungirás rei de Israel; e também a Eliseu, filho de Safate de Abel-Meolá, ungirás profeta em teu lugar."}}, {"ref": "Êx 15:20", "versoes": {"naa": "A profetisa Miriã, irmã de Arão, pegou um tamborim, e todas as mulheres saíram atrás dela com tamborins e com danças.", "ntlh": "A profetisa Míriam, que era irmã de Arão, pegou um pandeiro, e todas as mulheres a acompanharam, tocando pandeiro e dançando.", "nvi": "Então Miriã, a profetisa, irmã de Arão, pegou um tamborim e todas as mulheres a seguiram, tocando tamborins e dançando.", "acf": "Então Miriã, a profetiza, a irmã de Arão, tomou o tamboril na sua mão, e todas as mulheres saíram atrás dela com tamboris e com danças."}}, {"ref": "2Rs 22:11-14", "versoes": {"naa": "Quando ouviu as palavras do Livro da Lei, o rei rasgou as suas roupas. Então deu ordens a Hilquias, o sacerdote, a Aicão, filho de Safã, a Acbor, filho de Micaías, a Safã, o escrivão, e a Asaías, servo do rei, dizendo: — Vão consultar o SENHOR por mim, pelo povo e por todo o Judá, a respeito das palavras deste livro que foi encontrado. Porque é grande o furor do SENHOR, que se acendeu contra nós, porque os nossos pais não deram ouvidos às palavras deste livro, para fazerem segundo tudo o que está escrito a nosso respeito. Então o sacerdote Hilquias, Aicão, Acbor, Safã e Asaías foram falar com a profetisa Hulda, esposa de Salum, encarregado das vestimentas da Casa do SENHOR, filho de Ticva, filho de Harás. Hulda morava na parte nova da cidade, em Jerusalém. Eles lhe contaram o que havia acontecido,", "ntlh": "Quando ouviu o que o Livro da Lei dizia, o rei rasgou as suas roupas em sinal de tristeza. Então deu a Hilquias, o sacerdote, e a Aicã, filho de Safã, e a Acbor, filho de Micaías, e a Safã, o escrivão, e a Asaías, o servidor do rei, a seguinte ordem: — Vão consultar a Deus, o SENHOR, por mim e por todo o povo de Judá a respeito dos ensinamentos deste livro. Deus está irado conosco porque os nossos antepassados não fizeram o que este livro manda. Hilquias, Aicã, Abdom, Safã e Asaías foram falar com uma profetisa chamada Hulda, que morava no bairro novo de Jerusalém. O marido dela, que se chamava Salum, filho de Ticva e neto de Harás, era o encarregado da rouparia do Templo. Eles contaram a Hulda o que havia acontecido,", "nvi": "Assim que o rei ouviu as palavras do Livro da Lei, rasgou suas vestes e deu estas ordens ao sacerdote Hilquias, a Aicam, filho de Safã, a Acbor, filho de Micaías, ao secretário Safã e ao auxiliar real Asaías: “Vão consultar o SENHOR por mim, pelo povo e por todo o Judá acerca do que está escrito neste livro que foi encontrado. A ira do SENHOR contra nós deve ser grande, pois os nossos antepassados não obedeceram às palavras deste livro nem agiram de acordo com tudo o que nele está escrito a nosso respeito”. O sacerdote Hilquias, Aicam, Acbor, Safã e Asaías foram falar com a profetisa Hulda, mulher de Salum, filho de Ticvá e neto de Harás, responsável pelo guarda-roupa do templo. Ela morava no bairro novo de Jerusalém.", "acf": "Sucedeu, pois, que, ouvindo o rei as palavras do livro da lei, rasgou as suas vestes. E o rei mandou a Hilquias, o sacerdote, a Aicão, filho de Safã, a Acbor, filho de Micaías, a Safã o escrivão e a Asaías, o servo do rei, dizendo: Ide, e consultai o SENHOR por mim, pelo povo e por todo o Judá, acerca das palavras deste livro que se achou; porque grande é o furor do SENHOR, que se acendeu contra nós; porquanto nossos pais não deram ouvidos às palavras deste livro, para fazerem conforme tudo quanto acerca de nós está escrito. Então foi o sacerdote Hilquias, e Aicão, Acbor, Safã e Asaías à profetiza Hulda, mulher de Salum, filho de Ticvá, o filho de Harás, o guarda das vestiduras (e ela habitava em Jerusalém, na segunda parte), e lhe falaram."}}, {"ref": "Jr 14:1-15", "versoes": {"naa": "Palavra do SENHOR que veio a Jeremias a respeito da seca: “Judá anda chorando, as suas portas estão abandonadas e, de luto, se curvam até o chão; e o clamor de Jerusalém vai subindo. Os poderosos mandam os servos buscar água. Estes vão às cisternas e não encontram água; voltam com os seus cântaros vazios e, decepcionados e confusos, cobrem a cabeça. Por não ter havido chuva sobre a terra, esta se acha ressequida; e, por isso, os lavradores, decepcionados, cobrem a cabeça. Até as corças no campo têm as suas crias e as abandonam, porque não há capim. Os jumentos selvagens se põem no alto dos morros e, ofegantes, sorvem o vento como chacais; os seus olhos desfalecem, por falta de pasto.” Ainda que as nossas maldades testifiquem contra nós, ó SENHOR, age por amor do teu nome! Porque as nossas rebeldias se multiplicaram; pecamos contra ti. Ó Esperança de Israel e Redentor do teu povo no tempo da angústia, por que serias como estrangeiro na terra e como viajante que fica só uma noite? Por que serias como homem que foi pego de surpresa, como valente que não pode salvar? Mas tu, ó SENHOR, estás em nosso meio, e nós somos chamados pelo teu nome. Não nos abandones! Assim diz o SENHOR a respeito deste povo: “Eles gostam de andar errantes e não sabem controlar os pés. Por isso, o SENHOR não se agrada deles; agora ele se lembrará das maldades que fizeram e os castigará por causa dos seus pecados.” O SENHOR me disse ainda: — Não interceda por este povo para o bem dele. Quando jejuarem, não ouvirei o seu clamor e, quando trouxerem holocaustos e ofertas de cereais, não me agradarei deles. Pelo contrário, eu os consumirei pela guerra, pela fome e pela peste. Então eu disse: — Ah! SENHOR Deus, eis que os profetas lhes dizem: “Vocês não verão a guerra, nem passarão fome. Porque eu lhes darei verdadeira paz neste lugar.” E o SENHOR respondeu: — Esses profetas profetizam mentiras em meu nome. Nunca os enviei, nem lhes dei ordem, nem lhes falei. Eles estão profetizando para vocês visões falsas, adivinhações inúteis e engano que procede do seu íntimo. Portanto, assim diz o SENHOR a respeito dos profetas que, profetizando em meu nome, sem que eu os tenha mandado, dizem que não haverá guerra nem fome nesta terra: Esses profetas serão consumidos pela guerra e pela fome.", "ntlh": "O SENHOR Deus me disse o seguinte a respeito da seca: “O povo de Judá está de luto, chorando. As suas cidades estão morrendo, o povo está abatido, jogado no chão, e Jerusalém grita pedindo socorro. Os ricos mandam os empregados buscar água. Eles vão até os poços, porém não encontram água e voltam com os potes vazios. Então cobrem a cabeça, desanimados e atrapalhados. Os lavradores também cobrem a cabeça, desesperados porque não chove, e a terra está seca. No campo, as veadas abandonam as suas crias, pois não há capim. Os jumentos selvagens ficam parados no alto dos morros e, com falta de ar, respiram como os lobos. Eles não enxergam bem por falta de pasto.” O meu povo disse: “Ó SENHOR Deus, os nossos pecados nos acusam, mas pedimos que nos ajudes, como prometeste. Muitas vezes, nos afastamos de ti e contra ti temos pecado. Tu és a única esperança do povo de Israel, tu és aquele que nos salva quando estamos em dificuldades. Por que é que tens de ser como um estrangeiro em nossa terra ou como um viajante que só pousa uma noite? Por que é que tens de ser como um homem apanhado de surpresa, como um soldado que não tem força para defender os outros? Mas tu, ó SENHOR, estás entre nós, e nós somos o teu povo. Não nos abandones!” O SENHOR Deus disse o seguinte a respeito desse povo: — Eles gostam de andar por aí e não sabem se controlar. Por isso, não estou satisfeito com eles. Eu lembrarei das maldades que fizeram e os castigarei por causa dos seus pecados. Aí o SENHOR me disse: — Não me peça para ajudar esse povo. Mesmo que jejuem e orem, eu não os ouvirei. Não os aceitarei, mesmo que me ofereçam animais em sacrifício e me tragam ofertas de cereais. Pelo contrário, eu os matarei na guerra e também por meio de fome e de doenças. Então eu disse: — Ó SENHOR, meu Deus, tu sabes que alguns profetas estão dizendo ao povo que não vai haver guerra nem fome. Eles afirmam que prometeste que em nossa terra só haverá paz. Mas o SENHOR respondeu: — Esses profetas estão profetizando mentiras em meu nome. Eu não os enviei, nem lhes dei ordens e nunca lhes disse nada. As suas visões são mentiras, e as suas adivinhações não valem nada; eles inventam profecias só para enganar. Eu, o SENHOR, digo a você o que vou fazer com esses profetas que não enviei e que profetizam em meu nome, dizendo que não haverá guerra nem fome neste país. Eu os matarei na guerra e de fome.", "nvi": "Esta é a palavra que o SENHOR dirigiu a Jeremias acerca da seca: “Judá pranteia, as suas cidades estão definhando e os seus habitantes se lamentam, prostrados no chão! O grito de Jerusalém sobe. Os nobres mandam os seus servos à procura de água; eles vão às cisternas mas nada encontram. Voltam com os potes vazios e, decepcionados e desesperados, cobrem a cabeça. A terra nada produziu, porque não houve chuva; e os lavradores, decepcionados, cobrem a cabeça. Até mesmo a corça no campo abandona a cria recém-nascida, porque não há capim. Os jumentos selvagens permanecem nos altos, farejando o vento como os chacais, mas a sua visão falha, por falta de pastagem”. Embora os nossos pecados nos acusem, age por amor do teu nome, ó SENHOR! Nossas infidelidades são muitas; temos pecado contra ti. Ó Esperança de Israel, tu que o salvas na hora da adversidade, por que te comportas como um estrangeiro na terra, ou como um viajante que fica somente uma noite? Por que ages como um homem que foi pego de surpresa, como um guerreiro que não pode salvar? Tu estás em nosso meio, ó SENHOR, e nós pertencemos a ti ; não nos abandones! Assim diz o SENHOR acerca deste povo: “Eles gostam muito de vaguear; não controlam os pés. Por isso o SENHOR não os aceita; agora ele se lembrará da iniquidade deles e os castigará por causa dos seus pecados”. Então o SENHOR me disse: “Não ore pelo bem-estar deste povo. Ainda que jejuem, não escutarei o clamor deles; ainda que ofereçam holocaustos e ofertas de cereal, não os aceitarei. Mas eu os destruirei pela guerra, pela fome e pela peste”. Mas eu disse: Ah, Soberano SENHOR, os profetas estão dizendo a eles: “Vocês não verão a guerra nem a fome; eu lhes darei prosperidade duradoura neste lugar”. Então o SENHOR me disse: “É mentira o que os profetas estão profetizando em meu nome. Eu não os enviei nem lhes dei ordem nenhuma, nem falei com eles. Eles estão profetizando para vocês falsas visões, adivinhações inúteis e ilusões de suas próprias mentes”. Por isso, assim diz o SENHOR: “Quanto aos profetas que estão profetizando em meu nome, embora eu não os tenha enviado, e que dizem: ‘Nem guerra nem fome alcançarão esta terra’, aqueles mesmos profetas perecerão pela guerra e pela fome!", "acf": "A PALAVRA do SENHOR, que veio a Jeremias, a respeito da grande seca. Anda chorando Judá, e as suas portas estão enfraquecidas; andam de luto até ao chão, e o clamor de Jerusalém vai subindo. E os seus mais ilustres enviam os seus pequenos a buscar água; vão às cisternas, e não acham água; voltam com os seus cântaros vazios; envergonham-se e confundem-se, e cobrem as suas cabeças. Por causa da terra que se fendeu, porque não há chuva sobre a terra, os lavradores se envergonham e cobrem as suas cabeças. Porque até as cervas no campo têm as suas crias, e abandonam seus filhos, porquanto não há erva. E os jumentos monteses se põem nos lugares altos, sorvem o vento como os chacais; desfalecem os seus olhos, porquanto não há erva. Posto que as nossas maldades testificam contra nós, ó SENHOR, age por amor do teu nome; porque as nossas rebeldias se multiplicaram; contra ti pecamos. Ó esperança de Israel, e Redentor seu no tempo da angústia, por que serias como um estrangeiro na terra e como o viandante que se retira a passar a noite? Por que serias como homem surpreendido, como poderoso que não pode livrar? Mas tu estás no meio de nós, ó SENHOR, e nós somos chamados pelo teu nome; não nos desampares. Assim diz o SENHOR, acerca deste povo: Pois que tanto gostaram de andar errantes, e não retiveram os seus pés, por isso o SENHOR não se agrada deles, mas agora se lembrará da iniqüidade deles, e visitará os seus pecados. Disse-me mais o SENHOR: Não rogues por este povo para seu bem. Quando jejuarem, não ouvirei o seu clamor, e quando oferecerem holocaustos e ofertas de alimentos, não me agradarei deles; antes eu os consumirei pela espada, e pela fome e pela peste. Então disse eu: Ah! Senhor DEUS, eis que os profetas lhes dizem: Não vereis espada, e não tereis fome; antes vos darei paz verdadeira neste lugar. E disse-me o SENHOR: Os profetas profetizam falsamente no meu nome; nunca os enviei, nem lhes dei ordem, nem lhes falei; visão falsa, e adivinhação, e vaidade, e o engano do seu coração é o que eles vos profetizam. Portanto assim diz o SENHOR acerca dos profetas que profetizam no meu nome, sem que eu os tenha mandado, e que dizem: Nem espada, nem fome haverá nesta terra: À espada e à fome, serão consumidos esses profetas."}}],
    abertura: {
      versiculo: "Josafá se pôs em pé e disse: ‘Escutem, povo de Judá e moradores de Jerusalém! Creiam no Senhor, seu Deus, e vocês estarão seguros; creiam nos profetas do Senhor e vocês serão bem-sucedidos’",
      periodo: "10 de outubro a 16 de outubro de 2026",
      resumo: "Verso para memorizar:\n\n“Josafá se pôs em pé e disse: ‘Escutem, povo de Judá e moradores de Jerusalém! Creiam no Senhor, seu Deus, e vocês estarão seguros; creiam nos profetas do Senhor e vocês serão bem-sucedidos’” (2Cr 20:20).\n\nLeituras da semana:\n\nTg 5:17, 18; 1Rs 19:1-16; 22:1-14; Êx 15:20; 2Rs 22:11-14; Jr 14:1-15\n\nO Sistema de Posicionamento Global (GPS) ajuda os viajantes a saber onde estão, para onde vão e até oferece alertas contra perigos. Peregrinos espirituais rumo ao Céu também precisam de orientação vinda de um “GPS celestial”. No Antigo Testamento, por meio de seus relatos, orientações, profecias, poesias e cânticos, vários profetas transmitiram ao povo as mensagens do Senhor.\n\nA lição desta semana analisa as descrições do Antigo Testamento sobre os profetas, que nos ajudam a compreender o dom de profecia conforme ele se manifestou na vida de alguns desses servos de Deus.\n\nComo veremos, eles eram pessoas como nós: seres humanos imperfeitos, sujeitos ao medo, à ira e ao desânimo. A vida não era fácil para esses profetas; era marcada por muitos desafios e dificuldades, assim como acontece conosco hoje.\n\nO que, então, podemos aprender com alguns desses servos de Deus especialmente chamados?",
      reflexao: "Que Deus nos fale por meio desta lição."
    },
    perguntas: [
      {
        pergunta: "Reflita sobre a maneira como Tiago apresenta o profeta Elias (Tg 5:17, 18). O que ele quis dizer ao afirmar que “Elias era humano como nós” (NVI)?",
        resposta: "Significa que, apesar de Deus ter realizado milagres extraordinários por meio dele, Elias possuía a mesma natureza frágil e as mesmas limitações emocionais e físicas que qualquer ser humano comum.",
        versoes: {}
      },
      {
        pergunta: "Leia 1 Reis 19:1-16. O que esse relato revela sobre o estado emocional do profeta de Deus?",
        resposta: "Revela que ele enfrentou profunda exaustão e desânimo emocional a ponto de pedir a morte, sentindo-se sozinho e desiludido com a aparente falta de resultados duradouros em seu ministério.",
        versoes: {}
      },
      {
        pergunta: "Por que, em certos momentos, é tão fácil alimentar um sentimento de “fracasso” em relação à sua vida ou aos seus esforços? Que promessas bíblicas você pode reivindicar para ajudá-lo a enfrentar o desânimo?",
        resposta: "Sentimo-nos fracassados quando medimos o ministério pelos resultados visíveis ou assumimos sozinhos o peso da obra, mas podemos confiar em promessas como Isaías 41:10, que asseguram o apoio e a presença de Deus.",
        versoes: {}
      },
      {
        pergunta: "Leia 1 Reis 22:1-14. O que esse relato nos ensina sobre a fidelidade dos profetas?",
        resposta: "Ensina que o verdadeiro profeta permanece inabalável diante da pressão e comunica estritamente o que Deus revelou, sem buscar a aprovação dos poderosos nem suavizar a mensagem.",
        versoes: {}
      },
      {
        pergunta: "Leia 1 Samuel 9:3-14. Como as pessoas viam os fiéis profetas de Deus?",
        resposta: "Eles eram vistos com respeito e reverência como 'homens de Deus' confiáveis, cujas palavras se cumpriam com exatidão e cuja conduta exemplificava o caráter do Senhor.",
        versoes: {}
      },
      {
        pergunta: "Quem você conheceu, mesmo entre os mais estimados “homens de Deus”, que fosse sem falhas?",
        resposta: "Nenhum ser humano é impecável, exceto Jesus Cristo; mesmo os servos mais dedicados de Deus compartilham da natureza caída e dependem continuamente da graça perdoadora do Salvador.",
        versoes: {}
      },
      {
        pergunta: "Como os profetas atuavam junto aos reis e aos sacerdotes? 1Sm 8:4-22 ; Lv 8:10-13",
        resposta: "Eles ungiam líderes para suas funções sagradas e agiam como porta-vozes de Deus para orientá-los, repreendê-los contra a corrupção e chamá-los de volta à obediência à aliança divina.",
        versoes: {}
      },
      {
        pergunta: "Leia Êxodo 15:20; Juízes 4:4 e 2 Reis 22:14. Que outro aspecto do papel profético esses textos revelam?",
        resposta: "Revelam que Deus conferiu o dom profético também a mulheres, utilizando-as com autoridade espiritual para instruir, liderar e comunicar a mensagem divina ao povo e a seus líderes.",
        versoes: {}
      },
      {
        pergunta: "Leia 2 Reis 22:11-14. Por que os homens enviados pelo rei Josias procuraram a profetisa Hulda? O que isso revela sobre a importância de seu papel na nação?",
        resposta: "Procuraram-na porque reconheciam que ela possuía uma linha direta de comunicação com o Senhor; isso demonstra o prestígio espiritual e a autoridade reconhecida de seu ministério profético em Judá.",
        versoes: {}
      },
      {
        pergunta: "Profetas e profetisas, embora chamados por Deus, também eram pecadores carentes de graça. Que esperança você encontra na história deles?",
        resposta: "Encontramos a esperança de que Deus não depende da perfeição humana para realizar Sua obra, mas capacita e perdoa com Sua graça aqueles que se consagram de coração ao Seu serviço.",
        versoes: {}
      },
      {
        pergunta: "Leia Jeremias 14:1-15. Como o Senhor via aqueles que falavam falsamente como “profetas” em Seu nome?",
        resposta: "O Senhor os via como impostores condenáveis que profetizavam enganos do próprio íntimo sem terem sido enviados, e garantiu que tanto eles quanto seus seguidores sofreriam severa punição.",
        versoes: {}
      },
      {
        pergunta: "Mesmo que você não seja profeta, seguir o que é popular quase sempre parece o caminho mais fácil. Diante de uma cultura corrompida, por que isso nunca é uma boa ideia?",
        resposta: "Não é uma boa ideia porque seguir a maioria em uma cultura pecaminosa afasta a pessoa da verdade de Deus, conduzindo à desobediência e, em última instância, à ruína espiritual.",
        versoes: {}
      },
    ],
    dias: [
      {
        dia: "Sábado",
        titulo: "Profetas do Antigo Testamento",
        resumo: "Assim como os viajantes dependem de um sistema de GPS para não se perderem no caminho, os peregrinos rumo ao Céu necessitam de orientação celestial. No Antigo Testamento, o Senhor providenciou essa bússola espiritual por meio de Seus profetas, que comunicaram mensagens divinas em relatos, instruções e profecias.\n\nA lição desta semana destaca que esses mensageiros eram pessoas comuns, sujeitas aos mesmos temores, desânimos e limitações que nós enfrentamos. Compreender a humanidade e o chamado desses servos nos ajuda a valorizar o dom profético como uma manifestação do cuidado constante de Deus.",
        perguntas: [
        ]
      },
      {
        dia: "Domingo",
        titulo: "A humanidade dos profetas",
        resumo: "Mesmo após a memorável vitória sobre os profetas de Baal no monte Carmelo, Elias foi tomado pelo pânico diante das ameaças de Jezabel e fugiu para o deserto. O profeta sentiu-se completamente desamparado e chegou a pedir a própria morte, revelando traços de profunda exaustão e depressão.\n\nElias lamentou o que considerava um fracasso de seu ministério ao ver a apostasia continuar em Israel. Essa experiência evidencia que os mensageiros do Senhor eram seres humanos frágeis, que dependiam inteiramente da graça e do amparo divinos, assim como nós.",
        perguntas: [
          {
            pergunta: "Reflita sobre a maneira como Tiago apresenta o profeta Elias (Tg 5:17, 18). O que ele quis dizer ao afirmar que “Elias era humano como nós” (NVI)?",
            resposta: "Significa que, apesar de Deus ter realizado milagres extraordinários por meio dele, Elias possuía a mesma natureza frágil e as mesmas limitações emocionais e físicas que qualquer ser humano comum.",
            versoes: {"naa": "Elias era homem semelhante a nós, sujeito aos mesmos sentimentos, e orou com fervor para que não chovesse sobre a terra, e, por três anos e seis meses, não choveu. Depois, orou de novo, e então o céu deu chuva, e a terra produziu os seus frutos.", "ntlh": "O profeta Elias era um ser humano como nós. Ele orou com fervor para que não chovesse, e durante três anos e meio não choveu sobre a terra. Depois orou outra vez, e então choveu, e a terra deu a sua colheita.", "nvi": "Elias era humano como nós. Ele orou fervorosamente para que não chovesse, e não choveu sobre a terra durante três anos e meio. Orou outra vez, e os céus enviaram chuva, e a terra produziu os seus frutos.", "acf": "Elias era homem sujeito às mesmas paixões que nós e, orando, pediu que não chovesse e, por três anos e seis meses, não choveu sobre a terra. E orou outra vez, e o céu deu chuva, e a terra produziu o seu fruto."}
          },
          {
            pergunta: "Leia 1 Reis 19:1-16. O que esse relato revela sobre o estado emocional do profeta de Deus?",
            resposta: "Revela que ele enfrentou profunda exaustão e desânimo emocional a ponto de pedir a morte, sentindo-se sozinho e desiludido com a aparente falta de resultados duradouros em seu ministério.",
            versoes: {"naa": "Acabe contou a Jezabel tudo o que Elias havia feito e como havia matado todos os profetas à espada. Então Jezabel mandou um mensageiro a Elias para dizer-lhe: — Que os deuses me castiguem se amanhã a estas horas eu não tiver feito com a sua vida o mesmo que você fez com a vida de cada um deles! Elias ficou com medo, levantou-se e, para salvar a vida, se foi e chegou a Berseba, que pertence a Judá. E ali ele deixou o seu servo. Ele mesmo, porém, foi para o deserto, caminhando um dia inteiro. Por fim, sentou-se debaixo de um zimbro. Sentiu vontade de morrer e orou: — Basta, SENHOR! Tira a minha vida, porque eu não sou melhor do que os meus pais. Deitou-se e dormiu debaixo de um zimbro. E eis que um anjo tocou nele e lhe disse: — Levante-se e coma. Elias olhou e viu, perto da sua cabeça, um pão assado sobre pedras em brasa e um jarro de água. Comeu, bebeu e tornou a dormir. O anjo do SENHOR voltou, tocou nele e lhe disse: — Levante-se e coma, porque a viagem será longa. Então Elias se levantou, comeu e bebeu. E, com a força daquela comida, caminhou quarenta dias e quarenta noites até Horebe, o monte de Deus. Ali entrou numa caverna, onde passou a noite. E eis que a palavra do SENHOR veio a ele e lhe disse: — O que você está fazendo aqui, Elias? Ele respondeu: — Tenho sido muito zeloso pelo SENHOR, Deus dos Exércitos, porque os filhos de Israel deixaram a tua aliança, derrubaram os teus altares e mataram os teus profetas à espada. Só fiquei eu, e eles estão querendo tirar-me a vida. Então foi-lhe dito: — Saia daí e fique diante do SENHOR no monte. Eis que o SENHOR estava passando. E um grande e forte vento fendia os montes e quebrava as rochas diante do SENHOR. Mas o SENHOR não estava no vento. Depois do vento, houve um terremoto. Mas o SENHOR não estava no terremoto. Depois do terremoto, veio um fogo. Mas o SENHOR não estava no fogo. E, depois do fogo, veio o som de um suave sussurro. Quando Elias ouviu isso, cobriu o rosto com o manto e, saindo, pôs-se à entrada da caverna. Eis que veio uma voz e lhe disse: — O que você está fazendo aqui, Elias? Ele respondeu: — Tenho sido muito zeloso pelo SENHOR, Deus dos Exércitos, porque os filhos de Israel deixaram a tua aliança, derrubaram os teus altares e mataram os teus profetas à espada. Só fiquei eu, e eles estão querendo tirar-me a vida. Então o SENHOR disse a Elias: — Vá, volte ao seu caminho para o deserto de Damasco. Chegando lá, unja Hazael como rei da Síria. Unja também Jeú, filho de Ninsi, como rei de Israel e Eliseu, filho de Safate, de Abel-Meolá, como profeta em seu lugar.", "ntlh": "O rei Acabe contou à sua esposa Jezabel tudo o que Elias havia feito e como havia matado à espada todos os profetas do deus Baal. Aí ela mandou um mensageiro a Elias com o seguinte recado: — Que os deuses me matem, se até amanhã a esta hora eu não fizer com você o mesmo que você fez com os profetas! Elias ficou com medo e, para salvar a vida, fugiu com o seu ajudante para a cidade de Berseba, que ficava na região de Judá. Deixou ali o seu ajudante e foi para o deserto, andando um dia inteiro. Aí parou, sentou-se na sombra de uma árvore e teve vontade de morrer. Então orou assim: — Já chega, ó SENHOR Deus! Acaba agora com a minha vida! Eu sou um fracasso, como foram os meus antepassados . Elias se deitou debaixo da árvore e caiu no sono. De repente, um anjo tocou nele e disse: — Levante-se e coma. Elias olhou em volta e viu perto da sua cabeça um pão assado nas pedras e uma jarra de água. Ele comeu, e bebeu, e dormiu de novo. O anjo do SENHOR Deus voltou e tocou nele pela segunda vez, dizendo: — Levante-se e coma; se não, você não aguentará a viagem. Elias se levantou, comeu e bebeu, e a comida lhe deu força bastante para andar quarenta dias e quarenta noites até o Sinai, o monte sagrado. Ali ele entrou numa caverna para passar a noite, e, de repente, o SENHOR Deus lhe perguntou: — O que você está fazendo aqui, Elias? Ele respondeu: — Ó SENHOR, Deus Todo-Poderoso, eu sempre tenho servido a ti e só a ti. Mas o povo de Israel quebrou a sua aliança contigo, derrubou os teus altares e matou todos os teus profetas. Eu sou o único que sobrou, e eles estão querendo me matar! O SENHOR Deus disse: — Saia e vá ficar diante de mim no alto do monte. Então o SENHOR passou por ali e mandou um vento muito forte, que rachou os morros e quebrou as rochas em pedaços. Mas o SENHOR não estava no vento. Quando o vento parou de soprar, veio um terremoto; porém o SENHOR não estava no terremoto. Depois do terremoto veio um fogo, mas o SENHOR não estava no fogo. E depois do fogo veio um sussurro calmo e suave. Quando Elias ouviu o sussurro, cobriu o rosto com a capa. Então saiu e ficou na entrada da caverna. E uma voz lhe disse: — O que você está fazendo aqui, Elias? Ele respondeu: — Ó SENHOR, Deus Todo-Poderoso, eu sempre tenho servido a ti e só a ti. Mas o povo de Israel quebrou a sua aliança contigo, derrubou os teus altares e matou todos os teus profetas. Eu sou o único que sobrou, e eles estão querendo me matar! Então o SENHOR Deus disse: — Volte para o deserto que fica perto de Damasco. Chegando lá, entre na cidade e unja Hazael como rei da Síria. Unja Jeú, filho de Ninsi, como rei de Israel e unja Eliseu, filho de Safate, de Abel-Meolá, como profeta, para ficar em lugar de você.", "nvi": "Ora, Acabe contou a Jezabel tudo o que Elias tinha feito e como havia matado todos aqueles profetas à espada. Por isso Jezabel mandou um mensageiro a Elias para dizer-lhe: “Que os deuses me castiguem com todo o rigor, se amanhã nesta hora eu não fizer com a sua vida o que você fez com a deles”. Elias teve medo e fugiu para salvar a vida. Em Berseba de Judá ele deixou o seu servo e entrou no deserto, caminhando um dia. Chegou a um pé de giesta, sentou-se debaixo dele e orou, pedindo a morte: “Já tive o bastante, SENHOR. Tira a minha vida; não sou melhor do que os meus antepassados”. Depois se deitou debaixo da árvore e dormiu. De repente um anjo tocou nele e disse: “Levante-se e coma”. Elias olhou ao redor e ali, junto à sua cabeça, havia um pão assado sobre brasas quentes e um jarro de água. Ele comeu, bebeu e deitou-se de novo. O anjo do SENHOR voltou, tocou nele e disse: “Levante-se e coma, pois a sua viagem será muito longa”. Então ele se levantou, comeu e bebeu. Fortalecido com aquela comida, viajou quarenta dias e quarenta noites, até chegar a Horebe, o monte de Deus. Ali entrou numa caverna e passou a noite. E a palavra do SENHOR veio a ele: “O que você está fazendo aqui, Elias?” Ele respondeu: “Tenho sido muito zeloso pelo SENHOR, o Deus dos Exércitos. Os israelitas rejeitaram a tua aliança, quebraram os teus altares, e mataram os teus profetas à espada. Sou o único que sobrou, e agora também estão procurando matar-me”. O SENHOR lhe disse: “Saia e fique no monte, na presença do SENHOR, pois o SENHOR vai passar”. Então veio um vento fortíssimo que separou os montes e esmigalhou as rochas diante do SENHOR, mas o SENHOR não estava no vento. Depois do vento houve um terremoto, mas o SENHOR não estava no terremoto. Depois do terremoto houve um fogo, mas o SENHOR não estava nele. E depois do fogo houve o murmúrio de uma brisa suave. Quando Elias ouviu, puxou a capa para cobrir o rosto, saiu e ficou à entrada da caverna. E uma voz lhe perguntou: “O que você está fazendo aqui, Elias?” Ele respondeu: “Tenho sido muito zeloso pelo SENHOR, o Deus dos Exércitos. Os israelitas rejeitaram a tua aliança, quebraram os teus altares e mataram os teus profetas à espada. Sou o único que sobrou, e agora também estão procurando matar-me”. O SENHOR lhe disse: “Volte pelo caminho por onde veio e vá para o deserto de Damasco. Chegando lá, unja Hazael como rei da Síria. Unja também Jeú, filho de Ninsi, como rei de Israel, e unja Eliseu, filho de Safate, de Abel-Meolá, para suceder a você como profeta.", "acf": "E ACABE fez saber a Jezabel tudo quanto Elias havia feito, e como totalmente matara todos os profetas à espada. Então Jezabel mandou um mensageiro a Elias, a dizer-lhe: Assim me façam os deuses, e outro tanto, se de certo amanhã a estas horas não puser a tua vida como a de um deles. O que vendo ele, se levantou e, para escapar com vida, se foi, e chegando a Berseba, que é de Judá, deixou ali o seu servo. Ele, porém, foi ao deserto, caminho de um dia, e foi sentar-se debaixo de um zimbro; e pediu para si a morte, e disse: Já basta, ó SENHOR; toma agora a minha vida, pois não sou melhor do que meus pais. E deitou-se, e dormiu debaixo do zimbro; e eis que então um anjo o tocou, e lhe disse: Levanta-te, come. E olhou, e eis que à sua cabeceira estava um pão cozido sobre as brasas, e uma botija de água; e comeu, e bebeu, e tornou a deitar-se. E o anjo do SENHOR tornou segunda vez, e o tocou, e disse: Levanta-te e come, porque te será muito longo o caminho. Levantou-se, pois, e comeu e bebeu; e com a força daquela comida caminhou quarenta dias e quarenta noites até Horebe, o monte de Deus. E ali entrou numa caverna e passou ali a noite; e eis que a palavra do SENHOR veio a ele, e lhe disse: Que fazes aqui Elias? E ele disse: Tenho sido muito zeloso pelo SENHOR Deus dos Exércitos, porque os filhos de Israel deixaram a tua aliança, derrubaram os teus altares, e mataram os teus profetas à espada, e só eu fiquei, e buscam a minha vida para ma tirarem. E Deus lhe disse: Sai para fora, e põe-te neste monte perante o SENHOR. E eis que passava o SENHOR, como também um grande e forte vento que fendia os montes e quebrava as penhas diante do SENHOR; porém o SENHOR não estava no vento; e depois do vento um terremoto; também o SENHOR não estava no terremoto; E depois do terremoto um fogo; porém também o SENHOR não estava no fogo; e depois do fogo uma voz mansa e delicada. E sucedeu que, ouvindo-a Elias, envolveu o seu rosto na sua capa, e saiu para fora, e pôs-se à entrada da caverna; e eis que veio a ele uma voz, que dizia: Que fazes aqui, Elias? E ele disse: Eu tenho sido em extremo zeloso pelo SENHOR Deus dos Exércitos, porque os filhos de Israel deixaram a tua aliança, derrubaram os teus altares, e mataram os teus profetas à espada, e só eu fiquei; e buscam a minha vida para ma tirarem. E o SENHOR lhe disse: Vai, volta pelo teu caminho para o deserto de Damasco; e, chegando lá, unge a Hazael rei sobre a Síria. Também a Jeú, filho de Ninsi, ungirás rei de Israel; e também a Eliseu, filho de Safate de Abel-Meolá, ungirás profeta em teu lugar."}
          },
          {
            pergunta: "Por que, em certos momentos, é tão fácil alimentar um sentimento de “fracasso” em relação à sua vida ou aos seus esforços? Que promessas bíblicas você pode reivindicar para ajudá-lo a enfrentar o desânimo?",
            resposta: "Sentimo-nos fracassados quando medimos o ministério pelos resultados visíveis ou assumimos sozinhos o peso da obra, mas podemos confiar em promessas como Isaías 41:10, que asseguram o apoio e a presença de Deus.",
            versoes: {"naa": "Ele mesmo, porém, foi para o deserto, caminhando um dia inteiro. Por fim, sentou-se debaixo de um zimbro. Sentiu vontade de morrer e orou: — Basta, SENHOR! Tira a minha vida, porque eu não sou melhor do que os meus pais. Ele respondeu: — Tenho sido muito zeloso pelo SENHOR, Deus dos Exércitos, porque os filhos de Israel deixaram a tua aliança, derrubaram os teus altares e mataram os teus profetas à espada. Só fiquei eu, e eles estão querendo tirar-me a vida. não tema, porque eu estou com você; não fique com medo, porque eu sou o seu Deus. Eu lhe dou forças; sim, eu o ajudo; sim, eu o seguro com a mão direita da minha justiça.”", "ntlh": "e foi para o deserto, andando um dia inteiro. Aí parou, sentou-se na sombra de uma árvore e teve vontade de morrer. Então orou assim: — Já chega, ó SENHOR Deus! Acaba agora com a minha vida! Eu sou um fracasso, como foram os meus antepassados . Ele respondeu: — Ó SENHOR, Deus Todo-Poderoso, eu sempre tenho servido a ti e só a ti. Mas o povo de Israel quebrou a sua aliança contigo, derrubou os teus altares e matou todos os teus profetas. Eu sou o único que sobrou, e eles estão querendo me matar! Não fiquem com medo, pois estou com vocês; não se apavorem, pois eu sou o seu Deus. Eu lhes dou forças e os ajudo; eu os protejo com a minha forte mão.", "nvi": "e entrou no deserto, caminhando um dia. Chegou a um pé de giesta, sentou-se debaixo dele e orou, pedindo a morte: “Já tive o bastante, SENHOR. Tira a minha vida; não sou melhor do que os meus antepassados”. Ele respondeu: “Tenho sido muito zeloso pelo SENHOR, o Deus dos Exércitos. Os israelitas rejeitaram a tua aliança, quebraram os teus altares, e mataram os teus profetas à espada. Sou o único que sobrou, e agora também estão procurando matar-me”. Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.", "acf": "Ele, porém, foi ao deserto, caminho de um dia, e foi sentar-se debaixo de um zimbro; e pediu para si a morte, e disse: Já basta, ó SENHOR; toma agora a minha vida, pois não sou melhor do que meus pais. E ele disse: Tenho sido muito zeloso pelo SENHOR Deus dos Exércitos, porque os filhos de Israel deixaram a tua aliança, derrubaram os teus altares, e mataram os teus profetas à espada, e só eu fiquei, e buscam a minha vida para ma tirarem. Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça."}
          },
        ]
      },
      {
        dia: "Segunda-feira",
        titulo: "Identificando os profetas verdadeiros",
        resumo: "Os verdadeiros profetas distinguiam-se pela coragem e integridade ao transmitir a mensagem de Deus, mesmo sob grande perigo e pressão para agradar aos monarcas. Um exemplo marcante foi Micaías, que permaneceu fiel à verdade revelada por Deus, enfrentando solitário quatrocentos falsos profetas que lisonjeavam o rei Acabe.\n\nPor sua comunhão sincera com o Senhor e dedicação ao Seu propósito, profetas como Samuel eram respeitados como 'homens de Deus'. Embora fossem indivíduos imperfeitos, seu caráter refletia a retidão divina e a lealdade inegociável à Palavra entregue pelo Altíssimo.",
        perguntas: [
          {
            pergunta: "Leia 1 Reis 22:1-14. O que esse relato nos ensina sobre a fidelidade dos profetas?",
            resposta: "Ensina que o verdadeiro profeta permanece inabalável diante da pressão e comunica estritamente o que Deus revelou, sem buscar a aprovação dos poderosos nem suavizar a mensagem.",
            versoes: {"naa": "Três anos se passaram sem haver guerra entre Síria e Israel. Porém, no terceiro ano, Josafá, rei de Judá, foi visitar o rei de Israel. Este perguntou aos seus servos: — Vocês não sabem que Ramote-Gileade é nossa, e nós ficamos quietos e não a tiramos das mãos do rei da Síria? Então perguntou a Josafá: — Você vai comigo à batalha contra Ramote-Gileade? Josafá respondeu ao rei de Israel: — Sou como você é, o meu povo é como o seu povo, e os meus cavalos são como os seus cavalos. Josafá disse mais ao rei de Israel: — Consulte primeiro a palavra do SENHOR. Então o rei de Israel reuniu os profetas, cerca de quatrocentos homens, e lhes perguntou: — Devo ir e lutar contra Ramote-Gileade ou devo me conter? Eles responderam: — Vá, porque o Senhor a entregará nas mãos do rei. Mas Josafá perguntou: — Não há aqui ainda algum profeta do SENHOR, para o consultarmos? O rei de Israel respondeu a Josafá: — Há um ainda, por meio de quem podemos consultar o SENHOR. Mas eu o odeio, porque nunca profetiza de mim o que é bom, mas somente o que é mau. É Micaías, filho de Inlá. Josafá disse: — O rei não deveria falar assim. Então o rei de Israel chamou um oficial e disse: — Traga-me depressa Micaías, filho de Inlá. O rei de Israel e Josafá, rei de Judá, estavam assentados, cada um no seu trono, vestidos de trajes reais, numa eira à entrada do portão da cidade de Samaria; e todos os profetas profetizavam diante deles. Zedequias, filho de Quenaana, fez para si uns chifres de ferro e disse: — Assim diz o SENHOR: “Com estes você dará chifradas nos sírios até que estejam destruídos.” Todos os profetas profetizaram assim, dizendo: — Suba a Ramote-Gileade! Você triunfará! O SENHOR a entregará nas mãos do rei. O mensageiro que tinha ido chamar Micaías falou-lhe, dizendo: — Eis que as palavras dos profetas a uma voz predizem coisas boas para o rei. Portanto, que a sua palavra seja como a palavra de um deles; fale o que é bom. Micaías respondeu: — Tão certo como vive o SENHOR, o que o SENHOR me disser, isso falarei.", "ntlh": "Durante os dois anos seguintes houve paz entre Israel e a Síria. Mas, no terceiro ano, Josafá, rei de Judá, foi visitar o rei Acabe, de Israel. Acabe perguntou aos seus oficiais: — Por que é que nós não fizemos nada para tomar de volta do rei da Síria a cidade de Ramote-Gileade? Vocês sabem que aquela cidade é nossa! Então ele perguntou ao rei Josafá: — Você vai comigo atacar Ramote? Josafá respondeu: — Quando você estiver pronto para a batalha, eu também estarei; e assim também os meus soldados e a minha cavalaria. Mas primeiro vamos consultar a Deus, o SENHOR. Aí Acabe mandou chamar os profetas, que eram uns quatrocentos, e perguntou: — Devo atacar a cidade de Ramote ou não? Eles responderam: — Ataque, pois Deus lhe dará a vitória. Mas Josafá perguntou: — Não existe aqui mais nenhum profeta para nós consultarmos o SENHOR por meio dele? Acabe respondeu: — Existe outro, que se chama Micaías, filho de Inla. Mas eu tenho ódio dele porque nunca profetiza para mim o que é bom, mas só o que é ruim. — Não fale desse jeito! — disse Josafá. Então Acabe chamou um oficial e mandou que ele fosse imediatamente buscar Micaías. Os dois reis, usando as suas roupas reais, estavam sentados nos seus tronos, numa praça que ficava perto da entrada do portão de Samaria; e todos os profetas estavam profetizando em frente deles. Um dos profetas, chamado Zedequias, filho de Quenaana, fez uns chifres de ferro e disse a Acabe: — O que o SENHOR Deus está dizendo é isto: “Com estes chifres o senhor lutará contra os sírios e os derrotará completamente.” E todos os profetas profetizaram a mesma coisa. Eles diziam: — Marche contra a cidade de Ramote, que o senhor, ó rei, vencerá. O SENHOR Deus lhe dará a vitória. Enquanto isso, o oficial que tinha ido buscar Micaías disse a ele: — Todos os outros profetas profetizaram que o rei terá sucesso. É melhor que você faça o mesmo. Porém Micaías respondeu: — Juro pelo SENHOR, o Deus vivo, que eu falarei o que ele mesmo mandar!", "nvi": "Durante três anos não houve guerra entre a Síria e Israel. Mas, no terceiro ano, Josafá, rei de Judá, foi visitar o rei de Israel. Este havia perguntado aos seus oficiais: “Por acaso vocês não sabem que Ramote-Gileade nos pertence e ainda assim não estamos fazendo nada para retomá-la do rei da Síria?” Então perguntou a Josafá: “Irás comigo lutar contra Ramote-Gileade?” Josafá respondeu ao rei de Israel: “Sou como tu, e meu povo é como o teu povo, e os meus cavalos são como se fossem teus”. Mas acrescentou: “Peço-te que busques primeiro o conselho do SENHOR”. Então o rei de Israel reuniu quatrocentos profetas e lhes perguntou: “Devo ir à guerra contra Ramote-Gileade, ou não?” Eles responderam: “Sim, pois o Senhor a entregará nas mãos do rei”. Josafá, porém, perguntou: “Não existe aqui mais nenhum profeta do SENHOR a quem possamos consultar?” O rei de Israel respondeu a Josafá: “Ainda há um homem por meio de quem podemos consultar o SENHOR, mas eu o odeio, porque nunca profetiza coisas boas a meu respeito, mas sempre coisas ruins. É Micaías, filho de Inlá”. “O rei não deveria dizer isso”, Josafá respondeu. Então o rei de Israel chamou um dos seus oficiais e disse: “Traga Micaías, filho de Inlá, imediatamente”. Usando vestes reais, o rei de Israel e Josafá, rei de Judá, estavam sentados em seus tronos, na eira, junto à porta de Samaria, e todos os profetas estavam profetizando em transe diante deles. E Zedequias, filho de Quenaaná, tinha feito chifres de ferro e declarou: “Assim diz o SENHOR: ‘Com estes chifres tu ferirás os arameus até que sejam destruídos’ ”. Todos os outros profetas estavam profetizando a mesma coisa, dizendo: “Ataca Ramote-Gileade, e serás vitorioso, pois o SENHOR a entregará nas mãos do rei”. O mensageiro que tinha ido chamar Micaías lhe disse: “Veja, todos os outros profetas estão predizendo que o rei terá sucesso. Sua palavra também deve ser favorável”. Micaías, porém, disse: “Juro pelo nome do SENHOR que direi o que o SENHOR me mandar”.", "acf": "E ESTIVERAM quietos três anos, não havendo guerra entre a Síria e Israel. Porém no terceiro ano sucedeu que Jeosafá, rei de Judá, desceu para avistar-se com o rei de Israel. E o rei de Israel disse aos seus servos: Não sabeis vós que Ramote de Gileade é nossa, e nós estamos quietos, sem a tomar da mão do rei da Síria? Então perguntou a Jeosafá: Irás tu comigo à peleja a Ramote de Gileade? E disse Jeosafá ao rei de Israel: Serei como tu, e o meu povo como o teu povo, e os meus cavalos como os teus cavalos. Disse mais Jeosafá ao rei de Israel: Peço-te, consulta hoje a palavra do SENHOR. Então o rei de Israel reuniu os profetas até quase quatrocentos homens, e disse-lhes: Irei à peleja contra Ramote de Gileade, ou deixarei de ir? E eles disseram: Sobe, porque o SENHOR a entregará na mão do rei. Disse, porém, Jeosafá: Não há aqui ainda algum profeta do SENHOR, ao qual possamos consultar? Então disse o rei de Israel a Jeosafá: Ainda há um homem por quem podemos consultar ao SENHOR; porém eu o odeio, porque nunca profetiza de mim o que é bom, mas só o mal; este é Micaías, filho de Inlá. E disse Jeosafá: Não fale o rei assim. Então o rei de Israel chamou um oficial, e disse: Traze-me depressa a Micaías, filho de Inlá. E o rei de Israel e Jeosafá, rei de Judá, estavam assentados cada um no seu trono, vestidos de trajes reais, na praça, à entrada da porta de Samaria; e todos os profetas profetizavam na sua presença. E Zedequias, filho de Quenaaná, fez para si uns chifres de ferro, e disse: Assim diz o SENHOR: Com estes ferirás aos sírios, até de todo os consumir. E todos os profetas profetizaram assim, dizendo: Sobe a Ramote de Gileade, e triunfarás, porque o SENHOR a entregará na mão do rei. E o mensageiro que foi chamar a Micaías falou-lhe, dizendo: Vês aqui que as palavras dos profetas a uma voz predizem coisas boas para o rei; seja, pois, a tua palavra como a palavra de um deles, e fala bem. Porém Micaías disse: Vive o SENHOR que o que o SENHOR me disser isso falarei."}
          },
          {
            pergunta: "Leia 1 Samuel 9:3-14. Como as pessoas viam os fiéis profetas de Deus?",
            resposta: "Eles eram vistos com respeito e reverência como 'homens de Deus' confiáveis, cujas palavras se cumpriam com exatidão e cuja conduta exemplificava o caráter do Senhor.",
            versoes: {"naa": "E aconteceu que as jumentas de Quis, pai de Saul, se extraviaram. Então Quis disse a Saul, seu filho: — Leve agora com você um dos servos e vá procurar as jumentas. Eles atravessaram a região montanhosa de Efraim e a terra de Salisa, mas não as encontraram. Depois, passaram à terra de Saalim, mas as jumentas não estavam ali. Então atravessaram o território de Benjamim, mas também não as encontraram. Quando chegaram à terra de Zufe, Saul disse ao servo que estava com ele: — Vamos voltar, porque, se não, o meu pai vai deixar de se preocupar com as jumentas para começar a se afligir por causa de nós. Porém o servo respondeu: — Nesta cidade mora um homem de Deus que é muito estimado. Tudo o que ele diz acontece. Vamos agora até lá. Talvez ele possa nos mostrar o caminho que devemos seguir. Então Saul disse ao servo: — Mas, se formos para lá, o que levaremos para aquele homem? Porque o pão que tínhamos em nossas sacolas acabou, e não temos nenhum presente para levar ao homem de Deus. Ou será que temos? O servo respondeu a Saul: — Tenho ainda em mãos três gramas de prata, que darei ao homem de Deus, para que nos mostre o caminho. (Antigamente, em Israel, quando alguém ia consultar a Deus, dizia: “Vamos falar com o vidente.” Porque antigamente o profeta de hoje se chamava vidente.) Então Saul disse ao servo: — Você tem razão. Vamos lá! E foram à cidade onde morava o homem de Deus. Quando subiam pela encosta da cidade, encontraram umas moças que saíam a tirar água e lhes perguntaram: — O vidente está aqui? Elas responderam: — Está. Eis que ali vai ele, à sua frente. Vão depressa! Hoje ele veio à cidade, porque o povo vai oferecer um sacrifício no lugar alto. Ao entrarem na cidade, vocês o encontrarão, antes que ele suba ao lugar alto para comer. Porque o povo não comerá enquanto ele não chegar, porque ele tem de abençoar o sacrifício, e só depois os convidados irão comer. Vão agora, porque hoje vocês o acharão. Então eles foram até a cidade. Quando estavam entrando, eis que Samuel saiu ao encontro deles, para subir ao lugar alto.", "ntlh": "E aconteceu que algumas jumentas que pertenciam a Quis, o pai de Saul, se perderam. Então ele disse a Saul: — Filho, leve com você um dos nossos empregados e vá procurar as jumentas. Eles foram por toda a região montanhosa de Efraim e pela terra de Salisa, porém não acharam as jumentas. Então procuraram na terra de Saalim, porém elas não estavam lá. Aí procuraram no território da tribo de Benjamim, mas também não as encontraram. Quando entraram na terra de Zufe, Saul disse ao empregado: — Vamos voltar para casa; se não, em vez de se preocupar com as jumentas, o meu pai vai acabar se preocupando com a gente. O empregado respondeu: — Espere. Nesta cidade mora um homem santo que é muito respeitado porque tudo o que ele diz acontece. Vamos falar com ele. Talvez ele possa nos dizer onde podemos encontrar as jumentas. Saul perguntou: — Se formos lá, o que vamos levar para ele? Não há comida nas nossas sacolas, e não temos nada para lhe dar. Ou será que temos? O empregado respondeu: — Tenho uma pequena quantia de prata que posso dar a ele para que nos conte onde poderemos achar as jumentas. [9-11] — É uma boa ideia! — respondeu Saul. — Vamos. Então eles foram à cidade onde o homem santo morava. Quando estavam subindo o morro para chegar à cidade, encontraram algumas moças que estavam saindo para tirar água. Eles perguntaram: — O vidente está na cidade? (Antigamente, quando alguém queria fazer uma pergunta a Deus, costumava dizer: “Vamos falar com o vidente.” Porque naquele tempo os profetas eram chamados de videntes.) [9-11] — É uma boa ideia! — respondeu Saul. — Vamos. Então eles foram à cidade onde o homem santo morava. Quando estavam subindo o morro para chegar à cidade, encontraram algumas moças que estavam saindo para tirar água. Eles perguntaram: — O vidente está na cidade? (Antigamente, quando alguém queria fazer uma pergunta a Deus, costumava dizer: “Vamos falar com o vidente.” Porque naquele tempo os profetas eram chamados de videntes.) [9-11] — É uma boa ideia! — respondeu Saul. — Vamos. Então eles foram à cidade onde o homem santo morava. Quando estavam subindo o morro para chegar à cidade, encontraram algumas moças que estavam saindo para tirar água. Eles perguntaram: — O vidente está na cidade? (Antigamente, quando alguém queria fazer uma pergunta a Deus, costumava dizer: “Vamos falar com o vidente.” Porque naquele tempo os profetas eram chamados de videntes.) — Ele está, sim! — responderam elas. — Olhem! Ali vai ele, ali na frente. Andem depressa. Ele está entrando na cidade porque o povo vai oferecer hoje um sacrifício no altar do monte. Assim que entrarem na cidade, vocês o encontrarão antes que ele suba o monte para comer. O povo não começa a comer antes que ele chegue lá, pois primeiro ele tem de abençoar o sacrifício. Só depois é que os convidados podem comer. Subam lá agora e logo vocês o encontrarão. Então eles foram até a cidade. Quando iam entrando, viram Samuel, que saía para subir até o lugar de adoração.", "nvi": "E aconteceu que as jumentas de Quis, pai de Saul, extraviaram-se. E ele disse a Saul: “Chame um dos servos e vá procurar as jumentas”. Eles atravessaram os montes de Efraim e a região de Salisa, mas não as encontraram. Prosseguindo, entraram no distrito de Saalim, mas as jumentas não estavam lá. Então atravessaram o território de Benjamim e mesmo assim não as encontraram. Chegando ao distrito de Zufe, disse Saul ao seu servo: “Vamos voltar, ou meu pai deixará de pensar nas jumentas para começar a preocupar-se conosco”. O servo, contudo, respondeu: “Nesta cidade mora um homem de Deus que é muito respeitado. Tudo o que ele diz acontece. Vamos falar com ele. Talvez ele nos aponte o caminho a seguir”. Saul disse a seu servo: “Se formos, o que lhe poderemos dar? A comida de nossos sacos de viagem acabou. Não temos nenhum presente para levar ao homem de Deus. O que temos para oferecer?” O servo lhe respondeu: “Tenho três gramas de prata. Darei isto ao homem de Deus para que ele nos aponte o caminho a seguir”. (Antigamente em Israel, quando alguém ia consultar a Deus, dizia: “Vamos ao vidente”, pois o profeta de hoje era chamado vidente.) E Saul concordou: “Muito bem, vamos!” Assim, foram em direção à cidade onde estava o homem de Deus. Ao subirem a colina para chegar à cidade, encontraram algumas jovens que estavam saindo para buscar água e perguntaram a elas: “O vidente está na cidade?” Elas responderam: “Sim. Ele está ali adiante. Apressem-se; ele chegou hoje à nossa cidade, porque o povo vai oferecer um sacrifício no altar que há no monte. Assim que entrarem na cidade, vocês o encontrarão antes que suba ao altar do monte para comer. O povo não começará a comer antes que ele chegue, pois ele deve abençoar o sacrifício; depois disso, os convidados irão comer. Subam agora e vocês logo o encontrarão”. Eles foram à cidade e, ao entrarem, Samuel vinha na direção deles a caminho do altar do monte.", "acf": "E perderam-se as jumentas de Quis, pai de Saul; por isso disse Quis a Saul, seu filho: Toma agora contigo um dos moços, e levanta-te e vai procurar as jumentas. Passaram, pois, pela montanha de Efraim, e dali passaram à terra de Salisa, porém não as acharam; depois passaram à terra de Saalim, porém tampouco estavam ali; também passaram à terra de Benjamim, porém tampouco as acharam. Vindo eles então à terra de Zufe, Saul disse para o seu moço, com quem ele ia: Vem, e voltemos; para que porventura meu pai não deixe de inquietar-se pelas jumentas e se aflija por causa de nós. Porém ele lhe disse: Eis que há nesta cidade um homem de Deus, e homem honrado é; tudo quanto diz, sucede assim infalivelmente; vamo-nos agora lá; porventura nos mostrará o caminho que devemos seguir. Então Saul disse ao seu moço: Eis, porém, se lá formos, que levaremos então àquele homem? Porque o pão de nossos alforjes se acabou, e presente nenhum temos para levar ao homem de Deus; que temos? E o moço tornou a responder a Saul, e disse: Eis que ainda se acha na minha mão um quarto de um siclo de prata, o qual darei ao homem de Deus, para que nos mostre o caminho (Antigamente em Israel, indo alguém consultar a Deus, dizia assim: Vinde, e vamos ao vidente; porque ao profeta de hoje, antigamente se chamava vidente). Então disse Saul ao moço: Bem dizes; vem, pois, vamos. E foram-se à cidade onde estava o homem de Deus. E, subindo eles à cidade, acharam umas moças que saíam a tirar água; e disseram-lhes: Está aqui o vidente? E elas lhes responderam, e disseram: Sim, eis aí o tens diante de ti; apressa-te, pois, porque hoje veio à cidade; porquanto o povo tem hoje sacrifício no alto. Entrando vós na cidade, logo o achareis, antes que suba ao alto para comer; porque o povo não comerá, até que ele venha; porque ele é o que abençoa o sacrifício, e depois comem os convidados; subi, pois, agora, que hoje o achareis. Subiram, pois, à cidade; e, vindo eles no meio da cidade, eis que Samuel lhes saiu ao encontro, para subir ao alto."}
          },
          {
            pergunta: "Quem você conheceu, mesmo entre os mais estimados “homens de Deus”, que fosse sem falhas?",
            resposta: "Nenhum ser humano é impecável, exceto Jesus Cristo; mesmo os servos mais dedicados de Deus compartilham da natureza caída e dependem continuamente da graça perdoadora do Salvador.",
            versoes: {"naa": "Porém o servo respondeu: — Nesta cidade mora um homem de Deus que é muito estimado. Tudo o que ele diz acontece. Vamos agora até lá. Talvez ele possa nos mostrar o caminho que devemos seguir. pois todos pecaram e carecem da glória de Deus,", "ntlh": "O empregado respondeu: — Espere. Nesta cidade mora um homem santo que é muito respeitado porque tudo o que ele diz acontece. Vamos falar com ele. Talvez ele possa nos dizer onde podemos encontrar as jumentas. Todos pecaram e estão afastados da presença gloriosa de Deus.", "nvi": "O servo, contudo, respondeu: “Nesta cidade mora um homem de Deus que é muito respeitado. Tudo o que ele diz acontece. Vamos falar com ele. Talvez ele nos aponte o caminho a seguir”. pois todos pecaram e estão destituídos da glória de Deus,", "acf": "Porém ele lhe disse: Eis que há nesta cidade um homem de Deus, e homem honrado é; tudo quanto diz, sucede assim infalivelmente; vamo-nos agora lá; porventura nos mostrará o caminho que devemos seguir. Porque todos pecaram e destituídos estão da glória de Deus;"}
          },
        ]
      },
      {
        dia: "Terça-feira",
        titulo: "Funções dos profetas",
        resumo: "No Israel antigo, os profetas atuavam como a consciência espiritual da nação, advertindo reis e instruindo sacerdotes. Quando a liderança desobedecia aos mandamentos do Senhor, competia ao profeta trazer repreensões contundentes, o que frequentemente resultava em perseguição e até martírio.\n\nAlém de agir como conselheiros e instrutores cívico-religiosos, os profetas registravam as mensagens de Deus para as gerações futuras e proclamavam Seus juízos às nações vizinhas. Eram homens e mulheres consagrados à oração, ao estudo e ao serviço devotado ao povo de Deus.",
        perguntas: [
          {
            pergunta: "Como os profetas atuavam junto aos reis e aos sacerdotes? 1Sm 8:4-22 ; Lv 8:10-13",
            resposta: "Eles ungiam líderes para suas funções sagradas e agiam como porta-vozes de Deus para orientá-los, repreendê-los contra a corrupção e chamá-los de volta à obediência à aliança divina.",
            versoes: {"naa": "Então todos os anciãos de Israel se congregaram e foram falar com Samuel, em Ramá. Eles disseram: — Veja! Você está ficando velho e os seus filhos não andam pelos seus caminhos. Por isso, queremos agora que você nos constitua um rei, para que nos governe, como acontece em todas as nações. Mas Samuel não gostou desta palavra, quando disseram: “Dê-nos um rei, para que nos governe.” Então Samuel orou ao SENHOR. E o SENHOR disse a Samuel: — Atenda à voz do povo em tudo o que lhe pedem. Porque não foi a você que rejeitaram, mas a mim, para que eu não reine sobre eles. Segundo todas as obras que fizeram desde o dia em que os tirei do Egito até hoje, pois me deixaram e serviram outros deuses, assim também estão fazendo com você. Agora, pois, atenda à voz deles, porém advirta-os solenemente e explique-lhes qual será o direito do rei que vier a reinar sobre eles. Samuel relatou todas as palavras do SENHOR ao povo, que lhe pedia um rei, dizendo: — Este será o direito do rei que vier a reinar sobre vocês: ele tomará os filhos de vocês e os empregará no serviço dos seus carros de guerra e como seus cavaleiros, para que corram na frente deles. Ele porá alguns por capitães de mil e capitães de cinquenta; outros para lavrar os campos dele e fazer as suas colheitas; e outros para fabricar armas de guerra e equipamentos para os seus carros. Tomará as filhas de vocês para serem perfumistas, cozinheiras e padeiras. Tomará de vocês o melhor das lavouras, das vinhas e dos olivais e o dará aos seus servidores. Ficará com uma décima parte dos cereais e das uvas que vocês colherem, para dar aos seus oficiais e aos seus servidores. Também tomará os servos e as servas de vocês, os melhores jovens e os jumentos de vocês, e os empregará no seu trabalho. Ficará com uma décima parte dos rebanhos de vocês, e vocês serão seus servos. Então, naquele dia, vocês clamarão por causa do rei que escolheram, mas o SENHOR não os ouvirá naquele dia. Porém o povo não atendeu à voz de Samuel e disse: — Não! Queremos um rei sobre nós. Seremos como todas as outras nações. O nosso rei poderá nos governar, sair adiante de nós e fazer as nossas guerras. Samuel ouviu todas as palavras do povo e as repetiu diante do SENHOR. Então o SENHOR disse a Samuel: — Atenda à voz do povo e escolha um rei para eles. Então Samuel disse aos filhos de Israel: — Cada um de vocês volte para a sua cidade. Então Moisés pegou o óleo da unção, ungiu o tabernáculo e tudo o que havia nele e o consagrou. Sete vezes ele aspergiu do óleo sobre o altar e ungiu o altar e todos os seus utensílios, bem como a bacia e o seu suporte, para os consagrar. Depois, derramou do óleo da unção sobre a cabeça de Arão e ungiu-o, para consagrá-lo. Também Moisés fez chegar os filhos de Arão, vestiu-lhes as túnicas, cingiu-os com o cinto e atou-lhes os turbantes, como o SENHOR lhe havia ordenado.", "ntlh": "Então todos os líderes de Israel se reuniram e foram falar com Samuel, em Ramá. Eles disseram: — Olhe! Você já está ficando velho, e os seus filhos não seguem o seu exemplo. Por isso, queremos que nos arranje um rei para nos governar, como acontece em outros países. Samuel não gostou do pedido deles. Então orou a Deus, o SENHOR, e ele respondeu assim: — Atenda o pedido do povo. Não é só você que eles rejeitaram; eles rejeitaram a mim como Rei. Desde que eu os trouxe do Egito, eles sempre me têm abandonado e têm adorado outros deuses. Agora estão fazendo com você o que sempre fizeram comigo. Portanto, atenda o pedido deles. Mas avise essa gente, explicando com toda a clareza como o rei vai tratá-los. Então Samuel explicou ao povo tudo o que o SENHOR lhe tinha dito. Ele disse: — O rei os tratará assim: tomará os filhos de vocês para serem soldados; porá alguns para servirem nos seus carros de guerra, outros na cavalaria e outros para correrem adiante dos carros. Colocará alguns deles como oficiais encarregados de mil soldados, e outros encarregados de cinquenta. Os seus filhos terão de cultivar as terras dele, fazer as suas colheitas e fabricar as suas armas e equipamentos para os seus carros de guerra. As filhas de vocês terão de preparar os perfumes do rei e trabalhar como suas cozinheiras e padeiras. Ele tomará de vocês os melhores campos, plantações de uvas, bosques de oliveiras e dará tudo aos seus funcionários. Ficará com a décima parte dos cereais e das uvas, para dar aos funcionários da corte e aos outros funcionários. Tomará também os empregados de vocês, o melhor gado e os melhores jumentos, para trabalharem para ele. E ficará com a décima parte dos rebanhos de vocês. E vocês serão seus escravos. Quando isso acontecer, vocês chorarão amargamente por causa do rei que escolheram, porém o SENHOR Deus não ouvirá as suas queixas. Mas o povo não se importou com o aviso de Samuel. Pelo contrário, eles disseram: — Não adianta. Nós queremos um rei. Queremos ser como as outras nações: queremos ter um rei para nos governar, para nos dirigir na guerra e lutar em nossas batalhas. Samuel ouviu o que eles disseram e então foi e contou tudo a Deus, o SENHOR. Ele respondeu: — Faça o que eles querem. Dê a eles um rei. Aí Samuel pediu a todos os homens de Israel que voltassem para casa. Em seguida Moisés pegou o azeite sagrado, e ungiu a Tenda Sagrada e tudo o que havia lá dentro, e dessa maneira separou tudo para o serviço de Deus. Sete vezes ele borrifou o altar com o azeite, ungindo assim o altar e todos os seus objetos; ungiu também a pia e a sua base, para dedicá-las a Deus. Depois Moisés derramou o azeite sagrado na cabeça de Arão e assim o ordenou como sacerdote. Em seguida fez com que os filhos de Arão chegassem perto dele. Moisés os vestiu com as túnicas, prendeu-as com os cintos e colocou as mitras na cabeça deles, conforme o SENHOR havia mandado.", "nvi": "Por isso todas as autoridades de Israel reuniram-se e foram falar com Samuel, em Ramá. E disseram-lhe: “Tu já estás idoso, e teus filhos não andam em teus caminhos; escolhe agora um rei para que nos lidere, à semelhança das outras nações”. Quando, porém, disseram: “Dá-nos um rei para que nos lidere”, isso desagradou a Samuel; então ele orou ao SENHOR. E o SENHOR lhe respondeu: “Atenda a tudo o que o povo está pedindo; não foi a você que rejeitaram; foi a mim que rejeitaram como rei. Assim como fizeram comigo desde o dia em que os tirei do Egito até hoje, abandonando-me e prestando culto a outros deuses, também estão fazendo com você. Agora atenda-os; mas advirta-os solenemente e diga-lhes quais direitos reivindicará o rei que os governará”. Samuel transmitiu todas as palavras do SENHOR ao povo, que estava lhe pedindo um rei, dizendo: “O rei que reinará sobre vocês reivindicará como seu direito o seguinte: ele tomará os filhos de vocês para servi-lo em seus carros de guerra e em sua cavalaria e para correr à frente dos seus carros de guerra. Colocará alguns como comandantes de mil e outros como comandantes de cinquenta. Ele os fará arar as terras dele, fazer a colheita e fabricar armas de guerra e equipamentos para os seus carros de guerra. Tomará as filhas de vocês para serem perfumistas, cozinheiras e padeiras. Tomará de vocês o melhor das plantações, das vinhas e dos olivais e o dará aos criados dele. Tomará um décimo dos cereais e da colheita das uvas e o dará a seus oficiais e a seus criados. Também tomará de vocês para seu uso particular os servos e as servas, e o melhor do gado e dos jumentos. E tomará de vocês um décimo dos rebanhos, e vocês mesmos se tornarão escravos dele. Naquele dia, vocês clamarão por causa do rei que vocês mesmos escolheram, e o SENHOR não os ouvirá”. Todavia, o povo recusou-se a ouvir Samuel e disse: “Não! Queremos ter um rei. Seremos como todas as outras nações; um rei nos governará, e sairá à nossa frente para combater em nossas batalhas”. Depois de ter ouvido tudo o que o povo disse, Samuel o repetiu perante o SENHOR. E o SENHOR respondeu: “Atenda-os e dê-lhes um rei”. Então Samuel disse aos homens de Israel: “Volte cada um para a sua cidade”. Depois Moisés pegou o óleo da unção e ungiu o tabernáculo e tudo o que nele havia, e assim os consagrou. Aspergiu sete vezes o óleo sobre o altar, ungindo o altar e todos os seus utensílios e a bacia com o seu suporte, para consagrá-los. Derramou o óleo da unção sobre a cabeça de Arão para ungi-lo e consagrá-lo. Trouxe então os filhos de Arão à frente, vestiu-os com suas túnicas e cintos e colocou-lhes gorros, conforme o SENHOR lhe havia ordenado.", "acf": "Então todos os anciãos de Israel se congregaram, e vieram a Samuel, a Ramá, E disseram-lhe: Eis que já estás velho, e teus filhos não andam pelos teus caminhos; constitui-nos, pois, agora um rei sobre nós, para que ele nos julgue, como o têm todas as nações. Porém esta palavra pareceu mal aos olhos de Samuel, quando disseram: Dá-nos um rei, para que nos julgue. E Samuel orou ao SENHOR. E disse o SENHOR a Samuel: Ouve a voz do povo em tudo quanto te dizem, pois não te têm rejeitado a ti, antes a mim me têm rejeitado, para eu não reinar sobre eles. Conforme a todas as obras que fizeram desde o dia em que os tirei do Egito até ao dia de hoje, a mim me deixaram, e a outros deuses serviram, assim também fazem a ti. Agora, pois, ouve à sua voz, porém protesta-lhes solenemente, e declara-lhes qual será o costume do rei que houver de reinar sobre eles. E falou Samuel todas as palavras do SENHOR ao povo, que lhe pedia um rei. E disse: Este será o costume do rei que houver de reinar sobre vós; ele tomará os vossos filhos, e os empregará nos seus carros, e como seus cavaleiros, para que corram adiante dos seus carros. E os porá por chefes de mil, e de cinqüenta; e para que lavrem a sua lavoura, e façam a sua sega, e fabriquem as suas armas de guerra e os petrechos de seus carros. E tomará as vossas filhas para perfumistas, cozinheiras e padeiras. E tomará o melhor das vossas terras, e das vossas vinhas, e dos vossos olivais, e os dará aos seus servos. E as vossas sementes, e as vossas vinhas dizimará, para dar aos seus oficiais, e aos seus servos. Também os vossos servos, e as vossas servas, e os vossos melhores moços, e os vossos jumentos tomará, e os empregará no seu trabalho. Dizimará o vosso rebanho, e vós lhe servireis de servos. Então naquele dia clamareis por causa do vosso rei, que vós houverdes escolhido; mas o SENHOR não vos ouvirá naquele dia. Porém o povo não quis ouvir a voz de Samuel; e disseram: Não, mas haverá sobre nós um rei. E nós também seremos como todas as outras nações; e o nosso rei nos julgará, e sairá adiante de nós, e fará as nossas guerras. Ouvindo, pois, Samuel todas as palavras do povo, as repetiu aos ouvidos do SENHOR. Então o SENHOR disse a Samuel: Dá ouvidos à sua voz, e constitui-lhes rei. Então Samuel disse aos homens de Israel: Volte cada um à sua cidade. Então Moisés tomou o azeite da unção, e ungiu o tabernáculo, e tudo o que havia nele, e o santificou; E dele espargiu sete vezes sobre o altar, e ungiu o altar e todos os seus utensílios, como também a pia e a sua base, para santificá-las. Depois derramou do azeite da unção sobre a cabeça de Arão, e ungiu-o, para santificá-lo. Também Moisés fez chegar os filhos de Arão, e vestiu-lhes as túnicas, e cingiu-os com o cinto, e apertou-lhes as tiaras, como o SENHOR ordenara a Moisés."}
          },
        ]
      },
      {
        dia: "Quarta-feira",
        titulo: "Profetisas",
        resumo: "A revelação bíblica mostra claramente que o dom de profecia não era concedido exclusivamente a homens, pois Deus também chamou e comissionou mulheres fiéis. Miriã exerceu liderança e entoou hinos de louvor no êxodo, enquanto Débora liderou Israel como juíza e recebeu orientações estratégicas e espirituais diretas do Senhor.\n\nOutro caso notável foi o da profetisa Hulda, procurada pelos principais líderes do reino a mando do rei Josias para consultar a Deus após o achado do Livro da Lei. As mensagens transmitidas por ela confirmaram o juízo iminente e impulsionaram profundas reformas espirituais na nação.",
        perguntas: [
          {
            pergunta: "Leia Êxodo 15:20; Juízes 4:4 e 2 Reis 22:14. Que outro aspecto do papel profético esses textos revelam?",
            resposta: "Revelam que Deus conferiu o dom profético também a mulheres, utilizando-as com autoridade espiritual para instruir, liderar e comunicar a mensagem divina ao povo e a seus líderes.",
            versoes: {"naa": "A profetisa Miriã, irmã de Arão, pegou um tamborim, e todas as mulheres saíram atrás dela com tamborins e com danças. Débora, profetisa, esposa de Lapidote, julgava Israel naquele tempo. Então o sacerdote Hilquias, Aicão, Acbor, Safã e Asaías foram falar com a profetisa Hulda, esposa de Salum, encarregado das vestimentas da Casa do SENHOR, filho de Ticva, filho de Harás. Hulda morava na parte nova da cidade, em Jerusalém. Eles lhe contaram o que havia acontecido,", "ntlh": "A profetisa Míriam, que era irmã de Arão, pegou um pandeiro, e todas as mulheres a acompanharam, tocando pandeiro e dançando. Débora, mulher de Lapidote, era profetisa. Era também juíza dos israelitas naquele tempo. Hilquias, Aicã, Abdom, Safã e Asaías foram falar com uma profetisa chamada Hulda, que morava no bairro novo de Jerusalém. O marido dela, que se chamava Salum, filho de Ticva e neto de Harás, era o encarregado da rouparia do Templo. Eles contaram a Hulda o que havia acontecido,", "nvi": "Então Miriã, a profetisa, irmã de Arão, pegou um tamborim e todas as mulheres a seguiram, tocando tamborins e dançando. Débora, uma profetisa, mulher de Lapidote, liderava Israel naquela época. O sacerdote Hilquias, Aicam, Acbor, Safã e Asaías foram falar com a profetisa Hulda, mulher de Salum, filho de Ticvá e neto de Harás, responsável pelo guarda-roupa do templo. Ela morava no bairro novo de Jerusalém.", "acf": "Então Miriã, a profetiza, a irmã de Arão, tomou o tamboril na sua mão, e todas as mulheres saíram atrás dela com tamboris e com danças. E Débora, mulher profetisa, mulher de Lapidote, julgava a Israel naquele tempo. Então foi o sacerdote Hilquias, e Aicão, Acbor, Safã e Asaías à profetiza Hulda, mulher de Salum, filho de Ticvá, o filho de Harás, o guarda das vestiduras (e ela habitava em Jerusalém, na segunda parte), e lhe falaram."}
          },
          {
            pergunta: "Leia 2 Reis 22:11-14. Por que os homens enviados pelo rei Josias procuraram a profetisa Hulda? O que isso revela sobre a importância de seu papel na nação?",
            resposta: "Procuraram-na porque reconheciam que ela possuía uma linha direta de comunicação com o Senhor; isso demonstra o prestígio espiritual e a autoridade reconhecida de seu ministério profético em Judá.",
            versoes: {"naa": "Quando ouviu as palavras do Livro da Lei, o rei rasgou as suas roupas. Então deu ordens a Hilquias, o sacerdote, a Aicão, filho de Safã, a Acbor, filho de Micaías, a Safã, o escrivão, e a Asaías, servo do rei, dizendo: — Vão consultar o SENHOR por mim, pelo povo e por todo o Judá, a respeito das palavras deste livro que foi encontrado. Porque é grande o furor do SENHOR, que se acendeu contra nós, porque os nossos pais não deram ouvidos às palavras deste livro, para fazerem segundo tudo o que está escrito a nosso respeito. Então o sacerdote Hilquias, Aicão, Acbor, Safã e Asaías foram falar com a profetisa Hulda, esposa de Salum, encarregado das vestimentas da Casa do SENHOR, filho de Ticva, filho de Harás. Hulda morava na parte nova da cidade, em Jerusalém. Eles lhe contaram o que havia acontecido,", "ntlh": "Quando ouviu o que o Livro da Lei dizia, o rei rasgou as suas roupas em sinal de tristeza. Então deu a Hilquias, o sacerdote, e a Aicã, filho de Safã, e a Acbor, filho de Micaías, e a Safã, o escrivão, e a Asaías, o servidor do rei, a seguinte ordem: — Vão consultar a Deus, o SENHOR, por mim e por todo o povo de Judá a respeito dos ensinamentos deste livro. Deus está irado conosco porque os nossos antepassados não fizeram o que este livro manda. Hilquias, Aicã, Abdom, Safã e Asaías foram falar com uma profetisa chamada Hulda, que morava no bairro novo de Jerusalém. O marido dela, que se chamava Salum, filho de Ticva e neto de Harás, era o encarregado da rouparia do Templo. Eles contaram a Hulda o que havia acontecido,", "nvi": "Assim que o rei ouviu as palavras do Livro da Lei, rasgou suas vestes e deu estas ordens ao sacerdote Hilquias, a Aicam, filho de Safã, a Acbor, filho de Micaías, ao secretário Safã e ao auxiliar real Asaías: “Vão consultar o SENHOR por mim, pelo povo e por todo o Judá acerca do que está escrito neste livro que foi encontrado. A ira do SENHOR contra nós deve ser grande, pois os nossos antepassados não obedeceram às palavras deste livro nem agiram de acordo com tudo o que nele está escrito a nosso respeito”. O sacerdote Hilquias, Aicam, Acbor, Safã e Asaías foram falar com a profetisa Hulda, mulher de Salum, filho de Ticvá e neto de Harás, responsável pelo guarda-roupa do templo. Ela morava no bairro novo de Jerusalém.", "acf": "Sucedeu, pois, que, ouvindo o rei as palavras do livro da lei, rasgou as suas vestes. E o rei mandou a Hilquias, o sacerdote, a Aicão, filho de Safã, a Acbor, filho de Micaías, a Safã o escrivão e a Asaías, o servo do rei, dizendo: Ide, e consultai o SENHOR por mim, pelo povo e por todo o Judá, acerca das palavras deste livro que se achou; porque grande é o furor do SENHOR, que se acendeu contra nós; porquanto nossos pais não deram ouvidos às palavras deste livro, para fazerem conforme tudo quanto acerca de nós está escrito. Então foi o sacerdote Hilquias, e Aicão, Acbor, Safã e Asaías à profetiza Hulda, mulher de Salum, filho de Ticvá, o filho de Harás, o guarda das vestiduras (e ela habitava em Jerusalém, na segunda parte), e lhe falaram."}
          },
          {
            pergunta: "Profetas e profetisas, embora chamados por Deus, também eram pecadores carentes de graça. Que esperança você encontra na história deles?",
            resposta: "Encontramos a esperança de que Deus não depende da perfeição humana para realizar Sua obra, mas capacita e perdoa com Sua graça aqueles que se consagram de coração ao Seu serviço.",
            versoes: {"naa": "Miriã e Arão falaram contra Moisés, por causa da mulher cuxita que este havia tomado; pois ele tinha tomado uma mulher cuxita. E disseram: — Será que o SENHOR falou somente por meio de Moisés? Será que não falou também por meio de nós? E o SENHOR ouviu o que eles disseram. Moisés era um homem muito manso, mais do que qualquer outro sobre a terra. Imediatamente o SENHOR disse a Moisés, a Arão e a Miriã: — Vocês três, dirijam-se à tenda do encontro. E os três foram até lá. Então o SENHOR desceu na coluna de nuvem e se pôs à porta da tenda. Depois, chamou Arão e Miriã, e eles se apresentaram. Então o SENHOR disse: — Ouçam, agora, as minhas palavras: se entre vocês há um profeta, eu, o SENHOR, em visão me faço conhecer a ele ou falo com ele em sonhos. Não é assim com o meu servo Moisés, que é fiel em toda a minha casa. Falo com ele face a face, claramente e não por enigmas; pois ele vê a forma do SENHOR. Como, pois, vocês não tiveram medo de falar contra o meu servo, contra Moisés? E a ira do SENHOR se acendeu contra eles; e ele se retirou. Quando a nuvem se afastou de sobre a tenda, eis que Miriã estava leprosa, branca como a neve. Arão olhou para Miriã, e eis que ela estava coberta de lepra. Então ele me disse: “A minha graça é o que basta para você, porque o poder se aperfeiçoa na fraqueza.” De boa vontade, pois, mais me gloriarei nas fraquezas, para que sobre mim repouse o poder de Cristo.", "ntlh": "Moisés havia casado com uma mulher da Etiópia, e Míriam e Arão começaram a criticá-lo por causa disso. Eles disseram: — Será que o SENHOR tem falado somente por meio de Moisés? Será que não tem falado também por meio de nós? E o SENHOR ouviu o que eles disseram (Moisés era um homem humilde, o mais humilde do mundo.). Logo em seguida o SENHOR disse a Moisés, a Arão e a Míriam: — Vocês três aí, vão para a Tenda Sagrada. Eles foram, e o SENHOR desceu na coluna de nuvem e ficou na entrada da Tenda. Depois chamou Arão e Míriam e, quando eles chegaram, Deus disse: — Agora escutem o que vou dizer. Quando há profetas entre vocês, eu apareço a eles em visões e falo com eles em sonhos. Com o meu servo Moisés é diferente, pois eu o coloquei como responsável por todo o meu povo. Pois eu falo com ele face a face, claramente, e não por meio de comparações; ele até já viu a minha forma! Como é que vocês se atrevem a falar contra o meu servo Moisés? E aí o SENHOR Deus foi embora muito irado com eles. Assim que Deus saiu, a nuvem que estava sobre a Tenda desapareceu. No mesmo instante Míriam foi atacada por uma terrível doença da pele, que ficou branca como a neve. Arão olhou para Míriam e viu que, de fato, ela estava atacada por aquela doença. Mas ele me respondeu: “A minha graça é tudo o que você precisa, pois o meu poder é mais forte quando você está fraco.” Portanto, eu me sinto muito feliz em me gabar das minhas fraquezas, para que assim a proteção do poder de Cristo esteja comigo.", "nvi": "Miriã e Arão começaram a criticar Moisés porque ele havia se casado com uma mulher etíope. “Será que o SENHOR tem falado apenas por meio de Moisés?”, perguntaram. “Também não tem ele falado por meio de nós?” E o SENHOR ouviu isso. Ora, Moisés era um homem muito paciente, mais do que qualquer outro que havia na terra. Imediatamente o SENHOR disse a Moisés, a Arão e a Miriã: “Dirijam-se à Tenda do Encontro, vocês três”. E os três foram para lá. Então o SENHOR desceu numa coluna de nuvem e, pondo-se à entrada da Tenda, chamou Arão e Miriã. Os dois vieram à frente, e ele disse: “Ouçam as minhas palavras: Quando entre vocês há um profeta do SENHOR , a ele me revelo em visões, em sonhos falo com ele. Não é assim, porém, com meu servo Moisés, que é fiel em toda a minha casa. Com ele falo face a face, claramente, e não por enigmas; e ele vê a forma do SENHOR. Por que não temeram criticar meu servo Moisés?” Então a ira do SENHOR acendeu-se contra eles, e ele os deixou. Quando a nuvem se afastou da Tenda, Miriã estava leprosa ; sua aparência era como a da neve. Arão voltou-se para Miriã, viu que ela estava com lepra Mas ele me disse: “Minha graça é suficiente a você, pois o meu poder se aperfeiçoa na fraqueza”. Portanto, eu me gloriarei ainda mais alegremente em minhas fraquezas, para que o poder de Cristo repouse em mim.", "acf": "E FALARAM Miriã e Arão contra Moisés, por causa da mulher cusita, com quem casara; porquanto tinha casado com uma mulher cusita. E disseram: Porventura falou o SENHOR somente por Moisés? Não falou também por nós? E o SENHOR o ouviu. E era o homem Moisés mui manso, mais do que todos os homens que havia sobre a terra. E logo o SENHOR disse a Moisés, a Arão e a Miriã: Vós três saí à tenda da congregação. E saíram eles três. Então o SENHOR desceu na coluna de nuvem, e se pôs à porta da tenda; depois chamou a Arão e a Miriã e ambos saíram. E disse: Ouvi agora as minhas palavras; se entre vós houver profeta, eu, o SENHOR, em visão a ele me farei conhecer, ou em sonhos falarei com ele. Não é assim com o meu servo Moisés que é fiel em toda a minha casa. Boca a boca falo com ele, claramente e não por enigmas; pois ele vê a semelhança do SENHOR; por que, pois, não tivestes temor de falar contra o meu servo, contra Moisés? Assim a ira do SENHOR contra eles se acendeu; e retirou-se. E a nuvem se retirou de sobre a tenda; e eis que Miriã ficou leprosa como a neve; e olhou Arão para Miriã, e eis que estava leprosa. E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo."}
          },
        ]
      },
      {
        dia: "Quinta-feira",
        titulo: "Falsos profetas",
        resumo: "Em contraste com os verdadeiros mensageiros de Deus, os falsos profetas proclamavam mensagens mentirosas que procediam de sua própria imaginação ou de influências idólatras. Em tempos de apostasia em Judá, Jeremias teve de confrontar aqueles que prometiam paz e prosperidade quando o juízo divino de guerra e fome era iminente.\n\nOs falsos profetas eram atraídos pela conveniência da popularidade e apoiavam os desejos dos monarcas corrompidos, como visto com os profetas de Acabe. Em contrapartida, os profetas legítimos recusavam conformar-se à maioria e proclamavam unicamente o que o Senhor lhes ordenava.",
        perguntas: [
          {
            pergunta: "Leia Jeremias 14:1-15. Como o Senhor via aqueles que falavam falsamente como “profetas” em Seu nome?",
            resposta: "O Senhor os via como impostores condenáveis que profetizavam enganos do próprio íntimo sem terem sido enviados, e garantiu que tanto eles quanto seus seguidores sofreriam severa punição.",
            versoes: {"naa": "Palavra do SENHOR que veio a Jeremias a respeito da seca: “Judá anda chorando, as suas portas estão abandonadas e, de luto, se curvam até o chão; e o clamor de Jerusalém vai subindo. Os poderosos mandam os servos buscar água. Estes vão às cisternas e não encontram água; voltam com os seus cântaros vazios e, decepcionados e confusos, cobrem a cabeça. Por não ter havido chuva sobre a terra, esta se acha ressequida; e, por isso, os lavradores, decepcionados, cobrem a cabeça. Até as corças no campo têm as suas crias e as abandonam, porque não há capim. Os jumentos selvagens se põem no alto dos morros e, ofegantes, sorvem o vento como chacais; os seus olhos desfalecem, por falta de pasto.” Ainda que as nossas maldades testifiquem contra nós, ó SENHOR, age por amor do teu nome! Porque as nossas rebeldias se multiplicaram; pecamos contra ti. Ó Esperança de Israel e Redentor do teu povo no tempo da angústia, por que serias como estrangeiro na terra e como viajante que fica só uma noite? Por que serias como homem que foi pego de surpresa, como valente que não pode salvar? Mas tu, ó SENHOR, estás em nosso meio, e nós somos chamados pelo teu nome. Não nos abandones! Assim diz o SENHOR a respeito deste povo: “Eles gostam de andar errantes e não sabem controlar os pés. Por isso, o SENHOR não se agrada deles; agora ele se lembrará das maldades que fizeram e os castigará por causa dos seus pecados.” O SENHOR me disse ainda: — Não interceda por este povo para o bem dele. Quando jejuarem, não ouvirei o seu clamor e, quando trouxerem holocaustos e ofertas de cereais, não me agradarei deles. Pelo contrário, eu os consumirei pela guerra, pela fome e pela peste. Então eu disse: — Ah! SENHOR Deus, eis que os profetas lhes dizem: “Vocês não verão a guerra, nem passarão fome. Porque eu lhes darei verdadeira paz neste lugar.” E o SENHOR respondeu: — Esses profetas profetizam mentiras em meu nome. Nunca os enviei, nem lhes dei ordem, nem lhes falei. Eles estão profetizando para vocês visões falsas, adivinhações inúteis e engano que procede do seu íntimo. Portanto, assim diz o SENHOR a respeito dos profetas que, profetizando em meu nome, sem que eu os tenha mandado, dizem que não haverá guerra nem fome nesta terra: Esses profetas serão consumidos pela guerra e pela fome.", "ntlh": "O SENHOR Deus me disse o seguinte a respeito da seca: “O povo de Judá está de luto, chorando. As suas cidades estão morrendo, o povo está abatido, jogado no chão, e Jerusalém grita pedindo socorro. Os ricos mandam os empregados buscar água. Eles vão até os poços, porém não encontram água e voltam com os potes vazios. Então cobrem a cabeça, desanimados e atrapalhados. Os lavradores também cobrem a cabeça, desesperados porque não chove, e a terra está seca. No campo, as veadas abandonam as suas crias, pois não há capim. Os jumentos selvagens ficam parados no alto dos morros e, com falta de ar, respiram como os lobos. Eles não enxergam bem por falta de pasto.” O meu povo disse: “Ó SENHOR Deus, os nossos pecados nos acusam, mas pedimos que nos ajudes, como prometeste. Muitas vezes, nos afastamos de ti e contra ti temos pecado. Tu és a única esperança do povo de Israel, tu és aquele que nos salva quando estamos em dificuldades. Por que é que tens de ser como um estrangeiro em nossa terra ou como um viajante que só pousa uma noite? Por que é que tens de ser como um homem apanhado de surpresa, como um soldado que não tem força para defender os outros? Mas tu, ó SENHOR, estás entre nós, e nós somos o teu povo. Não nos abandones!” O SENHOR Deus disse o seguinte a respeito desse povo: — Eles gostam de andar por aí e não sabem se controlar. Por isso, não estou satisfeito com eles. Eu lembrarei das maldades que fizeram e os castigarei por causa dos seus pecados. Aí o SENHOR me disse: — Não me peça para ajudar esse povo. Mesmo que jejuem e orem, eu não os ouvirei. Não os aceitarei, mesmo que me ofereçam animais em sacrifício e me tragam ofertas de cereais. Pelo contrário, eu os matarei na guerra e também por meio de fome e de doenças. Então eu disse: — Ó SENHOR, meu Deus, tu sabes que alguns profetas estão dizendo ao povo que não vai haver guerra nem fome. Eles afirmam que prometeste que em nossa terra só haverá paz. Mas o SENHOR respondeu: — Esses profetas estão profetizando mentiras em meu nome. Eu não os enviei, nem lhes dei ordens e nunca lhes disse nada. As suas visões são mentiras, e as suas adivinhações não valem nada; eles inventam profecias só para enganar. Eu, o SENHOR, digo a você o que vou fazer com esses profetas que não enviei e que profetizam em meu nome, dizendo que não haverá guerra nem fome neste país. Eu os matarei na guerra e de fome.", "nvi": "Esta é a palavra que o SENHOR dirigiu a Jeremias acerca da seca: “Judá pranteia, as suas cidades estão definhando e os seus habitantes se lamentam, prostrados no chão! O grito de Jerusalém sobe. Os nobres mandam os seus servos à procura de água; eles vão às cisternas mas nada encontram. Voltam com os potes vazios e, decepcionados e desesperados, cobrem a cabeça. A terra nada produziu, porque não houve chuva; e os lavradores, decepcionados, cobrem a cabeça. Até mesmo a corça no campo abandona a cria recém-nascida, porque não há capim. Os jumentos selvagens permanecem nos altos, farejando o vento como os chacais, mas a sua visão falha, por falta de pastagem”. Embora os nossos pecados nos acusem, age por amor do teu nome, ó SENHOR! Nossas infidelidades são muitas; temos pecado contra ti. Ó Esperança de Israel, tu que o salvas na hora da adversidade, por que te comportas como um estrangeiro na terra, ou como um viajante que fica somente uma noite? Por que ages como um homem que foi pego de surpresa, como um guerreiro que não pode salvar? Tu estás em nosso meio, ó SENHOR, e nós pertencemos a ti ; não nos abandones! Assim diz o SENHOR acerca deste povo: “Eles gostam muito de vaguear; não controlam os pés. Por isso o SENHOR não os aceita; agora ele se lembrará da iniquidade deles e os castigará por causa dos seus pecados”. Então o SENHOR me disse: “Não ore pelo bem-estar deste povo. Ainda que jejuem, não escutarei o clamor deles; ainda que ofereçam holocaustos e ofertas de cereal, não os aceitarei. Mas eu os destruirei pela guerra, pela fome e pela peste”. Mas eu disse: Ah, Soberano SENHOR, os profetas estão dizendo a eles: “Vocês não verão a guerra nem a fome; eu lhes darei prosperidade duradoura neste lugar”. Então o SENHOR me disse: “É mentira o que os profetas estão profetizando em meu nome. Eu não os enviei nem lhes dei ordem nenhuma, nem falei com eles. Eles estão profetizando para vocês falsas visões, adivinhações inúteis e ilusões de suas próprias mentes”. Por isso, assim diz o SENHOR: “Quanto aos profetas que estão profetizando em meu nome, embora eu não os tenha enviado, e que dizem: ‘Nem guerra nem fome alcançarão esta terra’, aqueles mesmos profetas perecerão pela guerra e pela fome!", "acf": "A PALAVRA do SENHOR, que veio a Jeremias, a respeito da grande seca. Anda chorando Judá, e as suas portas estão enfraquecidas; andam de luto até ao chão, e o clamor de Jerusalém vai subindo. E os seus mais ilustres enviam os seus pequenos a buscar água; vão às cisternas, e não acham água; voltam com os seus cântaros vazios; envergonham-se e confundem-se, e cobrem as suas cabeças. Por causa da terra que se fendeu, porque não há chuva sobre a terra, os lavradores se envergonham e cobrem as suas cabeças. Porque até as cervas no campo têm as suas crias, e abandonam seus filhos, porquanto não há erva. E os jumentos monteses se põem nos lugares altos, sorvem o vento como os chacais; desfalecem os seus olhos, porquanto não há erva. Posto que as nossas maldades testificam contra nós, ó SENHOR, age por amor do teu nome; porque as nossas rebeldias se multiplicaram; contra ti pecamos. Ó esperança de Israel, e Redentor seu no tempo da angústia, por que serias como um estrangeiro na terra e como o viandante que se retira a passar a noite? Por que serias como homem surpreendido, como poderoso que não pode livrar? Mas tu estás no meio de nós, ó SENHOR, e nós somos chamados pelo teu nome; não nos desampares. Assim diz o SENHOR, acerca deste povo: Pois que tanto gostaram de andar errantes, e não retiveram os seus pés, por isso o SENHOR não se agrada deles, mas agora se lembrará da iniqüidade deles, e visitará os seus pecados. Disse-me mais o SENHOR: Não rogues por este povo para seu bem. Quando jejuarem, não ouvirei o seu clamor, e quando oferecerem holocaustos e ofertas de alimentos, não me agradarei deles; antes eu os consumirei pela espada, e pela fome e pela peste. Então disse eu: Ah! Senhor DEUS, eis que os profetas lhes dizem: Não vereis espada, e não tereis fome; antes vos darei paz verdadeira neste lugar. E disse-me o SENHOR: Os profetas profetizam falsamente no meu nome; nunca os enviei, nem lhes dei ordem, nem lhes falei; visão falsa, e adivinhação, e vaidade, e o engano do seu coração é o que eles vos profetizam. Portanto assim diz o SENHOR acerca dos profetas que profetizam no meu nome, sem que eu os tenha mandado, e que dizem: Nem espada, nem fome haverá nesta terra: À espada e à fome, serão consumidos esses profetas."}
          },
          {
            pergunta: "Mesmo que você não seja profeta, seguir o que é popular quase sempre parece o caminho mais fácil. Diante de uma cultura corrompida, por que isso nunca é uma boa ideia?",
            resposta: "Não é uma boa ideia porque seguir a maioria em uma cultura pecaminosa afasta a pessoa da verdade de Deus, conduzindo à desobediência e, em última instância, à ruína espiritual.",
            versoes: {"naa": "Não siga a multidão para fazer o mal e, num processo, não deponha com a maioria, para torcer a justiça. E o SENHOR respondeu: — Esses profetas profetizam mentiras em meu nome. Nunca os enviei, nem lhes dei ordem, nem lhes falei. Eles estão profetizando para vocês visões falsas, adivinhações inúteis e engano que procede do seu íntimo.", "ntlh": "Não siga a maioria quando ela faz o que é errado e não dê testemunho falso para ajudar a maioria a torcer a justiça. Mas o SENHOR respondeu: — Esses profetas estão profetizando mentiras em meu nome. Eu não os enviei, nem lhes dei ordens e nunca lhes disse nada. As suas visões são mentiras, e as suas adivinhações não valem nada; eles inventam profecias só para enganar.", "nvi": "“Não acompanhe a maioria para fazer o mal. Ao testemunhar num processo, não perverta a justiça para apoiar a maioria, Então o SENHOR me disse: “É mentira o que os profetas estão profetizando em meu nome. Eu não os enviei nem lhes dei ordem nenhuma, nem falei com eles. Eles estão profetizando para vocês falsas visões, adivinhações inúteis e ilusões de suas próprias mentes”.", "acf": "Não seguirás a multidão para fazeres o mal; nem numa demanda falarás, tomando parte com a maioria para torcer o direito. E disse-me o SENHOR: Os profetas profetizam falsamente no meu nome; nunca os enviei, nem lhes dei ordem, nem lhes falei; visão falsa, e adivinhação, e vaidade, e o engano do seu coração é o que eles vos profetizam."}
          },
        ]
      },
      {
        dia: "Sexta-feira",
        titulo: "Imperfeita, mas disposta",
        resumo: "A experiência de mensageiros imperfeitos sendo chamados por Deus manifestou-se também no ministério de Ellen G. White. Quando recebeu suas primeiras visões aos 17 anos, com saúde debilitada e timidez extrema, ela temeu a oposição e relutou intensamente em aceitar o encargo profético.\n\nContudo, rendendo-se à direção do Espírito Santo, dedicou sua vida inteira a comunicar a vontade do Senhor. Suas visões e orientações foram fundamentais para estabelecer a Igreja Adventista do Sétimo Dia e impulsionar suas redes mundiais de educação e saúde, além de deixar milhares de páginas de instrução espiritual.",
        perguntas: [
        ]
      },
    ],
    estudoProfessor: {
      "titulo": "Profetas do Antigo Testamento",
      "subtitulo": "Recurso Didático para Professores da Escola Sabatina | Lição 3 (4º Trimestre/2026)",
      "versoChave": "Creiam no Senhor, seu Deus, e vocês estarão seguros; creiam nos profetas do Senhor e vocês serão bem-sucedidos (2Cr 20:20)",
      "objetivo": "Compreender a humanidade e o papel dos profetas bíblicos, aprendendo a discernir os verdadeiros mensageiros dos falsos e reconhecendo a autoridade da orientação divina para hoje.",
      "slides": [
        {
          "titulo": "Profetas do Antigo Testamento: O GPS Celestial de Deus",
          "topicos": [
            "Compreendendo a Natureza, Função e Discernimento do Dom Profético",
            "Texto-Chave: 2 Crônicas 20:20",
            "Objetivo: discernir verdadeiros mensageiros e reconhecer a orientação divina"
          ],
          "nota": "Destaque que a segurança espiritual depende da confiança inabalável na Palavra de Deus e no testemunho de Seus profetas enviados."
        },
        {
          "titulo": "O Sistema de Posicionamento Espiritual",
          "topicos": [
            "Os profetas funcionavam como o GPS espiritual para Israel",
            "Transmitiram relatos, profecias, advertências, orientações e poesias",
            "Instrumentos humildes apontando continuamente para o Senhor e Sua Aliança"
          ],
          "nota": "Explique aos adultos que o profeta não substitui a rota, mas atua como o receptor e transmissor do sinal celestial."
        },
        {
          "titulo": "A Humanidade dos Profetas de Deus",
          "topicos": [
            "Homens sujeitos às mesmas paixões e limitações",
            "Passíveis de medo, desânimo, exaustão e fragilidade emocional",
            "O dom profético não eliminava a natureza humana",
            "Deus escolhe vasos de barro imperfeitos para demonstrar Seu poder"
          ],
          "nota": "Acolha os alunos reforçando que os desabafos e lutas emocionais de Elias mostram que o Senhor cuida de Seus servos mesmo em momentos de crise."
        },
        {
          "titulo": "Quando o Mensageiro Pede a Morte",
          "topicos": [
            "Exaustão emocional após a grande vitória no Carmelo",
            "Fuga para o deserto diante das ameaças de Jezabel",
            "Oração de desabafo debaixo do zimbro pedindo a morte",
            "Sentimento de solidão e fracasso na Aliança"
          ],
          "nota": "Enfatize que Deus respondeu a Elias não com repreensão dura, mas com pão, água, descanso e a brisa suave no Horebe."
        },
        {
          "titulo": "A Coragem do Profeta Solitário",
          "topicos": [
            "Confronto entre a verdade divina e os desejos dos reis",
            "Acabe mantinha 400 falsos profetas bajuladores",
            "Fidelidade de Micaías em falar apenas o que o Senhor ordenou",
            "Preferencia pelo favor de Deus acima da aprovação humana"
          ],
          "nota": "Pergunte aos alunos: Você tem cedido à pressão da maioria ou tem mantido a fidelidade à mensagem de Deus?"
        },
        {
          "titulo": "O Perfil do Mensageiro Autêntico",
          "topicos": [
            "Chamados diretamente por Deus como guias espirituais",
            "Proclamação da verdade necessária, mesmo que dolorosa ou impopular",
            "Vida e conduta pessoal refletindo integridade, santidade e oração"
          ],
          "nota": "Sublinhe que o verdadeiro profeta transmite o que as pessoas precisam ouvir para a salvação, não o que querem ouvir para seu deleite."
        },
        {
          "titulo": "Testes Bíblicos do Dom Profético",
          "topicos": [
            "Cumprimento exato das predições feitas",
            "Harmonia plena com as Escrituras e a lei de Deus",
            "Frutos visíveis de santidade e adoração exclusiva ao Senhor"
          ],
          "nota": "Relembre a classe que maravilhas ou milagres isolados não provam a autenticidade se houver desobediência aos Dez Mandamentos."
        },
        {
          "titulo": "A Esfera de Atuação do Ministério Profético",
          "topicos": [
            "Confronto a governantes infiéis chamando-os à obediência",
            "Correção do sacerdócio contra a corrupção no santuário",
            "Instrução espiritual ao povo e proclamações às nações"
          ],
          "nota": "Mostre como o profeta atuava em todas as dimensões da vida nacional e pessoal, promovendo o reavivamento."
        },
        {
          "titulo": "Mulheres no Ministério Profético",
          "topicos": [
            "Chamado divino concedido a homens e mulheres",
            "Miriã como líder no cântico e atuação com Moisés e Arão",
            "Débora exercendo autoridade como profetisa, juíza e líder"
          ],
          "nota": "Destaque que o chamado soberano de Deus não faz acepção de pessoas e concede Seus dons para a edificação da comunidade."
        },
        {
          "titulo": "A Autoridade Espiritual Diante da Coroa",
          "topicos": [
            "Consulta de Josias à profetisa Hulda após achar o Livro da Lei",
            "Comunicação fiel sobre o juízo iminente e a misericórdia",
            "Palavras proféticas que impulsionaram profundas reformas em Judá"
          ],
          "nota": "Explique que Josias recorreu ao dom profético para entender como aplicar a Palavra escrita à situação concreta de seu tempo."
        },
        {
          "titulo": "O Raio-X do Engano Profético",
          "topicos": [
            "Falsos profetas proclamam ilusões da própria mente",
            "Mensagens de falsa paz e conforto para quem vive em pecado",
            "Busca constante de popularidade, aplauso e aprovação humana"
          ],
          "nota": "Alerte a classe sobre pregadores modernos que vendem facilidades e evitam falar contra a transgressão da lei divina."
        },
        {
          "titulo": "Paz, Paz, Quando Não Há Paz",
          "topicos": [
            "Falsos profetas falando sem terem sido enviados por Deus",
            "Promessas ilusórias de que não haveria espada ou fome",
            "Juízo divino sobre os próprios mensageiros enganadores"
          ],
          "nota": "Enfatize que a verdadeira mensagem de Deus desperta a consciência para o arrependimento sincero e obediência."
        },
        {
          "titulo": "O Ministério Profético de Ellen G. White",
          "topicos": [
            "Chamado inicial aos 17 anos em 1844 com receios e fragilidades",
            "Superação do medo para transmitir as revelações do Senhor",
            "Escritos que atuam como luz menor apontando para a Bíblia"
          ],
          "nota": "Esclareça que Ellen White nunca substituiu as Escrituras; seu ministério visava guiar o povo de volta ao estudo puro da Bíblia."
        },
        {
          "titulo": "Imperfeitos, Mas Completamente Dispostos",
          "topicos": [
            "Lutas humanas presentes em Elias, Miriã e Ellen White",
            "Poder do chamado revelado em coragem diante de reis e multidões",
            "Deus utiliza instrumentos frágeis com corações sintonizados"
          ],
          "nota": "Incentive cada aluno a colocar seus talentos e vida à disposição de Deus, independentemente de suas limitações."
        },
        {
          "titulo": "Recalculando a Rota Espiritual",
          "topicos": [
            "A Palavra de Deus como regra única e suprema de fé",
            "Segurança e prosperidade ao aceitar as mensagens proféticas",
            "Decisão pessoal de seguir as instruções do GPS celestial"
          ],
          "nota": "Faça uma oração consagradora convidando os adultos a renovarem o compromisso de estudo diário da Bíblia e do Espírito de Profecia."
        }
      ],
      "aprofundamentos": [
        {
          "titulo": "A Teologia da Mensagem Profética e a Aliança Mosaica",
          "texto": "No Antigo Testamento, os profetas não atuavam como inovadores doutrinários, mas como promotores e guardiões da Aliança estabelecida no Sinai. A função primária do profeta era acusar a apostasia, convocar o povo ao arrependimento e aplicar as leis do Pentateuco à realidade sociocultural e política contemporânea. O profeta atuava como um advogado da Aliança, trazendo à memória do povo as bênçãos da obediência e as maldições da transgressão delineadas em Deuteronômio 28."
        },
        {
          "titulo": "A Exegese de 1 Reis 22 e o Discernimento Teológico",
          "texto": "O confronto entre Micaías e os 400 falsos profetas revela a dinâmica do engano político-religioso no reinado de Acabe. Enquanto a corte desejava profecias de prosperidade e vitória militar, Micaías sustentou a visão do julgamento divino. A linguagem bíblica ao descrever o espírito mentiroso ilustra o princípio da soberania de Deus, no qual Ele permite que a obstinação do pecador endurecido colha as consequências de sua própria escolha ilusória."
        },
        {
          "titulo": "O Dom Profético Não Canônico e o Ministério de Ellen G. White",
          "texto": "A teologia adventista distingue entre profetas canônicos (cujos escritos compõem o cânon bíblico inspirado) e profetas não canônicos (como Miriã, Débora, Natan, Hulda e João Batista, que exerceram ministério profético autêntico sem redigir livros bíblicos). Ellen White se encaixa no papel de uma profetisa não canônica para o tempo do fim. Seus escritos não acrescentam novas doutrinas nem suplementam a Bíblia, mas atuam como um instrumento de aplicação prática dos princípios escriturísticos, reprovando o pecado e confortando a igreja remanescente."
        }
      ],
      "capa": "img/licoes/licao-2026-4t-3.png"
    }

  },
  {
    id: 2,
    titulo: "O chamado de um profeta",
    data: "3 de Outubro de 2026",
    semana: "Lição 2 - 4º Trimestre 2026",
    versiculo: "Is 6:8",
    texto: "Depois disto, ouvi a voz do Senhor, que dizia: ‘A quem enviarei, e quem há de ir por Nós?’ Eu respondi: ‘Eis-me aqui, envia-me a mim’",
    resumo: "Ao longo da história bíblica, Deus levantou profetas em momentos cruciais para reconduzir Seu povo à fidelidade e proclamar a mensagem da salvação. Embora enfrentassem severa oposição, rejeição e perseguição, esses mensageiros permaneceram leais à aliança divina. Hoje, somos chamados a ouvir a voz profética e a compartilhar a mesma esperança de redenção com um mundo em crise.",
    leituras: [{"ref": "Gn 15:6", "versoes": {"naa": "Abrão creu no SENHOR, e isso lhe foi atribuído para justiça.", "ntlh": "Abrão creu em Deus, o SENHOR, e por isso o SENHOR o aceitou.", "nvi": "Abrão creu no SENHOR, e isso lhe foi creditado como justiça.", "acf": "E creu ele no SENHOR, e imputou-lhe isto por justiça."}}, {"ref": "Gl 3:6-9", "versoes": {"naa": "É o caso de Abraão, que “creu em Deus, e isso lhe foi atribuído para justiça”. Saibam, portanto, que os que têm fé é que são filhos de Abraão. Ora, tendo a Escritura previsto que Deus justificaria os gentios pela fé, preanunciou o evangelho a Abraão, dizendo: “Em você serão abençoados todos os povos.” De modo que os que têm fé são abençoados com o crente Abraão.", "ntlh": "Lembrem do que as Escrituras Sagradas dizem a respeito de Abraão: “Ele creu em Deus, e por isso Deus o aceitou.” Portanto, vocês devem saber que os verdadeiros descendentes de Abraão são os que têm fé. Antes que isso acontecesse, as Escrituras viram que Deus ia aceitar os não judeus por meio da fé. Por isso, antes de chegar o tempo, elas anunciaram a boa notícia a Abraão, dizendo: “Por meio de você, Deus abençoará todos os povos.” Abraão creu e foi abençoado; portanto, todos os que creem são abençoados como ele foi.", "nvi": "Considerem o exemplo de Abraão: “Ele creu em Deus, e isso lhe foi creditado como justiça”. Estejam certos, portanto, de que os que são da fé é que são filhos de Abraão. Prevendo a Escritura que Deus justificaria os gentios pela fé, anunciou primeiro as boas-novas a Abraão: “Por meio de você todas as nações serão abençoadas”. Assim, os que são da fé são abençoados com Abraão, homem de fé.", "acf": "Assim como Abraão creu em Deus, e isso lhe foi imputado como justiça. Sabei, pois, que os que são da fé são filhos de Abraão. Ora, tendo a Escritura previsto que Deus havia de justificar pela fé os gentios, anunciou primeiro o evangelho a Abraão, dizendo: Todas as nações serão benditas em ti. De sorte que os que são da fé são benditos com o crente Abraão."}}, {"ref": "1Rs 18:19-39", "versoes": {"naa": "Agora ordene que todo o Israel venha se encontrar comigo no monte Carmelo. Convoque também os quatrocentos e cinquenta profetas de Baal e os quatrocentos profetas da deusa Aserá que são sustentados por Jezabel. Então Acabe enviou mensageiros a todos os filhos de Israel e ajuntou os profetas no monte Carmelo. Depois, Elias se aproximou de todo o povo e disse: — Até quando vocês ficarão pulando de um lado para outro? Se o SENHOR é Deus, sigam-no; se é Baal, sigam-no. Porém o povo não disse uma só palavra. Então Elias disse ao povo: — Eu sou o único que restou dos profetas do SENHOR, e os profetas de Baal são quatrocentos e cinquenta homens. Tragam, agora, dois novilhos. Eles que escolham para si um dos novilhos e, cortando-o em pedaços, o ponham sobre a lenha, porém não ponham fogo. Eu prepararei o outro novilho e o porei sobre a lenha, mas não porei fogo. Então eles invocarão o nome de seu deus, e eu invocarei o nome do SENHOR. E há de ser que o deus que responder com fogo esse é que é Deus. E todo o povo respondeu: — É uma boa proposta! Elias disse aos profetas de Baal: — Escolham um dos novilhos e preparem-no primeiro, porque vocês são muitos. Depois, invoquem o nome do deus de vocês, mas não ponham fogo na lenha. Pegaram o novilho que lhes foi trazido, prepararam-no e invocaram o nome de Baal, desde a manhã até o meio-dia, dizendo: — Ó Baal, responde-nos! Porém não se ouviu nenhuma voz e não houve quem respondesse. E ficaram pulando ao redor do altar que tinham feito. Ao meio-dia, Elias começou a zombar deles, dizendo: — Gritem mais alto, porque ele é deus! Pode ser que esteja meditando, atendendo a necessidades ou viajando. Talvez esteja dormindo e necessite que o acordem. E eles clamavam em altas vozes e se cortavam com facas e com lanças, segundo o seu costume, até ficarem cobertos de sangue. Passado o meio-dia, eles profetizaram, até a hora do sacrifício da tarde; porém não houve voz, nem resposta, nem atenção alguma. Então Elias disse a todo o povo: — Aproximem-se de mim. E todo o povo se aproximou dele. Elias restaurou o altar do SENHOR, que estava em ruínas. Pegou doze pedras, segundo o número das tribos dos filhos de Jacó, a quem tinha vindo a palavra do SENHOR, dizendo: “O seu nome será Israel.” Com aquelas pedras edificou o altar em nome do SENHOR. Ao redor dele fez uma vala capaz de conter duas medidas de sementes e então armou a lenha, cortou o novilho em pedaços e os pôs sobre a lenha. Então disse: — Encham quatro cântaros com água e derramem sobre o holocausto e sobre a lenha. Disse ainda: — Façam isso outra vez. E eles o fizeram. Disse mais: — Façam isso pela terceira vez. E eles o fizeram pela terceira vez. A água escorria do altar e enchia também a vala aberta. Quando chegou a hora do sacrifício da tarde, o profeta Elias se aproximou do altar e disse: — Ó SENHOR, Deus de Abraão, de Isaque e de Israel, que hoje se fique sabendo que tu és Deus em Israel, e que eu sou o teu servo e que, segundo a tua palavra, fiz todas estas coisas. Responde-me, SENHOR, responde-me, para que este povo saiba que tu, SENHOR, és Deus e que fizeste o coração deles voltar para ti. Então caiu fogo do SENHOR e consumiu o holocausto, a lenha, as pedras e a terra, e ainda lambeu a água que estava na vala. Quando o povo viu isso, todos se prostraram com o rosto em terra e disseram: — O SENHOR é Deus! Só o SENHOR é Deus!", "ntlh": "Portanto, ordene agora a todo o povo de Israel que vá encontrar-se comigo no monte Carmelo. Mande também os quatrocentos e cinquenta profetas do deus Baal e os quatrocentos profetas da deusa Aserá que são sustentados pela rainha Jezabel. Então Acabe chamou todos os israelitas e os profetas de Baal para se reunirem no monte Carmelo. Elias chegou perto do povo e disse: — Até quando vocês vão ficar em dúvida sobre o que vão fazer? Se o SENHOR é Deus, adorem o SENHOR; mas, se Baal é Deus, adorem Baal! Porém o povo não respondeu nada. Então Elias disse: — De todos os profetas de Deus, o SENHOR, eu fui o único que sobrou, mas os profetas de Baal são quatrocentos e cinquenta. Agora tragam dois touros. Que os profetas de Baal matem um deles, cortem em pedaços e ponham em cima da lenha, mas não ponham fogo! Eu farei a mesma coisa com o outro touro. E aí os profetas de Baal vão orar ao seu deus, e eu orarei ao SENHOR. O deus que responder mandando fogo, este é que é Deus. E todo o povo respondeu: — Está bem assim! Então Elias disse aos profetas de Baal: — Já que vocês são tantos, peguem o touro e o preparem primeiro. Orem ao seu deus, porém não ponham fogo na lenha. Os profetas de Baal pegaram o touro que havia sido trazido para eles, e o prepararam, e oraram a Baal desde a manhã até o meio-dia. Eles gritavam assim: — Ó Baal, responde às nossas orações! E ficaram dançando em volta do altar que haviam feito, porém não houve resposta. Ao meio-dia, Elias começou a caçoar deles. Ele dizia: — Orem mais alto, pois ele é deus! Pode ser que esteja meditando ou que tenha ido ao banheiro. Talvez ele tenha viajado ou talvez esteja dormindo, e vocês terão de acordá-lo! Aí os profetas oraram mais alto e começaram a se cortar com facas e punhais, conforme o costume deles, até que o sangue começou a correr. Passou o meio-dia, e eles continuaram a orar e a gritar até a hora do sacrifício da tarde; porém não se ouviu nenhum som. Então Elias disse ao povo: — Cheguem para mais perto de mim. Todos chegaram mais perto de Elias, e ele começou a consertar o altar do SENHOR Deus, que estava derrubado. Ele pegou doze pedras, uma para cada uma das doze tribos que tinham os nomes dos filhos de Jacó, o homem a quem o SENHOR tinha dado o nome de Israel. Com essas pedras Elias reconstruiu o altar para a adoração do SENHOR. Depois cavou em volta uma valeta em que cabiam mais ou menos doze litros de água. Em seguida colocou lenha no altar, cortou o touro em pedaços e os pôs em cima da lenha. Então disse: — Encham quatro jarras com água e derramem sobre o animal sacrificado e sobre a lenha. Eles fizeram o que Elias estava mandando, e ele disse: — Façam de novo. E eles fizeram. — Façam pela terceira vez! — disse Elias. E eles fizeram. A água correu em volta do altar e encheu a valeta. Quando chegou a hora do sacrifício da tarde, o profeta Elias chegou perto do altar e orou assim: — Ó SENHOR, Deus de Abraão, de Isaque e de Jacó! Prova agora que és o Deus de Israel, e que eu sou teu servo, e que fiz tudo isto de acordo com a tua ordem. Responde-me, ó SENHOR, responde-me, para que este povo saiba que tu, o SENHOR, és Deus e estás trazendo este povo de volta para ti! Então o SENHOR mandou fogo. E o fogo queimou o sacrifício, a lenha, as pedras, a terra e ainda secou a água que estava na valeta. Quando viram isso, os israelitas se ajoelharam, encostaram o rosto no chão e gritaram: — O SENHOR é Deus! Só o SENHOR é Deus!", "nvi": "Agora convoque todo o povo de Israel para encontrar-se comigo no monte Carmelo. E traga os quatrocentos e cinquenta profetas de Baal e os quatrocentos profetas de Aserá, que comem à mesa de Jezabel.” Acabe convocou então todo o Israel e reuniu os profetas no monte Carmelo. Elias dirigiu-se ao povo e disse: “Até quando vocês vão oscilar para um lado e para o outro? Se o SENHOR é Deus, sigam-no; mas, se Baal é Deus, sigam-no”. O povo, porém, nada respondeu. Disse então Elias: “Eu sou o único que restou dos profetas do SENHOR, mas Baal tem quatrocentos e cinquenta profetas. Tragam dois novilhos. Escolham eles um, cortem-no em pedaços e o ponham sobre a lenha, mas não acendam fogo. Eu prepararei o outro novilho e o colocarei sobre a lenha, e também não acenderei fogo nela. Então vocês invocarão o nome do seu deus, e eu invocarei o nome do SENHOR. O deus que responder por meio do fogo, esse é Deus”. Então todo o povo disse: “O que você disse é bom”. Elias disse aos profetas de Baal: “Escolham um dos novilhos e preparem-no primeiro, visto que vocês são tantos. Clamem pelo nome do seu deus, mas não acendam o fogo”. Então pegaram o novilho que lhes foi dado e o prepararam. E clamaram pelo nome de Baal desde a manhã até o meio-dia. “Ó Baal, responde-nos!”, gritavam. E dançavam em volta do altar que haviam feito. Mas não houve nenhuma resposta; ninguém respondeu. Ao meio-dia Elias começou a zombar deles. “Gritem mais alto!”, dizia, “já que ele é um deus. Quem sabe está meditando, ou ocupado, ou viajando. Talvez esteja dormindo e precise ser despertado.” Então passaram a gritar ainda mais alto e a ferir-se com espadas e lanças, de acordo com o costume deles, até sangrarem. Passou o meio-dia, e eles continuaram profetizando em transe até a hora do sacrifício da tarde. Mas não houve resposta alguma; ninguém respondeu, ninguém deu atenção. Então Elias disse a todo o povo: “Aproximem-se de mim”. O povo aproximou-se, e Elias reparou o altar do SENHOR, que estava em ruínas. Depois apanhou doze pedras, uma para cada tribo dos descendentes de Jacó, a quem a palavra do SENHOR tinha sido dirigida, dizendo-lhe: “Seu nome será Israel”. Com as pedras construiu um altar em honra ao nome do SENHOR e cavou ao redor do altar uma valeta na qual poderiam ser semeadas duas medidas de sementes. Depois arrumou a lenha, cortou o novilho em pedaços e o pôs sobre a lenha. Então lhes disse: “Encham de água quatro jarras grandes e derramem-na sobre o holocausto e sobre a lenha”. “Façam-no novamente”, disse, e eles o fizeram de novo. “Façam-no pela terceira vez”, ordenou, e eles o fizeram pela terceira vez. A água escorria do altar, chegando a encher a valeta. À hora do sacrifício, o profeta Elias colocou-se à frente do altar e orou: “Ó SENHOR, Deus de Abraão, de Isaque e de Israel, que hoje fique conhecido que tu és Deus em Israel e que sou o teu servo e que fiz todas estas coisas por ordem tua. Responde-me, ó SENHOR, responde-me, para que este povo saiba que tu, ó SENHOR, és Deus e que fazes o coração deles voltar para ti”. Então o fogo do SENHOR caiu e queimou completamente o holocausto, a lenha, as pedras e o chão, e também secou totalmente a água na valeta. Quando o povo viu isso, todos caíram prostrados e gritaram: “O SENHOR é Deus! O SENHOR é Deus!”", "acf": "Agora, pois, manda reunir-se a mim todo o Israel no monte Carmelo; como também os quatrocentos e cinqüenta profetas de Baal, e os quatrocentos profetas de Asera, que comem da mesa de Jezabel. Então Acabe convocou todos os filhos de Israel; e reuniu os profetas no monte Carmelo. Então Elias se chegou a todo o povo, e disse: Até quando coxeareis entre dois pensamentos? Se o SENHOR é Deus, segui-o, e se Baal, segui-o. Porém o povo nada lhe respondeu. Então disse Elias ao povo: Só eu fiquei por profeta do SENHOR, e os profetas de Baal são quatrocentos e cinqüenta homens. Dêem-se-nos, pois, dois bezerros, e eles escolham para si um dos bezerros, e o dividam em pedaços, e o ponham sobre a lenha, porém não lhe coloquem fogo, e eu prepararei o outro bezerro, e o porei sobre a lenha, e não lhe colocarei fogo. Então invocai o nome do vosso deus, e eu invocarei o nome do SENHOR; e há de ser que o deus que responder por meio de fogo esse será Deus. E todo o povo respondeu, dizendo: É boa esta palavra. E disse Elias aos profetas de Baal: Escolhei para vós um dos bezerros, e preparai-o primeiro, porque sois muitos, e invocai o nome do vosso deus, e não lhe ponhais fogo. E tomaram o bezerro que lhes dera, e o prepararam; e invocaram o nome de Baal, desde a manhã até ao meio dia, dizendo: Ah! Baal, responde-nos! Porém nem havia voz, nem quem respondesse; e saltavam sobre o altar que tinham feito. E sucedeu que ao meio dia Elias zombava deles e dizia: Clamai em altas vozes, porque ele é um deus; pode ser que esteja falando, ou que tenha alguma coisa que fazer, ou que intente alguma viagem; talvez esteja dormindo, e despertará. E eles clamavam em altas vozes, e se retalhavam com facas e com lancetas, conforme ao seu costume, até derramarem sangue sobre si. E sucedeu que, passado o meio dia, profetizaram eles, até a hora de se oferecer o sacrifício da tarde; porém não houve voz, nem resposta, nem atenção alguma. Então Elias disse a todo o povo: Chegai-vos a mim. E todo o povo se chegou a ele; e restaurou o altar do SENHOR, que estava quebrado. E Elias tomou doze pedras, conforme ao número das tribos dos filhos de Jacó, ao qual veio a palavra do SENHOR, dizendo: Israel será o teu nome. E com aquelas pedras edificou o altar em nome do SENHOR; depois fez um rego em redor do altar, segundo a largura de duas medidas de semente. Então armou a lenha, e dividiu o bezerro em pedaços, e o pôs sobre a lenha. E disse: Enchei de água quatro cântaros, e derramai-a sobre o holocausto e sobre a lenha. E disse: Fazei-o segunda vez; e o fizeram segunda vez. Disse ainda: Fazei-o terceira vez; e o fizeram terceira vez; De maneira que a água corria ao redor do altar; e até o rego ele encheu de água. Sucedeu que, no momento de ser oferecido o sacrifício da tarde, o profeta Elias se aproximou, e disse: Ó SENHOR Deus de Abraão, de Isaque e de Israel, manifeste-se hoje que tu és Deus em Israel, e que eu sou teu servo, e que conforme à tua palavra fiz todas estas coisas. Responde-me, SENHOR, responde-me, para que este povo conheça que tu és o SENHOR Deus, e que tu fizeste voltar o seu coração. Então caiu fogo do SENHOR, e consumiu o holocausto, e a lenha, e as pedras, e o pó, e ainda lambeu a água que estava no rego. O que vendo todo o povo, caíram sobre os seus rostos, e disseram: Só o SENHOR é Deus! Só o SENHOR é Deus!"}}, {"ref": "Is 53:1-12", "versoes": {"naa": "Quem creu em nossa pregação? E a quem foi revelado o braço do SENHOR? Porque foi subindo como um renovo diante dele e como raiz de uma terra seca. Não tinha boa aparência nem formosura; olhamos para ele, mas não havia nenhuma beleza que nos agradasse. Era desprezado e o mais rejeitado entre os homens, homem de dores e que sabe o que é padecer. E, como um de quem os homens escondem o rosto, era desprezado, e dele não fizemos caso. Certamente ele tomou sobre si as nossas enfermidades e as nossas dores levou sobre si; e nós o considerávamos como aflito, ferido de Deus e oprimido. Mas ele foi traspassado por causa das nossas transgressões e esmagado por causa das nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas feridas fomos sarados. Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu próprio caminho, mas o SENHOR fez cair sobre ele a iniquidade de todos nós. Ele foi oprimido e humilhado, mas não abriu a boca. Como cordeiro foi levado ao matadouro e, como ovelha muda diante dos seus tosquiadores, ele não abriu a boca. Pela opressão e pelo juízo, ele foi levado, e de sua linhagem, quem se preocupou com ela? Porque ele foi cortado da terra dos viventes; foi ferido por causa da transgressão do meu povo. Designaram-lhe a sepultura com os ímpios, mas com o rico esteve na sua morte, embora não tivesse feito injustiça, e nenhum engano fosse encontrado em sua boca. Todavia, ao SENHOR agradou esmagá-lo, fazendo-o sofrer. Quando ele der a sua alma como oferta pelo pecado, verá a sua posteridade e prolongará os seus dias; e a vontade do SENHOR prosperará nas suas mãos. Ele verá o fruto do trabalho de sua alma e ficará satisfeito. O meu Servo, o Justo, com o seu conhecimento justificará a muitos, porque as iniquidades deles levará sobre si. Por isso, eu lhe darei a sua parte com os grandes, e com os poderosos ele repartirá o despojo, pois derramou a sua alma na morte e foi contado com os transgressores. Contudo, levou sobre si o pecado de muitos e pelos transgressores intercedeu.", "ntlh": "O povo diz: “Quem poderia crer naquilo que acabamos de ouvir? Quem diria que o SENHOR estava agindo? Pois o SENHOR quis que o seu servo aparecesse como uma plantinha que brota e vai crescendo em terra seca. Ele não era bonito nem simpático, nem tinha nenhuma beleza que chamasse a nossa atenção ou que nos agradasse. Ele foi rejeitado e desprezado por todos; ele suportou dores e sofrimentos sem fim. Era como alguém que não queremos ver; nós nem mesmo olhávamos para ele e o desprezávamos. “No entanto, era o nosso sofrimento que ele estava carregando, era a nossa dor que ele estava suportando. E nós pensávamos que era por causa das suas próprias culpas que Deus o estava castigando, que Deus o estava maltratando e ferindo. Porém ele estava sofrendo por causa dos nossos pecados, estava sendo castigado por causa das nossas maldades. Nós somos curados pelo castigo que ele sofreu, somos sarados pelos ferimentos que ele recebeu. Todos nós éramos como ovelhas que se haviam perdido; cada um de nós seguia o seu próprio caminho. Mas o SENHOR castigou o seu servo; fez com que ele sofresse o castigo que nós merecíamos. “Ele foi maltratado, mas aguentou tudo humildemente e não disse uma só palavra. Ficou calado como um cordeiro que vai ser morto, como uma ovelha quando cortam a sua lã. Foi preso, condenado e levado para ser morto, e ninguém se importou com o que ia acontecer com ele. Ele foi expulso do mundo dos vivos, foi morto por causa dos pecados do nosso povo. Foi sepultado ao lado de criminosos, foi enterrado com os ricos, embora nunca tivesse cometido crime nenhum, nem tivesse dito uma só mentira.” O SENHOR Deus diz: “Eu quis maltratá-lo, quis fazê-lo sofrer. Ele ofereceu a sua vida como sacrifício para tirar pecados e por isso terá uma vida longa e verá os seus descendentes. Ele fará com que o meu plano dê certo. Depois de tanto sofrimento, ele será feliz; por causa da sua dedicação, ele ficará completamente satisfeito. O meu servo não tem pecado, mas ele sofrerá o castigo que muitos merecem, e assim os pecados deles serão perdoados. Por isso, eu lhe darei um lugar de honra; ele receberá a sua recompensa junto com os grandes e os poderosos. Pois ele deu a sua própria vida e foi tratado como se fosse um criminoso. Ele levou a culpa dos pecados de muitos e orou pedindo que eles fossem perdoados.”", "nvi": "Quem creu em nossa mensagem? E a quem foi revelado o braço do SENHOR? Ele cresceu diante dele como um broto tenro e como uma raiz saída de uma terra seca. Ele não tinha qualquer beleza ou majestade que nos atraísse, nada havia em sua aparência para que o desejássemos. Foi desprezado e rejeitado pelos homens, um homem de dores e experimentado no sofrimento. Como alguém de quem os homens escondem o rosto, foi desprezado, e nós não o tínhamos em estima. Certamente ele tomou sobre si as nossas enfermidades e sobre si levou as nossas doenças; contudo nós o consideramos castigado por Deus, por Deus atingido e afligido. Mas ele foi traspassado por causa das nossas transgressões, foi esmagado por causa de nossas iniquidades; o castigo que nos trouxe paz estava sobre ele, e pelas suas feridas fomos curados. Todos nós, como ovelhas, nos desviamos, cada um de nós se voltou para o seu próprio caminho; e o SENHOR fez cair sobre ele a iniquidade de todos nós. Ele foi oprimido e afligido; e, contudo, não abriu a sua boca; como um cordeiro, foi levado para o matadouro; e, como uma ovelha que diante de seus tosquiadores fica calada, ele não abriu a sua boca. Com julgamento opressivo ele foi levado. E quem pode falar dos seus descendentes? Pois ele foi eliminado da terra dos viventes; por causa da transgressão do meu povo ele foi golpeado. Foi-lhe dado um túmulo com os ímpios e com os ricos em sua morte, embora não tivesse cometido nenhuma violência nem houvesse nenhuma mentira em sua boca. Contudo, foi da vontade do SENHOR esmagá-lo e fazê-lo sofrer, e, embora o SENHOR tenha feito da vida dele uma oferta pela culpa, ele verá sua prole e prolongará seus dias, e a vontade do SENHOR prosperará em sua mão. Depois do sofrimento de sua alma, ele verá a luz e ficará satisfeito; pelo seu conhecimento meu servo justo justificará a muitos e levará a iniquidade deles. Por isso eu lhe darei uma porção entre os grandes , e ele dividirá os despojos com os fortes , porquanto ele derramou sua vida até a morte e foi contado entre os transgressores. Pois ele levou o pecado de muitos e pelos transgressores intercedeu.", "acf": "QUEM deu crédito à nossa pregação? E a quem se manifestou o braço do SENHOR? Porque foi subindo como renovo perante ele, e como raiz de uma terra seca; não tinha beleza nem formosura e, olhando nós para ele, não havia boa aparência nele, para que o desejássemos. Era desprezado, e o mais rejeitado entre os homens, homem de dores, e experimentado nos trabalhos; e, como um de quem os homens escondiam o rosto, era desprezado, e não fizemos dele caso algum. Verdadeiramente ele tomou sobre si as nossas enfermidades, e as nossas dores levou sobre si; e nós o reputávamos por aflito, ferido de Deus, e oprimido. Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados. Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu caminho; mas o SENHOR fez cair sobre ele a iniqüidade de nós todos. Ele foi oprimido e afligido, mas não abriu a sua boca; como um cordeiro foi levado ao matadouro, e como a ovelha muda perante os seus tosquiadores, assim ele não abriu a sua boca. Da opressão e do juízo foi tirado; e quem contará o tempo da sua vida? Porquanto foi cortado da terra dos viventes; pela transgressão do meu povo ele foi atingido. E puseram a sua sepultura com os ímpios, e com o rico na sua morte; ainda que nunca cometeu injustiça, nem houve engano na sua boca. Todavia, ao SENHOR agradou moê-lo, fazendo-o enfermar; quando a sua alma se puser por expiação do pecado, verá a sua posteridade, prolongará os seus dias; e o bom prazer do SENHOR prosperará na sua mão. Ele verá o fruto do trabalho da sua alma, e ficará satisfeito; com o seu conhecimento o meu servo, o justo, justificará a muitos; porque as iniqüidades deles levará sobre si. Por isso lhe darei a parte de muitos, e com os poderosos repartirá ele o despojo; porquanto derramou a sua alma na morte, e foi contado com os transgressores; mas ele levou sobre si o pecado de muitos, e intercedeu pelos transgressores."}}, {"ref": "Dn 2:46-48", "versoes": {"naa": "Então o rei Nabucodonosor se inclinou e se prostrou com rosto em terra diante de Daniel. Ordenou que oferecessem a Daniel uma oferta de cereais e incenso. O rei disse a Daniel: — Certamente o Deus que vocês adoram é o Deus dos deuses e o Senhor dos reis. Ele é quem revela os mistérios, pois você foi capaz de revelar este mistério. Então o rei engrandeceu Daniel e lhe deu muitos e grandes presentes. Ele o pôs como governador de toda a província da Babilônia. Também o fez chefe supremo de todos os sábios da Babilônia.", "ntlh": "Então o rei Nabucodonosor se ajoelhou diante de Daniel, e encostou o rosto no chão, e depois ordenou que fossem apresentados a Daniel sacrifícios e incenso. E ele disse a Daniel: — O Deus que vocês adoram é, de fato, o mais poderoso de todos os deuses e é o Senhor de todos os reis. Eu sei que é ele quem explica mistérios, pois você me explicou este sonho misterioso. Em seguida, o rei colocou Daniel como alta autoridade do reino e lhe deu também muitos presentes de valor. Ele pôs Daniel como governador da província da Babilônia e o fez chefe de todos os sábios do país.", "nvi": "Então o rei Nabucodonosor caiu prostrado diante de Daniel, prestou-lhe honra e ordenou que lhe fosse apresentada uma oferta de cereal e incenso. O rei disse a Daniel: “Não há dúvida de que o seu Deus é o Deus dos deuses, o Senhor dos reis e aquele que revela os mistérios, pois você conseguiu revelar esse mistério”. Assim o rei pôs Daniel num alto cargo e o cobriu de presentes. Ele o designou governante de toda a província da Babilônia e o encarregou de todos os sábios da província.", "acf": "Então o rei Nabucodonosor caiu sobre a sua face, e adorou a Daniel, e ordenou que lhe oferecessem uma oblação e perfumes suaves. Respondeu o rei a Daniel, e disse: Certamente o vosso Deus é Deus dos deuses, e o Senhor dos reis e revelador de mistérios, pois pudeste revelar este mistério. Então o rei engrandeceu a Daniel, e lhe deu muitas e grandes dádivas, e o pôs por governador de toda a província de Babilônia, como também o fez chefe dos governadores sobre todos os sábios de Babilônia."}}, {"ref": "Mc 1:2-5", "versoes": {"naa": "Como está escrito na profecia de Isaías: “Eis que envio o meu mensageiro adiante de você, o qual preparará o seu caminho. Voz do que clama no deserto: Preparem o caminho do Senhor, endireitem as suas veredas.” E foi assim que João Batista apareceu no deserto, pregando batismo de arrependimento para remissão de pecados. E toda a região da Judeia e todos os moradores de Jerusalém iam até ele. E, confessando os seus pecados, eram batizados por ele no rio Jordão.", "ntlh": "como o profeta Isaías tinha escrito. Ele escreveu o seguinte: “Deus disse: Eu enviarei o meu mensageiro adiante de você para preparar o seu caminho.” E o profeta escreveu também: “Alguém está gritando no deserto: Preparem o caminho para o Senhor passar! Abram estradas retas para ele!” E foi assim que João Batista apareceu no deserto, batizando o povo e anunciando esta mensagem: — Arrependam-se dos seus pecados e sejam batizados, que Deus perdoará vocês. Muitos moradores da região da Judeia e da cidade de Jerusalém iam ouvir João. Eles confessavam os seus pecados, e João os batizava no rio Jordão.", "nvi": "Conforme está escrito no profeta Isaías: “Enviarei à tua frente o meu mensageiro; ele preparará o teu caminho” “voz do que clama no deserto: ‘Preparem o caminho para o Senhor, façam veredas retas para ele’ ”. Assim surgiu João, batizando no deserto e pregando um batismo de arrependimento para o perdão dos pecados. A ele vinha toda a região da Judeia e todo o povo de Jerusalém. Confessando os seus pecados, eram batizados por ele no rio Jordão.", "acf": "Como está escrito nos profetas: Eis que eu envio o meu anjo ante a tua face, o qual preparará o teu caminho diante de ti. Voz do que clama no deserto: Preparai o caminho do Senhor, Endireitai as suas veredas. Apareceu João batizando no deserto, e pregando o batismo de arrependimento, para remissão dos pecados. E toda a província da Judéia e os de Jerusalém iam ter com ele; e todos eram batizados por ele no rio Jordão, confessando os seus pecados."}}, {"ref": "Mt 11:1-6", "versoes": {"naa": "Quando Jesus acabou de dar estas instruções a seus doze discípulos, saiu dali para ir ensinar e pregar nas cidades deles. Quando João, no cárcere, ouviu falar das obras de Cristo, mandou que seus discípulos fossem perguntar: — Você é aquele que estava para vir ou devemos esperar outro? Então Jesus lhes respondeu: — Voltem e anunciem a João o que estão ouvindo e vendo: os cegos veem, os coxos andam, os leprosos são purificados, os surdos ouvem, os mortos são ressuscitados e aos pobres está sendo pregado o evangelho. E bem-aventurado é aquele que não achar em mim motivo de tropeço.", "ntlh": "Quando acabou de dar essas ordens aos seus doze discípulos, Jesus saiu daquele lugar e foi ensinar e anunciar a sua mensagem nas cidades que ficavam perto dali. João Batista estava na cadeia e, quando ouviu falar do que Cristo fazia, mandou que alguns dos seus discípulos fossem perguntar a ele: — O senhor é aquele que ia chegar ou devemos esperar outro? Jesus respondeu: — Voltem e contem a João o que vocês estão ouvindo e vendo. Digam a ele que os cegos veem, os coxos andam, os leprosos são curados, os surdos ouvem, os mortos são ressuscitados, e os pobres recebem o evangelho. E felizes são aqueles que não abandonam a sua fé em mim!", "nvi": "Quando acabou de instruir seus doze discípulos, Jesus saiu para ensinar e pregar nas cidades da Galileia. João, ao ouvir na prisão o que Cristo estava fazendo, enviou seus discípulos para lhe perguntarem: “És tu aquele que haveria de vir ou devemos esperar algum outro?” Jesus respondeu: “Voltem e anunciem a João o que vocês estão ouvindo e vendo: os cegos veem, os aleijados andam, os leprosos são purificados, os surdos ouvem, os mortos são ressuscitados, e as boas-novas são pregadas aos pobres; e feliz é aquele que não se escandaliza por minha causa”.", "acf": "E ACONTECEU que, acabando Jesus de dar instruções aos seus doze discípulos, partiu dali a ensinar e a pregar nas cidades deles. E João, ouvindo no cárcere falar dos feitos de Cristo, enviou dois dos seus discípulos, A dizer-lhe: És tu aquele que havia de vir, ou esperamos outro? E Jesus, respondendo, disse-lhes: Ide, e anunciai a João as coisas que ouvis e vedes: Os cegos vêem, e os coxos andam; os leprosos são limpos, e os surdos ouvem; os mortos são ressuscitados, e aos pobres é anunciado o evangelho. E bem-aventurado é aquele que não se escandalizar em mim."}}],
    abertura: {
      versiculo: "Depois disto, ouvi a voz do Senhor, que dizia: ‘A quem enviarei, e quem há de ir por Nós?’ Eu respondi: ‘Eis-me aqui, envia-me a mim’",
      periodo: "3 de outubro a 9 de outubro de 2026",
      resumo: "Verso para memorizar:\n\n“Depois disto, ouvi a voz do Senhor, que dizia: ‘A quem enviarei, e quem há de ir por Nós?’ Eu respondi: ‘Eis-me aqui, envia-me a mim’” (Is 6:8).\n\nLeituras da semana:\n\nGn 15:6; Gl 3:6-9; 1Rs 18:19-39; Is 53:1-12; Dn 2:46-48; Mc 1:2-5; Mt 11:1-6\n\nNos tempos bíblicos, os profetas muitas vezes desempenhavam papéis decisivos na história do povo de Deus. Em alguns momentos, eles estiveram em destaque, ocupando posições influentes na vida da comunidade. No entanto, ser profeta era um chamado difícil. Sua vida, em geral, não era fácil, mas marcada por tristeza, rejeição, incompreensão e frustração. Com frequência, os profetas de Deus não aceitavam de imediato o chamado para o ministério profético – e não é difícil entender o motivo. Muitos foram duramente combatidos justamente por aqueles que deveriam acolher sua mensagem. Os profetas de Deus foram ignorados, ridicularizados, maltratados, presos, apedrejados, perseguidos e até martirizados.\n\nHoje, em meio à violência, ganância, imoralidade, exploração e a todo tipo de influência satânica, a voz profética é frequentemente rejeitada ou ignorada. Somos chamados a ouvir a voz dos profetas de Deus e a ser mensageiros da esperança que nos foi confiada por meio deles.\n\nNesta semana, examinaremos alguns momentos decisivos da história em que o Senhor chamou profetas para realinhar Seu povo com Suas mensagens para um mundo decaído.",
      reflexao: "Que Deus nos fale por meio desta lição."
    },
    perguntas: [
      {
        pergunta: "Que aspectos da vida e do caráter de Abraão o qualificaram para o serviço de Deus, embora, naturalmente, ele tivesse falhas?",
        resposta: "Abraão foi qualificado por sua fé genuína e sua obediência pronta ao chamado de Deus, crendo nas promessas divinas mesmo diante de circunstâncias humanas adversas.",
        versoes: {}
      },
      {
        pergunta: "Como esse texto revela a promessa do evangelho? Que esperança você encontra nessa declaração?",
        resposta: "O texto revela o evangelho ao demonstrar que a justificação é alcançada pela fé na graça e nas promessas divinas, trazendo a esperança de que somos aceitos pela justiça imputada de Cristo, e não por méritos próprios.",
        versoes: {}
      },
      {
        pergunta: "O que essa história revela sobre a atuação dos profetas?",
        resposta: "Revela que os profetas atuam como instrumentos corajosos de Deus para confrontar o pecado e a apostasia, apelando pelo arrependimento e pela restauração da adoração exclusiva ao Senhor.",
        versoes: {}
      },
      {
        pergunta: "Como a mensagem de Elias impacta os lares dos servos de Deus?",
        resposta: "A mensagem de Elias promove restauração e reconciliação nos relacionamentos familiares, estabelecendo a base sólida para um reavivamento espiritual que transborda para toda a comunidade.",
        versoes: {}
      },
      {
        pergunta: "Que tipos de ídolos podem estar presentes hoje nos lares, nas igrejas e em nosso coração?",
        resposta: "Ídolos modernos incluem o materialismo, o entretenimento secular excessivo, o orgulho próprio e ideologias mundanas que competem pela supremacia de Deus em nossas afeições e decisões.",
        versoes: {}
      },
      {
        pergunta: "Como essa impressionante profecia revela de modo tão poderoso a morte de Cristo em nosso favor? O que essa profecia nos ensina sobre o dom profético?",
        resposta: "Ela descreve vividamente o sacrifício substitutivo de Jesus levando sobre Si as nossas transgressões, demonstrando que o dom profético é uma ferramenta inspirada para descortinar o plano da salvação centrado em Cristo.",
        versoes: {}
      },
      {
        pergunta: "Que esperança você encontra no que o profeta Isaías revelou sobre a morte de Cristo?",
        resposta: "A esperança consoladora de que nossas culpas e dores foram plenamente expiadas por Jesus na cruz, assegurando redenção e paz a todo aquele que crê.",
        versoes: {}
      },
      {
        pergunta: "Que testemunho Daniel deu aos pagãos?",
        resposta: "Daniel testemunhou que o Deus do Céu é o soberano 'Senhor dos reis' e revelador de mistérios, levando governantes pagãos a reconhecerem Seu poder supremo por meio da fidelidade do profeta.",
        versoes: {}
      },
      {
        pergunta: "Como a precisão das profecias de Daniel nos leva a confiar na vinda do reino eterno de Deus?",
        resposta: "O cumprimento milimétrico das etapas históricas preditas na estátua assegura que a promessa final do reino eterno de Deus também se cumprirá com absoluta certeza.",
        versoes: {}
      },
      {
        pergunta: "Qual era o propósito do ministério de João Batista?",
        resposta: "O propósito de seu ministério era preparar o caminho para o Messias, chamando o povo ao arrependimento sincero e ao batismo para a remissão de pecados.",
        versoes: {}
      },
      {
        pergunta: "Como Jesus fortaleceu a fé de João enquanto o pregador estava na prisão?",
        resposta: "Jesus fortaleceu a fé de João ao destacar Seus milagres messiânicos e a pregação das boas-novas aos pobres, confirmando que Ele era verdadeiramente o Prometido.",
        versoes: {}
      },
      {
        pergunta: "Assim como João, você já ficou sem entender por que coisas tão ruins estavam acontecendo com você? Como, mesmo assim, você manteve sua fé e confiança em Deus?",
        resposta: "A fé é mantida ao recordarmos como Deus já nos guiou no passado e ao confiarmos que Seus propósitos eternos transcendem nossas aflições temporais.",
        versoes: {}
      },
    ],
    dias: [
      {
        dia: "Sábado",
        titulo: "Introdução: O chamado de um profeta",
        resumo: "Nos tempos bíblicos, os profetas exerceram papéis cruciais ao transmitir as mensagens divinas em momentos decisivos da história do povo de Deus. Contudo, o ministério profético raramente foi um caminho fácil; com frequência, foi marcado por incompreensão, perseguição, aprisionamento e até martírio por parte daqueles que deveriam acolher a mensagem.\n\nApesar dos desafios, a voz profética sempre teve como objetivo alinhar o povo com os propósitos celestiais diante da decadência moral e espiritual. No tempo presente, a igreja é convocada a dar ouvidos às advertências proféticas e a atuar como portadora da esperança eterna para um mundo em ruínas.",
        perguntas: [
        ]
      },
      {
        dia: "Domingo",
        titulo: "Abraão, guardião da aliança",
        resumo: "Diante da apostasia generalizada após a dispersão de Babel, o Senhor escolheu Abraão para ser um modelo de fé e o guardião da aliança divina. Abraão atendeu com obediência ao chamado do Senhor, compreendendo os termos da graça e vislumbrando o futuro plano de redenção por meio do sacrifício de Cristo ilustrado no episódio do monte Moriá.\n\nAssim como os profetas posteriores, Abraão foi chamado para viver em fidelidade em meio a uma sociedade moralmente degradada. Seu exemplo nos inspira hoje a anunciar o evangelho eterno e a advertir o mundo a respeito da crise final, mantendo um relacionamento genuíno de aliança com Deus.",
        perguntas: [
          {
            pergunta: "Que aspectos da vida e do caráter de Abraão o qualificaram para o serviço de Deus, embora, naturalmente, ele tivesse falhas?",
            resposta: "Abraão foi qualificado por sua fé genuína e sua obediência pronta ao chamado de Deus, crendo nas promessas divinas mesmo diante de circunstâncias humanas adversas.",
            versoes: {"naa": "Abrão creu no SENHOR, e isso lhe foi atribuído para justiça. É o caso de Abraão, que “creu em Deus, e isso lhe foi atribuído para justiça”. Saibam, portanto, que os que têm fé é que são filhos de Abraão. Ora, tendo a Escritura previsto que Deus justificaria os gentios pela fé, preanunciou o evangelho a Abraão, dizendo: “Em você serão abençoados todos os povos.” De modo que os que têm fé são abençoados com o crente Abraão. Pela fé, Abraão, quando chamado, obedeceu, a fim de ir para um lugar que devia receber como herança; e partiu sem saber para onde ia.", "ntlh": "Abrão creu em Deus, o SENHOR, e por isso o SENHOR o aceitou. Lembrem do que as Escrituras Sagradas dizem a respeito de Abraão: “Ele creu em Deus, e por isso Deus o aceitou.” Portanto, vocês devem saber que os verdadeiros descendentes de Abraão são os que têm fé. Antes que isso acontecesse, as Escrituras viram que Deus ia aceitar os não judeus por meio da fé. Por isso, antes de chegar o tempo, elas anunciaram a boa notícia a Abraão, dizendo: “Por meio de você, Deus abençoará todos os povos.” Abraão creu e foi abençoado; portanto, todos os que creem são abençoados como ele foi. Foi pela fé que Abraão, ao ser chamado por Deus, obedeceu e saiu para uma terra que Deus lhe prometeu dar. Ele deixou o seu próprio país, sem saber para onde ia.", "nvi": "Abrão creu no SENHOR, e isso lhe foi creditado como justiça. Considerem o exemplo de Abraão: “Ele creu em Deus, e isso lhe foi creditado como justiça”. Estejam certos, portanto, de que os que são da fé é que são filhos de Abraão. Prevendo a Escritura que Deus justificaria os gentios pela fé, anunciou primeiro as boas-novas a Abraão: “Por meio de você todas as nações serão abençoadas”. Assim, os que são da fé são abençoados com Abraão, homem de fé. Pela fé Abraão, quando chamado, obedeceu e dirigiu-se a um lugar que mais tarde receberia como herança, embora não soubesse para onde estava indo.", "acf": "E creu ele no SENHOR, e imputou-lhe isto por justiça. Assim como Abraão creu em Deus, e isso lhe foi imputado como justiça. Sabei, pois, que os que são da fé são filhos de Abraão. Ora, tendo a Escritura previsto que Deus havia de justificar pela fé os gentios, anunciou primeiro o evangelho a Abraão, dizendo: Todas as nações serão benditas em ti. De sorte que os que são da fé são benditos com o crente Abraão. Pela fé Abraão, sendo chamado, obedeceu, indo para um lugar que havia de receber por herança; e saiu, sem saber para onde ia."}
          },
          {
            pergunta: "Como esse texto revela a promessa do evangelho? Que esperança você encontra nessa declaração?",
            resposta: "O texto revela o evangelho ao demonstrar que a justificação é alcançada pela fé na graça e nas promessas divinas, trazendo a esperança de que somos aceitos pela justiça imputada de Cristo, e não por méritos próprios.",
            versoes: {"naa": "Abrão creu no SENHOR, e isso lhe foi atribuído para justiça.", "ntlh": "Abrão creu em Deus, o SENHOR, e por isso o SENHOR o aceitou.", "nvi": "Abrão creu no SENHOR, e isso lhe foi creditado como justiça.", "acf": "E creu ele no SENHOR, e imputou-lhe isto por justiça."}
          },
        ]
      },
      {
        dia: "Segunda-feira",
        titulo: "A mensagem de Elias",
        resumo: "Elias foi enviado em um momento de grave apostasia nacional para confrontar a idolatria em Israel e conclamar o povo de volta à adoração ao único Deus verdadeiro. O confronto marcante no monte Carmelo expôs a nulidade dos deuses pagãos e levou a nação a reconhecer a supremacia do Senhor.\n\nNas vésperas do retorno de Jesus, a igreja é chamada a proclamar uma mensagem semelhante à de Elias, convocando as pessoas a abandonarem os ídolos modernos. Esse despertamento espiritual tem início no coração e no ambiente familiar, espalhando reavivamento para a igreja e para a sociedade.",
        perguntas: [
          {
            pergunta: "O que essa história revela sobre a atuação dos profetas?",
            resposta: "Revela que os profetas atuam como instrumentos corajosos de Deus para confrontar o pecado e a apostasia, apelando pelo arrependimento e pela restauração da adoração exclusiva ao Senhor.",
            versoes: {"naa": "Agora ordene que todo o Israel venha se encontrar comigo no monte Carmelo. Convoque também os quatrocentos e cinquenta profetas de Baal e os quatrocentos profetas da deusa Aserá que são sustentados por Jezabel. Então Acabe enviou mensageiros a todos os filhos de Israel e ajuntou os profetas no monte Carmelo. Depois, Elias se aproximou de todo o povo e disse: — Até quando vocês ficarão pulando de um lado para outro? Se o SENHOR é Deus, sigam-no; se é Baal, sigam-no. Porém o povo não disse uma só palavra. Então Elias disse ao povo: — Eu sou o único que restou dos profetas do SENHOR, e os profetas de Baal são quatrocentos e cinquenta homens. Tragam, agora, dois novilhos. Eles que escolham para si um dos novilhos e, cortando-o em pedaços, o ponham sobre a lenha, porém não ponham fogo. Eu prepararei o outro novilho e o porei sobre a lenha, mas não porei fogo. Então eles invocarão o nome de seu deus, e eu invocarei o nome do SENHOR. E há de ser que o deus que responder com fogo esse é que é Deus. E todo o povo respondeu: — É uma boa proposta! Elias disse aos profetas de Baal: — Escolham um dos novilhos e preparem-no primeiro, porque vocês são muitos. Depois, invoquem o nome do deus de vocês, mas não ponham fogo na lenha. Pegaram o novilho que lhes foi trazido, prepararam-no e invocaram o nome de Baal, desde a manhã até o meio-dia, dizendo: — Ó Baal, responde-nos! Porém não se ouviu nenhuma voz e não houve quem respondesse. E ficaram pulando ao redor do altar que tinham feito. Ao meio-dia, Elias começou a zombar deles, dizendo: — Gritem mais alto, porque ele é deus! Pode ser que esteja meditando, atendendo a necessidades ou viajando. Talvez esteja dormindo e necessite que o acordem. E eles clamavam em altas vozes e se cortavam com facas e com lanças, segundo o seu costume, até ficarem cobertos de sangue. Passado o meio-dia, eles profetizaram, até a hora do sacrifício da tarde; porém não houve voz, nem resposta, nem atenção alguma. Então Elias disse a todo o povo: — Aproximem-se de mim. E todo o povo se aproximou dele. Elias restaurou o altar do SENHOR, que estava em ruínas. Pegou doze pedras, segundo o número das tribos dos filhos de Jacó, a quem tinha vindo a palavra do SENHOR, dizendo: “O seu nome será Israel.” Com aquelas pedras edificou o altar em nome do SENHOR. Ao redor dele fez uma vala capaz de conter duas medidas de sementes e então armou a lenha, cortou o novilho em pedaços e os pôs sobre a lenha. Então disse: — Encham quatro cântaros com água e derramem sobre o holocausto e sobre a lenha. Disse ainda: — Façam isso outra vez. E eles o fizeram. Disse mais: — Façam isso pela terceira vez. E eles o fizeram pela terceira vez. A água escorria do altar e enchia também a vala aberta. Quando chegou a hora do sacrifício da tarde, o profeta Elias se aproximou do altar e disse: — Ó SENHOR, Deus de Abraão, de Isaque e de Israel, que hoje se fique sabendo que tu és Deus em Israel, e que eu sou o teu servo e que, segundo a tua palavra, fiz todas estas coisas. Responde-me, SENHOR, responde-me, para que este povo saiba que tu, SENHOR, és Deus e que fizeste o coração deles voltar para ti. Então caiu fogo do SENHOR e consumiu o holocausto, a lenha, as pedras e a terra, e ainda lambeu a água que estava na vala. Quando o povo viu isso, todos se prostraram com o rosto em terra e disseram: — O SENHOR é Deus! Só o SENHOR é Deus!", "ntlh": "Portanto, ordene agora a todo o povo de Israel que vá encontrar-se comigo no monte Carmelo. Mande também os quatrocentos e cinquenta profetas do deus Baal e os quatrocentos profetas da deusa Aserá que são sustentados pela rainha Jezabel. Então Acabe chamou todos os israelitas e os profetas de Baal para se reunirem no monte Carmelo. Elias chegou perto do povo e disse: — Até quando vocês vão ficar em dúvida sobre o que vão fazer? Se o SENHOR é Deus, adorem o SENHOR; mas, se Baal é Deus, adorem Baal! Porém o povo não respondeu nada. Então Elias disse: — De todos os profetas de Deus, o SENHOR, eu fui o único que sobrou, mas os profetas de Baal são quatrocentos e cinquenta. Agora tragam dois touros. Que os profetas de Baal matem um deles, cortem em pedaços e ponham em cima da lenha, mas não ponham fogo! Eu farei a mesma coisa com o outro touro. E aí os profetas de Baal vão orar ao seu deus, e eu orarei ao SENHOR. O deus que responder mandando fogo, este é que é Deus. E todo o povo respondeu: — Está bem assim! Então Elias disse aos profetas de Baal: — Já que vocês são tantos, peguem o touro e o preparem primeiro. Orem ao seu deus, porém não ponham fogo na lenha. Os profetas de Baal pegaram o touro que havia sido trazido para eles, e o prepararam, e oraram a Baal desde a manhã até o meio-dia. Eles gritavam assim: — Ó Baal, responde às nossas orações! E ficaram dançando em volta do altar que haviam feito, porém não houve resposta. Ao meio-dia, Elias começou a caçoar deles. Ele dizia: — Orem mais alto, pois ele é deus! Pode ser que esteja meditando ou que tenha ido ao banheiro. Talvez ele tenha viajado ou talvez esteja dormindo, e vocês terão de acordá-lo! Aí os profetas oraram mais alto e começaram a se cortar com facas e punhais, conforme o costume deles, até que o sangue começou a correr. Passou o meio-dia, e eles continuaram a orar e a gritar até a hora do sacrifício da tarde; porém não se ouviu nenhum som. Então Elias disse ao povo: — Cheguem para mais perto de mim. Todos chegaram mais perto de Elias, e ele começou a consertar o altar do SENHOR Deus, que estava derrubado. Ele pegou doze pedras, uma para cada uma das doze tribos que tinham os nomes dos filhos de Jacó, o homem a quem o SENHOR tinha dado o nome de Israel. Com essas pedras Elias reconstruiu o altar para a adoração do SENHOR. Depois cavou em volta uma valeta em que cabiam mais ou menos doze litros de água. Em seguida colocou lenha no altar, cortou o touro em pedaços e os pôs em cima da lenha. Então disse: — Encham quatro jarras com água e derramem sobre o animal sacrificado e sobre a lenha. Eles fizeram o que Elias estava mandando, e ele disse: — Façam de novo. E eles fizeram. — Façam pela terceira vez! — disse Elias. E eles fizeram. A água correu em volta do altar e encheu a valeta. Quando chegou a hora do sacrifício da tarde, o profeta Elias chegou perto do altar e orou assim: — Ó SENHOR, Deus de Abraão, de Isaque e de Jacó! Prova agora que és o Deus de Israel, e que eu sou teu servo, e que fiz tudo isto de acordo com a tua ordem. Responde-me, ó SENHOR, responde-me, para que este povo saiba que tu, o SENHOR, és Deus e estás trazendo este povo de volta para ti! Então o SENHOR mandou fogo. E o fogo queimou o sacrifício, a lenha, as pedras, a terra e ainda secou a água que estava na valeta. Quando viram isso, os israelitas se ajoelharam, encostaram o rosto no chão e gritaram: — O SENHOR é Deus! Só o SENHOR é Deus!", "nvi": "Agora convoque todo o povo de Israel para encontrar-se comigo no monte Carmelo. E traga os quatrocentos e cinquenta profetas de Baal e os quatrocentos profetas de Aserá, que comem à mesa de Jezabel.” Acabe convocou então todo o Israel e reuniu os profetas no monte Carmelo. Elias dirigiu-se ao povo e disse: “Até quando vocês vão oscilar para um lado e para o outro? Se o SENHOR é Deus, sigam-no; mas, se Baal é Deus, sigam-no”. O povo, porém, nada respondeu. Disse então Elias: “Eu sou o único que restou dos profetas do SENHOR, mas Baal tem quatrocentos e cinquenta profetas. Tragam dois novilhos. Escolham eles um, cortem-no em pedaços e o ponham sobre a lenha, mas não acendam fogo. Eu prepararei o outro novilho e o colocarei sobre a lenha, e também não acenderei fogo nela. Então vocês invocarão o nome do seu deus, e eu invocarei o nome do SENHOR. O deus que responder por meio do fogo, esse é Deus”. Então todo o povo disse: “O que você disse é bom”. Elias disse aos profetas de Baal: “Escolham um dos novilhos e preparem-no primeiro, visto que vocês são tantos. Clamem pelo nome do seu deus, mas não acendam o fogo”. Então pegaram o novilho que lhes foi dado e o prepararam. E clamaram pelo nome de Baal desde a manhã até o meio-dia. “Ó Baal, responde-nos!”, gritavam. E dançavam em volta do altar que haviam feito. Mas não houve nenhuma resposta; ninguém respondeu. Ao meio-dia Elias começou a zombar deles. “Gritem mais alto!”, dizia, “já que ele é um deus. Quem sabe está meditando, ou ocupado, ou viajando. Talvez esteja dormindo e precise ser despertado.” Então passaram a gritar ainda mais alto e a ferir-se com espadas e lanças, de acordo com o costume deles, até sangrarem. Passou o meio-dia, e eles continuaram profetizando em transe até a hora do sacrifício da tarde. Mas não houve resposta alguma; ninguém respondeu, ninguém deu atenção. Então Elias disse a todo o povo: “Aproximem-se de mim”. O povo aproximou-se, e Elias reparou o altar do SENHOR, que estava em ruínas. Depois apanhou doze pedras, uma para cada tribo dos descendentes de Jacó, a quem a palavra do SENHOR tinha sido dirigida, dizendo-lhe: “Seu nome será Israel”. Com as pedras construiu um altar em honra ao nome do SENHOR e cavou ao redor do altar uma valeta na qual poderiam ser semeadas duas medidas de sementes. Depois arrumou a lenha, cortou o novilho em pedaços e o pôs sobre a lenha. Então lhes disse: “Encham de água quatro jarras grandes e derramem-na sobre o holocausto e sobre a lenha”. “Façam-no novamente”, disse, e eles o fizeram de novo. “Façam-no pela terceira vez”, ordenou, e eles o fizeram pela terceira vez. A água escorria do altar, chegando a encher a valeta. À hora do sacrifício, o profeta Elias colocou-se à frente do altar e orou: “Ó SENHOR, Deus de Abraão, de Isaque e de Israel, que hoje fique conhecido que tu és Deus em Israel e que sou o teu servo e que fiz todas estas coisas por ordem tua. Responde-me, ó SENHOR, responde-me, para que este povo saiba que tu, ó SENHOR, és Deus e que fazes o coração deles voltar para ti”. Então o fogo do SENHOR caiu e queimou completamente o holocausto, a lenha, as pedras e o chão, e também secou totalmente a água na valeta. Quando o povo viu isso, todos caíram prostrados e gritaram: “O SENHOR é Deus! O SENHOR é Deus!”", "acf": "Agora, pois, manda reunir-se a mim todo o Israel no monte Carmelo; como também os quatrocentos e cinqüenta profetas de Baal, e os quatrocentos profetas de Asera, que comem da mesa de Jezabel. Então Acabe convocou todos os filhos de Israel; e reuniu os profetas no monte Carmelo. Então Elias se chegou a todo o povo, e disse: Até quando coxeareis entre dois pensamentos? Se o SENHOR é Deus, segui-o, e se Baal, segui-o. Porém o povo nada lhe respondeu. Então disse Elias ao povo: Só eu fiquei por profeta do SENHOR, e os profetas de Baal são quatrocentos e cinqüenta homens. Dêem-se-nos, pois, dois bezerros, e eles escolham para si um dos bezerros, e o dividam em pedaços, e o ponham sobre a lenha, porém não lhe coloquem fogo, e eu prepararei o outro bezerro, e o porei sobre a lenha, e não lhe colocarei fogo. Então invocai o nome do vosso deus, e eu invocarei o nome do SENHOR; e há de ser que o deus que responder por meio de fogo esse será Deus. E todo o povo respondeu, dizendo: É boa esta palavra. E disse Elias aos profetas de Baal: Escolhei para vós um dos bezerros, e preparai-o primeiro, porque sois muitos, e invocai o nome do vosso deus, e não lhe ponhais fogo. E tomaram o bezerro que lhes dera, e o prepararam; e invocaram o nome de Baal, desde a manhã até ao meio dia, dizendo: Ah! Baal, responde-nos! Porém nem havia voz, nem quem respondesse; e saltavam sobre o altar que tinham feito. E sucedeu que ao meio dia Elias zombava deles e dizia: Clamai em altas vozes, porque ele é um deus; pode ser que esteja falando, ou que tenha alguma coisa que fazer, ou que intente alguma viagem; talvez esteja dormindo, e despertará. E eles clamavam em altas vozes, e se retalhavam com facas e com lancetas, conforme ao seu costume, até derramarem sangue sobre si. E sucedeu que, passado o meio dia, profetizaram eles, até a hora de se oferecer o sacrifício da tarde; porém não houve voz, nem resposta, nem atenção alguma. Então Elias disse a todo o povo: Chegai-vos a mim. E todo o povo se chegou a ele; e restaurou o altar do SENHOR, que estava quebrado. E Elias tomou doze pedras, conforme ao número das tribos dos filhos de Jacó, ao qual veio a palavra do SENHOR, dizendo: Israel será o teu nome. E com aquelas pedras edificou o altar em nome do SENHOR; depois fez um rego em redor do altar, segundo a largura de duas medidas de semente. Então armou a lenha, e dividiu o bezerro em pedaços, e o pôs sobre a lenha. E disse: Enchei de água quatro cântaros, e derramai-a sobre o holocausto e sobre a lenha. E disse: Fazei-o segunda vez; e o fizeram segunda vez. Disse ainda: Fazei-o terceira vez; e o fizeram terceira vez; De maneira que a água corria ao redor do altar; e até o rego ele encheu de água. Sucedeu que, no momento de ser oferecido o sacrifício da tarde, o profeta Elias se aproximou, e disse: Ó SENHOR Deus de Abraão, de Isaque e de Israel, manifeste-se hoje que tu és Deus em Israel, e que eu sou teu servo, e que conforme à tua palavra fiz todas estas coisas. Responde-me, SENHOR, responde-me, para que este povo conheça que tu és o SENHOR Deus, e que tu fizeste voltar o seu coração. Então caiu fogo do SENHOR, e consumiu o holocausto, e a lenha, e as pedras, e o pó, e ainda lambeu a água que estava no rego. O que vendo todo o povo, caíram sobre os seus rostos, e disseram: Só o SENHOR é Deus! Só o SENHOR é Deus!"}
          },
          {
            pergunta: "Como a mensagem de Elias impacta os lares dos servos de Deus?",
            resposta: "A mensagem de Elias promove restauração e reconciliação nos relacionamentos familiares, estabelecendo a base sólida para um reavivamento espiritual que transborda para toda a comunidade.",
            versoes: {"naa": "— Eis que eu lhes enviarei o profeta Elias, antes que venha o grande e terrível Dia do SENHOR. Ele converterá o coração dos pais aos seus filhos e o coração dos filhos aos seus pais, para que eu não venha e castigue a terra com maldição.", "ntlh": "— Mas, antes que chegue aquele grande e terrível dia, eu, o SENHOR, lhes enviarei o profeta Elias. Ele fará com que pais e filhos façam as pazes para que eu não venha castigar o país e destruí-lo completamente.", "nvi": "“Vejam, eu enviarei a vocês o profeta Elias antes do grande e temível dia do SENHOR. Ele fará com que os corações dos pais se voltem para seus filhos, e os corações dos filhos para seus pais; do contrário, eu virei e castigarei a terra com maldição.”", "acf": "Eis que eu vos enviarei o profeta Elias, antes que venha o grande e terrível dia do SENHOR; E ele converterá o coração dos pais aos filhos, e o coração dos filhos a seus pais; para que eu não venha, e fira a terra com maldição."}
          },
          {
            pergunta: "Que tipos de ídolos podem estar presentes hoje nos lares, nas igrejas e em nosso coração?",
            resposta: "Ídolos modernos incluem o materialismo, o entretenimento secular excessivo, o orgulho próprio e ideologias mundanas que competem pela supremacia de Deus em nossas afeições e decisões.",
            versoes: {"naa": "Depois, Elias se aproximou de todo o povo e disse: — Até quando vocês ficarão pulando de um lado para outro? Se o SENHOR é Deus, sigam-no; se é Baal, sigam-no. Porém o povo não disse uma só palavra.", "ntlh": "Elias chegou perto do povo e disse: — Até quando vocês vão ficar em dúvida sobre o que vão fazer? Se o SENHOR é Deus, adorem o SENHOR; mas, se Baal é Deus, adorem Baal! Porém o povo não respondeu nada.", "nvi": "Elias dirigiu-se ao povo e disse: “Até quando vocês vão oscilar para um lado e para o outro? Se o SENHOR é Deus, sigam-no; mas, se Baal é Deus, sigam-no”. O povo, porém, nada respondeu.", "acf": "Então Elias se chegou a todo o povo, e disse: Até quando coxeareis entre dois pensamentos? Se o SENHOR é Deus, segui-o, e se Baal, segui-o. Porém o povo nada lhe respondeu."}
          },
        ]
      },
      {
        dia: "Terça-feira",
        titulo: "Isaías, o profeta do evangelho",
        resumo: "Ao contemplar a santidade do Senhor no templo, Isaías reconheceu sua profunda indignidade moral, sendo purificado pela graça para então responder com prontidão: 'Eis-me aqui, envia-me a mim'. Seu ministério combinou solenes advertências de juízo com as mais sublimes revelações do plano da redenção.\n\nO capítulo 53 de Isaías descreve de forma comovente o sacrifício expiatório e substitutivo do Messias em favor de pecadores indignos. Essa mensagem reforça tanto a universalidade do pecado quanto a suficiência da cruz, alertando-nos para a seriedade do julgamento final.",
        perguntas: [
          {
            pergunta: "Como essa impressionante profecia revela de modo tão poderoso a morte de Cristo em nosso favor? O que essa profecia nos ensina sobre o dom profético?",
            resposta: "Ela descreve vividamente o sacrifício substitutivo de Jesus levando sobre Si as nossas transgressões, demonstrando que o dom profético é uma ferramenta inspirada para descortinar o plano da salvação centrado em Cristo.",
            versoes: {"naa": "Quem creu em nossa pregação? E a quem foi revelado o braço do SENHOR? Porque foi subindo como um renovo diante dele e como raiz de uma terra seca. Não tinha boa aparência nem formosura; olhamos para ele, mas não havia nenhuma beleza que nos agradasse. Era desprezado e o mais rejeitado entre os homens, homem de dores e que sabe o que é padecer. E, como um de quem os homens escondem o rosto, era desprezado, e dele não fizemos caso. Certamente ele tomou sobre si as nossas enfermidades e as nossas dores levou sobre si; e nós o considerávamos como aflito, ferido de Deus e oprimido. Mas ele foi traspassado por causa das nossas transgressões e esmagado por causa das nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas feridas fomos sarados. Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu próprio caminho, mas o SENHOR fez cair sobre ele a iniquidade de todos nós. Ele foi oprimido e humilhado, mas não abriu a boca. Como cordeiro foi levado ao matadouro e, como ovelha muda diante dos seus tosquiadores, ele não abriu a boca. Pela opressão e pelo juízo, ele foi levado, e de sua linhagem, quem se preocupou com ela? Porque ele foi cortado da terra dos viventes; foi ferido por causa da transgressão do meu povo. Designaram-lhe a sepultura com os ímpios, mas com o rico esteve na sua morte, embora não tivesse feito injustiça, e nenhum engano fosse encontrado em sua boca. Todavia, ao SENHOR agradou esmagá-lo, fazendo-o sofrer. Quando ele der a sua alma como oferta pelo pecado, verá a sua posteridade e prolongará os seus dias; e a vontade do SENHOR prosperará nas suas mãos. Ele verá o fruto do trabalho de sua alma e ficará satisfeito. O meu Servo, o Justo, com o seu conhecimento justificará a muitos, porque as iniquidades deles levará sobre si. Por isso, eu lhe darei a sua parte com os grandes, e com os poderosos ele repartirá o despojo, pois derramou a sua alma na morte e foi contado com os transgressores. Contudo, levou sobre si o pecado de muitos e pelos transgressores intercedeu.", "ntlh": "O povo diz: “Quem poderia crer naquilo que acabamos de ouvir? Quem diria que o SENHOR estava agindo? Pois o SENHOR quis que o seu servo aparecesse como uma plantinha que brota e vai crescendo em terra seca. Ele não era bonito nem simpático, nem tinha nenhuma beleza que chamasse a nossa atenção ou que nos agradasse. Ele foi rejeitado e desprezado por todos; ele suportou dores e sofrimentos sem fim. Era como alguém que não queremos ver; nós nem mesmo olhávamos para ele e o desprezávamos. “No entanto, era o nosso sofrimento que ele estava carregando, era a nossa dor que ele estava suportando. E nós pensávamos que era por causa das suas próprias culpas que Deus o estava castigando, que Deus o estava maltratando e ferindo. Porém ele estava sofrendo por causa dos nossos pecados, estava sendo castigado por causa das nossas maldades. Nós somos curados pelo castigo que ele sofreu, somos sarados pelos ferimentos que ele recebeu. Todos nós éramos como ovelhas que se haviam perdido; cada um de nós seguia o seu próprio caminho. Mas o SENHOR castigou o seu servo; fez com que ele sofresse o castigo que nós merecíamos. “Ele foi maltratado, mas aguentou tudo humildemente e não disse uma só palavra. Ficou calado como um cordeiro que vai ser morto, como uma ovelha quando cortam a sua lã. Foi preso, condenado e levado para ser morto, e ninguém se importou com o que ia acontecer com ele. Ele foi expulso do mundo dos vivos, foi morto por causa dos pecados do nosso povo. Foi sepultado ao lado de criminosos, foi enterrado com os ricos, embora nunca tivesse cometido crime nenhum, nem tivesse dito uma só mentira.” O SENHOR Deus diz: “Eu quis maltratá-lo, quis fazê-lo sofrer. Ele ofereceu a sua vida como sacrifício para tirar pecados e por isso terá uma vida longa e verá os seus descendentes. Ele fará com que o meu plano dê certo. Depois de tanto sofrimento, ele será feliz; por causa da sua dedicação, ele ficará completamente satisfeito. O meu servo não tem pecado, mas ele sofrerá o castigo que muitos merecem, e assim os pecados deles serão perdoados. Por isso, eu lhe darei um lugar de honra; ele receberá a sua recompensa junto com os grandes e os poderosos. Pois ele deu a sua própria vida e foi tratado como se fosse um criminoso. Ele levou a culpa dos pecados de muitos e orou pedindo que eles fossem perdoados.”", "nvi": "Quem creu em nossa mensagem? E a quem foi revelado o braço do SENHOR? Ele cresceu diante dele como um broto tenro e como uma raiz saída de uma terra seca. Ele não tinha qualquer beleza ou majestade que nos atraísse, nada havia em sua aparência para que o desejássemos. Foi desprezado e rejeitado pelos homens, um homem de dores e experimentado no sofrimento. Como alguém de quem os homens escondem o rosto, foi desprezado, e nós não o tínhamos em estima. Certamente ele tomou sobre si as nossas enfermidades e sobre si levou as nossas doenças; contudo nós o consideramos castigado por Deus, por Deus atingido e afligido. Mas ele foi traspassado por causa das nossas transgressões, foi esmagado por causa de nossas iniquidades; o castigo que nos trouxe paz estava sobre ele, e pelas suas feridas fomos curados. Todos nós, como ovelhas, nos desviamos, cada um de nós se voltou para o seu próprio caminho; e o SENHOR fez cair sobre ele a iniquidade de todos nós. Ele foi oprimido e afligido; e, contudo, não abriu a sua boca; como um cordeiro, foi levado para o matadouro; e, como uma ovelha que diante de seus tosquiadores fica calada, ele não abriu a sua boca. Com julgamento opressivo ele foi levado. E quem pode falar dos seus descendentes? Pois ele foi eliminado da terra dos viventes; por causa da transgressão do meu povo ele foi golpeado. Foi-lhe dado um túmulo com os ímpios e com os ricos em sua morte, embora não tivesse cometido nenhuma violência nem houvesse nenhuma mentira em sua boca. Contudo, foi da vontade do SENHOR esmagá-lo e fazê-lo sofrer, e, embora o SENHOR tenha feito da vida dele uma oferta pela culpa, ele verá sua prole e prolongará seus dias, e a vontade do SENHOR prosperará em sua mão. Depois do sofrimento de sua alma, ele verá a luz e ficará satisfeito; pelo seu conhecimento meu servo justo justificará a muitos e levará a iniquidade deles. Por isso eu lhe darei uma porção entre os grandes , e ele dividirá os despojos com os fortes , porquanto ele derramou sua vida até a morte e foi contado entre os transgressores. Pois ele levou o pecado de muitos e pelos transgressores intercedeu.", "acf": "QUEM deu crédito à nossa pregação? E a quem se manifestou o braço do SENHOR? Porque foi subindo como renovo perante ele, e como raiz de uma terra seca; não tinha beleza nem formosura e, olhando nós para ele, não havia boa aparência nele, para que o desejássemos. Era desprezado, e o mais rejeitado entre os homens, homem de dores, e experimentado nos trabalhos; e, como um de quem os homens escondiam o rosto, era desprezado, e não fizemos dele caso algum. Verdadeiramente ele tomou sobre si as nossas enfermidades, e as nossas dores levou sobre si; e nós o reputávamos por aflito, ferido de Deus, e oprimido. Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados. Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu caminho; mas o SENHOR fez cair sobre ele a iniqüidade de nós todos. Ele foi oprimido e afligido, mas não abriu a sua boca; como um cordeiro foi levado ao matadouro, e como a ovelha muda perante os seus tosquiadores, assim ele não abriu a sua boca. Da opressão e do juízo foi tirado; e quem contará o tempo da sua vida? Porquanto foi cortado da terra dos viventes; pela transgressão do meu povo ele foi atingido. E puseram a sua sepultura com os ímpios, e com o rico na sua morte; ainda que nunca cometeu injustiça, nem houve engano na sua boca. Todavia, ao SENHOR agradou moê-lo, fazendo-o enfermar; quando a sua alma se puser por expiação do pecado, verá a sua posteridade, prolongará os seus dias; e o bom prazer do SENHOR prosperará na sua mão. Ele verá o fruto do trabalho da sua alma, e ficará satisfeito; com o seu conhecimento o meu servo, o justo, justificará a muitos; porque as iniqüidades deles levará sobre si. Por isso lhe darei a parte de muitos, e com os poderosos repartirá ele o despojo; porquanto derramou a sua alma na morte, e foi contado com os transgressores; mas ele levou sobre si o pecado de muitos, e intercedeu pelos transgressores."}
          },
          {
            pergunta: "Que esperança você encontra no que o profeta Isaías revelou sobre a morte de Cristo?",
            resposta: "A esperança consoladora de que nossas culpas e dores foram plenamente expiadas por Jesus na cruz, assegurando redenção e paz a todo aquele que crê.",
            versoes: {"naa": "Certamente ele tomou sobre si as nossas enfermidades e as nossas dores levou sobre si; e nós o considerávamos como aflito, ferido de Deus e oprimido. Mas ele foi traspassado por causa das nossas transgressões e esmagado por causa das nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas feridas fomos sarados. Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu próprio caminho, mas o SENHOR fez cair sobre ele a iniquidade de todos nós.", "ntlh": "“No entanto, era o nosso sofrimento que ele estava carregando, era a nossa dor que ele estava suportando. E nós pensávamos que era por causa das suas próprias culpas que Deus o estava castigando, que Deus o estava maltratando e ferindo. Porém ele estava sofrendo por causa dos nossos pecados, estava sendo castigado por causa das nossas maldades. Nós somos curados pelo castigo que ele sofreu, somos sarados pelos ferimentos que ele recebeu. Todos nós éramos como ovelhas que se haviam perdido; cada um de nós seguia o seu próprio caminho. Mas o SENHOR castigou o seu servo; fez com que ele sofresse o castigo que nós merecíamos.", "nvi": "Certamente ele tomou sobre si as nossas enfermidades e sobre si levou as nossas doenças; contudo nós o consideramos castigado por Deus, por Deus atingido e afligido. Mas ele foi traspassado por causa das nossas transgressões, foi esmagado por causa de nossas iniquidades; o castigo que nos trouxe paz estava sobre ele, e pelas suas feridas fomos curados. Todos nós, como ovelhas, nos desviamos, cada um de nós se voltou para o seu próprio caminho; e o SENHOR fez cair sobre ele a iniquidade de todos nós.", "acf": "Verdadeiramente ele tomou sobre si as nossas enfermidades, e as nossas dores levou sobre si; e nós o reputávamos por aflito, ferido de Deus, e oprimido. Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados. Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu caminho; mas o SENHOR fez cair sobre ele a iniqüidade de nós todos."}
          },
        ]
      },
      {
        dia: "Quarta-feira",
        titulo: "Daniel, o profeta fiel",
        resumo: "Desde a juventude na corte babilônica até a cova dos leões, Daniel manteve uma conduta inabalável de obediência aos mandamentos de Deus. Sua fidelidade e comunhão diária serviram de poderoso testemunho perante os líderes pagãos, evidenciando o poder soberano do Deus do Céu.\n\nAlém de sua retidão pessoal, Daniel recebeu profecias panorâmicas precisas sobre o desenrolar da história e a sucessão de impérios mundiais até a fragmentação europeia. Seus escritos conduzem o crente a confiar na soberania divina, no juízo investigativo e no estabelecimento definitivo do reino eterno de Deus.",
        perguntas: [
          {
            pergunta: "Que testemunho Daniel deu aos pagãos?",
            resposta: "Daniel testemunhou que o Deus do Céu é o soberano 'Senhor dos reis' e revelador de mistérios, levando governantes pagãos a reconhecerem Seu poder supremo por meio da fidelidade do profeta.",
            versoes: {"naa": "Então o rei Nabucodonosor se inclinou e se prostrou com rosto em terra diante de Daniel. Ordenou que oferecessem a Daniel uma oferta de cereais e incenso. O rei disse a Daniel: — Certamente o Deus que vocês adoram é o Deus dos deuses e o Senhor dos reis. Ele é quem revela os mistérios, pois você foi capaz de revelar este mistério. Então o rei engrandeceu Daniel e lhe deu muitos e grandes presentes. Ele o pôs como governador de toda a província da Babilônia. Também o fez chefe supremo de todos os sábios da Babilônia.", "ntlh": "Então o rei Nabucodonosor se ajoelhou diante de Daniel, e encostou o rosto no chão, e depois ordenou que fossem apresentados a Daniel sacrifícios e incenso. E ele disse a Daniel: — O Deus que vocês adoram é, de fato, o mais poderoso de todos os deuses e é o Senhor de todos os reis. Eu sei que é ele quem explica mistérios, pois você me explicou este sonho misterioso. Em seguida, o rei colocou Daniel como alta autoridade do reino e lhe deu também muitos presentes de valor. Ele pôs Daniel como governador da província da Babilônia e o fez chefe de todos os sábios do país.", "nvi": "Então o rei Nabucodonosor caiu prostrado diante de Daniel, prestou-lhe honra e ordenou que lhe fosse apresentada uma oferta de cereal e incenso. O rei disse a Daniel: “Não há dúvida de que o seu Deus é o Deus dos deuses, o Senhor dos reis e aquele que revela os mistérios, pois você conseguiu revelar esse mistério”. Assim o rei pôs Daniel num alto cargo e o cobriu de presentes. Ele o designou governante de toda a província da Babilônia e o encarregou de todos os sábios da província.", "acf": "Então o rei Nabucodonosor caiu sobre a sua face, e adorou a Daniel, e ordenou que lhe oferecessem uma oblação e perfumes suaves. Respondeu o rei a Daniel, e disse: Certamente o vosso Deus é Deus dos deuses, e o Senhor dos reis e revelador de mistérios, pois pudeste revelar este mistério. Então o rei engrandeceu a Daniel, e lhe deu muitas e grandes dádivas, e o pôs por governador de toda a província de Babilônia, como também o fez chefe dos governadores sobre todos os sábios de Babilônia."}
          },
          {
            pergunta: "Como a precisão das profecias de Daniel nos leva a confiar na vinda do reino eterno de Deus?",
            resposta: "O cumprimento milimétrico das etapas históricas preditas na estátua assegura que a promessa final do reino eterno de Deus também se cumprirá com absoluta certeza.",
            versoes: {"naa": "Mas, nos dias desses reis, o Deus do céu levantará um reino que jamais será destruído e que não passará a outro povo. Esse reino despedaçará e consumirá todos esses outros reinos, mas ele mesmo subsistirá para sempre,", "ntlh": "No tempo desses reis, o Deus do céu fará aparecer um reino que nunca será destruído, nem será conquistado por outro reino. Pelo contrário, esse reino acabará com todos os outros e durará para sempre.", "nvi": "“Na época desses reis, o Deus dos céus estabelecerá um reino que jamais será destruído e que nunca será dominado por nenhum outro povo. Destruirá todos os reinos daqueles reis e os exterminará, mas esse reino durará para sempre.", "acf": "Mas, nos dias desses reis, o Deus do céu levantará um reino que não será jamais destruído; e este reino não passará a outro povo; esmiuçará e consumirá todos esses reinos, mas ele mesmo subsistirá para sempre,"}
          },
        ]
      },
      {
        dia: "Quinta-feira",
        titulo: "João Batista, preparando um povo",
        resumo: "Cumprindo a profecia messiânica, João Batista atuou como a voz no deserto preparando os corações para o primeiro advento de Cristo. Sua pregação austera de arrependimento e retidão desafiou as forças das trevas e abalou a acomodação religiosa do povo judeu.\n\nMesmo enfrentando a solidão e as incertezas da prisão, João foi reanimado pelo testemunho das obras salvíficas de Cristo, permanecendo leal até o martírio. Sua trajetória ensina a igreja remanescente a perseverar na fé e a proclamar as mensagens angélicas, independentemente das adversidades do tempo presente.",
        perguntas: [
          {
            pergunta: "Qual era o propósito do ministério de João Batista?",
            resposta: "O propósito de seu ministério era preparar o caminho para o Messias, chamando o povo ao arrependimento sincero e ao batismo para a remissão de pecados.",
            versoes: {"naa": "Como está escrito na profecia de Isaías: “Eis que envio o meu mensageiro adiante de você, o qual preparará o seu caminho. Voz do que clama no deserto: Preparem o caminho do Senhor, endireitem as suas veredas.” E foi assim que João Batista apareceu no deserto, pregando batismo de arrependimento para remissão de pecados. E toda a região da Judeia e todos os moradores de Jerusalém iam até ele. E, confessando os seus pecados, eram batizados por ele no rio Jordão.", "ntlh": "como o profeta Isaías tinha escrito. Ele escreveu o seguinte: “Deus disse: Eu enviarei o meu mensageiro adiante de você para preparar o seu caminho.” E o profeta escreveu também: “Alguém está gritando no deserto: Preparem o caminho para o Senhor passar! Abram estradas retas para ele!” E foi assim que João Batista apareceu no deserto, batizando o povo e anunciando esta mensagem: — Arrependam-se dos seus pecados e sejam batizados, que Deus perdoará vocês. Muitos moradores da região da Judeia e da cidade de Jerusalém iam ouvir João. Eles confessavam os seus pecados, e João os batizava no rio Jordão.", "nvi": "Conforme está escrito no profeta Isaías: “Enviarei à tua frente o meu mensageiro; ele preparará o teu caminho” “voz do que clama no deserto: ‘Preparem o caminho para o Senhor, façam veredas retas para ele’ ”. Assim surgiu João, batizando no deserto e pregando um batismo de arrependimento para o perdão dos pecados. A ele vinha toda a região da Judeia e todo o povo de Jerusalém. Confessando os seus pecados, eram batizados por ele no rio Jordão.", "acf": "Como está escrito nos profetas: Eis que eu envio o meu anjo ante a tua face, o qual preparará o teu caminho diante de ti. Voz do que clama no deserto: Preparai o caminho do Senhor, Endireitai as suas veredas. Apareceu João batizando no deserto, e pregando o batismo de arrependimento, para remissão dos pecados. E toda a província da Judéia e os de Jerusalém iam ter com ele; e todos eram batizados por ele no rio Jordão, confessando os seus pecados."}
          },
          {
            pergunta: "Como Jesus fortaleceu a fé de João enquanto o pregador estava na prisão?",
            resposta: "Jesus fortaleceu a fé de João ao destacar Seus milagres messiânicos e a pregação das boas-novas aos pobres, confirmando que Ele era verdadeiramente o Prometido.",
            versoes: {"naa": "Quando Jesus acabou de dar estas instruções a seus doze discípulos, saiu dali para ir ensinar e pregar nas cidades deles. Quando João, no cárcere, ouviu falar das obras de Cristo, mandou que seus discípulos fossem perguntar: — Você é aquele que estava para vir ou devemos esperar outro? Então Jesus lhes respondeu: — Voltem e anunciem a João o que estão ouvindo e vendo: os cegos veem, os coxos andam, os leprosos são purificados, os surdos ouvem, os mortos são ressuscitados e aos pobres está sendo pregado o evangelho. E bem-aventurado é aquele que não achar em mim motivo de tropeço.", "ntlh": "Quando acabou de dar essas ordens aos seus doze discípulos, Jesus saiu daquele lugar e foi ensinar e anunciar a sua mensagem nas cidades que ficavam perto dali. João Batista estava na cadeia e, quando ouviu falar do que Cristo fazia, mandou que alguns dos seus discípulos fossem perguntar a ele: — O senhor é aquele que ia chegar ou devemos esperar outro? Jesus respondeu: — Voltem e contem a João o que vocês estão ouvindo e vendo. Digam a ele que os cegos veem, os coxos andam, os leprosos são curados, os surdos ouvem, os mortos são ressuscitados, e os pobres recebem o evangelho. E felizes são aqueles que não abandonam a sua fé em mim!", "nvi": "Quando acabou de instruir seus doze discípulos, Jesus saiu para ensinar e pregar nas cidades da Galileia. João, ao ouvir na prisão o que Cristo estava fazendo, enviou seus discípulos para lhe perguntarem: “És tu aquele que haveria de vir ou devemos esperar algum outro?” Jesus respondeu: “Voltem e anunciem a João o que vocês estão ouvindo e vendo: os cegos veem, os aleijados andam, os leprosos são purificados, os surdos ouvem, os mortos são ressuscitados, e as boas-novas são pregadas aos pobres; e feliz é aquele que não se escandaliza por minha causa”.", "acf": "E ACONTECEU que, acabando Jesus de dar instruções aos seus doze discípulos, partiu dali a ensinar e a pregar nas cidades deles. E João, ouvindo no cárcere falar dos feitos de Cristo, enviou dois dos seus discípulos, A dizer-lhe: És tu aquele que havia de vir, ou esperamos outro? E Jesus, respondendo, disse-lhes: Ide, e anunciai a João as coisas que ouvis e vedes: Os cegos vêem, e os coxos andam; os leprosos são limpos, e os surdos ouvem; os mortos são ressuscitados, e aos pobres é anunciado o evangelho. E bem-aventurado é aquele que não se escandalizar em mim."}
          },
          {
            pergunta: "Assim como João, você já ficou sem entender por que coisas tão ruins estavam acontecendo com você? Como, mesmo assim, você manteve sua fé e confiança em Deus?",
            resposta: "A fé é mantida ao recordarmos como Deus já nos guiou no passado e ao confiarmos que Seus propósitos eternos transcendem nossas aflições temporais.",
            versoes: {"naa": "E bem-aventurado é aquele que não achar em mim motivo de tropeço.", "ntlh": "E felizes são aqueles que não abandonam a sua fé em mim!", "nvi": "e feliz é aquele que não se escandaliza por minha causa”.", "acf": "E bem-aventurado é aquele que não se escandalizar em mim."}
          },
        ]
      },
      {
        dia: "Sexta-feira",
        titulo: "Chamada para o ministério profético",
        resumo: "Deus continua a se manifestar por meio do dom de profecia em momentos críticos da história para orientar e encorajar Seu remanescente. Após a dolorosa provação do desapontamento em 1844, o Senhor chamou a jovem Ellen Harmon para exercer o ministério profético e animar os crentes desanimados.\n\nSua primeira visão retratou a jornada do povo de Deus rumo à Nova Jerusalém, enfatizando a segurança de manter os olhos fixos em Jesus. Embora o encargo profético tenha sido repleto de temores e sacrifícios pessoais, o dom profético cumpriu o papel de restaurar a esperança e consolidar a missão da igreja para o tempo do fim.",
        perguntas: [
        ]
      },
    ],
    estudoProfessor: {
      "titulo": "O Chamado de um Profeta",
      "subtitulo": "Recurso Didático para Professores da Escola Sabatina | Lição 2 (4º Trimestre/2026)",
      "versoChave": "Depois disto, ouvi a voz do Senhor, que dizia: A quem enviarei, e quem há de ir por Nós? Eu respondi: Eis-me aqui, envia-me a mim (Isaías 6:8)",
      "objetivo": "Compreender que a iniciativa do chamado pertence a Deus, reconhecer que o dom profético nos convoca ao arrependimento e à fidelidade, e responder com disponibilidade irrestrita ao envio de Deus.",
      "orientacoes": [
        "Conceito Central: O Carteiro e o Altar Restaurado. O profeta é o mensageiro (carteiro) enviado por Deus, sendo o Senhor o verdadeiro protagonista.",
        "A metáfora dos altares e tendas ilustra que as tendas representam a peregrinação passageira, enquanto os altares reconstruídos permanecem como marcos perenes da aliança.",
        "Evite discussões puramente informativas sobre datas ou símbolos e conduza os adultos à reflexão pessoal.",
        "Destaque que o dom profético visa primariamente reconduzir o povo à fidelidade pactual com Cristo.",
        "Gestão do tempo: 00-10 min para Introdução e Conceito Divino; 10-25 min para os Cinco Perfis Bíblicos; 25-35 min para o Dom no Tempo do Fim; 35-45 min para Aprofundamento, Aplicação e Apelo."
      ],
      "slides": [
        {
          "titulo": "Slide 1: Capa e Verso de Memorização",
          "topicos": [
            "O Chamado de um Profeta",
            "A Convocação Divina para Reconduzir o Povo à Aliança",
            "Texto-chave em Isaías 6:8",
            "Disponibilidade irrestrita ao chamado divino"
          ],
          "nota": "Destaque que a resposta de Isaías não expressa autoconfiança ou conhecimento pleno, mas prontidão de um coração purificado pela graça."
        },
        {
          "titulo": "Slide 2: O Protagonista e a Iniciativa Divina",
          "topicos": [
            "Deus soberano é o verdadeiro protagonista",
            "Etapas: Deus chama, revela, capacita e o homem responde",
            "O profeta não busca o cargo por ambição pessoal",
            "A Palavra de Deus apodera-se do mensageiro"
          ],
          "nota": "Diferencie o verdadeiro profeta (que recua por reconhecer sua indignidade) do falso profeta (que busca status social ou religioso)."
        },
        {
          "titulo": "Slide 3: O Custo do Chamado Profético",
          "topicos": [
            "Ministério sem glamour, prestígio ou facilidade",
            "Confronto direto com o pecado do povo",
            "Incompreensão, zombaria, prisão e martírio",
            "Fúria satânica diante do resgate de almas"
          ],
          "nota": "Explique que a fidelidade à mensagem divina muitas vezes exige renunciar à aprovação popular."
        },
        {
          "titulo": "Slide 4: Abraão — Guardião da Aliança",
          "topicos": [
            "Primeiro personagem bíblico chamado de profeta (Nabi)",
            "Escolha da dependência divina em meio à idolatria",
            "Fé confiante que gera obediência voluntária",
            "Justificação pela fé creditada como justiça"
          ],
          "nota": "Ressalte que a obediência de Abraão não foi o meio para comprar o amor de Deus, mas a resposta amorosa à graça prometida."
        },
        {
          "titulo": "Slide 5: O Teste de Moriá e o Cordeiro Substituto",
          "topicos": [
            "A prova de fé na oferta de Isaque",
            "A declaração profética: Deus proverá para Si o cordeiro",
            "O carneiro no matagal como substituto",
            "Revelação clara do Calvário e do plano da redenção"
          ],
          "nota": "Mostre que o local de Moriá foi onde mais tarde se ergueu o templo de Jerusalém, conectando o símbolo ao Calvário."
        },
        {
          "titulo": "Slide 6: Elias — Confronto e Reforma",
          "topicos": [
            "Confronto contra a apostasia de Acabe e o culto a Baal",
            "Chamado à decisão: até quando vacilareis entre dois pensamentos",
            "A impotência dos falsos deuses demonstrada na seca",
            "O reavivamento iniciado pela reconstrução do altar"
          ],
          "nota": "Destaque que a seca desmascarou a impotência dos falsos deuses e mostrou a soberania do Criador sobre a natureza."
        },
        {
          "titulo": "Slide 7: O Impacto da Mensagem de Elias no Lar",
          "topicos": [
            "Profecia de restauração entre pais e filhos",
            "Reavivamento que avança do coração para o lar",
            "Expansão da reforma para a igreja e comunidade",
            "Derrubada dos ídolos modernos e cura dos relacionamentos"
          ],
          "nota": "Pergunte à classe de forma prática: Se um reavivamento começasse hoje no seu lar, qual seria a primeira transformação visível?"
        },
        {
          "titulo": "Slide 8: Isaías — A Visão da Santidade",
          "topicos": [
            "Visão do Senhor sobre o alto e sublime trono",
            "Consciência da própria pecaminosidade e lábios impuros",
            "Purificação pela brasa viva do altar celestial",
            "A graça e a justificação precedem a comissão missionária"
          ],
          "nota": "Enfatize que ninguém pode ir em missão para salvar outros se não tiver experimentado primeiro a purificação pessoal."
        },
        {
          "titulo": "Slide 9: Isaías 53 — O Profeta do Evangelho",
          "topicos": [
            "Descrição detalhada do Messias Sofredor",
            "A iniquidade de todos nós lançada sobre Cristo",
            "Morte substitutiva e expiatória na cruz",
            "Triunfo e satisfação após a ressurreição"
          ],
          "nota": "Explique que o dom profético é essencialmente cristológico — seu objetivo supremo é exaltar a Jesus."
        },
        {
          "titulo": "Slide 10: Daniel — Fidelidade no Exílio",
          "topicos": [
            "Decisão firme de não se contaminar na corte",
            "Fidelidade diária nas pequenas escolhas",
            "Coragem para enfrentar decretos de morte e leões",
            "Testemunho perante reis sobre o Deus do Céu"
          ],
          "nota": "Incentive a classe a perceber que grandes vitórias espirituais são construídas nas escolhas ocultas de cada dia."
        },
        {
          "titulo": "Slide 11: Daniel — O Reino que Jamais Será Destruído",
          "topicos": [
            "Sucessão dos impérios mundiais em Daniel 2",
            "A Europa dividida que não se unificará",
            "A rocha sobrenatural que destrói os reinos humanos",
            "A certeza do juízo divino e do reino eterno"
          ],
          "nota": "Destaque a precisão profética de Daniel como fundamento inabalável para confiarmos no regresso de Cristo."
        },
        {
          "titulo": "Slide 12: João Batista — O Precursor do Messias",
          "topicos": [
            "Cumprimento da voz que clama no deserto",
            "Proclamação do batismo de arrependimento",
            "Indicação de Jesus como o Cordeiro de Deus",
            "Apagamento pessoal para a exaltação de Cristo"
          ],
          "nota": "Compare o profeta a um carteiro: sua função é entregar a carta e direcionar a atenção inteiramente ao Remetente."
        },
        {
          "titulo": "Slide 13: A Prova da Fé na Prisão de João Batista",
          "topicos": [
            "Angústia e dúvidas na prisão de Herodes",
            "A pergunta enviada a Jesus pelos discípulos",
            "A resposta baseada nas evidências das profecias cumpridas",
            "Certeza espiritual acima das circunstâncias adversas"
          ],
          "nota": "Ensine que Deus nem sempre muda nossa circunstância imediata, mas nos dá a certeza do cumprimento de Sua palavra."
        },
        {
          "titulo": "Slide 14: O Dom Profético na História e o Tempo do Fim",
          "topicos": [
            "Períodos de silêncio e escassez profética na história",
            "Atuação do Espírito Santo através de reformadores",
            "Restauração do dom profético no tempo do fim",
            "O testemunho de Jesus na igreja remanescente"
          ],
          "nota": "Esclareça a diferença entre profetas canônicos (autores da Bíblia) e profetas não canônicos (que orientam o povo sem acrescentar ao cânon bíblico)."
        },
        {
          "titulo": "Slide 15: Ellen White — A Visão Inaugural de 1844",
          "topicos": [
            "Chamado aos 17 anos em meio ao desapontamento",
            "Visão do povo do advento em um caminho estreito",
            "A luz do clamor da meia-noite iluminando a jornada",
            "Segurança permanente ao manter os olhos fixos em Jesus"
          ],
          "nota": "Destaque que a função do dom profético moderno é reconfirmar a fé bíblica, consolar o povo e centrar tudo em Cristo."
        },
        {
          "titulo": "Slide 16: Conclusão e Chamado Pessoal",
          "topicos": [
            "Convergência de todas as profecias para a cruz e a aliança",
            "Convocação da igreja para as três mensagens angélicas",
            "O chamado divino ecoando ao coração hoje",
            "A resposta de consagração e disponibilidade: eis-me aqui"
          ],
          "nota": "Faça um apelo solene e prático de entrega de dons e vida ao serviço de Deus no tempo do fim."
        }
      ],
      "aprofundamentos": [
        {
          "titulo": "A Natureza Pactual e os Termos Técnicos do Ministério Profético (Nabi, Roé e Cosé)",
          "texto": "No Antigo Testamento, a vocação profética é designada por três termos hebraicos fundamentais. O termo mais frequente é Nabi, derivado da raiz que expressa a ideia de chamar ou proclamar, definindo o profeta como porta-voz autorizado por Deus, tal como Arão foi porta-voz de Moisés em Êxodo 7. Já os termos Roé e Cosé traduzem a figura do vidente, destacando o meio sobrenatural pelo qual Deus comunica Suas mensagens através de visões e revelações extáticas, consoante Números 12:6. O profeta israelita atuava essencialmente como promotor da aliança, advertindo sobre as sanções de Deuteronômio 28 e conclamando o povo arrependido à reconciliação com o Senhor."
        },
        {
          "titulo": "A Centralidade Cristológica e Substitutiva da Profecia (De Abraão a Isaías 53)",
          "texto": "Toda profecia bíblica genuína converge para a revelação salvífica de Jesus Cristo. Desde Abraão no Monte Moriá, quando o carneiro substitutivo revelou a provisão do Cordeiro expiatório divino, o evangelho da graça foi ilustrado de forma concreta na história patriarcal. Essa compreensão atinge sua plenitude exegética em Isaías 53, onde a doutrina da expiação substitutiva é detalhada séculos antes do Gólgota, evidenciando que os pecados humanos foram carregados pelo Servo Sofredor. A profecia também antecipa Sua ressurreição e exaltação gloriosa, demonstrando que o propósito vital do dom profético é direcionar o coração humano para a suficiência do sacrifício de Cristo na cruz."
        },
        {
          "titulo": "A Mensagem de Elias e João Batista: Reavivamento, Reforma e Preparação Escatológica",
          "texto": "Existe uma conexão teológica direta unindo Elias no Monte Carmelo, João Batista no deserto e a proclamação das três mensagens angélicas pela igreja remanescente. O foco comum desses ministérios é o apelo à decisão integral e o repúdio a qualquer forma de sincretismo moral ou espiritual. No confronto do Carmelo, a reconstrução do altar de adoração antecedeu o fogo divino, mostrando que a reforma precede o reavivamento. Além disso, a profecia de Malaquias estabelece que a mensagem de Elias alcança o núcleo familiar, restaurando os laços entre pais e filhos, princípio indispensável para preparar um povo santo e fiel diante da iminente volta de Jesus."
        },
        {
          "titulo": "O Dom Profético Pós-Bíblico e a Manifestação Não Canônica em Ellen G. White",
          "texto": "A compreensão adventista sobre o dom profético pós-bíblico fundamenta-se na existência de profetas não canônicos nas Escrituras, cujas mensagens inspiradas orientaram o povo de Deus sem contudo integrar o cânon bíblico fechado. A manifestação do dom profético em Ellen White a partir de dezembro de 1844 atuou como farol de encorajamento após o Desapontamento Milerita, sem apresentar novos dogmas, mas reavivando verdades fundamentais. Seus escritos exercem o papel de luz menor destinada a guiar os crentes em direção à luz maior das Sagradas Escrituras, preservando o foco missionário e mantendo os olhos do remanescente fitos no Salvador."
        }
      ],
      "capa": "img/licoes/licao-2026-4t-2.png"
    }

  },  {
    id: 1,
    titulo: "O Criador fala",
    data: "26 de Setembro de 2026",
    semana: "Lição 1 — 4º Trimestre 2026",
    versiculo: "Hebreus 1:1, 2",
    texto: "Antigamente, Deus falou, muitas vezes e de muitas maneiras, aos pais, pelos profetas, mas, nestes últimos dias, nos falou pelo Filho, a quem constituiu herdeiro de todas as coisas e pelo qual também fez o Universo.",
    resumo: "A lição desta semana aborda como Deus se comunica com a humanidade, desde o Éden até os dias atuais, através dos profetas, da Bíblia e de Jesus Cristo.",
    abertura: {
      versiculo: "Antigamente, Deus falou, muitas vezes e de muitas maneiras, aos pais, pelos profetas, mas, nestes últimos dias, nos falou pelo Filho, a quem constituiu herdeiro de todas as coisas e pelo qual também fez o Universo",
      periodo: "26 de setembro a 02 de outubro",
      resumo: "A tecnologia permite a muitos de nós manter contato com amigos e familiares distantes. Isso é muito bom. Mas, ainda assim, nada se compara a encontrar alguém pessoalmente. Algo especial acontece quando nos reunimos, trocamos abraços e conversamos face a face.\n\nNesta semana, vamos relembrar que os seres humanos foram criados para um relacionamento face a face com o Criador. O pecado, porém, destruiu essa conexão íntima. A fim de restaurar a comunicação com Suas criaturas amadas, Deus providenciou meios para falar conosco. A forma mais conhecida dessa comunicação divina com a humanidade ocorre por meio de porta-vozes cuidadosamente escolhidos, os profetas, que transmitem as mensagens de Deus. Alguns deles tiveram seus escritos preservados na Bíblia; outros, porém, não.\n\nO propósito final de Deus é restaurar em nós Sua imagem, que o pecado desfigurou. Uma restauração que será completa quando Deus criar \"novos céus e nova Terra, nos quais habita a justiça\" (2Pe 3:13). Até lá, o Senhor continua a falar conosco e a usar Seus profetas para isso.",
      reflexao: "Deus deseja ter um relacionamento pessoal conosco. Mesmo após o pecado, Ele continua a nos buscar e a se comunicar conosco. Que esta semana possamos aprender mais sobre como Deus fala conosco."
    },
    leituras: [
      { "ref": "Gn 1:27, 28", "versoes": { "naa": "Deus criou o homem à Sua imagem, à imagem de Deus o criou; homem e mulher os criou. Deus os abençoou e lhes disse: Sejam fecundos, multipliquem-se, encham a terra e subjuguem-na.", "ntlh": "Deus criou o ser humano, criando-o à imagem de Deus. Deus o criou homem e mulher.", "nvi": "Deus criou o homem à sua imagem, à imagem de Deus o criou; homem e mulher os criou.", "acf": "E criou Deus o homem à sua imagem; à imagem de Deus o criou; macho e fêmea os criou." } },
      { "ref": "Gn 3:1-8", "versoes": { "naa": "A serpente era o mais astuto de todos os animais selvagens que o SENHOR Deus tinha feito. Ela disse à mulher: É verdade que Deus disse que vocês não devem comer de nenhuma árvore do jardim?", "ntlh": "A serpente era o mais esperto de todos os animais que o SENHOR Deus tinha criado. Um dia, ela perguntou à mulher: — É verdade que Deus disse que vocês não podem comer do fruto de nenhuma árvore do jardim?", "nvi": "A serpente era o mais astuto de todos os animais selvagens que o SENHOR Deus tinha feito. E perguntou à mulher: É verdade que Deus disse que vocês não devem comer de nenhuma árvore do jardim?", "acf": "E era a serpente mais astuta de todos os animais do campo que o SENHOR Deus tinha feito. E esta disse à mulher: É assim que Deus disse: Não comereis de toda árvore do jardim?" } },
      { "ref": "Lc 15:11-32", "versoes": { "naa": "Jesus continuou: Tinha um homem dois filhos. O mais novo disse ao pai: Pai, me dê a parte dos bens que me cabe. E ele repartiu os bens entre eles.", "ntlh": "Jesus continuou: — Certo homem tinha dois filhos. O mais novo disse ao pai: — Pai, me dê a parte da herança que me toca. E o pai repartiu os bens entre os dois.", "nvi": "Jesus continuou: Tinha um homem dois filhos. O mais novo disse ao pai: Pai, me dê a parte dos bens que me cabe. E ele repartiu os bens entre eles.", "acf": "E disse: Um homem tinha dois filhos. E o mais novo deles disse ao pai: Pai, dá-me a parte dos bens que me cabe. E ele lhes repartiu os bens." } },
      { "ref": "Gn 3:14-24", "versoes": { "naa": "O SENHOR Deus disse à serpente: Porque você fez isso, você será maldita entre todos os animais domésticos e selvagens. Andará sobre o seu ventre e comerá pó todos os dias da sua vida.", "ntlh": "Aí o SENHOR Deus disse à serpente: — Porque você fez isso, você será amaldiçoada entre todos os animais, tanto os domésticos como os selvagens. Andará de rastros e comerá pó todos os dias da sua vida.", "nvi": "O SENHOR Deus disse à serpente: Porque você fez isso, você será maldita entre todos os animais domésticos e selvagens. Andará sobre o seu ventre e comerá pó todos os dias da sua vida.", "acf": "E o SENHOR Deus disse à serpente: Porque fizeste isso, maldita és tu entre todo o gado, e entre todos os animais do campo; sobre o teu ventre andarás, e pó comerás todos os dias da tua vida." } },
      { "ref": "Êx 19:16-22", "versoes": { "naa": "No terceiro dia, pela manhã, houve trovões e relâmpagos, e uma nuvem espessa sobre o monte, e o som de trombeta muito forte, de modo que todo o povo que estava no arremeu tremia.", "ntlh": "No terceiro dia, de manhã, houve trovões e relâmpagos, e uma nuvem espessa cobriu o monte. O som da trombeta era muito forte, e o povo que estava no acampamento tremeu de medo.", "nvi": "No terceiro dia, pela manhã, houve trovões e relâmpagos, e uma nuvem espessa sobre o monte, e o som de trombeta muito forte, de modo que todo o povo que estava no arremeu tremia.", "acf": "E aconteceu que, ao terceiro dia, pela manhã, houve trovões e relâmpagos, e uma nuvem espessa sobre o monte, e o som de trombeta muito forte, de modo que todo o povo que estava no arremeu tremia." } },
      { "ref": "Jo 10:27-30", "versoes": { "naa": "Minhas ovelhas ouvem a minha voz, e eu as conheço, e elas me seguem. Eu lhes dou a vida eterna, e elas jamais perecerão, e ninguém as arrancará da minha mão.", "ntlh": "As minhas ovelhas ouvem a minha voz; eu as conheço, e elas me seguem. Eu lhes dou a vida eterna, e elas nunca morrerão. Ninguém poderá arrancá-las da minha mão.", "nvi": "Minhas ovelhas ouvem a minha voz, e eu as conheço, e elas me seguem. Eu lhes dou a vida eterna, e elas jamais perecerão, e ninguém as arrancará da minha mão.", "acf": "As minhas ovelhas ouvem a minha voz, e eu as conheço, e elas me seguem; e dou-lhes a vida eterna, e nunca hão de perecer, e ninguém as arrebatará da minha mão." } }
    ],
    dias: [
      { "dia": "Sábado", "titulo": "Comunicação no Éden", "resumo": "Gênesis 1 e 2 apresentam o relato da criação. Deus criou um mundo belo e colocou nele Adão e Eva, o ponto alto de Sua obra criadora. Os seres humanos se diferenciavam de todas as outras criaturas da Terra porque foram feitos 'à imagem de Deus' (Gn 1:27)." },
      { "dia": "Domingo", "titulo": "Escondendo-se de Deus", "resumo": "Deus é amor (1Jo 4:8) e não criou seres humanos como 'robôs', pois o amor envolve escolha. Adão e Eva precisavam ser criados livres; caso contrário, eles não poderiam amar de verdade." },
      { "dia": "Segunda-feira", "titulo": "Deus busca a humanidade", "resumo": "Gênesis 3:9 e 10 mostra que Deus tomou a iniciativa de buscar Seus filhos decaídos. A pergunta 'Onde você está?' (Gn 3:9) foi retórica, pois Deus sabia o que Adão e Eva tinham feito e onde estavam." },
      { "dia": "Terça-feira", "titulo": "Expulsos do jardim", "resumo": "Uma das consequências mais devastadoras do pecado foi a separação entre Deus e a humanidade. Adão e Eva foram expulsos do Éden e já não podiam falar com o Senhor face a face." },
      { "dia": "Quarta-feira", "titulo": "Porta-vozes de Deus", "resumo": "Apesar do pecado, Deus encontrou muitas formas de Se comunicar com os seres humanos decaídos. Uma delas é a criação. A natureza revela de modo poderoso as obras maravilhosas de Deus." },
      { "dia": "Quinta-feira", "titulo": "Ellen White", "resumo": "A comunicação de Deus não se limitou aos tempos bíblicos. Ele continua falando aos seres humanos, e Suas palavras ainda se manifestam em nosso tempo, até a volta de Cristo." },
      { "dia": "Sexta-feira", "titulo": "Aplicação", "resumo": "O propósito final de Deus é restaurar em nós Sua imagem, que o pecado desfigurou. Uma restauração que será completa quando Deus criar 'novos céus e nova Terra, nos quais habita a justiça' (2Pe 3:13)." }
    ],
    perguntas: [
      {
        pergunta: "Que tipo de comunicação existia entre Deus e os seres humanos no jardim do Éden?",
        resposta: "Havia comunicação direta, clara e íntima, com diálogo pessoal entre Deus e o ser humano."
      },
      {
        pergunta: "Por que Adão e Eva tentaram se esconder do Criador depois de desobedecer-Lhe?",
        resposta: "Eles se escondered por causa da culpa e do medo, mesmo sendo impossível ocultar-se de Deus."
      },
      {
        pergunta: "De que maneira a parábola do filho pródigo reflete o que aconteceu em Gênesis 3:9, 10?",
        resposta: "Assim como Deus buscou o ser humano caído, o pai da parábola toma a iniciativa de restaurar o relacionamento com o filho perdido."
      },
      {
        pergunta: "Como o pecado alterou nossa comunicação com Deus?",
        resposta: "O pecado trouxe separação, medo e necessidade de mediação na relação entre Deus e a humanidade."
      },
      {
        pergunta: "O que os textos revelam sobre a maneira como Deus tem falado à humanidade depois da entrada do pecado?",
        resposta: "Eles revelam que Deus continua falando por meio da criação, dos profetas, das Escrituras e, de modo supremo, por meio de Jesus Cristo."
      }
    ],
    estudoProfessor: {
      titulo: "O Fio de Ouro — O Criador Fala",
      subtitulo: "A Jornada da Comunicação Divina do Éden à Restauração",
      versoChave: "Havendo Deus outrora falado muitas vezes e de muitas maneiras aos pais pelos profetas, nestes últimos dias nos falou pelo Filho... (Hebreus 1:1-2).",
      objetivo: "Compreender como Deus toma a iniciativa de buscar o ser humano após o pecado e mantém o canal de comunicação aberto através dos profetas até a revelação suprema em Cristo.",
      orientacoes: [
        "O Conceito do 'Fio de Ouro': Representa a linha ininterrupta da comunicação e do amor de Deus, que se desdobra do Éden até a Nova Terra.",
        "Andragogia (Ensino de Adultos): Ao ensinar adultos, evite leituras mecânicas. Estimule a reflexão através de perguntas motivadoras que conectem o texto bíblico com as lutas da vida real.",
        "Gestão do Tempo em Sala de Aula: Faça uma introdução ágil nos pontos iniciais para garantir tempo suficiente na discussão dos canais da revelação (quinta-feira) e da aplicação prática (sexta-feira)."
      ],
      slides: [
        {
          titulo: "Capa e Verso de Memorização",
          topicos: [
            "Título: O Fio de Ouro — O Criador Fala",
            "Subtítulo: A Jornada da Comunicação Divina do Éden à Restauração",
            "Verso-Chave: 'Havendo Deus outrora falado muitas vezes e de muitas maneiras aos pais pelos profetas, nestes últimos dias nos falou pelo Filho...' (Hebreus 1:1-2).",
            "Objetivo da Aula: Compreender como Deus toma a iniciativa de buscar o ser humano após o pecado e mantém o canal de comunicação aberto através dos profetas até a revelação suprema em Cristo."
          ]
        },
        {
          titulo: "Os 5 Propósitos do Dom Profético",
          topicos: [
            "1. Revelar o Caráter e a Vontade de Deus: Apresentar ao mundo caído o amor, a graça e os planos do Criador.",
            "2. Oferecer Discernimento e Orientação: Guiar a igreja e alertar sobre eventos e decisões cruciais.",
            "3. Capacitar a Igreja para a Missão: Equipar os crentes para o serviço e o testemunho comunitário.",
            "4. Fornecer Encorajamento Espiritual: Fortalecer os corações cansados e renovar a esperança nas provações.",
            "5. Despertar para o Arrependimento: Confrontar o pecado e chamar o pecador de volta à reconciliação com Deus."
          ],
          nota: "O dom profético não é adivinhação nem entretenimento espiritual; é o instrumento de resgate amoroso de Deus para salvar o pecador."
        },
        {
          titulo: "1. O Elo Original (Antes do Pecado)",
          topicos: [
            "Criados à Imagem de Deus: Homem e mulher receberam capacidade relacional e de liderança sobre a criação (Gênesis 1:27-28).",
            "Diálogo Face a Face: A comunicação no Éden ocorria de forma direta, clara e livre de qualquer véu de separação.",
            "O Éden como Espaço Sagrado: Os verbos 'cultivar e guardar' (Gênesis 2:15) são os mesmos usados posteriormente para o serviço dos levitas no santuário, mostrando que o Éden era um templo de comunhão.",
            "O Sábado no Éden: O Sábado era o momento especial de maior permanência e relacionamento da família com o Criador no jardim.",
            "Livre-Arbítrio: Deus não criou robôs ou marionetes; o amor autêntico exige a liberdade consciente de escolha."
          ]
        },
        {
          titulo: "2. A Ruptura: A Segunda Voz no Jardim",
          topicos: [
            "A Distorção do Inimigo: A serpente começou pela proibição, ocultando a abundância concedida por Deus e semeando dúvidas sobre Seu caráter (Gênesis 3:1-6).",
            "A Troca Trágica: O casal preferiu dar ouvidos ao engano do inimigo em vez de manter o diálogo com o Criador.",
            "Consequências Imediatas: A perda da cobertura de luz e glória deu lugar ao medo, à culpa, à vergonha e ao sentimento de nudez.",
            "A Fuga: A voz divina, que antes trazia alegria na viração do dia, passou a provocar medo, fazendo o homem se esconder entre as árvores (Gênesis 3:8)."
          ]
        },
        {
          titulo: "3. A Graça que Busca o Perdido",
          topicos: [
            "A Pergunta do Criador: 'E chamou o Senhor Deus ao homem e lhe perguntou: Onde estás?' (Gênesis 3:9).",
            "Pergunta Pedagógica: Deus sabia a localização física de Adão; o chamado era um convite para que o homem reconhecesse sua real condição espiritual.",
            "A Reação Humana: Em vez de confessar, o homem culpou a mulher (e indiretamente a Deus), enquanto a mulher culpou a serpente.",
            "O Padrão da Redenção: De Gênesis a Apocalipse — e nas parábolas de Lucas 15 (a ovelha, a moeda e o filho pródigo) —, Deus toma a iniciativa de ir ao encontro do pecador para restaurá-lo."
          ]
        },
        {
          titulo: "4. A Provisão da Redenção",
          topicos: [
            "Gênesis 3:15 (O Protoevangelho): A primeira promessa profética anuncia a vitória final do Descendente da mulher sobre a serpente.",
            "O Vislumbre do Calvário: O calcanhar de Cristo seria ferido na cruz, mas a cabeça de Satanás seria definitivamente esmagada.",
            "Vestimentas de Peles (Gênesis 3:21): Um animal inocente precisou morrer para cobrir a nudez humana, simbolizando a justiça de Cristo que nos cobre.",
            "Misericórdia na Expulsão: A saída do Éden impediu que o homem vivesse eternamente em estado de pecado, preservando a humanidade para o plano de resgate."
          ]
        },
        {
          titulo: "5. Como Deus Fala Conosco Hoje",
          topicos: [
            "1. A Criação / Natureza: Revela o poder, a ordem e os atributos invisíveis do Criador (Salmo 19:1; Romanos 1:20).",
            "2. A Consciência / Lei Moral: A voz interna gravada pelo Espírito Santo no coração humano (Romanos 2:14-15).",
            "3. Os Profetas (Porta-Vozes): Chamados sobrenaturalmente por sonhos e visões (Amós 3:7; Números 12:6).",
            "4. As Escrituras Sagradas: A Palavra inspirada, útil para ensinar, repreender e corrigir (2 Timóteo 3:16-17).",
            "5. Revelação Suprema em Jesus: Cristo é a Palavra viva e a expressão exata do Pai (Hebreus 1:1-2; João 14:9)."
          ]
        },
        {
          titulo: "6. O 'Software' de Comunicação Divina",
          topicos: [
            "Conceito de Profeta: No hebraico (nabi), o profeta é a 'boca de Deus', um porta-voz chamado diretamente pelo Criador.",
            "Sonhos e Visões: Conforme Números 12:6, a revelação profética ocorre em visões (acordado) e sonhos proféticos (dormindo).",
            "Profetas Canônicos e Não-Canônicos: Canônicos escreveram os livros da Bíblia; não-canônicos exerceram o ministério sem integrar o Cânon (ex: Elias, João Batista e Ellen White).",
            "A Origem da Bíblia: Toda a Escritura Sagrada é fruto do dom de profecia atuando ao longo de 1.600 anos.",
            "Da Visão Distorcida ao Pai Amoroso: Ellen White passou de uma infância com medo de um 'juiz vingativo' para a paz ao descobrir em Cristo um 'Pai bondoso e eterno'."
          ]
        },
        {
          titulo: "7. Três Passos de Resposta à Voz de Deus",
          topicos: [
            "1. Reservar Tempo Diário: Escolher um horário específico todos os dias para estudar a Bíblia e orar sem distrações tecnológicas.",
            "2. Confessar e Não Justificar: Abandonar a transferência de culpa e as acusações, buscando o perdão sincero e a reparação.",
            "3. Olhar e Imitar a Cristo: Observar nos evangelhos como Jesus acolhia os pecadores e reproduzir esse amor com o próximo."
          ]
        },
        {
          titulo: "8. Do Éden à Nova Terra",
          topicos: [
            "O Propósito da Revelação: Restaurar a imagem e o caráter de Deus na vida de cada crente.",
            "A Promessa Gloriosa: Na Nova Terra, os salvos voltarão a ver a Deus face a face e na sua fronte estará o nome do Criador (Apocalipse 22:4).",
            "Conclusão: O Criador que falou no passado continua a chamar você hoje para viver eternamente ao Seu lado."
          ]
        }
      ],
      aprofundamentos: [
        {
          titulo: "O Deus que Busca e a Pergunta Pedagógica",
          texto: "Quando Adão e Eva pecaram, o ser humano fugiu e se escondeu. Não foi o homem quem buscou a Deus; foi Deus quem veio ao jardim e perguntou: 'Onde estás?' (Gênesis 3:9). Deus sabia a localização física do casal; a pergunta era uma chamada pedagógica e redentora para que Adão refletisse sobre a tragédia de suas escolhas. Esse padrão se repete em toda a Bíblia e se ilustra com clareza nas parábolas de Lucas 15 (a ovelha perdida, a moeda perdida e o filho pródigo), onde o pai corre ao encontro do filho para cobri-lo de beijos e abraços em vez de condená-lo."
        },
        {
          titulo: "O Ofício Profético como Canal Indireto",
          texto: "Após a Queda, a presença direta da glória de Deus se tornou inacessível ao homem pecador, pois Sua santidade consumiria a impureza humana. Para manter a comunicação aberta sem destruir a humanidade, Deus desenvolveu o dom profético como um 'software de comunicação'. O profeta é a 'boca de Deus' (nabi). O dom profético deu origem à própria Bíblia Sagrada e continuou ativo na história da igreja, manifestando-se na era moderna através do ministério profético não-canônico de Ellen G. White."
        },
        {
          titulo: "A Transição da Visão Distorcida para o Pai Amoroso",
          texto: "O pecado e o engano da serpente distorceram a percepção humana sobre Deus, fazendo com que o Criador fosse visto com medo e desconfiança. Durante sua juventude, Ellen White sofreu com essa imagem distorcida, enxergando Deus como um 'juiz vingativo' e um 'tirano irado'. Sua vida foi transformada ao entender o evangelho através do pastor Levi Stockman, passando a olhar para Deus como um Pai bondoso e eterno. Essa revelação do Pai atinge seu clímax na pessoa de Jesus Cristo, que declarou: 'Quem me vê a mim, vê o Pai' (João 14:9)."
        }
      ]
    }
  }
];

const ESTUDOS = [
  {
    id: 1,
    titulo: "O Sábado na Bíblia",
    tema: "Sábado",
    versiculo: "Êxodo 20:8-11",
    texto: "Lembra-te do dia do sábado, para o santificar. Seis dias trabalharás, e farás toda a tua obra. Mas o sétimo dia é o sábado do Senhor, teu Deus; não farás nenhuma obra, nem tu, nem teu filho, nem tua filha, nem o teu servo, nem a tua serva, nem o teu animal, nem o teu estrangeiro que está dentro das tuas portas. Porque em seis dias fez o Senhor os céus e a terra, o mar e tudo que neles há, e ao sétimo dia descansou; portanto abençoou o Senhor o dia do sábado, e o santificou.",
    resumo: "Estudo completo sobre a origem, propósito e significado do sábado como dia santificado por Deus.",
    perguntas: [
      {
        pergunta: "Quando o sábado foi instituído?",
        resposta: "O sábado foi instituído na criação, quando Deus descansou no sétimo dia e o santificou (Gênesis 2:1-3)."
      },
      {
        pergunta: "Qual é o propósito do sábado?",
        resposta: "O sábado serve como memorial da criação, sinal de santificação e tempo especial para comunhão com Deus."
      },
      {
        pergunta: "Jesus guardava o sábado?",
        resposta: "Sim, Jesus guardava o sábado e o restaurou ao seu propósito original, como bênção para a humanidade (Lucas 4:16)."
      },
      {
        pergunta: "O sábado ainda é válido hoje?",
        resposta: "Sim, o sábado é um mandamento eterno que reflete o caráter de Deus e continua sendo um tempo especial de adoração e descanso."
      }
    ]
  },
  {
    id: 2,
    titulo: "A Segunda Vinda de Cristo",
    tema: "Profecia",
    versiculo: "Apocalipse 1:7",
    texto: "Eis que vem com as nuvens, e todo o olho o verá, e aqueles que o traspassaram; e todas as tribos da terra se lamentarão sobre ele. Sim. Amém.",
    resumo: "Estudo sobre as promessas do retorno de Jesus e os sinais dos últimos dias.",
    perguntas: [
      {
        pergunta: "O que a Bíblia promete sobre a volta de Jesus?",
        resposta: "A Bíblia promete que Jesus voltará visivelmente, com poder e glória, e todo olho O verá (Apocalipse 1:7)."
      },
      {
        pergunta: "Quais são os sinais da segunda vinda?",
        resposta: "Os sinais incluem: guerras, fomes, terremotos, perseguição religiosa, apostasia e a pregação do evangelho a todas as nações."
      },
      {
        pergunta: "Como devemos viver à luz da segunda vinda?",
        resposta: "Devemos viver em vigilância, santidade e serviço, estando sempre preparados para o encontro com o Senhor."
      },
      {
        pergunta: "O que acontecerá com os salvos na segunda vinda?",
        resposta: "Os salvos serão transformados, receberão corpos gloriosos e viverão eternamente com o Senhor no novo céu e nova terra."
      }
    ]
  },
  {
    id: 3,
    titulo: "O Dom de Línguas",
    tema: "Espírito Santo",
    versiculo: "Atos 2:4",
    texto: "E todos foram cheios do Espírito Santo, e começaram a falar noutras línguas, conforme o Espírito Santo lhes concedia que falassem.",
    resumo: "Estudo sobre o batismo com o Espírito Santo e o significado dos dons espirituais.",
    perguntas: [
      {
        pergunta: "O que é o batismo com o Espírito Santo?",
        resposta: "É a experiência de ser cheio do Espírito Santo, recebendo poder para testemunhar e servir a Deus."
      },
      {
        pergunta: "Qual é o propósito do dom de línguas?",
        resposta: "O dom de línguas serve para edificação pessoal, comunicação com Deus e, com interpretação, edificação da igreja."
      },
      {
        pergunta: "O dom de línguas é para hoje?",
        resposta: "Sim, os dons espirituais, incluindo línguas, são válidos para a igreja até a volta de Cristo."
      },
      {
        pergunta: "Como receber o Espírito Santo?",
        resposta: "Pela fé, oração e entrega total a Deus, buscando o batismo com o Espírito Santo."
      }
    ]
  },
  {
    id: 4,
    titulo: "A Criação em Seis Dias",
    tema: "Criação",
    versiculo: "Gênesis 1:1",
    texto: "No princípio, criou Deus os céus e a terra.",
    resumo: "Estudo sobre a narrativa da criação e sua relevância para a fé cristã.",
    perguntas: [
      {
        pergunta: "Quantos dias durou a criação?",
        resposta: "A criação ocorreu em seis dias literais, com Deus descansando no sétimo dia."
      },
      {
        pergunta: "O que Deus criou no primeiro dia?",
        resposta: "No primeiro dia, Deus criou a luz e separou a luz das trevas."
      },
      {
        pergunta: "Qual é o significado teológico da criação?",
        resposta: "A criação revela Deus como o Criador soberano, que fez todas as coisas com propósito e ordem."
      },
      {
        pergunta: "A teoria da evolução contradiz a Bíblia?",
        resposta: "Sim, a teoria da evolução contradiz o relato bíblico da criação, que apresenta Deus como o Criador direto de todas as coisas."
      }
    ]
  },
  {
    id: 5,
    titulo: "O Juízo Final",
    tema: "Profecia",
    versiculo: "Apocalipse 20:12",
    texto: "E vi os mortos, grandes e pequenos, que estavam diante de Deus; e abriram-se os livros; e abriu-se outro livro, que é o da vida. E foram julgados os mortos pelas coisas que estavam escritas nos livros, segundo as suas obras.",
    resumo: "Estudo sobre o juízo investigativo e o julgamento final dos ímpios.",
    perguntas: [
      {
        pergunta: "O que é o juízo final?",
        resposta: "O juízo final é o momento em que todos os seres humanos serão julgados por Deus segundo suas obras."
      },
      {
        pergunta: "Quando ocorre o juízo final?",
        resposta: "O juízo final ocorre após a segunda vinda de Cristo, quando os ímpios serão ressuscitados para o julgamento."
      },
      {
        pergunta: "Quem será salvo no juízo final?",
        resposta: "Aqueles que aceitaram a Jesus como Salvador e cujos nomes estão escritos no Livro da Vida."
      },
      {
        pergunta: "O que acontece com os ímpios?",
        resposta: "Os ímpios enfrentarão a segunda morte, que é o lago de fogo, separação eterna de Deus."
      }
    ]
  },
  {
    id: 6,
    titulo: "A Oração que Transforma",
    tema: "Vida Cristã",
    versiculo: "Filipenses 4:6-7",
    texto: "Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplicas, com ação de graças. E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.",
    resumo: "Estudo sobre o poder da oração e como desenvolver uma vida de comunhão com Deus.",
    perguntas: [
      {
        pergunta: "O que é oração?",
        resposta: "Oração é comunicação com Deus, um diálogo sincero onde expressamos louvor, gratidão, confissão e petições."
      },
      {
        pergunta: "Como orar de forma eficaz?",
        resposta: "Oramos com fé, perseverança, submissão à vontade de Deus e em nome de Jesus."
      },
      {
        pergunta: "Por que às vezes parece que Deus não responde?",
        resposta: "Deus sempre responde, mas nem sempre da forma ou no tempo que esperamos. Sua resposta pode ser 'sim', 'não' ou 'espere'."
      },
      {
        pergunta: "Qual é o segredo de uma vida de oração vitoriosa?",
        resposta: "A constância, a fé genuína e a entrega total a Deus são essenciais para uma vida de oração que transforma."
      }
    ]
  },
  {
    id: 7,
    titulo: "O Batismo nas Águas",
    tema: "Vida Cristã",
    versiculo: "Mateus 28:19",
    texto: "Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo.",
    resumo: "Estudo sobre o significado do batismo e sua importância na vida do cristão.",
    perguntas: [
      {
        pergunta: "O que é o batismo?",
        resposta: "O batismo é um ato público de fé que simboliza a morte do velho homem e o nascimento de uma nova vida em Cristo."
      },
      {
        pergunta: "Qual é a forma correta de batizar?",
        resposta: "A Bíblia ensina o batismo por imersão, que simboliza o sepultamento e ressurreição com Cristo."
      },
      {
        pergunta: "Quem deve ser batizado?",
        resposta: "Todo aquele que crê em Jesus, se arrepende de seus pecados e deseja seguir a Cristo como Senhor e Salvador."
      },
      {
        pergunta: "O batismo salva?",
        resposta: "O batismo não salva, mas é uma expressão externa da fé interior. A salvação vem pela fé em Cristo."
      }
    ]
  },
  {
    id: 8,
    titulo: "O Dom de Profecia",
    tema: "Espírito Santo",
    versiculo: "Apocalipse 19:10",
    texto: "Porque o testemunho de Jesus é o espírito de profecia.",
    resumo: "Estudo sobre o dom de profecia e seu papel na igreja e na vida do cristão.",
    perguntas: [
      {
        pergunta: "O que é o dom de profecia?",
        resposta: "O dom de profecia é um dom do Espírito Santo que capacita a pessoa a receber e transmitir mensagens de Deus."
      },
      {
        pergunta: "Qual é o propósito do dom de profecia?",
        resposta: "O propósito é edificar, exortar e consolar a igreja, além de guiar o povo de Deus."
      },
      {
        pergunta: "Como discernir uma verdadeira profecia?",
        resposta: "A verdadeira profecia está de acordo com a Bíblia, glorifica a Jesus e produz frutos espirituais."
      },
      {
        pergunta: "O dom de profecia continua hoje?",
        resposta: "Sim, o dom de profecia é um dom permanente para a igreja até a volta de Cristo."
      }
    ]
  },
  {
    id: 9,
    titulo: "A Saúde e o Templo do Espírito Santo",
    tema: "Vida Cristã",
    versiculo: "1 Coríntios 6:19-20",
    texto: "Ou não sabeis que o vosso corpo é o templo do Espírito Santo, que habita em vós, proveniente de Deus, e que não sois de vós mesmos? Porque fostes comprados por bom preço; glorificai, pois, a Deus no vosso corpo e no vosso espírito, que pertencem a Deus.",
    resumo: "Estudo sobre a saúde como princípio bíblico e o cuidado do corpo como templo do Espírito Santo.",
    perguntas: [
      {
        pergunta: "O que a Bíblia diz sobre saúde?",
        resposta: "A Bíblia ensina que Deus deseja a saúde do nosso corpo e espírito, e que devemos cuidar do corpo como templo do Espírito Santo."
      },
      {
        pergunta: "Quais são os princípios bíblicos de saúde?",
        resposta: "Incluem: alimentação saudável, exercício físico, descanso adequado, abstinência de substâncias nocivas e confiança em Deus."
      },
      {
        pergunta: "Por que cuidar do corpo é importante?",
        resposta: "Porque o corpo é o templo do Espírito Santo, e cuidá-lo é uma forma de honrar a Deus."
      },
      {
        pergunta: "A doença é sempre resultado do pecado?",
        resposta: "Nem sempre. A doença pode ter várias causas, mas Deus pode usar o sofrimento para nos aproximar dEle."
      }
    ]
  },
  {
    id: 10,
    titulo: "A Família Cristã",
    tema: "Família",
    versiculo: "Josué 24:15",
    texto: "Eu e a minha casa serviremos ao Senhor.",
    resumo: "Estudo sobre os princípios bíblicos para uma família cristã feliz e unida.",
    perguntas: [
      {
        pergunta: "Qual é o plano de Deus para a família?",
        resposta: "O plano de Deus é que a família seja uma unidade de amor, respeito mútuo e serviço a Deus."
      },
      {
        pergunta: "Qual é o papel do marido na família?",
        resposta: "O marido deve amar a esposa como Cristo amou a igreja, sendo líder espiritual, protetor e provedor."
      },
      {
        pergunta: "Qual é o papel da esposa na família?",
        resposta: "A esposa deve respeitar e apoiar o marido, sendo companheira, ajudadora e administradora do lar."
      },
      {
        pergunta: "Como educar os filhos segundo a Bíblia?",
        resposta: "Os filhos devem ser educados com amor, disciplina, exemplo e ensino da Palavra de Deus."
      }
    ]
  },
  {
    id: 11,
    titulo: "O Inferno e a Morte",
    tema: "Doutrinas",
    versiculo: "Apocalipse 20:14",
    texto: "E a morte e o inferno foram lançados no lago de fogo. Esta é a segunda morte.",
    resumo: "Estudo sobre o estado dos mortos e a doutrina bíblica sobre a morte e o inferno.",
    perguntas: [
      {
        pergunta: "O que acontece após a morte?",
        resposta: "Segundo a Bíblia, os mortos dormem até a ressurreição. Os justos serão ressuscitados na volta de Cristo."
      },
      {
        pergunta: "O que é o inferno?",
        resposta: "O inferno não é um lugar de tormento eterno, mas o lago de fogo onde os ímpios serão destruídos após o juízo final."
      },
      {
        pergunta: "Os ímpios sofrem eternamente?",
        resposta: "Não. A Bíblia ensina que os ímpios serão destruídos, não torturados eternamente. A segunda morte é o fim definitivo."
      },
      {
        pergunta: "Qual é a esperança dos cristãos?",
        resposta: "A esperança é a ressurreição para a vida eterna com Cristo no novo céu e nova terra."
      }
    ]
  },
  {
    id: 12,
    titulo: "O Milênio",
    tema: "Profecia",
    versiculo: "Apocalipse 20:4",
    texto: "E vi tronos, e assentaram-se sobre eles, e o juízo lhes foi dado; e vi as almas daqueles que foram degolados pelo testemunho de Jesus, e pela palavra de Deus, e que não adoraram a besta, nem a sua imagem, e não receberam o sinal nas suas testas, nem nas suas mãos; e viveram, e reinaram com Cristo mil anos.",
    resumo: "Estudo sobre o milênio e o reinado de Cristo com os santos por mil anos.",
    perguntas: [
      {
        pergunta: "O que é o milênio?",
        resposta: "O milênio é o período de mil anos após a segunda vinda de Cristo, quando os santos reinarão com Ele no céu."
      },
      {
        pergunta: "Onde estarão os santos durante o milênio?",
        resposta: "Os santos estarão no céu com Cristo, participando do juízo dos ímpios e reinando com Ele."
      },
      {
        pergunta: "O que acontecerá ao final do milênio?",
        resposta: "Ao final do milênio, a Nova Jerusalém descerá à terra, os ímpios serão ressuscitados e enfrentarão o juízo final."
      },
      {
        pergunta: "Qual é o destino final dos ímpios?",
        resposta: "Os ímpios serão destruídos no lago de fogo, que é a segunda morte, e não existirão mais."
      }
    ]
  },
  {
    id: 13,
    titulo: "A Nova Terra",
    tema: "Esperança",
    versiculo: "Apocalipse 21:1",
    texto: "E vi um novo céu, e uma nova terra. Porque já o primeiro céu e a primeira terra passaram, e o mar já não existe.",
    resumo: "Estudo sobre a promessa de um novo céu e nova terra, onde habitará a justiça.",
    perguntas: [
      {
        pergunta: "O que é a nova terra?",
        resposta: "A nova terra é o lar eterno dos salvos, onde Deus habitará com eles e não haverá mais morte, dor ou tristeza."
      },
      {
        pergunta: "Como será a vida na nova terra?",
        resposta: "Será de perfeita comunhão com Deus, trabalho prazeroso, relacionamentos perfeitos e alegria eterna."
      },
      {
        pergunta: "Quem viverá na nova terra?",
        resposta: "Todos os que aceitaram a Jesus como Salvador e cujos nomes estão escritos no Livro da Vida."
      },
      {
        pergunta: "O que é a Nova Jerusalém?",
        resposta: "A Nova Jerusalém é a cidade celestial que descerá do céu para a nova terra, sendo o centro do universo redimido."
      }
    ]
  },
  {
    id: 14,
    titulo: "O Dízimo e as Ofertas",
    tema: "Mordomia",
    versiculo: "Malaquias 3:10",
    texto: "Trazei todos os dízimos à casa do tesouro, e provai-me nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu, e não derramar sobre vós bênção sem medida.",
    resumo: "Estudo sobre o princípio do dízimo e a alegria de contribuir para a obra de Deus.",
    perguntas: [
      {
        pergunta: "O que é o dízimo?",
        resposta: "O dízimo é a décima parte de nossa renda, consagrada a Deus como reconhecimento de que tudo pertence a Ele."
      },
      {
        pergunta: "Por que devemos dizimar?",
        resposta: "Porque o dízimo é um mandamento de Deus, um ato de fé e gratidão, e um meio de sustentar a obra do evangelho."
      },
      {
        pergunta: "O que acontece quando somos fiéis no dízimo?",
        resposta: "Deus promete abrir as janelas do céu e derramar bênçãos sem medida sobre aqueles que são fiéis."
      },
      {
        pergunta: "O dízimo é do Antigo Testamento?",
        resposta: "Não, o dízimo é anterior à Lei mosaica e foi confirmado por Jesus e pelos apóstolos como princípio permanente."
      }
    ]
  },
  {
    id: 15,
    titulo: "A Adoração Verdadeira",
    tema: "Vida Cristã",
    versiculo: "João 4:24",
    texto: "Deus é Espírito, e é necessário que os que o adoram o adorem em espírito e em verdade.",
    resumo: "Estudo sobre o que constitui uma adoração genuína a Deus.",
    perguntas: [
      {
        pergunta: "O que é adoração verdadeira?",
        resposta: "Adoração verdadeira é adorar a Deus em espírito e em verdade, com o coração sincero e a vida transformada."
      },
      {
        pergunta: "Como devemos adorar a Deus?",
        resposta: "Devemos adorar a Deus em espírito (com o coração) e em verdade (conforme Sua Palavra)."
      },
      {
        pergunta: "A adoração se limita ao culto?",
        resposta: "Não, a adoração é um estilo de vida que inclui o culto, o serviço, a obediência e o amor ao próximo."
      },
      {
        pergunta: "Por que a adoração é importante?",
        resposta: "Porque a adoração nos conecta com Deus, transforma nosso caráter e glorifica o nome do Senhor."
      }
    ]
  }
];

const TEMAS = [
  "Todos",
  "Sábado",
  "Profecia",
  "Espírito Santo",
  "Criação",
  "Vida Cristã",
  "Família",
  "Doutrinas",
  "Esperança",
  "Mordomia",
  "A Bíblia"
];

// --- Registro dos capítulos (cada um em js/dados/) ---
const TEMA_BIBLIA = {
  id: "biblia",
  titulo: "A Bíblia: Como estudá-la e compreendê-la",
  descricao: "Estudo completo sobre como estudar e compreender as Escrituras Sagradas.",
  capitulos: []
};

// Registra cada capítulo que tiver um arquivo próprio carregado
if (typeof CAPITULO_1 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_1);
if (typeof CAPITULO_2 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_2);
if (typeof CAPITULO_3 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_3);
if (typeof CAPITULO_4 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_4);
if (typeof CAPITULO_5 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_5);
if (typeof CAPITULO_6 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_6);
if (typeof CAPITULO_7 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_7);
if (typeof CAPITULO_8 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_8);
if (typeof CAPITULO_9 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_9);
if (typeof CAPITULO_10 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_10);
if (typeof CAPITULO_11 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_11);
if (typeof CAPITULO_12 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_12);
if (typeof CAPITULO_13 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_13);
if (typeof CAPITULO_14 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_14);
if (typeof CAPITULO_15 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_15);
if (typeof CAPITULO_16 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_16);
if (typeof CAPITULO_17 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_17);
if (typeof CAPITULO_18 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_18);
if (typeof CAPITULO_19 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_19);
if (typeof CAPITULO_20 !== 'undefined') TEMA_BIBLIA.capitulos.push(CAPITULO_20);
