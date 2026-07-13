import Header from "@/components/Header";
import Footer from "@/components/footer";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Clock, CheckCircle, XCircle, History, User, LogOut } from "lucide-react-native";
import { useState } from "react";
import { router } from "expo-router";
import { useAuth } from "@/src/contexts/AuthContext";
import { RegistroPonto } from "@/src/types/auth";

export default function PontoEletronico() {
  const insets = useSafeAreaInsets();
  const { authState, logout } = useAuth();
  const [clockedIn, setClockedIn] = useState(false);
  const [registros, setRegistros] = useState<RegistroPonto[]>([]);

  const employee = authState.employee;

  function handleClock() {
    if (!employee) return;

    const agora = new Date();
    const horario = `${agora.toLocaleDateString("pt-BR")} ${agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}`;

    if (clockedIn) {
      console.log(`[ponto] SAÍDA registrada para ${employee.nome} às ${horario}`);
      setRegistros((prev) => [
        {
          id: `${Date.now()}`,
          funcionarioId: employee.id,
          funcionarioNome: employee.nome,
          tipo: "saida",
          horario,
          timestamp: Date.now(),
        },
        ...prev,
      ]);
      setClockedIn(false);
    } else {
      console.log(`[ponto] ENTRADA registrada para ${employee.nome} às ${horario}`);
      setRegistros((prev) => [
        {
          id: `${Date.now()}`,
          funcionarioId: employee.id,
          funcionarioNome: employee.nome,
          tipo: "entrada",
          horario,
          timestamp: Date.now(),
        },
        ...prev,
      ]);
      setClockedIn(true);
    }
  }

  async function handleLogout() {
    console.log(`[ponto] Logout de ${employee?.nome}`);
    await logout();
    router.replace("/pages/store/clockLogin");
  }

  if (!employee) {
    router.replace("/pages/store/clockLogin");
    return null;
  }

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      <Header style={{ backgroundColor: "#fff" }} title="Ponto Eletrônico" />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 24, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white rounded-xl p-4 border border-gray-200">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-full bg-blue-50 justify-center items-center">
              <User size={20} color="#0074f0" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-900">{employee.nome}</Text>
              <Text className="text-sm text-gray-500">{employee.cargo}</Text>
            </View>
            <TouchableOpacity className="w-10 h-10 rounded-xl bg-gray-100 justify-center items-center" activeOpacity={0.7} onPress={handleLogout}>
              <LogOut size={20} color="#6b7280" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          className={`w-full py-6 rounded-xl items-center justify-center ${clockedIn ? "bg-red-500" : "bg-green-500"}`}
          activeOpacity={0.7}
          onPress={handleClock}
        >
          <Clock size={28} color="#fff" />
          <Text className="text-lg font-bold text-white mt-2">
            {clockedIn ? "REGISTRAR SAÍDA" : "REGISTRAR ENTRADA"}
          </Text>
        </TouchableOpacity>

        <View className="bg-white rounded-xl p-5 border border-gray-200">
          <View className="flex-row items-center gap-3">
            {clockedIn ? (
              <CheckCircle size={24} color="#22c55e" />
            ) : (
              <XCircle size={24} color="#ef4444" />
            )}
            <View>
              <Text className="text-base font-semibold text-gray-900">
                {clockedIn ? `${employee.nome} está registrado` : "Nenhum registro ativo"}
              </Text>
              <Text className="text-sm text-gray-500 mt-0.5">
                {clockedIn ? "Turno em andamento" : "Aguardando entrada"}
              </Text>
            </View>
          </View>
        </View>

        <Text className="text-sm font-bold text-gray-500 tracking-wider uppercase">Registros de hoje</Text>
        <View className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {registros.length > 0 ? (
            registros.map((r) => (
              <View key={r.id} className="flex-row items-center p-4 border-b border-gray-100">
                <View className={`w-9 h-9 rounded-lg justify-center items-center mr-3 ${r.tipo === "entrada" ? "bg-green-50" : "bg-red-50"}`}>
                  <Clock size={18} color={r.tipo === "entrada" ? "#22c55e" : "#ef4444"} />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-medium text-gray-900">
                    {r.tipo === "entrada" ? "Entrada" : "Saída"}
                  </Text>
                  <Text className="text-xs text-gray-400 mt-0.5">{r.funcionarioNome}</Text>
                </View>
                <Text className="text-sm font-semibold text-gray-600">{r.horario}</Text>
              </View>
            ))
          ) : (
            <View className="flex-row items-center p-4 border-b border-gray-100">
              <View className="w-9 h-9 rounded-lg bg-gray-100 justify-center items-center mr-3">
                <History size={18} color="#6b7280" />
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-500">Nenhum registro hoje</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
