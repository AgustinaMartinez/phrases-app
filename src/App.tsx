import { BackgroundOverlay } from "./components/BackgroundOverlay";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { MainContainter } from "./components/MainContainter";
import { PhrasesGrid } from "./components/PhrasesGrid";
import { Layout } from "./Layout";

function App() {
  return (
    <Layout>
      <BackgroundOverlay />
      <MainContainter>
        <Header />
        <Input />
        <PhrasesGrid />
      </MainContainter>
    </Layout>
  );
}

export default App;
