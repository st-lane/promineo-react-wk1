import React from 'react';

let ce = React.createElement;

export default class Navigation extends React.Component {
    render(){
        return ce('nav', {class:"row"}, 
            ce('a', {href:"https://www.google.com",target:"_new"}, "Google"),
            ce('a', {href:"https://www.yahoo.com",target:"_new"}, "Yahoo"),
            ce('a', {href:"https://www.bing.com",target:"_new"}, "Bing")
        );
    }
}