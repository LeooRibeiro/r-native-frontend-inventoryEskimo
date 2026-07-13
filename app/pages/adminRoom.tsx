import Header from "@/components/Header";
import Footer from "@/components/footer";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FileUp, Snowflake, Store, AlertTriangle } from "lucide-react-native";

const lowStockItems = [
  { name: "Picolé Creme Chocolate", qty: 3, unit: "un", min: 10 },
];

export default function AdminRoom() {
  const insets = useSafeAreaInsets();

  function handleSendReport() {
    console.log("[admin] Enviar relatório de produção");
  }

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      <Header style={{ backgroundColor: "#fff" }} title="Administrativo">
        <View className="w-full gap-3 mt-4">
          <View className="flex-row gap-3">
            <View className="flex-1 bg-white rounded-xl p-4 border-2 border-gray-300">
              <View className="flex-row items-center gap-2 mb-2">
                <Snowflake size={18} color="#4DA7F1" />
                <Text className="text-xs font-bold text-gray-500 uppercase">Câmara Fria</Text>
              </View>
              <Text className="text-2xl font-bold text-gray-600">0</Text>
              <Text className="text-xs text-gray-500 mt-0.5">Total de engradados</Text>
            </View>
            <View className="flex-1 bg-white rounded-xl p-4 border-2 border-gray-300">
              <View className="flex-row items-center gap-2 mb-2">
                <Store size={18} color="#F15E69" />
                <Text className="text-xs font-bold text-gray-500 uppercase">Loja</Text>
              </View>
              <Text className="text-xs font-bold text-gray-500 leading-5">Seg 13:00 - 20:00</Text>
              <Text className="text-xs font-bold text-gray-500 leading-5">Ter a Dom 09:00 - 20:00</Text>
            </View>
          </View>
        </View>
      </Header>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          className="flex-row items-center bg-white rounded-xl p-4 border border-gray-200"
          activeOpacity={0.7}
          onPress={handleSendReport}
        >
          <View className="w-11 h-11 rounded-xl bg-blue-50 justify-center items-center mr-3">
            <FileUp size={22} color="#0074f0" />
          </View>
          <View className="flex-1">
            <Text className="text-base font-semibold text-gray-900">Enviar Relatório</Text>
            <Text className="text-sm text-gray-500 mt-0.5">Enviar relatório de produção da fábrica.</Text>
          </View>
        </TouchableOpacity>

        <Text className="text-sm font-bold text-gray-500 tracking-wider uppercase">Itens em baixa na câmara fria</Text>
        <View className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {lowStockItems.map((item, i) => (
            <View key={i} className="flex-row items-center p-4 border-b border-gray-100">
              <View className="w-9 h-9 rounded-lg bg-red-50 justify-center items-center mr-3">
                <AlertTriangle size={18} color="#ef4444" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-gray-900">{item.name}</Text>
                <Text className="text-xs text-gray-400 mt-0.5">Mínimo: {item.min}{item.unit}</Text>
              </View>
              <Text className="text-sm font-bold text-red-600">{item.qty}{item.unit}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
