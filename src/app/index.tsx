import { Header } from "../components/header";
import { AppScreen } from "../components/layout/appScreen";
import { SectionMain } from "../components/sectionMain";

export default function Index() {
  return (
    <AppScreen>
      <Header />
      <SectionMain />
    </AppScreen>
  );
}
