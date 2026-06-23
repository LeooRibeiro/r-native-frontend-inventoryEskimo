import { ArrowLeftRight, Download } from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";

export type ColdRoomAction = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackgroundColor: string;
};

export const coldRoomActions: ColdRoomAction[] = [
  {
    id: "cold-room-supply",
    title: "Abastecimento Câmara",
    description: "Registrar entrada de produtos",
    icon: Download,
    iconColor: "#2563eb",
    iconBackgroundColor: "#dbeafe",
  },
  {
    id: "store-supply",
    title: "Abastecimento Loja",
    description: "Transferir produtos da Câmara Fria para a loja",
    icon: ArrowLeftRight,
    iconColor: "#16a34a",
    iconBackgroundColor: "#dcfce7",
  },
];
