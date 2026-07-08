import Header from "@/components/Header";
import Footer from "@/components/footer";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FileText, FileSpreadsheet, Clock } from "lucide-react-native";

const docTypes = [
  { label: "Relatório Diário", desc: "Movimentações do dia" },
  { label: "Relatório Mensal", desc: "Consolidado do mês" },
  { label: "Movimentações Câmara", desc: "Entradas e saídas" },
  { label: "Transferências", desc: "Câmara → Loja" },
  { label: "Inventário", desc: "Posição atual de estoque" },
];

const periods = ["Hoje", "7 dias", "30 dias", "Outro"];

const recentDocs: {
  name: string; type: string; size: string; date: string;
}[] = [];

export default function DocumentRoom() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header style={styles.header} title="Gerar Documentos" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Tipo de documento</Text>
        <View style={styles.docList}>
          {docTypes.map((doc) => (
            <TouchableOpacity key={doc.label} style={styles.docItem} activeOpacity={0.7}>
              <View style={styles.docIcon}>
                <FileText size={20} color="#0074f0" />
              </View>
              <View style={styles.docInfo}>
                <Text style={styles.docLabel}>{doc.label}</Text>
                <Text style={styles.docDesc}>{doc.desc}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Período</Text>
        <View style={styles.periodRow}>
          {periods.map((p) => (
            <TouchableOpacity key={p} style={styles.periodBtn} activeOpacity={0.7}>
              <Text style={styles.periodBtnText}>{p}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.7}>
            <FileText size={18} color="#fff" />
            <Text style={styles.btnPrimaryText}>Gerar PDF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSecondary} activeOpacity={0.7}>
            <FileSpreadsheet size={18} color="#0074f0" />
            <Text style={styles.btnSecondaryText}>Exportar Excel</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Documentos gerados</Text>
        <View style={styles.recentList}>
          {recentDocs.map((doc, i) => (
            <View key={i} style={styles.recentItem}>
              <View style={styles.recentIcon}>
                <FileText size={18} color="#6b7280" />
              </View>
              <View style={styles.recentInfo}>
                <Text style={styles.recentName}>{doc.name}</Text>
                <View style={styles.recentMeta}>
                  <Text style={styles.recentMetaText}>
                    {doc.type} · {doc.size}
                  </Text>
                  <Text style={styles.recentMetaDot}>·</Text>
                  <Clock size={11} color="#9ca3af" />
                  <Text style={styles.recentMetaText}> {doc.date}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    backgroundColor: "#0074f0",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 32,
    gap: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6b7280",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: -4,
  },
  docList: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    overflow: "hidden",
  },
  docItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  docIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  docInfo: {
    flex: 1,
  },
  docLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  docDesc: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 2,
  },
  periodRow: {
    flexDirection: "row",
    gap: 8,
  },
  periodBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
  },
  periodBtnText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
  },
  actionRow: {
    flexDirection: "row",
    gap: 12,
  },
  btnPrimary: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#0074f0",
    paddingVertical: 14,
    borderRadius: 10,
  },
  btnPrimaryText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
  },
  btnSecondary: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#0074f0",
  },
  btnSecondaryText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0074f0",
  },
  recentList: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    overflow: "hidden",
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  recentIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  recentInfo: {
    flex: 1,
  },
  recentName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
  },
  recentMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 4,
  },
  recentMetaText: {
    fontSize: 12,
    color: "#9ca3af",
  },
  recentMetaDot: {
    fontSize: 12,
    color: "#d1d5db",
  },
});
