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
    data: "13/10/2026",
    eventos: [
      {
        horario: "08:30 - 09:00",
        titulo: "Credenciamento",
        local: "Auditório do INPE",
        descricao: "Recepção dos participantes e entrega de materiais",
        tipo: "credenciamento"
      },
      {
        horario: "09:00 - 12:00",
        titulo: "Palestra de Abertura",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "10:30 - 10:45",
        titulo: "Coffee Break",
        local: "Hall do CT",
        descricao: "Partiu coffe break =)",
        tipo: "coffee"
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
        titulo: "vem ai",
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
      }
    ]
  },
  {
    dia: "Quarta-feira",
    data: "14/10/2026",
    eventos: [
      {
        horario: "08:30 - 09:00",
        titulo: "Credenciamento",
        local: "Auditório do INPE",
        descricao: "Recepção dos participantes e entrega de materiais",
        tipo: "credenciamento"
      },
      {
        horario: "09:00 - 12:00",
        titulo: "Revista ComInG - Pitch dos Artigos",
        local: "Sala X",
        descricao: "Veja as apresentações dos artigos que serão publicados na revista ComInG",
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
        titulo: "Maratona de SQL",
        local: "Sala X",
        descricao: "",
        tipo: "workshop"
      }
    ]
  },
  {
    dia: "Quinta-feira",
    data: "15/10/2026",
    eventos: [
      {
        horario: "08:30 - 09:00",
        titulo: "Credenciamento",
        local: "Auditório do INPE",
        descricao: "Recepção dos participantes e entrega de materiais",
        tipo: "credenciamento"
      },
      {
        horario: "09:00 - 12:00",
        titulo: "Painel de Egressos",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "10:30 - 10:45",
        titulo: "Coffee Break",
        local: "Em frente ao Auditório do INPE",
        descricao: "Agora está na hora do descanso e bora de coffe break!",
        tipo: "coffee"
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
        titulo: "Maratona de Programação - Nível Avançado",
        local: "Sala 337 - Anexo Principal CT",
        descricao: "Prepare-se para a principal competição de programação da UFSM!",
        tipo: "workshop"
      }
    ]
  }
];
