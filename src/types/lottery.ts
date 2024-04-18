type Lottery = {
  name: string;
  label: string;
  color: string;
};

type LotteryData = {
  acumulou: boolean;
  concurso: number;
  data: string;
  dezenas: string[];
  loteria: string;
  proximoConcurso: number;
  valorAcumuladoProximoConcurso: number;
  dataProximoConcurso: string;
  valorEstimadoProximoConcurso: number;
  premiacoes: {
    descricao: string;
    faixa: number;
    ganhadores: number;
    valorPremio: number;
  }[];
};
