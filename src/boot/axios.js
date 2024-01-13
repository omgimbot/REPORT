import { boot } from "quasar/wrappers";
import axios from "axios";

// const baseURL = "https://api-capilpesawaran.psti-ubl.id/";
const baseURL = "http://localhost:5072/";
// const client = mqttjs.connect({ baseURL: "ws://103.167.112.188:15675/ws" });
// const baseURL = "http://192.168.7.201:5072/";

const api = axios.create({ baseURL: baseURL });

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$axios = api;
});

export { api };
// export { client };
