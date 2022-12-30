import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./store/RootReducer";

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

export default App;
