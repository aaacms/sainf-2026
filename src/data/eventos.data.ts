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
        horario: "09:00 - 09:30",
        titulo: "Credenciamento",
        local: "Auditório do INPE",
        descricao: "Recepção dos participantes e entrega de materiais",
        tipo: "credenciamento"
      },
      {
        horario: "09:30 - 10:20",
        titulo: "Abertura",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "10:20 - 10:50",
        titulo: "Coffee Break",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "coffee"
      },
      {
        horario: "10:40 - 12:00",
        titulo: "Palestra 1",
        local: "Em frente ao Auditório do INPE",
        descricao: "Partiu coffe break =)",
        tipo: "palestra"
      },
      {
        horario: "14:00 - 15:15",
        titulo: "Palestra 2",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "15:15 - 15:45",
        titulo: "Coffee Break",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "coffee"
      },
      {
        horario: "15:45 - 17:00",
        titulo: "Palestra 3",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "palestra"
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
        horario: "09:00 - 09:30",
        titulo: "Abertura",
        local: "Sala 355 - CT",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "09:30 - 10:20",
        titulo: "Revista ComInG - Pitch dos Artigos",
        local: "Sala 355 - CT",
        descricao: "Veja as apresentações dos artigos que serão publicados na revista ComInG",
        tipo: "palestra"
      },
      {
        horario: "10:20 - 10:50",
        titulo: "Coffee Break",
        local: "Sala 355 - CT",
        descricao: "",
        tipo: "coffee"
      },
      {
        horario: "10:50 - 12:00",
        titulo: "Revista ComInG - Pitch dos Artigos",
        local: "Sala 355 - CT",
        descricao: "Veja as apresentações dos artigos que serão publicados na revista ComInG",
        tipo: "palestra"
      },
      {
        horario: "14:00 - 15:15",
        titulo: "Maratona de SQL",
        local: "Sala 355 - CT",
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
        horario: "09:00 - 09:30",
        titulo: "Abertura",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "09:30 - 10:20",
        titulo: "Palestra grupos de pesquisa",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "palestra"
      },
      {
        horario: "10:20 - 10:50",
        titulo: "Coffee Break",
        local: "Em frente ao Auditório do INPE",
        descricao: "Agora está na hora do descanso e bora de coffe break!",
        tipo: "coffee"
      },
      {
        horario: "10:50 - 12:00",
        titulo: "Palestra 4",
        local: "Sala",
        descricao: "",
        tipo: "almoco"
      },
      {
        horario: "14:00 - 15:15",
        titulo: "Palestra 5",
        local: "Auditório do INPE",
        descricao: "",
        tipo: "workshop"
      },
      {
        horario: "15:15 - 15:45",
        titulo: "Coffee Break",
        local: "Em frente ao Auditório do INPE",
        descricao: "Agora está na hora do descanso e bora de coffe break!",
        tipo: "coffee"
      },
      {
        horario: "15:45 - 17:00",
        titulo: "Encerramento",
        local: "Em frente ao Auditório do INPE",
        descricao: "",
        tipo: "coffee"
      }
    ]
  }
];
