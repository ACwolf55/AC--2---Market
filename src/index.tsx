
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Provider } from "react-redux";
import {store} from "./redux/store"; 

const stripePromise = loadStripe(
  "pk_test_51Kh1AwBS4IfWHtbjigMFs5u1KmU158nXHbRzoEKudS0jPUTypjrObeNAlFOHbHmYoK37Ec4TAjJP59pznbQzusTV00iomdfIpp"
);

const options = {
  // passing the client secret obtained from the server
  clientSecret: "{{CLIENT_SECRET}}",
};

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <Elements stripe={stripePromise} options={options}>

      <App />

    </Elements>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
