import { Text, View } from "react-native";

import { AppScreen } from "../../../components/layout/appScreen";
import { StoreActionList } from "../../../components/storeRoom/actionList";
import { ActiveEmployeesPanel } from "../../../components/storeRoom/activeEmployeesPanel";
import { getActiveEmployees } from "../../../data/employees";

export default function StoreRoom() {
  const activeEmployees = getActiveEmployees();

  return (
    <AppScreen>
      <View className="p-4">
        <Text className="text-2xl font-bold text-slate-900">Loja</Text>
        <Text className="mt-1 text-sm text-slate-500">
          Controle operacional da loja
        </Text>

        <View className="mt-5">
          <ActiveEmployeesPanel employees={activeEmployees} />
        </View>

        <StoreActionList />
      </View>
    </AppScreen>
  );
}
