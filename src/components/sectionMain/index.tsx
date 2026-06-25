import { router } from "expo-router";
import type { Href } from "expo-router";
import { Text, View } from "react-native";

import { operations, type OperationId } from "../../data/operations";
import { Card } from "../ui/card";

export function SectionMain() {
  function handleOperationPress(operationId: OperationId) {
    if (operationId === "cold-room") {
      router.push("/coldRoomPage" as Href);
      return;
    }

    if (operationId === "store") {
      router.push("/storePage" as Href);
      return;
    }

    if (operationId === "documents") {
      router.push("/documentsPage" as Href);
      return;
    }

    console.log(operationId);
  }

  return (
    <View className="w-full p-4">
      <Text className="text-sm font-bold text-gray-500">OPERAÇÕES</Text>

      <View className="mt-5 gap-4">
        {operations.map((operation) => (
          <Card
            key={operation.id}
            title={operation.title}
            description={operation.description}
            icon={operation.icon}
            iconColor={operation.iconColor}
            iconBackgroundColor={operation.iconBackgroundColor}
            onPress={() => handleOperationPress(operation.id)}
          />
        ))}
      </View>
    </View>
  );
}
