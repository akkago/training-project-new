import { Pagination } from '@mui/material';
import './App.css';
import ArticlesContainer from './components/ArticlesContainer/ArticlesContainer';
import ArticleView from './components/ArticleView/ArticleView';
import SearchPanel from './components/SearchPanel/SearchPanel';
import mock from './mock/mock';

function App() {
  const views = mock.articles.map((a) => (
    <ArticleView
      key={a.id}
      article={a}
    />
  ));

  return (
    <div className="App">
      <SearchPanel />
      <ArticlesContainer />
      <Pagination count={10} />
    </div>
  );
}

export default App;
