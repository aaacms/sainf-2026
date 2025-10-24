export interface Evento {
  horario: string;
  titulo: string;
  palestrante?: string;
  local?: string;
  descricao?: string;
  tipo: 'credenciamento' | 'palestra' | 'workshop' | 'pausa' | 'almoco' | 'coffee';
}

export interface DiaEvento {
  dia: string;
  data: string;
  eventos: Evento[];
}

export const cronogramaEventos: DiaEvento[] = [
  {
    dia: "Terça-feira",
    data: "04/11/2025",
    eventos: [
      {
        horario: "08:30 - 09:00",
        titulo: "Credenciamento",
        local: "Auditório do INPE",
        descricao: "Recepção dos participantes e entrega de materiais",
        tipo: "credenciamento"
      },
      {
        horario: "09:00 - 10:30",
        titulo: "Palestra 1",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "10:30 - 12:00",
        titulo: "Palestra 2",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "12:00 - 13:00",
        titulo: "Almoço",
        local: "RU",
        descricao: "Aproveite para fazer a sua refeição",
        tipo: "almoco"
      },
      {
        horario: "13:00 - 14:00",
        titulo: "Revista ComInG - Pitch dos Artigos",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "workshop"
      },
      {
        horario: "14:00 - 15:30",
        titulo: "Minicurso Python",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "workshop"
      },
      {
        horario: "15:30 - 16:00",
        titulo: "Coffee Break",
        local: "Hall do CT",
        descricao: "Partiu coffe break =)",
        tipo: "coffee"
      },
      {
        horario: "16:00 - 17:00",
        titulo: "Minicurso Python",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "workshop"
      },
      {
        horario: "19:30 - 21:00",
        titulo: "Palestra WoMakersCode",
        local: "Online (Link será enviado por e-mail)",
        descricao: "Palestra com a Winnie da WoMakersCode, ",
        tipo: "palestra"
      }
    ]
  },
  {
    dia: "Quarta-feira",
    data: "05/11/2025",
    eventos: [
      {
        horario: "08:30 - 09:00",
        titulo: "Credenciamento",
        local: "Auditório do INPE",
        descricao: "Recepção dos participantes e entrega de materiais",
        tipo: "credenciamento"
      },
      {
        horario: "09:00 - 10:30",
        titulo: "Palestra 3 - Laura Boemo - BitMarias + WoMakersCode",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "10:30 - 12:00",
        titulo: "Palestra 4 - Santos Viana - Megatecnologia",
        local: "Auditório do INPE",
        descricao: "Confira os projetos do PET Saúde e as oportunidades de bolsas disponíveis",
        tipo: "palestra"
      },
      {
        horario: "12:00 - 13:00",
        titulo: "Almoço",
        local: "RU",
        descricao: "Bom almoço :)",
        tipo: "almoco"
      },
      {
        horario: "13:00 - 14:00",
        titulo: "Revista ComInG - Pitch dos Artigos",
        local: "Auditório do INPE",
        descricao: "Veja as apresentações dos artigos que serão publicados na revista ComInG",
        tipo: "workshop"
      },
      {
        horario: "14:00 - 15:30",
        titulo: "Minicurso Virtualização/Storage Distribuído - Scherm",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "workshop"
      },
      {
        horario: "15:30 - 16:00",
        titulo: "Coffee Break",
        local: "Hall do INPE ",
        descricao: "Ninguém é de ferro, por isso vamos pegar um coffe hehe",
        tipo: "coffee"
      },
      {
        horario: "16:00 - 17:00",
        titulo: "Minicurso Virtualização/Storage Distribuído - Scherm",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "workshop"
      }
    ]
  },
  {
    dia: "Quinta-feira",
    data: "06/11/2025",
    eventos: [
      {
        horario: "08:30 - 09:00",
        titulo: "Credenciamento",
        local: "Auditório Pércio Reis - CT Anexo C",
        descricao: "Recepção dos participantes e entrega de materiais",
        tipo: "credenciamento"
      },
      {
        horario: "09:00 - 10:30",
        titulo: "Palestra Scherm",
        local: "Auditório Pércio Reis - CT Anexo C",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "10:30 - 11:15",
        titulo: "Coffee Break",
        local: "Hall do CT",
        descricao: "Agora está na hora do descanso e bora de coffe break!",
        tipo: "coffee"
      },
      {
        horario: "11:15 - 12:00",
        titulo: "Encerramento + Sorteio de premiação pros presentes",
        local: "Auditório Pércio Reis - CT Anexo C",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "12:00 - 13:00",
        titulo: "Almoço",
        local: "RU",
        descricao: "Não esqueça de limpar o prato ;)",
        tipo: "almoco"
      },
      {
        horario: "14:00 - 18:30",
        titulo: "Maratona de Programação - Nível Iniciante",
        local: "Sala 334 - Anexo Principal CT",
        descricao: "Prepare-se para a principal competição de programação da UFSM!",
        tipo: "workshop"
      },
      {
        horario: "14:00 - 18:30",
        titulo: "Maratona de Programação - Nível Avançado",
        local: "Sala 337 - Anexo Principal CT",
        descricao: "Prepare-se para a principal competição de programação da UFSM!",
        tipo: "workshop"
      }
    ]
  }
];
