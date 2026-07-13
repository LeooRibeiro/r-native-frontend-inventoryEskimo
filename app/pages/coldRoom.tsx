import Header from "@/components/Header";
import ColdPanel from "@/components/coldPanel";
import Footer from "@/components/footer";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CardButton from "@/components/cardButton";
import { router } from "expo-router";
import { Package, ArrowRightFromLine } from "lucide-react-native";

const actions = [
  { route: "/pages/supplyRoom", title: "Abastecimento Câmara", subtitle: "Entrada de produtos na câmara fria.", icon: Package, bg: "#4DA7F1" },
  { route: "/pages/retreatRoom", title: "Abastecimento Loja", subtitle: "Transferência de produtos para a loja.", icon: ArrowRightFromLine, bg: "#F15E69" },
];

export default function ColdRoom() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      <Header style={{ backgroundColor: "#fff" }} title="Câmara Fria">
        <ColdPanel
          totalItems={0}
          totalAvarias={0}
        />
      </Header>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-sm font-bold text-gray-500 tracking-wider uppercase">Ações</Text>
        <View className="gap-3">
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <CardButton
                key={a.route}
                onPress={() => router.push(a.route as any)}
                title={a.title}
                subtitle={a.subtitle}
                icon={Icon}
                color="#fff"
                iconBgColor={a.bg}
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
