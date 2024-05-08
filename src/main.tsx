import { createRoot } from "react-dom/client";
import axios from "axios";
import App from "./app/App";
import { setupAxios } from "./app/modules/api/axios";

const container = document.getElementById("root");

setupAxios(axios);
if (container) {
    createRoot(container).render(<App />);
}
