import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this) // Привязка this (контеста) к функции increment
    }

    increment() { // это метод. Контекст там, где вызывается. То есть в jsx
        this.setState({count: this.state.count + 1})
    }

    decrement = () => { // у стрелочных функций нет своего контекста (формально это свойство-функция)
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
                {/*// еще один вариант */}
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default ClassCounter;