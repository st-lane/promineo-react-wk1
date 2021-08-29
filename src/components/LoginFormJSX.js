import React from 'react';

let ce = React.createElement;

export default class LoginForm extends React.Component {
    render() {
        return (
            <form>
            <h3>Log In</h3>
            <div className="row">
                <label for="uid">User Name: </label>
                <input type="text" id="uid" name="uid" />
            </div>
            <div className="row">
                <label for="pwd">Password: </label>
                <input type="password" id="pwd" name="pwd" />
            </div>
            <div className="row">
                <input type="submit" id="submit" name="submit" value="Log In" />
            </div>
        </form>
        );

        /*
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
        */
    }

}