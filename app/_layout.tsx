import './global.css';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '@/src/contexts/AuthContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="pages/coldRoom" />
          <Stack.Screen name="pages/supplyRoom" />
          <Stack.Screen name="pages/retreatRoom" />
          <Stack.Screen name="pages/storeRoom" />
          <Stack.Screen name="pages/adminRoom" />
          <Stack.Screen name="pages/store/clockLogin" />
          <Stack.Screen name="pages/store/timeClock" />
          <Stack.Screen name="pages/store/monthlyReport" />
        </Stack>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
