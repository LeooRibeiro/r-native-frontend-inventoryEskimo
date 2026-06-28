import { Tabs } from 'expo-router';
import { View, Text } from 'react-native'
import 'react-native-reanimated';
import { StackScreen } from 'react-native-screens';


export default function RootLayout() {

  return (
      <Tabs>
        <Tabs.Screen name="index" options={{ headerTitle: "HOME"}}/>
        <Tabs.Screen name="coldRoom" options={{ headerTitle: "camara fria"}}/>
        <Tabs.Screen name="storeRoom" options={{ headerTitle: "store"}}/>
      </Tabs>
  );
}
