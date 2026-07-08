import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainContent from "@/components/mainContent";
import Footer from "@/components/footer";

export default function Homepage() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      <View className="bg-white p-5 border-b-4 border-gray-300">
        <Text className="text-sm font-bold text-gray-500 tracking-wider">DISTRIBUIDORA ALVORADA</Text>
        <Text className="text-2xl font-bold text-gray-600 mt-1">--</Text>
        <Text className="text-sm text-gray-600 mt-1">--</Text>
      </View>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
      >
        <MainContent title="Operações" />
      </ScrollView>
      <Footer />
    </View>
  );
}
