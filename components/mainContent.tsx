import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { Snowflake, Store, FileText } from "lucide-react-native";
import CardButton from "./cardButton";
import { router } from "expo-router";

type MainContentProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
};

function MainContent({ title, style }: MainContentProps) {
  return (
    <View className="p-5 gap-3 bg-white flex-1" style={style}>
      <Text className="text-sm font-bold text-gray-500 tracking-wider mb-1 uppercase">{title}</Text>
      <CardButton
        onPress={() => router.push("/pages/coldRoom")}
        title="Câmara Fria"
        subtitle="Controle e movimentação de estoque refrigerado."
        icon={Snowflake}
        color="#fff"
        iconBgColor="#4DA7F1"
        iconColor="#ffffff"
        iconSize={26}
      />
      <CardButton
        onPress={() => router.push("/pages/storeRoom")}
        title="Loja"
        subtitle="Relatórios e controle operacional."
        icon={Store}
        color="#fff"
        iconBgColor="#F15E69"
        iconColor="#ffffff"
        iconSize={26}
      />
      <CardButton
        onPress={() => router.push("/pages/documentRoom")}
        title="Gerar Documentos"
        subtitle="Emissão de PDFs e relatórios."
        icon={FileText}
        color="#fff"
        iconBgColor="#F1D186"
        iconColor="#ffffff"
        iconSize={26}
      />
    </View>
  );
}

export default MainContent;
