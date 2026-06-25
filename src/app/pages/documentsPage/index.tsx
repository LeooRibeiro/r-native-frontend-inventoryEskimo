import { Text, View } from "react-native";

import { DocumentsActionList } from "../../../components/documentsRoom/actionList";
import { DocumentationActions } from "../../../components/documentsRoom/documentsActions";
import { AppScreen } from "../../../components/layout/appScreen";


export default function DocumentsRoom() {
  return (
    <AppScreen>
      <View className="p-4">
        <Text className="text-2xl font-bold text-slate-900">Administrativo</Text>
        <Text className="mt-1 text-sm text-slate-500">
          Controle administrativo.
        </Text>
          <DocumentationActions />
        <View className="mt-5">
        </View>

        <DocumentsActionList />
      </View>
    </AppScreen>
  );
}
