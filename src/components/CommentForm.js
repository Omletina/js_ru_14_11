import React, { Component } from 'react';
require("../components/CommentForm.css");


class CommentForm extends Component {



  render() {

    return (
      <form className="comment-form">
        <div>
          <label>Имя</label>
          <input type = "text" required />
        </div>
        <div>
          <label>Комментарий</label>
          <textarea required />
        </div>
        <button type = "submit">Добавить комментарий</button>
      </form>
    );
  }
}

export default CommentForm