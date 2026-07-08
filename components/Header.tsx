import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";

type HeaderProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
};

function Header({
  title,
  subtitle,
  children,
  style,
  titleStyle,
  subtitleStyle,
}: HeaderProps) {
  return (
    <View className="w-full p-5 border-b-2 border-gray-300" style={style}>
      <Text className="text-2xl font-bold text-gray-600" style={titleStyle}>{title}</Text>
      {subtitle ? <Text className="text-sm text-gray-600 mt-1" style={subtitleStyle}>{subtitle}</Text> : null}
      {children}
    </View>
  );
}

export default Header;
