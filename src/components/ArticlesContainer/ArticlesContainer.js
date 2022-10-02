import React, { useState } from 'react';
import mock from '../../mock/mock';
import AddArticleViewButton from '../AddArticleViewButton/AddArticleViewButton';
import ArticleView from '../ArticleView/ArticleView';
import './ArticlesContainer.scss';

export default function ArticlesContainer() {
    const views = mock.articles.map((a) => (
        <ArticleView
            key={a.id}
            article={a}
        />
    ));

    return (
        <div className="articles__container">
            <AddArticleViewButton />
            {views}
        </div>
    );
}