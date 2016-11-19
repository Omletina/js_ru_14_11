import React, { Component } from 'react'
import ArticleCommentList from './ArticleCommentList'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            obj: { foo: 'bar' }
        }
    }

    render() {
        const { article } = this.props
        const body = this.state.isOpen ? <p>{article.text}</p> : null
        const commentsList = this.state.isOpen ? <ArticleCommentList comments={article.comments} /> : null

        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
                {commentsList}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article