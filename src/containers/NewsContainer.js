import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getNews } from '../actions/news';
import NewsItem from '../items/news/NewsItem';
import News from '../page/News/News';

const NewsContainer = ({ news, ...props }) => {
    const data = <div>
        {news.map((a) => <NewsItem key={a.id} {...a} />)}
        <p> Количество постов: {news.length} </p>
    </div>
    return <News {...props} data={data} />
}

const mapStateToProps = (state) => ({
    news: state.news.news,
    isFetching: state.preloader.isFetching,
    error: state.preloader.error
})

export default compose(
    connect(mapStateToProps, { getNews })
)(NewsContainer);
