import Header from "@/components/Header";
import Footer from "@/components/footer";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FileText, FileSpreadsheet, Clock } from "lucide-react-native";

const docTypes = [
  { label: "Relatório Diário", desc: "Movimentações do dia" },
  { label: "Relatório Mensal", desc: "Consolidado do mês" },
  { label: "Movimentações Câmara", desc: "Entradas e saídas" },
  { label: "Transferências", desc: "Câmara → Loja" },
  { label: "Inventário", desc: "Posição atual de estoque" },
];

const periods = ["Hoje", "7 dias", "30 dias", "Outro"];

const recentDocs: {
  name: string; type: string; size: string; date: string;
}[] = [];

export default function DocumentRoom() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      <Header style={{ backgroundColor: "#0074f0" }} title="Gerar Documentos" />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 32, gap: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-sm font-bold text-gray-500 tracking-wider -mb-1 uppercase">Tipo de documento</Text>
        <View className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {docTypes.map((doc) => (
            <TouchableOpacity key={doc.label} className="flex-row items-center p-4 border-b border-gray-100" activeOpacity={0.7}>
              <View className="w-10 h-10 rounded-xl bg-blue-50 justify-center items-center mr-3">
                <FileText size={20} color="#0074f0" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-900">{doc.label}</Text>
                <Text className="text-sm text-gray-500 mt-0.5">{doc.desc}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Text className="text-sm font-bold text-gray-500 tracking-wider -mb-1 uppercase">Período</Text>
        <View className="flex-row gap-2">
          {periods.map((p) => (
            <TouchableOpacity key={p} className="flex-1 py-2.5 rounded-lg bg-white border border-gray-200 items-center" activeOpacity={0.7}>
              <Text className="text-sm font-semibold text-gray-700">{p}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex-row gap-3">
          <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 bg-primary py-3.5 rounded-xl" activeOpacity={0.7}>
            <FileText size={18} color="#fff" />
            <Text className="text-base font-bold text-white">Gerar PDF</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 bg-white py-3.5 rounded-xl border border-primary" activeOpacity={0.7}>
            <FileSpreadsheet size={18} color="#0074f0" />
            <Text className="text-base font-bold text-primary">Exportar Excel</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-sm font-bold text-gray-500 tracking-wider -mb-1 uppercase">Documentos gerados</Text>
        <View className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {recentDocs.map((doc, i) => (
            <View key={i} className="flex-row items-center p-3.5 border-b border-gray-100">
              <View className="w-9 h-9 rounded-lg bg-gray-100 justify-center items-center mr-3">
                <FileText size={18} color="#6b7280" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-medium text-gray-900">{doc.name}</Text>
                <View className="flex-row items-center mt-1 gap-1">
                  <Text className="text-xs text-gray-400">{doc.type} · {doc.size}</Text>
                  <Text className="text-xs text-gray-300">·</Text>
                  <Clock size={11} color="#9ca3af" />
                  <Text className="text-xs text-gray-400"> {doc.date}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
