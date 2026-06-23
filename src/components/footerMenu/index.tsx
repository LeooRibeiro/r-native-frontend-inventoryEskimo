import { ClipboardList, FileText, Home } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

const menuItems = [
  {
    label: "Início",
    icon: Home,
  },
  {
    label: "Estoque",
    icon: ClipboardList,
  },
  {
    label: "Documentos",
    icon: FileText,
  },
];

export function FooterMenu() {
  return (
    <View className="border-t border-slate-200 bg-white px-2 py-2">
      <View className="flex-row items-center justify-around">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Pressable
              key={item.label}
              accessibilityLabel={item.label}
              accessibilityRole="button"
              className="min-w-20 items-center rounded-lg px-3 py-2"
              onPress={() => console.log(item.label)}
            >
              <Icon size={22} color="#2563eb" />
              <Text className="mt-1 text-xs font-medium text-slate-600">
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
