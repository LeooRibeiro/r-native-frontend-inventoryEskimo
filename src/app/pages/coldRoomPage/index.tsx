import { Text, View } from "react-native";

import { ColdRoomActionList } from "../../../components/coldRoom/actionList";
import { SummaryPanel } from "../../../components/coldRoom/summaryPanel";
import { AppScreen } from "../../../components/layout/appScreen";

const coldRoomSummary = {
  cratesTotal: 0,
  itemsTotal: 0,
};

export default function ColdRoom() {
  return (
    <AppScreen>
      <View className="p-4">
        <Text className="text-2xl font-bold text-slate-900">Câmara Fria</Text>
        <Text className="mt-1 text-sm text-slate-500">
          Controle de estoque refrigerado
        </Text>

        <View className="mt-5">
          <SummaryPanel
            cratesTotal={coldRoomSummary.cratesTotal}
            itemsTotal={coldRoomSummary.itemsTotal}
          />
        </View>

        <ColdRoomActionList />
      </View>
    </AppScreen>
  );
}
