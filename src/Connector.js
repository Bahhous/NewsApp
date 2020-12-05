import axios from "axios";
import { NotificationManager } from "react-notifications";

const Connector = (params) => {
  axios({
    method: params.method ?? "get",
    url: params.url,
    data: params.data ?? {},
    responseType: params.responseType ?? "json",
    dataType: params.dataType ?? "json",
    headers: params.headers ?? {},
  })
    .then(params.success)
    .catch((error) => {
      params.catch(error);
      if (error.response !== undefined && error.response.status === 403)
        NotificationManager.error("Bad Request", "Try again later.");
      if (error.response !== undefined && error.response.status === 500)
        NotificationManager.error("Server error", "Try again later.");
      if (
        apiRoutes.signin !== params.url &&
        error.response !== undefined &&
        error.response.status === 401
      )
        NotificationManager.error(
          "Access denied",
          "You have no authorization."
        );
    });
};

export default Connector;