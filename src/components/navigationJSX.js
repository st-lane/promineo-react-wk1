import React from 'react';

let ce = React.createElement;

export default class Navigation extends React.Component {
    render(){
        return (
            <nav className="row">
                <a href="https://www.google.com" target="_new">Google</a>
                <a href="https://www.yahoo.com" target="_new">Yahoo</a>
                <a href="https://www.bing.com" target="_new">Bing</a>
            </nav>
        );

        /*
        return ce('nav', {class:"row"}, 
            ce('a', {href:"https://www.google.com",target:"_new"}, "Google"),
            ce('a', {href:"https://www.yahoo.com",target:"_new"}, "Yahoo"),
            ce('a', {href:"https://www.bing.com",target:"_new"}, "Bing")
        );
        */
    }
}