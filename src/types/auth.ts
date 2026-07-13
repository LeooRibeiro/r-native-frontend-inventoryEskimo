export type Employee = {
  id: string;
  nome: string;
  cargo: string;
};

export type RegistroPonto = {
  id: string;
  funcionarioId: string;
  funcionarioNome: string;
  tipo: "entrada" | "saida";
  horario: string;
  timestamp: number;
};

export type AuthState = {
  employee: Employee | null;
  token: string | null;
  isAuthenticated: boolean;
};
