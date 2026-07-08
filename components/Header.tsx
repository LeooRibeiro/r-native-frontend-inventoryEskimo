import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";

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
    <View style={[styles.container, style]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {subtitle ? <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    marginTop: 4,
  },
});

export default Header;
