import Header from "@/components/Header";
import Footer from "@/components/footer";
import MetricCard from "@/components/MetricCard";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Package } from "lucide-react-native";

const chartItems = [
  { label: "Entradas", color: "#22c55e" },
  { label: "Saídas", color: "#ef4444" },
  { label: "Transfer.", color: "#3b82f6" },
];

const operations: {
  name: string; person: string; time: string; qty: string; unit: string;
}[] = [];

export default function RelatorioDia() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      <Header
        style={{ backgroundColor: "#0074f0" }}
        title="Relatório do Dia"
        subtitle="--"
      />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row gap-2.5">
          <MetricCard label="Entradas" value={0} style={{ flex: 1 }} />
          <MetricCard label="Saídas" value={0} style={{ flex: 1 }} />
          <MetricCard label="Transfer." value={0} style={{ flex: 1 }} />
        </View>

        <View className="flex-row items-center gap-1.5 bg-white rounded-xl p-3.5 border border-gray-200">
          <Package size={16} color="#6b7280" />
          <Text className="text-sm font-semibold text-gray-700">0 operações</Text>
          <Text className="text-sm text-gray-300">·</Text>
          <Text className="text-sm font-semibold text-gray-700">0 unidades</Text>
        </View>

        <View className="bg-white rounded-xl p-5 border border-gray-200 items-center">
          <View className="flex-row items-end gap-6 h-36">
            {chartItems.map((item) => (
              <View key={item.label} className="items-center gap-2">
                <View className="w-12 rounded-lg" style={{ height: 8, backgroundColor: item.color }} />
                <Text className="text-xs font-medium text-gray-500">{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text className="text-sm font-bold text-gray-500 tracking-wider -mb-1 uppercase">Operações realizadas</Text>
        {operations.length > 0 && (
          <View className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {operations.map((op, i) => (
              <View key={i} className="flex-row items-center p-3.5 border-b border-gray-100">
                <View className="w-9 h-9 rounded-lg bg-gray-100 justify-center items-center mr-3">
                  <Package size={18} color="#6b7280" />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-medium text-gray-900">{op.name}</Text>
                  <Text className="text-xs text-gray-400 mt-0.5">{op.person} · {op.time}</Text>
                </View>
                <View className={`rounded-lg px-2.5 py-1 ${op.qty.startsWith("+") ? "bg-green-50" : "bg-pink-50"}`}>
                  <Text className={`text-sm font-bold ${op.qty.startsWith("+") ? "text-green-800" : "text-pink-800"}`}>
                    {op.qty} {op.unit}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      <Footer />
    </View>
  );
}
