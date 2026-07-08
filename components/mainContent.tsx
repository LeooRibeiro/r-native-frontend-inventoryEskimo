import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Snowflake, Store, FileText } from "lucide-react-native";
import CardButton from "./cardButton";
import { router } from "expo-router";

type MainContentProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
};

function MainContent({ title, style }: MainContentProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
    backgroundColor: "#f3f4f6",
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6b7280",
    letterSpacing: 1,
    marginBottom: 4,
    textTransform: "uppercase",
  },
});

export default MainContent;
