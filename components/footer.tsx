import { TouchableOpacity } from "react-native";
import { Home } from "lucide-react-native";
import { router } from "expo-router";

function Footer() {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="items-center h-19 justify-center border-t-4 border-gray-300 bg-white py-3"
      onPress={() => router.push("/")}
    >
      <Home size={24} color="#787878" />
    </TouchableOpacity>
  );
}

export default Footer;
