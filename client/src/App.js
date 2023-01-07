import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./store/RootReducer";
import { Helmet } from "react-helmet-async";

import Main from "./pages/main";
import Talk from "./pages/talk";
import NotFound from "./components/common/NotFound";
import Qna from "./pages/qna";
import ResultPage from "./pages/result";
import Producers from "./pages/producers";
const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Main />} exact={true}></Route>
            <Route path="/talk" element={<Talk />} exact={true}></Route>
            <Route path="/qna" element={<Qna />}></Route>
            <Route path="/result" element={<ResultPage />}></Route>
            <Route path="/producers" element={<Producers />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

const MetaTag = () => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="사이버 점집 KUROSA_2023" />
      <meta property="og:site_name" content="사이버 점집 KUROSA_2023" />
      <meta property="og:description" content="cyber fortune teller" />
      <meta property="og:image" content="assets/Images/metaImg.png" />
      <meta property="og:url" content="http://3.36.50.113:3000" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="사이버 점집 KUROSA_2023" />
      <meta name="twitter:description" content="cyber fortune teller" />
      <meta name="twitter:url" content="http://3.36.50.113:3000" />
      <meta name="twitter:image" content="assets/Images/metaImg.png" />
    </Helmet>
  );
};
export default App;
