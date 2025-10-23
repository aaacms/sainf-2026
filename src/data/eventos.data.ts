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
    data: "04/11/2024",
    eventos: [
      {
        horario: "08:30",
        titulo: "Credenciamento",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "credenciamento"
      },
      {
        horario: "09:00",
        titulo: "Palestra 1",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "palestra"
      },
      {
        horario: "10:30",
        titulo: "Palestra 2",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "palestra"
      },
      {
        horario: "13:00",
        titulo: "Revista do Libre",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "palestra"
      },
      {
        horario: "14:00",
        titulo: "Minicurso python",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "workshop"
      },
      {
        horario: "15:30",
        titulo: "Coffee Break",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "coffee"
      },
      {
        horario: "16:00",
        titulo: "Minicurso python",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "workshop"
      }
    ]
  },
  {
    dia: "Quarta-feira",
    data: "05/11/2024",
    eventos: [
      {
        horario: "08:30",
        titulo: "Credenciamento",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "credenciamento"
      },
      {
        horario: "09:00",
        titulo: "Palestra 3 - Laura Boemo - BitMarias + Womakers Code",
        palestrante: "Laura Boemo",
        local: "-",
        descricao: "confirmado",
        tipo: "palestra"
      },
      {
        horario: "10:30",
        titulo: "Palestra 4 - Santos Megatecnologia",
        palestrante: "Santos Megatecnologia",
        local: "-",
        descricao: "confirmado",
        tipo: "palestra"
      },
      {
        horario: "13:00",
        titulo: "Revista do Libre",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "palestra"
      },
      {
        horario: "14:00",
        titulo: "Minicurso Virtualização/Storage Distribuído",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "workshop"
      },
      {
        horario: "15:30",
        titulo: "Coffee Break",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "coffee"
      },
      {
        horario: "16:00",
        titulo: "Minicurso Virtualização/Storage Distribuído",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "workshop"
      }
    ]
  },
  {
    dia: "Quinta-feira",
    data: "06/11/2024",
    eventos: [
      {
        horario: "08:30",
        titulo: "Credenciamento",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "credenciamento"
      },
      {
        horario: "09:00",
        titulo: "Palestra Scherm",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "palestra"
      },
      {
        horario: "10:30",
        titulo: "Encerramento + Sorteio de premiação pros presentes",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "palestra"
      },
      {
        horario: "13:00",
        titulo: "TCCs",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "palestra"
      },
      {
        horario: "14:00",
        titulo: "Maratona",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "workshop"
      },
      {
        horario: "15:30",
        titulo: "Coffee Break",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "coffee"
      },
      {
        horario: "16:00",
        titulo: "Maratona",
        palestrante: "-",
        local: "-",
        descricao: "-",
        tipo: "workshop"
      }
    ]
  }
];
