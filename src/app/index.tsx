import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FooterMenu } from "../components/footerMenu";
import { Header } from "../components/header";
import { SectionMain } from "../components/sectionMain";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "bottom"]}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-4"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full">
          <Header />
          <SectionMain />
        </View>
      </ScrollView>

      <FooterMenu />
    </SafeAreaView>
  );
}
