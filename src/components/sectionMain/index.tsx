import { View, Text, Pressable } from "react-native";
import React from "react";

import { Card } from "../ui/card";
import { Snowflake, Store, FileText } from "lucide-react-native";

export function SectionMain() {
  return (
    <View className="w-full p-4">
      <Text className="text-gray-500 font-bold text-md">OPERAÇÕES</Text>

      <View className="mt-5 gap-4">
        <Card
          title="Câmara Fria"
          description="Controle e movimentação de estoque"
          icon={Snowflake}
          iconColor="#2563eb"
          iconBG="#bfdbfe"
          onPress={() => console.log("Câmara Fria")}
        />

        <Card
          title="Loja"
          description="Relatórios e controle operacional"
          icon={Store}
          iconColor="#dc2626"
          iconBG="#fecaca"
          onPress={() => console.log("Loja")}
        />

        <Card
          title="Gerar Documentos"
          description="Emissão de PDFs e arquivos"
          icon={FileText}
          iconColor="#facc15"
          iconBG="#fef9c3"
          onPress={() => console.log("Documentos")}
        />
      </View>
    </View>
  );
}
