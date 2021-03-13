import React from 'react';

const IsLoading = (props) => {
    return props.isFetching ? props.children : <h1>Wait...</h1>;
}

export default IsLoading;