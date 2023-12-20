import "./App.scss";
import illu from "./assets/images/illustration-sign-up-mobile.svg";

function App() {
  return (
    <div className={"app"}>
      <div className="image">
        {/*<img alt={"sign-up mobile illustration"} src={illu} />*/}
      </div>
      <div className={"content"}>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product manager receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <div className={"input-container"}>
          <input
            alt={"Email address"}
            type={"email"}
            placeholder={"email@company.com"}
          />
        </div>
        <button>Subscribe to monthly newsletter</button>
      </div>
    </div>
  );
}

export default App;
