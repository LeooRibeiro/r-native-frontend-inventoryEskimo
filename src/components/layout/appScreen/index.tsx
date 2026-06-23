import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FooterMenu } from "../../footerMenu";

export function AppScreen({ children }: PropsWithChildren) {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "bottom"]}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-4"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full">{children}</View>
      </ScrollView>

      <FooterMenu />
    </SafeAreaView>
  );
}
