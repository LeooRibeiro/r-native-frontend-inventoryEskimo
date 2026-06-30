
import { View, Text, StyleSheet, Button } from 'react-native'
import { Link, router } from 'expo-router';
import 'react-native-reanimated';


export default function Homepage() {

    function goToStore() {
        router.push(`/storeRoom`)
    }
        function goToColdRoom() {
        router.push(`/storeRoom`)
    }

  return (
        <View style={ styles.container} className='bg-red-500'>
          <Text>
            HOME PAGE
          </Text>
            <Button title='STORE' onPress={goToStore} />
            <Button title='COLD ROOM' onPress={goToColdRoom} />
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})