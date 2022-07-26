import React from 'react';
import ReactDOM from 'react-dom';

const state = [];
const setters = [];
let stateIndex = 0;

function createSetter (index) {
    return function (newState) {
        state[index] = newState;
        render();
    }
}

function useState (initialState) {
    state[stateIndex] = state[stateIndex] ? state[stateIndex] : initialState;
    setters.push(createSetter(stateIndex));
    const value = state[stateIndex];
    const setter = setters[stateIndex];
    stateIndex++;
    return [value, setter];
}

function render() {
    stateIndex = 0;
    ReactDOM.render(<App />, document.getElementById('root'));
}

const App = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('yindong');
    return <div>
        {count}
        <button onClick={() => { setCount(count + 1); }}></button>
        {name}
        <button onClick={() => { setName('yd'); }}></button>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));
