import ReactGA from "react-ga";

ReactGA.initialize("UA-231872780-1");
ReactGA.pageview(window.location.pathname + window.location.search);
