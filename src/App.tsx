import { BackgroundOverlay } from "./components/BackgroundOverlay/BackgroundOverlay";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { MainContainter } from "./components/MainContainter/MainContainter";
import { PhrasesGrid } from "./components/PhrasesGrid/PhrasesGrid";
import { Layout } from "./layouts/Layout";

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
