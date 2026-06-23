import { Text, View } from "react-native";

import { operations } from "../../data/operations";
import { Card } from "../ui/card";

export function SectionMain() {
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
            onPress={() => console.log(operation.id)}
          />
        ))}
      </View>
    </View>
  );
}
