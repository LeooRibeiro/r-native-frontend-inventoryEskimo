import { Stack } from 'expo-router';
import { View, Text } from 'react-native'
import 'react-native-reanimated';
import { StackScreen } from 'react-native-screens';
// import "global.css";


export default function RootLayout() {

  return (
      <Stack screenOptions={{ headerShown: false}}>
        <Stack.Screen name="index" options={{ headerTitle: "HOME"}}/>
        <Stack.Screen name="coldRoom" options={{ headerTitle: "camara fria"}}/>
        <Stack.Screen name="supplyRoom" options={{ headerTitle: "suprimentos"}}/>
        <Stack.Screen name="retreatRoom" options={{ headerTitle: "retirada"}}/>
        <Stack.Screen name="storeRoom" options={{ headerTitle: "store"}}/>
      </Stack>
  );
}
