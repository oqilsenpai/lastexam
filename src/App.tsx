import { BrowserRouter, Route, Routes } from "react-router-dom";
import { default as MainLayout } from "./layouts/main-layout";
import HomePage from "./pages/home";
import Login from "./components/login";
import Query from "./services/query";
import SinglePage from "./pages/singlepage";
import FormaPage from "./pages/formapage";
import LoginSecond from "./components/loginsecond";
import FavoritesPage from "./components/FavoritesPage";
import AccountPage from "./pages/accountpage";
const App = () => {
  return (
    <Query>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout>
                <Login />
              </MainLayout>
            }
          />
          <Route
            path="/singlepage"
            element={
              <MainLayout>
                <SinglePage />
              </MainLayout>
            }
          />
            <Route
            path="/formapage"
            element={
              <MainLayout>
                <FormaPage />
              </MainLayout>
            }
          />
            <Route
            path="/loginsecond"
            element={
              <MainLayout>
                <LoginSecond />
              </MainLayout>
            }
          />
           <Route
            path="/favoritespage"
            element={
              <MainLayout>
                <FavoritesPage />
              </MainLayout>
            }
          />
           <Route
            path="/accountpage"
            element={
              <MainLayout>
                <AccountPage />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </Query>
  );
};

export default App;
