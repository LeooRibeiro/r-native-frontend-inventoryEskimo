import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="pages/coldRoom" />
        <Stack.Screen name="pages/supplyRoom" />
        <Stack.Screen name="pages/retreatRoom" />
        <Stack.Screen name="pages/storeRoom" />
        <Stack.Screen name="pages/documentRoom" />
        <Stack.Screen name="pages/store/relatorioDia" />
        <Stack.Screen name="pages/store/relatorioMensal" />
      </Stack>
    </SafeAreaProvider>
  );
}
