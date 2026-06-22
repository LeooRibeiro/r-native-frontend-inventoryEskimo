import { Pressable, Text, View } from "react-native";
import { LucideIcon } from "lucide-react-native";

type CardMenuProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBG: string;
  onPress: () => void;
};

export function Card({
  title,
  description,
  icon: Icon,
  iconColor,
  iconBG,
  onPress,
}: CardMenuProps) {
  return (
    <Pressable
      onPress={onPress}
      className="w-full h-20 rounded-2xl border border-slate-200 bg-white px-4 flex-row items-center"
    >
        <View className=" p-3 rounded-2xl" style={{ backgroundColor: iconBG}}>

      <Icon size={24} color={iconColor} />
      
        </View>

      <View className="flex-1 ml-3">
        <Text className="font-semibold text-base">{title}</Text>

        <Text className="text-sm text-slate-500">{description}</Text>
      </View>
    </Pressable>
  );
}
