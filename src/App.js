import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import MainPage from './containers/MainPage/MainPage';
import AddArticlePage from './containers/AddArticlePage/AddArticlePage';
import ArticlePage from './containers/ArticlePage/ArticlePage';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Navigation.Article} element={<ArticlePage />} />
        <Route path={Navigation.AddArticle} element={<AddArticlePage />} />
        <Route exact path={Navigation.Main} element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
