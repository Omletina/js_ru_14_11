import React, { Component }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'


function ArticleList(props) {
    return (
        <ul>
            {getBodyArticle(props)}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: React.PropTypes.array.isRequired,
    openAccordion: React.PropTypes.func.isRequired,
    openArticleId: React.PropTypes.string
}

function getBodyArticle(props) {
    const { articles, openArticleId, openAccordion } = props;
    return articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id == openArticleId}
                toggleOpen = {openAccordion(article.id)}
            />
        </li>
    ))
}

export default accordion(ArticleList)