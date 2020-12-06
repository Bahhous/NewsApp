import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../Components/List";
import Item from "../Components/Item";
import {
  getNewsList,
  getTopNewsList,
  getCustomNewsList,
} from "../Store/Actions/mainActions";
import { withRouter } from "react-router-dom";

export default withRouter(function Home(props) {
  const dispacth = useDispatch();
  let newsList = useSelector((state) => state.main.newsList);
  let user = useSelector((state) => state.user.user);
  if (props.match.path === "/top-headlines")
    newsList = useSelector((state) => state.main.topNewsList);
  else if (props.match.path === "/custom")
    newsList = useSelector((state) => state.main.customNewsList);
  useEffect(() => {
    if (props.match.path === "/top-headlines") dispacth(getTopNewsList());
    else if (props.match.path === "/custom" && user)
      dispacth(getCustomNewsList(user.customNewsKeyword));
    else dispacth(getNewsList());
  }, []);
  return (
    <>
      <List data={newsList} ItemComponent={Item} />
    </>
  );
});
