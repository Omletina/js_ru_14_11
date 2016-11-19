import React from 'react'


function ArticleComment(props) {

    const { comment } = props;

    return (
        <p>{comment.text} <strong>{comment.user}</strong></p>

    )


}

export default ArticleComment

