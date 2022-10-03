"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_jsx_1 = __importDefault(require("./Home.jsx"));
const About_jsx_1 = __importDefault(require("./About.jsx"));
const Contact_jsx_1 = __importDefault(require("./Contact.jsx"));
const App = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("nav", null,
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home"),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/about" }, "About"),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/contact" }, "Contact")),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_jsx_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/about", element: react_1.default.createElement(About_jsx_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/contact", element: react_1.default.createElement(Contact_jsx_1.default, null) }))));
};
exports.default = App;
//# sourceMappingURL=App.js.map