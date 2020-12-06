import * as actionTypes from "./ActionTypes";
import { apiUrl } from "../../vars";
import Connector from "../../Connector";

export const getNewsList = (topic = "a") => {
  return (dispatch) => {
    Connector({
      method: "GET",
      url: apiUrl + "/everything?q=" + topic,
      success: (response) => {
        if (response.data.status === "ok")
          dispatch({
            type: actionTypes.LOAD_NEWS_LIST,
            newsList: response.data.articles.map((article) => {
              return {
                title: article.title,
                description: article.description,
                url: article.url,
                image: article.urlToImage,
                date: article.publishedAt,
                content: article.content,
              };
            }),
          });
        else {
        }
      },
      catch: (err) => {},
    });
  };
};

export const getTopNewsList = (topic = "a") => {
  return (dispatch) => {
    Connector({
      method: "GET",
      url: apiUrl + "/top-headlines?q=" + topic,
      success: (response) => {
        if (response.data.status === "ok")
          dispatch({
            type: actionTypes.LOAD_TOP_NEWS_LIST,
            topNewsList: response.data.articles.map((article) => {
              return {
                title: article.title,
                description: article.description,
                url: article.url,
                image: article.urlToImage,
                date: article.publishedAt,
                content: article.content,
              };
            }),
          });
        else {
        }
      },
      catch: (err) => {},
    });
  };
};

export const getCustomNewsList = (topic = "a") => {
  return (dispatch) => {
    Connector({
      method: "GET",
      url: apiUrl + "/top-headlines?q=" + topic,
      success: (response) => {
        if (response.data.status === "ok")
          dispatch({
            type: actionTypes.LOAD_CUSTOM_NEWS_LIST,
            customNewsList: response.data.articles.map((article) => {
              return {
                title: article.title,
                description: article.description,
                url: article.url,
                image: article.urlToImage,
                date: article.publishedAt,
                content: article.content,
              };
            }),
          });
        else {
        }
      },
      catch: (err) => {},
    });
  };
};
