import { Text, View } from "react-native";

type SummaryPanelProps = {
  cratesTotal: number;
  itemsTotal: number;
};

export function SummaryPanel({ cratesTotal, itemsTotal }: SummaryPanelProps) {
  return (
    <View className="rounded-lg bg-blue-600 p-4">
      <Text className="text-sm font-medium uppercase text-blue-100">
        Visor da Câmara
      </Text>

      <View className="mt-4 flex-row gap-3">
        <View className="flex-1 rounded-lg bg-white/15 p-3">
          <Text className="text-sm font-medium text-blue-100">
            Total de engradados
          </Text>
          <Text className="mt-2 text-3xl font-bold text-white">
            {cratesTotal}
          </Text>
        </View>

        <View className="flex-1 rounded-lg bg-white/15 p-3">
          <Text className="text-sm font-medium text-blue-100">
            Total de itens
          </Text>
          <Text className="mt-2 text-3xl font-bold text-white">
            {itemsTotal}
          </Text>
        </View>
      </View>
    </View>
  );
}
