import Header from "@/components/Header";
import Footer from "@/components/footer";
import MetricCard from "@/components/MetricCard";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BarChart3 } from "lucide-react-native";

const chartDays = Array.from({ length: 30 }, (_, i) => i);
const chartFooterLabels = ["01", "05", "10", "15", "20", "25", "30"];

const topProducts: {
  rank: number; name: string; qty: string; change: string; changeColor: string;
}[] = [];

const summary: { label: string; value: string }[] = [];

export default function RelatorioMensal() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      <Header
        style={{ backgroundColor: "#0074f0" }}
        title="Relatório Mensal"
        subtitle="--"
      />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row gap-2.5">
          <MetricCard label="Entradas no mês" value={0} style={{ flex: 1 }} />
          <MetricCard label="Saídas no mês" value={0} style={{ flex: 1 }} />
        </View>

        <View className="bg-white rounded-xl p-5 border border-gray-200">
          <View className="flex-row items-center gap-1.5 mb-4">
            <BarChart3 size={16} color="#6b7280" />
            <Text className="text-sm font-semibold text-gray-700">Movimentações</Text>
          </View>
          <View className="flex-row items-end gap-0.5 h-28">
            {chartDays.map((i) => (
              <View key={i} className="flex-1 items-center justify-end">
                <View className="w-full max-w-2 bg-blue-500 rounded-sm" style={{ height: 4, minHeight: 4 }} />
              </View>
            ))}
          </View>
          <View className="flex-row justify-between mt-2">
            {chartFooterLabels.map((l) => (
              <Text key={l} className="text-xs text-gray-400">{l}</Text>
            ))}
          </View>
        </View>

        <Text className="text-sm font-bold text-gray-500 tracking-wider -mb-1 uppercase">Mais movimentados</Text>
        {topProducts.length > 0 && (
          <View className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {topProducts.map((p) => (
              <View key={p.rank} className="flex-row items-center p-3.5 border-b border-gray-100">
                <View className="w-7 h-7 rounded-lg bg-gray-100 justify-center items-center mr-3">
                  <Text className="text-sm font-bold text-gray-500">{p.rank}</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-medium text-gray-900">{p.name}</Text>
                  <Text className="text-xs text-gray-400 mt-0.5">{p.qty}</Text>
                </View>
                <Text className="text-sm font-bold" style={{ color: p.changeColor }}>{p.change}</Text>
              </View>
            ))}
          </View>
        )}

        <Text className="text-sm font-bold text-gray-500 tracking-wider -mb-1 uppercase">Resumo estatístico</Text>
        {summary.length > 0 && (
          <View className="flex-row flex-wrap gap-2.5">
            {summary.map((s) => (
              <View key={s.label} className="w-1/2 bg-white rounded-xl p-4 border border-gray-200">
                <Text className="text-xs text-gray-500 mb-1">{s.label}</Text>
                <Text className="text-xl font-bold text-gray-900">{s.value}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      <Footer />
    </View>
  );
}
