class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>React</div>;
  }
};

ReactDOM.createRoot(document.getElementById("react-element")).render(<App />);
