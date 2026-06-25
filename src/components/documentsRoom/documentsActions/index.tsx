import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

export function DocumentationActions() {
  return (
    <View className="rounded-lg bg-blue-600 p-4">
      <View className="mt-3 overflow-hidden rounded-lg">
        <Calendar
          hideExtraDays
          firstDay={1}
          markedDates={{
            "2026-01-01": {
              marked: true,
              dotColor: "#ef4444",
            },
            "2026-04-03": {
              marked: true,
              dotColor: "#ef4444",
            },
          }}
          theme={{
            calendarBackground: "#2563eb",
            monthTextColor: "#ffffff",
            dayTextColor: "#ffffff",
            todayTextColor: "#facc15",
            arrowColor: "#ffffff",
          }}
        />
      </View>
      <View className="mt-4 gap-2">
        <Text className="text-sm font-medium uppercase text-blue-100">
          Horário de Funcionamento
        </Text>
        <View className="flex-row justify-between rounded-lg bg-white/15 p-3">
          <Text className="font-medium text-blue-100">Segunda-feira</Text>

          <Text className="font-bold text-white">13:00 - 20:00</Text>
        </View>

        <View className="flex-row justify-between rounded-lg bg-white/15 p-3">
          <Text className="font-medium text-blue-100">Terça a Domingo</Text>

          <Text className="font-bold text-white">09:00 - 20:00</Text>
        </View>
      </View>
    </View>
  );
}
