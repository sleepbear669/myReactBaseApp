import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: '', password: ''}
    }

    onPressKey = (e) => {
        const userInfo = {...this.state};
        userInfo[e.target.name] = e.target.value;
        this.setState(userInfo);
    };

    onSubmitForLogin = () => {
        console.log(this.state);
    };

    handleKeyPress = (e) => {
        console.log(e.key);
    };

    render() {
        return (
            <div onKeyPress={this.handleKeyPress}>
                <input type="text"
                       name="id"
                       value={this.state.id}
                       onChange={this.onPressKey}/>
                <input type="password"
                       name="password"
                       value={this.state.password}
                       onChange={this.onPressKey}
                />
                <button onClick={this.onSubmitForLogin}>login</button>
            </div>
        );
    }
}