import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";

type HeaderProps = {
  title: string;
  subtitle: string;
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
    <View style={[styles.containerHeader, style]}>
      <Text style={[styles.titleHeader, titleStyle]}>{title}</Text>
      <Text style={[styles.subtitleHeader, subtitleStyle]}>{subtitle}</Text>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
    height: 160,
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitleHeader: {
    fontSize: 16,
    width: 300,
  },
});

export default Header;
