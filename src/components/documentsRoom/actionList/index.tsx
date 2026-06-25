import { Text, View } from "react-native";

import { getOperationActions } from "../../../data/operations";
import { Card } from "../../ui/card";

export function DocumentsActionList() {
  const actions = getOperationActions("documents");

  return (
    <View className="mt-6">
      <Text className="text-sm font-bold text-gray-500">AÇÕES</Text>

      <View className="mt-5 gap-4">
        {actions.map((action) => (
          <Card
            key={action.id}
            title={action.title}
            description={action.description}
            icon={action.icon}
            iconColor={action.iconColor}
            iconBackgroundColor={action.iconBackgroundColor}
            onPress={() => console.log(action.id)}
          />
        ))}
      </View>
    </View>
  );
}
