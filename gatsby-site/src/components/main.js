import React from 'react';

import PropTypes from "prop-types"

//import { Container } from './styles';

const teste = [<h1>index 0</h1>, <h1>index 1</h1>, <h1>index 2</h1>];

const main = (index) => {
    return (
        <div>
            {teste[index.index]}
        </div>
    )
}

main.propTypes = {
    index: PropTypes.number,
}

export default main;
