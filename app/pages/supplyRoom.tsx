import Header from "@/components/Header";
import Footer from "@/components/footer";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Search, Plus, Package, ChevronRight } from "lucide-react-native";

const products: {
  sku: string; category: string; name: string; qty: number; unit: string;
}[ ] = [ ];

export default function SupplyRoom() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      <Header style={{ backgroundColor: "#fff" }} title="Abastecimento Câmara" />

      <View className="flex-row px-5 py-3 gap-2.5 bg-white">
        <View className="flex-1 flex-row items-center bg-gray-200 rounded-xl px-3.5 py-2.5 gap-2">
          <Search size={18} color="#6B7280" />
          <Text className="text-base text-gray-500">Buscar produto...</Text>
        </View>
        <TouchableOpacity className="w-11 h-11 rounded-xl bg-primary justify-center items-center" activeOpacity={0.7}>
          <Plus size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ padding: 16, paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-sm font-bold text-gray-500 tracking-wider mb-1">Produtos (0)</Text>

        {products.length > 0 && (
          <View className="gap-2.5">
            {products.map((p) => (
              <TouchableOpacity key={p.sku} className="flex-row items-center justify-between bg-white rounded-xl p-3.5 border border-gray-200" activeOpacity={0.7}>
                <View className="flex-row items-center flex-1">
                  <View className="w-10 h-10 rounded-xl bg-blue-50 justify-center items-center mr-3">
                    <Package size={20} color="#0074f0" />
                  </View>
                  <View className="flex-1">
                    <View className="flex-row items-center gap-1.5 mb-0.5">
                      <Text className="text-xs font-bold text-gray-500 tracking-tight">{p.sku}</Text>
                    </View>
                    <Text className="text-base font-semibold text-gray-900">{p.name}</Text>
                  </View>
                </View>
                <View className="items-center ml-3">
                  <Text className="text-lg font-bold text-blue-600">{p.qty}</Text>
                  <Text className="text-xs text-gray-400 mt-px">{p.unit}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      <View className="bg-white border-t-2 border-gray-300 px-5 py-3">
        <View className="flex-row items-center gap-3">
          <View>
            {/* produtos selecionados para inserir ao banco */}
          </View>
          <TouchableOpacity className="flex-row items-center gap-1.5 bg-primary px-5 py-3 rounded-xl" activeOpacity={0.7}>
            <Text className="text-sm font-bold text-white">Confirmar movimentação</Text>
            <ChevronRight size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </View>
  );
}
