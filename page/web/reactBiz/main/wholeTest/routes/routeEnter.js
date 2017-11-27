import {hashHistory} from 'react-router'

export const obj = {
    onEnter: (nextState, replace)=> {
        console.log(nextState)
    }
};

module.exports = obj;