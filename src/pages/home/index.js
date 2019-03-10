import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinkBtn from '../../components/LinkBtn';

class Home extends Component {

  static propTypes = {
    articles: PropTypes.object,
    getArticles: PropTypes.func
  };

  componentWillMount() {
    const {getArticles} = this.props;
    getArticles();
  }


  render() {
    const {articles: {data}} = this.props;
    if (!data) return null;
    return (
      <article className="articles">
        {data.map(article => {
          return (
            <section key={article.id} className="article">
              <h3>{article.title}</h3>
              <div className="article__about">
                <div className="article__date">MARCH 2, 2016</div>
                <div className="article__section">TRAVEL</div>
              </div>
              <p>{article.body}</p>
                <LinkBtn
                  to={`/article/${article.id}`}
                  label={'Continue reading'}
                  selector={'article__link'}
                />
            </section>
          );
        })}
      </article>
    );
  }

}

export default Home;
