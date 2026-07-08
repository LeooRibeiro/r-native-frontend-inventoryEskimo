import Header from "@/components/Header";
import Footer from "@/components/footer";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Search, Plus, Package, ChevronRight } from "lucide-react-native";

const products: {
  sku: string; category: string; name: string; qty: number; unit: string;
}[] = [];

export default function SupplyRoom() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header style={styles.header} title="Abastecimento Câmara" />

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Search size={18} color="#9ca3af" />
          <Text style={styles.searchPlaceholder}>Buscar produto...</Text>
        </View>
        <TouchableOpacity style={styles.addBtn} activeOpacity={0.7}>
          <Plus size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Produtos (0)</Text>
        <Text style={styles.stockLabel}>Estoque câmara</Text>

        {products.length > 0 && (
          <View style={styles.productList}>
            {products.map((p) => (
              <TouchableOpacity key={p.sku} style={styles.productItem} activeOpacity={0.7}>
                <View style={styles.productLeft}>
                  <View style={styles.productIcon}>
                    <Package size={20} color="#0074f0" />
                  </View>
                  <View style={styles.productInfo}>
                    <View style={styles.productHeader}>
                      <Text style={styles.productSku}>{p.sku}</Text>
                    </View>
                    <Text style={styles.productName}>{p.name}</Text>
                  </View>
                </View>
                <View style={styles.productRight}>
                  <Text style={styles.productQty}>{p.qty}</Text>
                  <Text style={styles.productUnit}>{p.unit}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomPanel}>
        <View style={styles.bottomContent}>
          <View>
            <Text style={styles.selectedName}>Nenhum produto selecionado</Text>
            <Text style={styles.selectedAvailable}>Disponível 0 un</Text>
          </View>
          <TouchableOpacity style={styles.confirmBtn} activeOpacity={0.7}>
            <Text style={styles.confirmBtnText}>Confirmar movimentação</Text>
            <ChevronRight size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },
  header: { backgroundColor: "#0074f0" },
  searchRow: {
    flexDirection: "row", paddingHorizontal: 16, paddingVertical: 12, gap: 10,
    backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: "#e5e7eb",
  },
  searchBox: {
    flex: 1, flexDirection: "row", alignItems: "center",
    backgroundColor: "#f3f4f6", borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, gap: 8,
  },
  searchPlaceholder: { fontSize: 15, color: "#9ca3af" },
  addBtn: {
    width: 42, height: 42, borderRadius: 10, backgroundColor: "#0074f0",
    justifyContent: "center", alignItems: "center",
  },
  scrollView: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 140 },
  sectionTitle: { fontSize: 14, fontWeight: "700", color: "#6b7280", letterSpacing: 1, marginBottom: 4 },
  stockLabel: { fontSize: 14, fontWeight: "600", color: "#374151", marginBottom: 12 },
  productList: { gap: 10 },
  productItem: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    backgroundColor: "#fff", borderRadius: 12, padding: 14,
    borderWidth: 1, borderColor: "#e5e7eb",
  },
  productLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
  productIcon: {
    width: 40, height: 40, borderRadius: 10, backgroundColor: "#eff6ff",
    justifyContent: "center", alignItems: "center", marginRight: 12,
  },
  productInfo: { flex: 1 },
  productHeader: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 2 },
  productSku: { fontSize: 11, fontWeight: "700", color: "#6b7280", letterSpacing: 0.5 },
  productName: { fontSize: 15, fontWeight: "600", color: "#111827" },
  productRight: { alignItems: "center", marginLeft: 12 },
  productQty: { fontSize: 18, fontWeight: "700", color: "#2563eb" },
  productUnit: { fontSize: 11, color: "#9ca3af", marginTop: 1 },
  bottomPanel: {
    backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#e5e7eb",
    paddingHorizontal: 16, paddingVertical: 14,
    shadowColor: "#000", shadowOffset: { width: 0, height: -2 }, shadowOpacity: 0.08, shadowRadius: 6, elevation: 8,
  },
  bottomContent: { flexDirection: "row", alignItems: "center", gap: 12 },
  selectedName: { fontSize: 15, fontWeight: "700", color: "#111827" },
  selectedAvailable: { fontSize: 13, color: "#6b7280", marginTop: 2 },
  confirmBtn: {
    flexDirection: "row", alignItems: "center", gap: 6,
    backgroundColor: "#0074f0", paddingHorizontal: 18, paddingVertical: 12, borderRadius: 10,
  },
  confirmBtnText: { fontSize: 14, fontWeight: "700", color: "#fff" },
});
