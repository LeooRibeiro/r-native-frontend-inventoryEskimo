import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { User, LogIn } from "lucide-react-native";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { getMockEmployees } from "@/src/services/auth";
import { useAuth } from "@/src/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/footer";

export default function PontoLogin() {
  const insets = useSafeAreaInsets();
  const { login } = useAuth();
  const employees = getMockEmployees();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  async function handleLogin(employeeId: string) {
    await login(employeeId);
    console.log("[ponto] Funcionário autenticado, redirecionando...");
    router.replace("/pages/store/timeClock");
  }

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      <Header style={{ backgroundColor: "#fff" }} title="" />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white rounded-xl p-6 border border-gray-200 items-center">
          <Text className="text-5xl font-bold text-gray-900">{now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</Text>
          <Text className="text-sm text-gray-500 mt-2">{now.toLocaleDateString("pt-BR")}</Text>
        </View>
        <Text className="text-sm font-bold text-gray-500 tracking-wider uppercase">Funcionários</Text>
        <View className="gap-3">
          {employees.map((emp) => (
            <TouchableOpacity
              key={emp.id}
              className="flex-row items-center bg-white rounded-xl p-4 border border-gray-200"
              activeOpacity={0.7}
              onPress={() => handleLogin(emp.id)}
            >
              <View className="w-11 h-11 rounded-xl bg-blue-50 justify-center items-center mr-3">
                <User size={22} color="#0074f0" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-900">{emp.nome}</Text>
                <Text className="text-sm text-gray-500 mt-0.5">{emp.cargo}</Text>
              </View>
              <LogIn size={20} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
