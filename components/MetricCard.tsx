import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";

type MetricCardProps = {
  label: string;
  value: string | number;
  subtext?: string;
  subtextColor?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
};

function MetricCard({ label, value, subtext, subtextColor, style, labelStyle, valueStyle }: MetricCardProps) {
  return (
    <View className="bg-white rounded-xl p-4 items-start justify-center border-2 border-gray-300" style={style}>
      <Text className="text-xs text-gray-500 mb-1 text-start" style={labelStyle}>{label}</Text>
      <Text className="text-2xl font-bold text-gray-600 text-start" style={valueStyle}>{value}</Text>
      {subtext ? <Text className="text-xs text-green-500 mt-0.5 text-start" style={subtextColor ? { color: subtextColor } : undefined}>{subtext}</Text> : null}
    </View>
  );
}

export default MetricCard;
