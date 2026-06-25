export type Employee = {
  id: string;
  name: string;
  role: string;
  clockedInAt: string | null;
  isClockedIn: boolean;
};

const employees: Employee[] = [
  {
    id: "employee-1",
    name: "Ana Souza",
    role: "Operadora de loja",
    clockedInAt: "08:02",
    isClockedIn: true,
  },
  {
    id: "employee-2",
    name: "Bruno Lima",
    role: "Repositor",
    clockedInAt: "08:15",
    isClockedIn: true,
  },
  {
    id: "employee-3",
    name: "Carla Mendes",
    role: "Caixa",
    clockedInAt: "13:45",
    isClockedIn: true,
  },
];

export function getActiveEmployees() {
  return employees.filter((employee) => employee.isClockedIn);
}
