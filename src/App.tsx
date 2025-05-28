import { BackgroundOverlay } from "./components";
import { Header } from "./components";
import { Form } from "./components";
import { MainContainter } from "./components";
import { PhrasesGrid } from "./components";
import { Layout } from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <BackgroundOverlay />
      <MainContainter>
        <Header />
        <Form />
        <PhrasesGrid />
      </MainContainter>
    </Layout>
  );
}

export default App;
