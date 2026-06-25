import {
  ArrowLeftRight,
  Clock,
  ClipboardList,
  Download,
  FileSpreadsheet,
  FileText,
  Snowflake,
  Store,
} from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";

export type OperationCard = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackgroundColor: string;
};

export type OperationAction = OperationCard;
export type OperationId = "cold-room" | "store" | "documents";
export type OperationSecundaryID = "supply-cold"
export type OperationSecundary = OperationCard & {
  id: OperationSecundaryID
}
export type Operation = OperationCard & {
  id: OperationId;
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

export const operationsSecundary : OperationSecundary[] = [
  {  
    id: "supply-cold",
    title: "Gerar Documentos",
    description: "Emissão de PDFs e relatórios",
    icon: FileText,
    iconColor: "#ca8a04",
    iconBackgroundColor: "#fef9c3",
  }
]

const operationActions: Partial<Record<OperationId, OperationAction[]>> = {
  "cold-room": [
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
  ],
  store: [
    {
      id: "time-clock",
      title: "Ponto eletrônico",
      description: "Registrar entrada e saída dos funcionários",
      icon: Clock,
      iconColor: "#dc2626",
      iconBackgroundColor: "#fee2e2",
    },
    {
      id: "store-report",
      title: "Relatório de loja",
      description: "Consultar movimentações e indicadores da loja",
      icon: ClipboardList,
      iconColor: "#ca8a04",
      iconBackgroundColor: "#fef9c3",
    },
  ],
  documents: [
    {
      id: "documents-files",
      title: "PDFs / Exel",
      description: "Gerar arquivos para impressao e conferencia",
      icon: FileSpreadsheet,
      iconColor: "#16a34a",
      iconBackgroundColor: "#dcfce7",
    },
    {
      id: "general-report",
      title: "Envio de Relatorio geral",
      description: "Consolidar informacoes operacionais da loja",
      icon: ClipboardList,
      iconColor: "#ca8a04",
      iconBackgroundColor: "#fef9c3",
    },
  ],
};

export function getOperationActions(operationId: OperationId) {
  return operationActions[operationId] ?? [];
}
