import { Pagination } from '@mui/material';
import ArticlesContainer from '../../components/ArticlesContainer/ArticlesContainer';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
// import ArticlesContainer from './components/ArticlesContainer/ArticlesContainer';
// import SearchPanel from './components/SearchPanel/SearchPanel';
import './MainPage.scss';

function MainPage() {
    return (
        <div className="main-page">
            <SearchPanel />
            <ArticlesContainer />
            <Pagination 
            count={10}
            className="main-page__pagination" />
        </div>
    );
}

export default MainPage;
