import React from 'react';
import styled from 'styled-components';

const NewsItem = (props) => {
    return <NewsItemStyle>
        <p>{props.title}</p>
        <span>{props.text}</span>
    </NewsItemStyle>
}

const NewsItemStyle = styled.div`
    width: 1000px;
    padding: 20px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: #DCDCDC;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
`

export default NewsItem;