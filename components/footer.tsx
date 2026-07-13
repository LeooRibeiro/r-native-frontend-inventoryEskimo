import { View, TouchableOpacity } from "react-native";
import { Home, ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";

function Footer() {
  return (
    <View className="flex-row items-center border-t-2 h-16 border-gray-300 bg-white px-5">
      <TouchableOpacity activeOpacity={0.7} className="w-10 h-10 items-center justify-center" onPress={() => router.back()}>
        <ArrowLeft size={26} color="#787878"/>
      </TouchableOpacity>
      <View className="flex-1 items-center">
        <TouchableOpacity activeOpacity={0.7} className="w-10 h-10 items-center justify-center" onPress={() => router.push("/")}>
          <Home size={26} color="#787878" />
        </TouchableOpacity>
      </View>
      <View className="w-10" />
    </View>
  );
}

export default Footer;
