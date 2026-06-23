import { LucideIcon } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type CardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackgroundColor: string;
  onPress: () => void;
};

export function Card({
  title,
  description,
  icon: Icon,
  iconColor,
  iconBackgroundColor,
  onPress,
}: CardProps) {
  return (
    <Pressable
      accessibilityLabel={title}
      accessibilityRole="button"
      className="h-20 w-full flex-row items-center rounded-lg border border-slate-200 bg-white px-4"
      onPress={onPress}
    >
      <View
        className="rounded-lg p-3"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        <Icon size={24} color={iconColor} />
      </View>

      <View className="ml-3 flex-1">
        <Text className="text-base font-semibold text-slate-900">{title}</Text>
        <Text className="text-sm text-slate-500">{description}</Text>
      </View>
    </Pressable>
  );
}
