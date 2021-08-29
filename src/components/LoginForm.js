import React from 'react';

let ce = React.createElement;

export default class LoginForm extends React.Component {
    render() {
        return ce('form',
            {class:'loginForm'}, 
                ce('h3',{}, "Log In"),
                ce ('div', {class:"row"},
                    ce('label',{for:"uid"}, "User Name: "),
                    ce('input', {type:"text", id:"uid", name:"uid"}), 
                ),
                ce ('div', {class:"row"}, 
                    ce('label',{for:"pwd"}, "Password: "),
                    ce('input', {type:"password", id:"pwd", name:"pwd"}), 
                    ),
                ce ('div', {class:"row"}, 
                    ce('input', {type:"submit", id:"submit", name:"submit", value:"Log In"})
                )
        );
    }

}