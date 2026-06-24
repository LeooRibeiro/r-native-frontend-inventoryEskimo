import { Text, View } from "react-native";

import type { Employee } from "../../../data/employees";

type ActiveEmployeesPanelProps = {
  employees: Employee[];
};

export function ActiveEmployeesPanel({ employees }: ActiveEmployeesPanelProps) {
  return (
    <View className="rounded-lg bg-red-600 p-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-medium uppercase text-red-100">
          Funcionários ativos
        </Text>
        <Text className="text-3xl font-bold text-white">
          {employees.length}
        </Text>
      </View>

      <View className="mt-4 gap-3">
        {employees.map((employee) => (
          <View key={employee.id} className="rounded-lg bg-white/15 p-3">
            <View className="flex-row items-center justify-between gap-3">
              <View className="flex-1">
                <Text className="text-base font-semibold text-white">
                  {employee.name}
                </Text>
                <Text className="mt-1 text-sm text-red-100">
                  {employee.role}
                </Text>
              </View>

              <Text className="text-sm font-semibold text-white">
                {employee.clockedInAt}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
