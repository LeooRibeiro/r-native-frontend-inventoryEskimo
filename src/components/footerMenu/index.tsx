import { router, usePathname } from "expo-router";
import type { Href } from "expo-router";
import { ClipboardList, FileText, Home } from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type MenuItem = {
  label: string;
  icon: LucideIcon;
  href?: Href;
};

const menuItems: MenuItem[] = [
  {
    label: "Início",
    icon: Home,
    href: "/",
  }
];

export function FooterMenu() {
  const pathname = usePathname();

  return (
    <View className="border-t border-slate-200 bg-white px-2 py-2">
      <View className="flex-row items-center justify-around">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === pathname;

          return (
            <Pressable
              key={item.label}
              accessibilityLabel={item.label}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
              className="min-w-20 items-center rounded-lg px-3 py-2"
              onPress={() => {
                if (item.href && item.href !== pathname) {
                  router.push(item.href);
                  return;
                }

                console.log(item.label);
              }}
            >
              <Icon size={22} color={isActive ? "#2563eb" : "#64748b"} />
              <Text
                className={
                  isActive
                    ? "mt-1 text-xs font-semibold text-blue-600"
                    : "mt-1 text-xs font-medium text-slate-600"
                }
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
