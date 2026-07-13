import Header from "@/components/Header";
import Footer from "@/components/footer";
import MetricCard from "@/components/MetricCard";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BarChart3, Store, Clock } from "lucide-react-native";
import { router } from "expo-router";

export default function RelatorioMensal() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      <Header style={{ backgroundColor: "#fff" }} title="Relatório Mensal" />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white rounded-xl p-5 border border-gray-200">
          <View className="flex-row items-center gap-1.5 mb-4">
            <BarChart3 size={16} color="#6b7280" />
            <Text className="text-sm font-semibold text-gray-700">
              Movimentações
            </Text>
          </View>
          <View className="flex-row gap-4">
            <View className="flex-1 items-center p-3 bg-green-50 rounded-lg">
              <Text className="text-2xl font-bold text-green-700">0</Text>
              <Text className="text-xs font-semibold text-green-600 mt-1">
                Entradas
              </Text>
            </View>
            <View className="flex-1 items-center p-3 bg-red-50 rounded-lg">
              <Text className="text-2xl font-bold text-red-700">0</Text>
              <Text className="text-xs font-semibold text-red-600 mt-1">
                Saídas
              </Text>
            </View>
          </View>
        </View>

        <Text className="text-sm font-bold text-gray-500 tracking-wider -mb-1 uppercase">
          Relatórios
        </Text>
        <View className="gap-3">
          <TouchableOpacity
            className="flex-row items-center bg-white rounded-xl p-4 border border-gray-200"
            activeOpacity={0.7}
            onPress={() => router.push("/")}
          >
            <View className="w-11 h-11 rounded-xl bg-blue-50 justify-center items-center mr-3">
              <Store size={22} color="#0074f0" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-900">
                Relatório de Loja
              </Text>
              <Text className="text-sm text-gray-500 mt-0.5">
                Visão geral da loja
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center bg-white rounded-xl p-4 border border-gray-200"
            activeOpacity={0.7}
            onPress={() => router.push("/")}
          >
            <View className="w-11 h-11 rounded-xl bg-purple-50 justify-center items-center mr-3">
              <Clock size={22} color="#8B5CF6" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-900">
                Relatório de Ponto Eletrônico
              </Text>
              <Text className="text-sm text-gray-500 mt-0.5">
                Registros de ponto dos funcionários
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
