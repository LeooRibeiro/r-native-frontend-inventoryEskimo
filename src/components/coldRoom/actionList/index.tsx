import { Text, View } from "react-native";
import { router } from "expo-router";
import type { Href } from "expo-router";

import { getOperationActions, OperationSecundaryID } from "../../../data/operations";
import { Card } from "../../ui/card";

export function ColdRoomActionList() {
  const actions = getOperationActions("cold-room");

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
              onPress={() => router.push("/pages/coldRoomPage/supplyCold")}
              
            />
          ))}
        </View>
      </View>
    );
  };
