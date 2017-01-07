var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./components/App.jsx");
var api = require("./api/api.js");

api.getContacts();

ReactDOM.render(<App />, document.getElementById("app"));