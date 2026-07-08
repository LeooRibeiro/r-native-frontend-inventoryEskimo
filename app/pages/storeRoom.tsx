import Header from "@/components/Header";
import Footer from "@/components/footer";
import MetricCard from "@/components/MetricCard";
import StatusBadge from "@/components/StatusBadge";
import CardButton from "@/components/cardButton";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FileText, BarChart3 } from "lucide-react-native";
import { router } from "expo-router";

const reports = [
  { route: "/pages/store/relatorioDia", title: "Relatório do Dia", subtitle: "Resumo de entradas, saídas e operações de hoje.", icon: FileText, bg: "#0074f0" },
  { route: "/pages/store/relatorioMensal", title: "Relatório Mensal", subtitle: "Métricas consolidadas e produtos mais movimentados.", icon: BarChart3, bg: "#8B5CF6" },
];

export default function StoreRoom() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      <Header style={{ backgroundColor: "#0074f0" }} title="Loja">
        <View className="flex-row justify-between items-center mt-3">
          <View>
            <Text className="text-xs text-white/70">Operação atual</Text>
            <Text className="text-base font-semibold text-white mt-0.5">Turno em andamento</Text>
          </View>
          <StatusBadge label="Ativa" />
        </View>
        <View className="flex-row gap-2.5 mt-4">
          <MetricCard label="Vendas" value={0} style={{ flex: 1 }} />
          <MetricCard label="Reposições" value={0} style={{ flex: 1 }} />
          <MetricCard label="SKUs" value={0} style={{ flex: 1 }} />
        </View>
      </Header>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-sm font-bold text-gray-500 tracking-wider uppercase">Relatórios</Text>
        <View className="gap-3">
          {reports.map((r) => {
            const Icon = r.icon;
            return (
              <CardButton
                key={r.route}
                onPress={() => router.push(r.route as any)}
                title={r.title}
                subtitle={r.subtitle}
                footerText="--"
                icon={Icon}
                color="#fff"
                iconBgColor={r.bg}
                iconColor="#ffffff"
                iconSize={24}
              />
            );
          })}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
