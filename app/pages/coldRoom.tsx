import Header from "@/components/Header";
import { View, Text, StyleSheet } from "react-native";
import "react-native-reanimated";
import CardButton from "@/components/cardButton";
import { router } from "expo-router";
import { Package, Undo2 } from "lucide-react-native";

const goToSupplyRoom = () => router.push("/pages/supplyRoom");
const goToRetreatRoom = () => router.push("/pages/retreatRoom");

export default function coldRoom() {
  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        titleStyle={styles.headerTitle}
        subtitleStyle={styles.headerSubtitle}
        title="CAMARA FRIA"
        subtitle="Distribuição dos produtos"
      >
        <Text>coldRoom Children</Text>
      </Header>
      <View style={styles.buttonsContainer}>
        <CardButton
          onPress={goToSupplyRoom}
          title={"SUPRIMENTOS"}
          subtitle={"Controle de materiais e insumos"}
          icon={Package}
          color={"#fff"}
          iconBgColor={"#4CAF50"}
          iconColor={"#ffffff"}
          iconSize={30}
        />
        <CardButton
          onPress={goToRetreatRoom}
          title={"RETIRADA"}
          subtitle={"Controle de retirada de produtos"}
          icon={Undo2}
          color={"#fff"}
          iconBgColor={"#FF7043"}
          iconColor={"#ffffff"}
          iconSize={30}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    height: "100%",
  },
  header: {
    backgroundColor: "#0074f0",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headerTitle: {
    marginBottom: 70,
    color: "#fff",
    fontFamily: "Monospace",
  },
  headerSubtitle: {
    color: "#fff",
    fontFamily: "Monospace",
  },
  buttonsContainer: {
    padding: 15,
    gap: 15,
  },
});
