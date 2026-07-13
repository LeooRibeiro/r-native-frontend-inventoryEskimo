import { Employee } from "@/src/types/auth";

const MOCK_EMPLOYEES: Employee[] = [
  { id: "1", nome: "Carlos Silva", cargo: "Operador de Loja" },
  { id: "2", nome: "Ana Oliveira", cargo: "Supervisora" },
  { id: "3", nome: "João Santos", cargo: "Repositor" },
  { id: "4", nome: "Maria Souza", cargo: "Operadora de Loja" },
];

export async function login(employeeId: string): Promise<{ employee: Employee; token: string }> {
  const employee = MOCK_EMPLOYEES.find((e) => e.id === employeeId);
  if (!employee) throw new Error("Funcionário não encontrado");

  console.log(`[auth] Login realizado: ${employee.nome}`);

  return {
    employee,
    token: `mock_token_${employee.id}_${Date.now()}`,
  };
}

export async function logout(token: string | null): Promise<void> {
  console.log(`[auth] Logout realizado`, token);
}

export async function validateToken(token: string): Promise<Employee | null> {
  console.log(`[auth] Validando token...`, token);

  const parts = token.split("_");
  if (parts.length < 2) return null;

  const employeeId = parts[1];
  return MOCK_EMPLOYEES.find((e) => e.id === employeeId) ?? null;
}

export function getMockEmployees(): Employee[] {
  return MOCK_EMPLOYEES;
}
