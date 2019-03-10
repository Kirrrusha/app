import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import LinkBtn from '../../components/LinkBtn';
import './style.scss';

class Article extends Component {
  static defaultProps = {};

  static propTypes = {
    data: PropTypes.shape({
      article: PropTypes.shape({
        userId: PropTypes.number,
        id: PropTypes.number,
        body: PropTypes.string,
        title: PropTypes.string
      }),
      comments: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.number,
        id: PropTypes.number,
        body: PropTypes.string,
        title: PropTypes.string,
        email: PropTypes.string
      })),
      author: PropTypes.object
    })
  };


  render() {
    const {
      data: {
        article,
        author,
        comments
      }
    } = this.props;
    if (!article || !comments || !author) return null;
    return (
      <article>
        <section className="article">
          <h3>{article.title}</h3>
          <div className="article__about">
            <div className="article__date">MARCH 2, 2016</div>
            <div className="article__section">TRAVEL</div>
          </div>
          <p>{article.body}</p>
          <div className="article__comments">Comments:</div>
          {comments.map(comment => {
              return (
                <div key={comment.id} className="comment">
                  <div className="comment__name">
                    {comment.name}
                    <span className="comment__email">{comment.email}</span>
                  </div>
                  <div className="comment__body">{comment.body}</div>
                </div>
              );
            }
          )}
          <LinkBtn
            to={`/home`}
            label={'View all posts'}
            selector={'article__link'}
          />
        </section>
      </article>
    );
  }
}

export default Article;
