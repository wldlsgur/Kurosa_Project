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
      <MetaTag></MetaTag>
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
      <meta
        name="twitter:title"
        content="사이버 점집 KUROSA_2023"
        data-react-helmet="true"
      />
      <meta
        name="twitter:description"
        content="cyber fortune teller"
        data-react-helmet="true"
      />
      <meta name="twitter:card" content="summary" data-react-helmet="true" />
      <meta
        name="twitter:url"
        content="http://3.36.50.113:3000/"
        data-react-helmet="true"
      />
      <meta
        name="twitter:image"
        content="https://ifh.cc/g/cvd79x.jpg"
        data-react-helmet="true"
      />
      <meta
        name="title"
        property="og:title"
        content="사이버 점집 KUROSA_2023"
        data-react-helmet="true"
      />
      <meta
        name="description"
        property="og:description"
        content="cyber fortune teller"
        data-react-helmet="true"
      />
      <meta
        name="image"
        property="og:image"
        content="/favicon.ico"
        data-react-helmet="true"
      />
      <meta
        name="url"
        property="og:url"
        content="http://3.36.50.113:3000/"
        data-react-helmet="true"
      />
      <meta property="og:locale" content="ko_KR" data-react-helmet="true" />
    </Helmet>
  );
};
export default App;
