import axios from "axios";
import { NotificationManager } from "react-notifications";
import { apiKey } from "./vars";

const Connector = (params) => {
  axios({
    method: params.method ?? "get",
    url: `${params.url}&apiKey=${apiKey}`,
    data: params.data !== undefined ?? {},
    responseType: params.responseType !== undefined ?? "json",
    dataType: params.dataType !== undefined ?? "json",
    headers: params.headers !== undefined ?? {},
  })
    .then(params.success)
    .catch((error) => {
      params.catch(error);
      if (error.response !== undefined && error.response.status === 403)
        NotificationManager.error("Bad Request", "Try again later.");
      if (error.response !== undefined && error.response.status === 500)
        NotificationManager.error("Server error", "Try again later.");
      if (error.response !== undefined && error.response.status === 401)
        NotificationManager.error(
          "Access denied",
          "You have no authorization."
        );
    });
};

export default Connector;
