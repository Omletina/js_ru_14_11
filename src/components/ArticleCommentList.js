import React, { Component }  from 'react'
import ArticleComment from './ArticleComment'


class ArticleCommentList extends Component {

	constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    render() {
	    const { comments } = this.props;

		if (!comments || !comments.length) 
			return 	<div><p>Комментариев нет</p></div>

	    const articleCommentItems = comments.map(function(comment){
	    	return <div key = {comment.id}><ArticleComment comment = {comment} /></div>;
	    });
	    const body = this.state.isOpen ? articleCommentItems : null;
	    const title = this.state.isOpen ? 'Закрыть' : 'Открыть';

	    return (
	        <section>
	        	<h4 onClick = {this.handleClick} >{title} комментарии ({articleCommentItems.length} шт)</h4>
	            {body}
	        </section>
	    )

	}

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default ArticleCommentList