import { TouchableOpacity, View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";
import { LucideIcon, ChevronRight } from "lucide-react-native";

type CardButtonProps = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  iconBgColor: string;
  iconColor: string;
  iconSize: number;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  iconWrapperStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

function CardButton({
  title,
  subtitle,
  icon: Icon,
  color,
  iconBgColor,
  iconColor,
  iconSize,
  titleStyle,
  subtitleStyle,
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
      </View>
      <ChevronRight size={20} color="#333" style={styles.chevron} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    width: "100%",
    height: 80,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  title: {},
  subtitle: {
    width: "80%",
    marginTop: 2,
  },
  chevron: {
    marginLeft: 8,
  },
});

export default CardButton;
