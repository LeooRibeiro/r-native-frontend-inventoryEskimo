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
    <View style={[styles.container, style]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    width: 300,
  },
});

export default Header;
