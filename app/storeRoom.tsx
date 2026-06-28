
import { View, Text, StyleSheet } from 'react-native'
import 'react-native-reanimated';


export default function coldRoom() {

  return (
        <View style={styles.container}>
          <Text>
            STORE ROOM
          </Text>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgreen",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})