import { hot } from "react-hot-loader/root";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "./containers/Layout/Layou";
import { Header } from "./containers/Header/Header";
import { PhotosList } from "./components/PhotosList/PhotosList";
import { Footer } from "./containers/Footer/Footer";
import { TokenContextProvider } from "./context/tokenContext";
import { UserContextProvider } from "./context/userContext";
import { ModalContainer } from "./containers/ModalContainer/ModalContainer";
import { store } from "./store/store";
import { ContentBlock } from "./containers/Content/ContentBlock";
import { isMounted } from "./actions/actions";
import "./main.global.css";

function AppComponent() {
  if (typeof window !== "undefined") {
    if (localStorage.length !== 0) {
      const isLight = JSON.parse(localStorage.getItem("isLight"));
      if (isLight) {
        document.body.setAttribute("class", "lightScheme");
      } else {
        document.body.setAttribute("class", "darkScheme");
      }
    }
  }
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Provider store={store}>
      <TokenContextProvider>
        <UserContextProvider>
          {isMounted && (
            <BrowserRouter>
              <Header />
              <PhotosList />
              <Route path="/photo/:id" children={<ModalContainer />} />
              <Footer />
            </BrowserRouter>
          )}
        </UserContextProvider>
      </TokenContextProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
