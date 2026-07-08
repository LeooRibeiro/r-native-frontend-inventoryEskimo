import { View, Text } from "react-native";

type StatusBadgeProps = {
  label: string;
};

function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <View className="flex-row items-center rounded-full px-3 py-1.5 bg-green-50 self-start">
      <View className="w-2 h-2 rounded-full bg-green-800 mr-1.5" />
      <Text className="text-sm font-semibold text-green-800">{label}</Text>
    </View>
  );
}

export default StatusBadge;
