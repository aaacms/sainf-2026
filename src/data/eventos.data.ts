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
        titulo: "Revista do prof. Giovani Librelotto",
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
        titulo: "Palestra 3 - Laura Boemo - BitMarias + WoMakersCode (confirmado)",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "10:30 - 12:00",
        titulo: "Palestra 4 - Santos Megatecnologia (confirmado)",
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
        titulo: "Revista do prof. Giovani Librelotto",
        local: "Auditório do INPE",
        descricao: "Veja as apresentações dos artigos que serão publicados na revista do prof. Giovani Librelotto",
        tipo: "workshop"
      },
      {
        horario: "14:00 - 15:30",
        titulo: "Minicurso Virtualização/Storage Distribuído",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "workshop"
      },
      {
        horario: "15:30 - 16:00",
        titulo: "Coffee Break",
        local: "Hall do CT",
        descricao: "Ninguém é de ferro, por isso vamos pegar um coffe hehe",
        tipo: "coffee"
      },
      {
        horario: "16:00 - 17:00",
        titulo: "Minicurso Virtualização/Storage Distribuído",
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
        local: "Auditório Wilson Aita - CT Anexo C",
        descricao: "Recepção dos participantes e entrega de materiais",
        tipo: "credenciamento"
      },
      {
        horario: "09:00 - 10:30",
        titulo: "Palestra Scherm",
        local: "Auditório Wilson Aita - CT Anexo C",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "10:30 - 12:00",
        titulo: "Encerramento + Sorteio de premiação pros presentes",
        local: "Auditório Wilson Aita - CT Anexo C",
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
        horario: "13:00 - 14:00",
        titulo: "TCCs",
        local: "Auditório Wilson Aita - CT Anexo C",
        descricao: "Veja as principais linhas de pesquisa dos alunos da Informática",
        tipo: "workshop"
      },
      {
        horario: "14:00 - 15:30",
        titulo: "Maratona de Programação",
        local: "Auditório Wilson Aita - CT Anexo C",
        descricao: "Prepare-se para a principal competição de programação da UFSM!",
        tipo: "workshop"
      },
      {
        horario: "15:30 - 16:00",
        titulo: "Coffee Break",
        local: "Hall do CT",
        descricao: "Agora está na hora do descanso e bora de coffe break!",
        tipo: "coffee"
      },
      {
        horario: "16:00 - 17:00",
        titulo: "Maratona de Programação",
        local: "Auditório Wilson Aita - CT Anexo C",
        descricao: "Prepare-se para a principal competição de programação da UFSM!",
        tipo: "workshop"
      }
    ]
  }
];
