import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/news';
import style from './News.module.css';

const NewsItem = (props) => {
    return <div className={style.NewsBlock}>
        <p>{props.title}</p>
        <span>{props.text}</span>
    </div>
}

const News = (props) => {
    let [state, setState] = useState({
        status: null,
        error: null
    })

    useEffect(() => {
        props.getNews().then((response) => {
            setState(prev => ({
                ...prev,
                status: response.status,
                error: response.error
            }))
        });
    }, [])

    return <div>
        {
            state.status === 'ok'
                ? <div>
                    {
                        state.error === 'ok'
                            ? <div>
                                {
                                    state.error === 'ok'
                                        ? <div>
                                            {props.news.map((a) => <NewsItem key={a.id} {...a} />)}
                                            <p>Количество постов: {props.news.length}</p>
                                        </div>
                                        : <h1>
                                            {state.error}
                                        </h1>
                                }
                            </div>
                            : <h1>{state.error}</h1>
                    }
                </div>
                : <h1>Wait...</h1>
        }
    </div>
}

const mapStateToProps = (state) => ({
    news: state.news.news
})

export default connect(mapStateToProps, { getNews })(News);