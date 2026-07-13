import { View, Text } from "react-native";
import MetricCard from "./MetricCard";

type ColdPanelProps = {
  totalItems?: number;
  totalAvarias?: number;
};

function ColdPanel({
  totalItems = 0,
  totalAvarias = 0,
}: ColdPanelProps) {
  return (
    <View className="w-full gap-3 mt-4">
      <View className="flex-row gap-3">
        <MetricCard label="Itens em estoque" value={totalItems} style={{ flex: 1 }} />
        <MetricCard label="Avarias" value={totalAvarias} style={{ flex: 1 }} />
      </View>
    </View>
  );
}

export default ColdPanel;
