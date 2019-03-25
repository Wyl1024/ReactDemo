import React, { Component } from 'react';

var names = ['Alice', 'Emily', 'Kate'];

class App extends Component{
    render(){
        return(
            <div>
                {
                    names.map(function (name, index) {
                    return <div key={index}>Hello, {name}!</div>
                    })
                }
            </div>
        )
    };
}

export default App;
