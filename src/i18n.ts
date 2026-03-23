import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          about: "Sobre Mim",
          aboutText: "Olá, eu sou Stefany Prado.\nLash Designer, micropigmentadora, personal bronze e fundadora do Doll Palace Beauty Studio.\n\nMinha jornada na beleza começou há 11 anos no Brasil.\nQuando cheguei aos EUA, trabalhei em outras áreas até reencontrar minha paixão pela estética.\nDepois de muitos cursos, treino e dedicação, construí meu espaço e hoje vivo do que amo.\nAgora quero compartilhar esse conhecimento com você.",
          services: "Serviços",
          faq: "FAQ",
          contact: "Contato",
          bookNow: "Agendar Agora",
          businessHours: "Horário de Atendimento",
          businessHoursText: "Segunda a Segunda – 7am às 10pm",
          faqData: [
            { q: "Qual é o serviço mais procurado?", a: "A extensão de cílios é o carro-chefe da Stefany. Cada aplicação é personalizada com design ideal para o formato dos olhos e do rosto." },
            { q: "A extensão de cílios fica natural?", a: "Sim. O design é totalmente personalizado para valorizar sua beleza e harmonizar com seu rosto." },
            { q: "Quais outros serviços você oferece?", a: "Micropigmentação labial, design e tratamento de sobrancelhas e bronzeamento em cabine com marquinha de fita." },
            { q: "O bronzeamento deixa marquinha?", a: "Sim. O bronze em cabine é feito com técnica profissional para um bronzeado uniforme e com a marquinha desejada." },
            { q: "O que é o Doll Palace Beauty Studio?", a: "O Doll Palace é um sonho realizado: um espaço pensado e projetado com muito carinho para que cada cliente se sinta especial. Aqui você encontra profissionais de unhas, cabelo, estética e depilação — e cada uma de nós trabalha para que você se sinta cuidada e em casa." }
          ],
          servicesData: [
            { title: "Lash Design", items: [
              "Extensão de cílios\nCom design personalizado para valorizar o olhar de cada cliente, respeitando o formato dos olhos e do rosto.",
              "Classic Natural Lash\nExtensão fio a fio que proporciona um efeito natural, alongando e definindo os cílios.",
              "Volume Brasileiro ( Mais escolhido pelas clientes )\nTécnica que cria mais preenchimento e leveza, proporcionando um olhar marcante e elegante.",
              "Volume Híbrido\nCombinação da técnica clássica com volume, criando equilíbrio entre naturalidade e intensidade.",
              "Volume Egípcio\nTécnica estruturada que cria um efeito glamouroso e sofisticado.",
              "Mega Volume Brasileiro\nVersão mais intensa do volume brasileiro, ideal para quem deseja cílios mais cheios e impactantes.",
              "Wet Effect Lashes\nEfeito moderno que imita cílios molhados, criando textura e definição.",
              "Spider Lashes\nEstilo com picos mais definidos que cria um olhar marcante e fashion.",
              "Cílios 5D\nVolume intenso com múltiplos fios aplicados em cada cílio natural.",
              "Fox Eye Lashes\nDesign que alonga o olhar criando um efeito lifting e sofisticado.",
              "Lash Lift\nCurvatura dos cílios naturais sem extensão, proporcionando um efeito de cílios mais levantados.",
              "Remoção de Extensão de Cílios\nRemoção segura das extensões preservando os fios naturais."
            ] },
            { title: "Manutenção de Cílios", items: [
              "A manutenção é recomendada a cada 2 a 3 semanas, dependendo do ciclo natural dos seus cílios.",
              "Durante a manutenção repomos os fios que caíram e mantemos o design original do seu olhar.",
              "Caso ultrapasse o prazo recomendado ou haja menos de 40% - 50% das extensões, será necessário realizar remoção e nova aplicação completa."
            ] },
            { title: "Design de Sobrancelhas", items: [
              "Mapeamento e modelagem das sobrancelhas respeitando o formato do rosto para um resultado harmonioso e natural.",
              "Design + Henna\nModelagem das sobrancelhas com aplicação de henna para realçar o formato e preencher falhas temporariamente.",
              "Design + Tintura\nDesign com coloração dos fios, ideal para cobrir fios brancos e realçar o tom das sobrancelhas com acabamento natural.",
              "Brow Lamination\nTécnica que alinha e organiza os fios, criando sobrancelhas mais definidas, volumosas e com efeito lifting.",
              "Reconstrução de Sobrancelhas\nTratamento que fortalece e recupera fios enfraquecidos, ajudando a melhorar a saúde e densidade das sobrancelhas.",
              "Buço\nRemoção dos pelos da região superior dos lábios para um acabamento mais limpo e delicado."
            ] },
            { title: "Lábios", items: ["Micropigmentação Labial\nProcedimento que realça a cor natural dos lábios, melhora o contorno e proporciona aparência mais saudável."] },
            { title: "Bronze & Corpo", items: [
              "Bronze Completo - 1 sessão\nBronzeamento em cabine que proporciona um tom dourado natural com marquinha de fita.",
              "Jet Bronze\nBronzeamento a jato que proporciona cor imediata e uniforme sem exposição ao sol.",
              "Bronze Retoque\nSessão rápida para intensificar ou manter o bronze já existente.",
              "Pacote Bronze - 3 sessões\nPacote ideal para conquistar e manter um bronze mais duradouro.",
              "Banho de Chantilly\nHidratação corporal que ajuda a prolongar o bronze e deixar a pele macia e iluminada."
            ] },
            { title: "Cabelo", items: [
              "Escova Modeladora\nEscova profissional que modela e finaliza o cabelo deixando os fios alinhados e com movimento.",
              "Tratamento Capilar\nTratamento profundo para hidratar, nutrir e recuperar a saúde dos fios"
            ] },

          ],
          courses: "Treinamentos",
          coursesText: "Nossos treinamentos na área da Beleza.",
          training1Title: "Lash Designer Beginning",
          training1Desc: "Aprenda do zero a técnica de extensão de cílios com método profissional. Um treinamento completo para iniciantes que desejam iniciar na área da beleza e conquistar independência financeira com segurança e prática.",
          training2Title: "Personal Bronze",
          training2Desc: "Aprenda a técnica profissional de bronzeamento natural e uniforme. Um curso prático para quem deseja oferecer um serviço altamente procurado, com acabamento impecável e resultados que valorizam a beleza da cliente.",
          trainingInfoText: "Para mais informações sobre nossos treinamentos clique no botão abaixo e fale com um de nossos atendentes",
          trainingInfoButton: "Mais Informações",
          paymentMethods: "Formas de Pagamento",
          paymentMethodsText: "Cartão de Crédito – Dinheiro – Venmo – Zelle",
          getDirections: "Como Chegar",
          rateUsOnGoogle: "Nos Avalie no Google"
        }
      },
      en: {
        translation: {
          about: "About Me",
          aboutText: "Hello, I am Stefany Prado.\nLash Designer, micropigmenter, personal bronze and founder of Doll Palace Beauty Studio.\n\nMy journey in beauty began 11 years ago in Brazil.\nWhen I arrived in the US, I worked in other areas until I rediscovered my passion for aesthetics.\nAfter many courses, training and dedication, I built my space and today I live from what I love.\nNow I want to share this knowledge with you.",
          services: "Services",
          faq: "FAQ",
          contact: "Contact",
          bookNow: "Book Now",
          businessHours: "Business Hours",
          businessHoursText: "Monday to Monday – 7am to 10pm",
          faqData: [
            { q: "What is the most popular service?", a: "Eyelash extension is Stefany's flagship service. Each application is personalized with an ideal design for the shape of the eyes and face." },
            { q: "Do eyelash extensions look natural?", a: "Yes. The design is fully personalized to enhance your beauty and harmonize with your face." },
            { q: "What other services do you offer?", a: "Lip micropigmentation, eyebrow design and treatment, and cabin tanning with tan lines." },
            { q: "Does tanning leave tan lines?", a: "Yes. Cabin tanning is done with a professional technique for a uniform tan with the desired tan lines." },
            { q: "What is Doll Palace Beauty Studio?", a: "Doll Palace is a dream come true: a space thought out and designed with great care so that every client feels special. Here you will find nail, hair, aesthetics, and waxing professionals — and each of us works so that you feel cared for and at home." }
          ],
          servicesData: [
            { title: "Lash Design", items: [
              "Eyelash extension\nWith personalized design to enhance each client's look, respecting the shape of the eyes and face.",
              "Classic Natural Lash\nOne-by-one extension that provides a natural effect, lengthening and defining the lashes.",
              "Brazilian Volume ( Most chosen by clients )\nTechnique that creates more fullness and lightness, providing a striking and elegant look.",
              "Hybrid Volume\nCombination of the classic technique with volume, creating a balance between naturalness and intensity.",
              "Egyptian Volume\nStructured technique that creates a glamorous and sophisticated effect.",
              "Mega Brazilian Volume\nMore intense version of the Brazilian volume, ideal for those who want fuller and more impactful lashes.",
              "Wet Effect Lashes\nModern effect that mimics wet lashes, creating texture and definition.",
              "Spider Lashes\nStyle with more defined spikes that creates a striking and fashionable look.",
              "5D Lashes\nIntense volume with multiple strands applied to each natural lash.",
              "Fox Eye Lashes\nDesign that lengthens the look creating a lifting and sophisticated effect.",
              "Lash Lift\nCurvature of natural lashes without extension, providing a lifted lash effect.",
              "Eyelash Extension Removal\nSafe removal of extensions preserving natural lashes."
            ] },
            { title: "Eyelash Maintenance", items: [
              "Maintenance is recommended every 2 to 3 weeks, depending on the natural cycle of your lashes.",
              "During maintenance, we replace the lashes that have fallen out and maintain the original design of your look.",
              "If the recommended period is exceeded or there are less than 40% - 50% of the extensions, it will be necessary to perform removal and a complete new application."
            ] },
            { title: "Eyebrow Design", items: [
              "Mapping and shaping of the eyebrows respecting the shape of the face for a harmonious and natural result.",
              "Design + Henna\nEyebrow shaping with henna application to enhance the shape and temporarily fill in gaps.",
              "Design + Tint\nDesign with hair coloring, ideal for covering gray hairs and enhancing the eyebrow tone with a natural finish.",
              "Brow Lamination\nTechnique that aligns and organizes the hairs, creating more defined, voluminous eyebrows with a lifting effect.",
              "Eyebrow Reconstruction\nTreatment that strengthens and recovers weakened hairs, helping to improve the health and density of the eyebrows.",
              "Upper Lip\nRemoval of hair from the upper lip area for a cleaner and more delicate finish."
            ] },
            { title: "Lips", items: ["Lip Micropigmentation\nProcedure that enhances the natural color of the lips, improves contour, and provides a healthier appearance."] },
            { title: "Tan & Body", items: [
              "Full Tan - 1 session\nCabin tanning that provides a natural golden tone with tan lines.",
              "Jet Tan\nSpray tanning that provides immediate and uniform color without sun exposure.",
              "Tan Touch-up\nQuick session to intensify or maintain the existing tan.",
              "Tan Package - 3 sessions\nIdeal package to achieve and maintain a longer-lasting tan.",
              "Chantilly Bath\nBody hydration that helps prolong the tan and leave the skin soft and luminous."
            ] },
            { title: "Hair", items: [
              "Blowout\nProfessional blowout that styles and finishes the hair, leaving the strands aligned and with movement.",
              "Hair Treatment\nDeep treatment to hydrate, nourish, and recover the health of the strands."
            ] },

          ],
          courses: "Trainings",
          coursesText: "Our beauty training programs.",
          training1Title: "Lash Designer Beginning",
          training1Desc: "Learn the eyelash extension technique from scratch with a professional method. A complete training for beginners who want to start in the beauty area and achieve financial independence with safety and practice.",
          training2Title: "Personal Bronze",
          training2Desc: "Learn the professional natural and uniform tanning technique. A practical course for those who want to offer a highly sought-after service, with an impeccable finish and results that enhance the client's beauty.",
          trainingInfoText: "For more information about our trainings click the button below and talk to one of our attendants",
          trainingInfoButton: "More Information",
          paymentMethods: "Payment Methods",
          paymentMethodsText: "Credit Card – Cash – Venmo – Zelle",
          getDirections: "Get Directions",
          rateUsOnGoogle: "Rate Us on Google"
        }
      },
      es: {
        translation: {
          about: "Sobre Mí",
          aboutText: "Hola, soy Stefany Prado.\nLash Designer, micropigmentadora, personal bronze y fundadora de Doll Palace Beauty Studio.\n\nMi viaje en la belleza comenzó hace 11 años en Brasil.\nCuando llegué a los EE.UU., trabajé en otras áreas hasta reencontrar mi pasión por la estética.\nDespués de muchos cursos, entrenamiento y dedicación, construí mi espacio y hoy vivo de lo que amo.\nAhora quiero compartir este conocimiento contigo.",
          services: "Servicios",
          faq: "FAQ",
          contact: "Contacto",
          bookNow: "Reservar Ahora",
          businessHours: "Horario de Atención",
          businessHoursText: "Lunes a Lunes – 7am a 10pm",
          faqData: [
            { q: "¿Cuál es el servicio más buscado?", a: "La extensión de pestañas es el buque insignia de Stefany. Cada aplicación es personalizada con un diseño ideal para la forma de los ojos y el rostro." },
            { q: "¿La extensión de pestañas queda natural?", a: "Sí. El diseño es totalmente personalizado para valorar tu belleza y armonizar con tu rostro." },
            { q: "¿Qué otros servicios ofreces?", a: "Micropigmentación labial, diseño y tratamiento de cejas y bronceado en cabina con marca de cinta." },
            { q: "¿El bronceado deja marca?", a: "Sí. El bronceado en cabina se realiza con una técnica profesional para un bronceado uniforme y con la marca deseada." },
            { q: "¿Qué es Doll Palace Beauty Studio?", a: "Doll Palace es un sueño hecho realidad: un espacio pensado y diseñado con mucho cariño para que cada cliente se sienta especial. Aquí encontrarás profesionales de uñas, cabello, estética y depilación — y cada una de nosotras trabaja para que te sientas cuidada y en casa." }
          ],
          servicesData: [
            { title: "Lash Design", items: [
              "Extensión de pestañas\nCon diseño personalizado para valorar la mirada de cada cliente, respetando el formato de los ojos y del rostro.",
              "Classic Natural Lash\nExtensión pelo a pelo que proporciona un efecto natural, alargando y definiendo las pestañas.",
              "Volume Brasileiro ( Más elegido por las clientas )\nTécnica que crea más relleno y ligereza, proporcionando una mirada impactante y elegante.",
              "Volume Híbrido\nCombinación de la técnica clásica con volumen, creando equilibrio entre naturalidad e intensidad.",
              "Volume Egípcio\nTécnica estructurada que crea un efecto glamuroso y sofisticado.",
              "Mega Volume Brasileiro\nVersión más intensa del volumen brasileño, ideal para quien desea pestañas más llenas e impactantes.",
              "Wet Effect Lashes\nEfecto moderno que imita pestañas mojadas, creando textura y definición.",
              "Spider Lashes\nEstilo con picos más definidos que crea una mirada impactante y fashion.",
              "Cílios 5D\nVolumen intenso con múltiples hilos aplicados en cada pestaña natural.",
              "Fox Eye Lashes\nDiseño que alarga la mirada creando un efecto lifting y sofisticado.",
              "Lash Lift\nCurvatura de las pestañas naturales sin extensión, proporcionando un efecto de pestañas más levantadas.",
              "Remoción de Extensión de Cílios\nRemoción segura de las extensiones preservando los hilos naturales."
            ] },
            { title: "Mantenimiento de Pestañas", items: [
              "El mantenimiento se recomienda cada 2 a 3 semanas, dependiendo del ciclo natural de tus pestañas.",
              "Durante el mantenimiento, reponemos los hilos que se han caído y mantenemos el diseño original de tu mirada.",
              "Si se supera el plazo recomendado o hay menos del 40% - 50% de las extensiones, será necesario realizar la remoción y una nueva aplicación completa."
            ] },
            { title: "Diseño de Cejas", items: [
              "Mapeo y modelado de las cejas respetando el formato del rostro para un resultado armonioso y natural.",
              "Diseño + Henna\nModelado de las cejas con aplicación de henna para realzar el formato y rellenar fallas temporalmente.",
              "Diseño + Tintura\nDiseño con coloración de los hilos, ideal para cubrir hilos blancos y realzar el tono de las cejas con acabado natural.",
              "Brow Lamination\nTécnica que alinea y organiza los hilos, creando cejas más definidas, voluminosas y con efecto lifting.",
              "Reconstrucción de Cejas\nTratamiento que fortalece y recupera hilos debilitados, ayudando a mejorar la salud y densidad de las cejas.",
              "Labio Superior\nRemoción de los pelos de la región superior de los labios para un acabado más limpio y delicado."
            ] },
            { title: "Labios", items: ["Micropigmentación Labial\nProcedimiento que realza el color natural de los labios, mejora el contorno y proporciona una apariencia más saludable."] },
            { title: "Bronceado y Cuerpo", items: [
              "Bronceado Completo - 1 sesión\nBronceado en cabina que proporciona un tono dorado natural con marca de cinta.",
              "Jet Bronze\nBronceado a chorro que proporciona color inmediato y uniforme sin exposición al sol.",
              "Retoque de Bronceado\nSesión rápida para intensificar o mantener el bronceado ya existente.",
              "Paquete Bronceado - 3 sesiones\nPaquete ideal para conquistar y mantener un bronceado más duradero.",
              "Baño de Chantilly\nHidratación corporal que ayuda a prolongar el bronceado y dejar la piel suave e iluminada."
            ] },
            { title: "Cabello", items: [
              "Cepillado\nCepillado profesional que modela y finaliza el cabello dejando los hilos alineados y con movimiento.",
              "Tratamiento Capilar\nTratamiento profundo para hidratar, nutrir y recuperar la salud de los hilos."
            ] },

          ],
          courses: "Entrenamientos",
          coursesText: "Nuestros entrenamientos en el área de la Belleza.",
          training1Title: "Lash Designer Beginning",
          training1Desc: "Aprenda desde cero la técnica de extensión de pestañas con un método profesional. Un entrenamiento completo para principiantes que desean iniciarse en el área de la belleza y conquistar la independencia financiera con seguridad y práctica.",
          training2Title: "Personal Bronze",
          training2Desc: "Aprenda la técnica profesional de bronceado natural y uniforme. Un curso práctico para quienes desean ofrecer un servicio altamente demandado, con un acabado impecable y resultados que valoran la belleza de la cliente.",
          trainingInfoText: "Para más información sobre nuestros entrenamientos haga clic en el botón de abajo y hable con uno de nuestros asistentes",
          trainingInfoButton: "Más Información",
          paymentMethods: "Métodos de Pago",
          paymentMethodsText: "Tarjeta de Crédito – Efectivo – Venmo – Zelle",
          getDirections: "Cómo Llegar",
          rateUsOnGoogle: "Califícanos en Google"
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
