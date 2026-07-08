import { TouchableOpacity, View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";
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
      style={[styles.container, { backgroundColor: color }, style]}
    >
      <View style={[styles.iconWrapper, { backgroundColor: iconBgColor }, iconWrapperStyle]}>
        <Icon size={iconSize} color={iconColor} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
        {footerText ? <Text style={[styles.footer, footerStyle]}>{footerText}</Text> : null}
      </View>
      <ChevronRight size={20} color="#9ca3af" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    width: "100%",
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 2,
  },
  footer: {
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 4,
  },
});

export default CardButton;
