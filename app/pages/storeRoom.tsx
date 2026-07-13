import Header from "@/components/Header";
import Footer from "@/components/footer";
import MetricCard from "@/components/MetricCard";
import CardButton from "@/components/cardButton";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Clock, BarChart3 } from "lucide-react-native";
import { router } from "expo-router";

const reports = [
  { route: "/pages/store/clockLogin", title: "Ponto Eletrônico", subtitle: "Registrar entrada e saída", icon: Clock, bg: "#0074f0" },
  { route: "/pages/store/monthlyReport", title: "Relatório Mensal", subtitle: "Relátorio geral", icon: BarChart3, bg: "#8B5CF6" },
];

export default function StoreRoom() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      <Header style={{ backgroundColor: "#fff" }} title="">
        <View className="w-full gap-3 mt-4">
        
            <View className="flex-row items-center justify-between">
              <Text className="text-3xl font-bold text-gray-600">Loja</Text>
            </View>
            <Text className="text-sm text-gray-500 mt-1">Operação atual</Text>

          <View className="flex-row gap-3">
            <MetricCard label="Itens em freezer" value={0} style={{ flex: 1 }} />
            <MetricCard label="Reposições" value={0} style={{ flex: 1 }} />
          </View>
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
                footerText=""
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
