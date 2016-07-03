const MyApp = (props) => {
    return (<h1>Hello from {props.appName}</h1>);
};

ReactDOM.render(
    <MyApp appName={"My App"} />,
    document.querySelector('#react')
);