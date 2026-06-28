
import { View, Text, StyleSheet } from 'react-native'
import 'react-native-reanimated';


export default function coldRoom() {

  return (
        <View style={styles.container}>
          <Text>
            COLD ROOM PAGE
          </Text>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightpink",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})