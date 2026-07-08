import Header from "@/components/Header";
import Footer from "@/components/footer";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Package, ChevronRight, ArrowRightLeft, Clock, User } from "lucide-react-native";

const products: {
  sku: string; category: string; name: string; qty: number;
}[] = [];

const history: {
  name: string; person: string; time: string; qty: number;
}[] = [];

export default function RetreatRoom() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header style={styles.header} title="Abastecimento Loja" />

      <View style={styles.selectedPanel}>
        <View style={styles.selectedHeader}>
          <ArrowRightLeft size={16} color="#0074f0" />
          <Text style={styles.selectedTitle}>Produto selecionado</Text>
        </View>
        <Text style={styles.selectedProduct}>Nenhum produto selecionado</Text>
        <View style={styles.stockRow}>
          <View style={styles.stockItem}>
            <Text style={styles.stockLabel}>Câmara</Text>
            <Text style={styles.stockValue}>0</Text>
          </View>
          <View style={styles.stockDivider} />
          <View style={styles.stockItem}>
            <Text style={styles.stockLabel}>Loja</Text>
            <Text style={styles.stockValue}>0</Text>
          </View>
        </View>
        <View style={styles.transferRow}>
          <View>
            <Text style={styles.qtyLabel}>Quantidade a transferir</Text>
            <TextInput
              style={styles.qtyInput}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#d1d5db"
            />
          </View>
          <TouchableOpacity style={styles.confirmBtn} activeOpacity={0.7}>
            <Text style={styles.confirmBtnText}>Confirmar transferência</Text>
            <ChevronRight size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Produtos</Text>
        {products.length > 0 && (
          <View style={styles.productList}>
            {products.map((p) => (
              <TouchableOpacity key={p.sku} style={styles.productItem} activeOpacity={0.7}>
                <View style={styles.productLeft}>
                  <View style={styles.productIcon}>
                    <Package size={20} color="#0074f0" />
                  </View>
                  <View>
                    <Text style={styles.productName}>{p.name}</Text>
                    <Text style={styles.productMeta}>{p.sku} · {p.category}</Text>
                  </View>
                </View>
                <View style={styles.productRight}>
                  <Text style={styles.productQty}>{p.qty}</Text>
                  <Text style={styles.productUnit}>disponível</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.sectionTitle}>Histórico recente</Text>
        {history.length > 0 && (
          <View style={styles.historyList}>
            {history.map((h, i) => (
              <View key={i} style={styles.historyItem}>
                <View style={styles.historyIcon}>
                  <Package size={18} color="#6b7280" />
                </View>
                <View style={styles.historyInfo}>
                  <Text style={styles.historyName}>{h.name}</Text>
                  <View style={styles.historyMeta}>
                    <User size={12} color="#9ca3af" />
                    <Text style={styles.historyPerson}> {h.person}</Text>
                    <Text style={styles.historySep}>·</Text>
                    <Clock size={12} color="#9ca3af" />
                    <Text style={styles.historyTime}> {h.time}</Text>
                  </View>
                </View>
                <View style={styles.historyBadge}>
                  <Text style={styles.historyBadgeText}>+{h.qty}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },
  header: { backgroundColor: "#0074f0" },
  selectedPanel: {
    backgroundColor: "#fff", margin: 16, borderRadius: 14, padding: 18,
    borderWidth: 1, borderColor: "#e5e7eb",
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 6, elevation: 3,
  },
  selectedHeader: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 10 },
  selectedTitle: { fontSize: 13, fontWeight: "600", color: "#0074f0" },
  selectedProduct: { fontSize: 18, fontWeight: "700", color: "#111827", marginBottom: 14 },
  stockRow: {
    flexDirection: "row", alignItems: "center",
    backgroundColor: "#f9fafb", borderRadius: 10, padding: 14, marginBottom: 14,
  },
  stockItem: { flex: 1, alignItems: "center" },
  stockLabel: { fontSize: 12, color: "#6b7280", marginBottom: 4 },
  stockValue: { fontSize: 24, fontWeight: "700", color: "#2563eb" },
  stockDivider: { width: 1, height: 36, backgroundColor: "#e5e7eb" },
  transferRow: { gap: 12 },
  qtyLabel: { fontSize: 13, fontWeight: "600", color: "#374151", marginBottom: 6 },
  qtyInput: {
    backgroundColor: "#f9fafb", borderRadius: 10, borderWidth: 1, borderColor: "#e5e7eb",
    paddingHorizontal: 16, paddingVertical: 12, fontSize: 18, fontWeight: "600", color: "#111827",
  },
  confirmBtn: {
    flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6,
    backgroundColor: "#0074f0", paddingVertical: 14, borderRadius: 10,
  },
  confirmBtnText: { fontSize: 15, fontWeight: "700", color: "#fff" },
  scrollView: { flex: 1 },
  scrollContent: { padding: 16, paddingTop: 0, paddingBottom: 24, gap: 20 },
  sectionTitle: { fontSize: 14, fontWeight: "700", color: "#6b7280", letterSpacing: 1, marginBottom: 4 },
  productList: { gap: 8 },
  productItem: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    backgroundColor: "#fff", borderRadius: 12, padding: 14,
    borderWidth: 1, borderColor: "#e5e7eb",
  },
  productLeft: { flexDirection: "row", alignItems: "center", flex: 1, gap: 12 },
  productIcon: {
    width: 40, height: 40, borderRadius: 10, backgroundColor: "#eff6ff",
    justifyContent: "center", alignItems: "center",
  },
  productName: { fontSize: 15, fontWeight: "600", color: "#111827" },
  productMeta: { fontSize: 12, color: "#9ca3af", marginTop: 2 },
  productRight: { alignItems: "flex-end", marginLeft: 12 },
  productQty: { fontSize: 16, fontWeight: "700", color: "#2563eb" },
  productUnit: { fontSize: 11, color: "#9ca3af", marginTop: 1 },
  historyList: {
    backgroundColor: "#fff", borderRadius: 12,
    borderWidth: 1, borderColor: "#e5e7eb", overflow: "hidden",
  },
  historyItem: {
    flexDirection: "row", alignItems: "center", padding: 14,
    borderBottomWidth: 1, borderBottomColor: "#f3f4f6",
  },
  historyIcon: {
    width: 36, height: 36, borderRadius: 8, backgroundColor: "#f3f4f6",
    justifyContent: "center", alignItems: "center", marginRight: 12,
  },
  historyInfo: { flex: 1 },
  historyName: { fontSize: 14, fontWeight: "500", color: "#111827" },
  historyMeta: { flexDirection: "row", alignItems: "center", marginTop: 3, gap: 3 },
  historyPerson: { fontSize: 12, color: "#9ca3af" },
  historySep: { fontSize: 12, color: "#d1d5db" },
  historyTime: { fontSize: 12, color: "#9ca3af" },
  historyBadge: {
    backgroundColor: "#dcfce7", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4,
  },
  historyBadgeText: { fontSize: 14, fontWeight: "700", color: "#166534" },
});
