import { View, Text } from "react-native";
import MetricCard from "./MetricCard";

type ColdPanelProps = {
  temperature?: string;
  temperatureStatus?: string;
  totalItems?: number;
  totalCategories?: number;
};

function ColdPanel({
  temperature = "--",
  temperatureStatus = "--",
  totalItems = 0,
  totalCategories = 0,
}: ColdPanelProps) {
  return (
    <View className="w-full gap-3 mt-4">
      <View className="bg-white rounded-xl p-5 border-2 border-gray-300">
        <View className="flex-row items-center justify-between">
          <Text className="text-4xl font-bold text-gray-600">{temperature} °C</Text>
        </View>
        <Text className="text-sm text-gray-500 mt-1">Temperatura atual</Text>
      </View>
      <View className="flex-row gap-3">
        <MetricCard label="Itens em estoque" value={totalItems} style={{ flex: 1 }} />
        <MetricCard label="Categorias" value={totalCategories} style={{ flex: 1 }} />
      </View>
    </View>
  );
}

export default ColdPanel;
