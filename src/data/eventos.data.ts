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
    data: "12/11/2024",
    eventos: [
      {
        horario: "08:30 - 09:00",
        titulo: "Credenciamento",
        local: "Hall de Entrada",
        descricao: "Recepção dos participantes e entrega de materiais",
        tipo: "credenciamento"
      },
      {
        horario: "09:00 - 10:30",
        titulo: "Palestra de Abertura",
        palestrante: "Dr. João Silva",
        local: "Auditório Principal",
        descricao: "Apresentação inaugural sobre os principais temas do evento",
        tipo: "palestra"
      },
      {
        horario: "10:45 - 11:30",
        titulo: "Workshop Técnico I",
        palestrante: "Profª. Maria Santos",
        local: "Sala 101",
        descricao: "Workshop prático sobre metodologias avançadas",
        tipo: "workshop"
      },
      {
        horario: "11:30 - 13:00",
        titulo: "Intervalo para Almoço",
        local: "Refeitório",
        descricao: "Pausa para almoço e networking",
        tipo: "almoco"
      },
      {
        horario: "13:30 - 15:30",
        titulo: "Palestra Principal",
        palestrante: "Dr. Carlos Oliveira",
        local: "Auditório Principal",
        descricao: "Tendências e inovações na área",
        tipo: "palestra"
      },
      {
        horario: "15:30 - 15:45",
        titulo: "Coffee Break",
        local: "Hall de Entrada",
        descricao: "Pausa para café e networking",
        tipo: "coffee"
      },
      {
        horario: "15:45 - 17:00",
        titulo: "Mesa Redonda",
        palestrante: "Diversos Especialistas",
        local: "Auditório Principal",
        descricao: "Discussão interativa sobre os temas apresentados",
        tipo: "palestra"
      }
    ]
  },
  {
    dia: "Quarta-feira",
    data: "13/11/2024",
    eventos: [
      {
        horario: "08:30 - 09:00",
        titulo: "Credenciamento",
        local: "Hall de Entrada",
        descricao: "Recepção dos participantes",
        tipo: "credenciamento"
      },
      {
        horario: "09:00 - 10:30",
        titulo: "Workshop Prático I",
        palestrante: "Prof. André Costa",
        local: "Laboratório A",
        descricao: "Sessão hands-on com ferramentas práticas",
        tipo: "workshop"
      },
      {
        horario: "10:45 - 11:30",
        titulo: "Apresentação de Cases",
        palestrante: "Empresas Parceiras",
        local: "Sala 102",
        descricao: "Cases de sucesso e aplicações reais",
        tipo: "palestra"
      },
      {
        horario: "11:30 - 13:00",
        titulo: "Intervalo para Almoço",
        local: "Refeitório",
        descricao: "Pausa para almoço e networking",
        tipo: "almoco"
      },
      {
        horario: "13:30 - 15:30",
        titulo: "Palestra Técnica Avançada",
        palestrante: "Dra. Ana Paula Lima",
        local: "Auditório Principal",
        descricao: "Aprofundamento em técnicas avançadas",
        tipo: "palestra"
      },
      {
        horario: "15:30 - 15:45",
        titulo: "Coffee Break",
        local: "Hall de Entrada",
        descricao: "Pausa para café e networking",
        tipo: "coffee"
      },
      {
        horario: "15:45 - 17:00",
        titulo: "Workshop Prático II",
        palestrante: "Prof. Roberto Mendes",
        local: "Laboratório B",
        descricao: "Continuação das atividades práticas",
        tipo: "workshop"
      }
    ]
  },
  {
    dia: "Quinta-feira",
    data: "14/11/2024",
    eventos: [
      {
        horario: "08:30 - 09:00",
        titulo: "Credenciamento",
        local: "Hall de Entrada",
        descricao: "Recepção dos participantes",
        tipo: "credenciamento"
      },
      {
        horario: "09:00 - 10:30",
        titulo: "Painel de Discussão",
        palestrante: "Painel de Especialistas",
        local: "Auditório Principal",
        descricao: "Debates sobre o futuro da área",
        tipo: "palestra"
      },
      {
        horario: "10:45 - 11:30",
        titulo: "Sessão de Networking",
        local: "Sala de Convivência",
        descricao: "Momento para conexões e troca de experiências",
        tipo: "workshop"
      },
      {
        horario: "11:30 - 13:00",
        titulo: "Intervalo para Almoço",
        local: "Refeitório",
        descricao: "Pausa para almoço e networking",
        tipo: "almoco"
      },
      {
        horario: "13:30 - 15:30",
        titulo: "Workshop de Encerramento",
        palestrante: "Equipe Organizadora",
        local: "Auditório Principal",
        descricao: "Síntese dos aprendizados e próximos passos",
        tipo: "workshop"
      },
      {
        horario: "15:30 - 15:45",
        titulo: "Coffee Break",
        local: "Hall de Entrada",
        descricao: "Pausa para café",
        tipo: "coffee"
      },
      {
        horario: "15:45 - 17:00",
        titulo: "Cerimônia de Encerramento",
        palestrante: "Comissão Organizadora",
        local: "Auditório Principal",
        descricao: "Agradecimentos e entrega de certificados",
        tipo: "palestra"
      }
    ]
  }
];
