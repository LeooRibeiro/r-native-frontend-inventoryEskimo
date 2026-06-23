import { FileText, Snowflake, Store } from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";

export type Operation = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackgroundColor: string;
};

export const operations: Operation[] = [
  {
    id: "cold-room",
    title: "Câmara Fria",
    description: "Controle e movimentação de estoque refrigerado",
    icon: Snowflake,
    iconColor: "#2563eb",
    iconBackgroundColor: "#dbeafe",
  },
  {
    id: "store",
    title: "Loja",
    description: "Relatórios e controle operacional",
    icon: Store,
    iconColor: "#dc2626",
    iconBackgroundColor: "#fee2e2",
  },
  {
    id: "documents",
    title: "Gerar Documentos",
    description: "Emissão de PDFs e relatórios",
    icon: FileText,
    iconColor: "#ca8a04",
    iconBackgroundColor: "#fef9c3",
  },
];
