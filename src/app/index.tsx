import { Text, View, ScrollView } from "react-native";
import "../styles/global.css";
import { Header } from '../components/header'
import { SectionMain } from '../components/sectionMain'

import Constants from 'expo-constants'

const statusBaeHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full" style={{ marginTop: statusBaeHeight + 8}}>
        <Header/>
        <SectionMain/>
      </View>
    </ScrollView>
  );
}
