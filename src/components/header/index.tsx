import { Text, View } from "react-native";

export function Header() {
  return (
    <View className="w-full bg-blue-600 px-4 py-5">
      <Text className="text-2xl font-bold text-white">
        DISTRIBUIDORA ANDRÔMEDA
      </Text>

      <View className="mt-8">
        <Text className="text-lg font-medium text-white">
          Loja: Jardim Satélite
        </Text>
        <Text className="font-light text-white">
          Avenida Andrômeda, 3940, Jd. Satélite
        </Text>
      </View>
    </View>
  );
}
