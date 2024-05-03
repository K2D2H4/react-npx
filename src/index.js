import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <createBrowserRouter>
      <App /> {/* import한 App 컴포넌트를 jsx에서 사용 */}
    </createBrowserRouter>
  </React.StrictMode>
);
