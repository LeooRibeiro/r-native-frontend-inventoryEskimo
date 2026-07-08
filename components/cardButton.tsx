import { TouchableOpacity, View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { LucideIcon, ChevronRight } from "lucide-react-native";

type CardButtonProps = {
  title: string;
  subtitle: string;
  footerText?: string;
  icon: LucideIcon;
  color: string;
  iconBgColor: string;
  iconColor: string;
  iconSize: number;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  footerStyle?: StyleProp<TextStyle>;
  iconWrapperStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

function CardButton({
  title,
  subtitle,
  footerText,
  icon: Icon,
  color,
  iconBgColor,
  iconColor,
  iconSize,
  titleStyle,
  subtitleStyle,
  footerStyle,
  iconWrapperStyle,
  onPress,
  style,
}: CardButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="flex-row items-center w-full rounded-xl p-4 border-2 border-gray-300 shadow-sm"
      style={[{ backgroundColor: color }, style]}
    >
      <View
        className="w-11 h-11 rounded-xl justify-center items-center mr-3.5"
        style={[{ backgroundColor: iconBgColor }, iconWrapperStyle]}
      >
        <Icon size={iconSize} color={iconColor} />
      </View>
      <View className="flex-1">
        <Text className="text-base font-bold text-gray-600" style={titleStyle}>{title}</Text>
        <Text className="text-sm text-gray-600 mt-0.5" style={subtitleStyle}>{subtitle}</Text>
        {footerText ? <Text className="text-xs text-gray-600 mt-1" style={footerStyle}>{footerText}</Text> : null}
      </View>
      <ChevronRight size={20} color="#9ca3af" />
    </TouchableOpacity>
  );
}

export default CardButton;
