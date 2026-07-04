import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Snowflake, Store, FileText } from "lucide-react-native";
import CardButton from "../components/cardButton";
import { router } from "expo-router";

type mainContentProps = {
  title: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const goToStore = () => router.push("../pages/storeRoom");
const goToColdRoom = () => router.push("../pages/coldRoom");
const goToDocumentRoom = () => router.push("../pages/documentRoom");

function mainContent({ title, children, style }: mainContentProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <CardButton
        onPress={goToColdRoom}
        title={"CÂMARA FRIA"}
        subtitle={"Controle e movimentação de estoque refrigerado"}
        icon={Snowflake}
        color={"#fff"}
        iconBgColor={"#4DA7F1"}
        iconColor={"#ffffff"}
        iconSize={30}
      />
      <CardButton
        onPress={goToStore}
        title={"LOJA"}
        subtitle={"Relátorios e controle operacional controlado"}
        icon={Store}
        color={"#fff"}
        iconBgColor={"#F15E69"}
        iconColor={"#ffffff"}
        iconSize={30}
      />
      <CardButton
        onPress={goToDocumentRoom}
        title={"DOCUMENTOS"}
        subtitle={"Emissão de PDFs e relatórios de movimentação"}
        icon={FileText}
        color={"#fff"}
        iconBgColor={"#F1D186"}
        iconColor={"#ffffff"}
        iconSize={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
    gap: 15,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
});

export default mainContent;
