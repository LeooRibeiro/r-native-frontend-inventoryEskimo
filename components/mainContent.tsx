import React from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

type mainContentProps = {
  title: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};



function mainContent({ title, children, style}: mainContentProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  )
}        

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    padding: 15,
    backgroundColor: "#fff",
    },
    title: {
    fontSize: 16,
    fontWeight: "bold",
    },
    subtitle: {
    fontSize: 16,
    },
});



export default mainContent