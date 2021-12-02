import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../shared/App";
import { indexTmp } from "./indexTmp";
import { createApi } from "unsplash-js";
import fetch from "node-fetch";
import cookieParser from "cookie-parser";
globalThis.fetch = fetch;

const unsplash = createApi({
  accessKey: "pS8ndALMJdu-PrLD2_GiOEh8KY32aGjXApt0zhZx4vA",
  headers: { "Accept-Version": "v1" },
});

const port = 3000;
const app = express();
app.use("/static", express.static("./dist/client/client.js"));
app.use(cookieParser());

const auth = () => (req, res, next) => {
  const token = req.cookies["token"];
  if (!token) {
    return next();
  }

  req.token = token;
  next();
};

app.get("/isAuth", auth(), (req, res) => {
  if (!req.query.code) {
    return res.redirect("/");
  }

  if (req.token) {
    console.log("salut!");
    res.clearCookie("token");
    return res.redirect("/");
  }

  const params = {
    client_id: "pS8ndALMJdu-PrLD2_GiOEh8KY32aGjXApt0zhZx4vA",
    client_secret: "9HiEERqdMm9Lh8SiuCNXd7UfOWbMYZQHLcQOyXMyCzo",
    redirect_uri: "http://localhost:3000/isAuth",
    code: req.query.code,
    grant_type: "authorization_code",
  };

  fetch("https://unsplash.com/oauth/token", {
    method: "POST",
    headers: {
      "Accept-Version": "v1",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(params),
  })
    .then((data) => data.json())
    .then((data) => {
      if (!data.access_token) {
        return res.redirect("/");
      }
      res.cookie("token", data.access_token).redirect("/auth");
    })
    .catch((e) => {
      res.redirect("/");
    });
});

app.get("/auth", auth(), (req, res) => {
  if (!req.token) {
    res.redirect("/");
  }
  res.send(indexTmp(ReactDOM.renderToString(App()), req.token));
});

app.get("/api/userMe", auth(), (req, res) => {
  fetch("https://api.unsplash.com/me", {
    headers: {
      Authorization: `Bearer ${req.token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((e) => console.warn("error ", e));
});

app.get("/api/getCollection", (req, res) => {
  unsplash.photos
    .list({ page: req.query.page, perPage: 20 })
    .then((data) => res.send(data.response))
    .catch((e) => console.warn("error ", e));
});

app.get("/api/searchCollections", (req, res) => {
  unsplash.search
    .getCollections({
      query: req.query.collection,
      page: req.query.page,
      perPage: 20,
    })
    .then((data) => res.send(data.response))
    .catch((e) => console.warn("error ", e));
});

app.get("/api/getLike", auth(), (req, res) => {
  const params = {
    id: req.query.id,
    token: req.token,
  };

  fetch(`https://api.unsplash.com/photos/${req.query.id}/like?${req.token}`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      Authorization: `Bearer ${req.token}`,
      "Accept-Version": "v1",
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((e) => console.warn("error ", e));
});

app.get("/api/getUnlike", auth(), (req, res) => {
  const params = {
    id: req.query.id,
    token: req.token,
  };

  fetch(`https://api.unsplash.com/photos/${req.query.id}/like?${req.token}`, {
    method: "DELETE",
    body: JSON.stringify(params),
    headers: {
      Authorization: `Bearer ${req.token}`,
      "Accept-Version": "v1",
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((e) => console.warn("error ", e));
});

app.get("/api/photo", (req, res) => {
  unsplash.photos
    .get({ photoId: req.query.id })
    .then((data) => res.send(data.response))
    .catch((e) => console.warn("error ", e));
});

app.get("*", auth(), (req, res) => {
  console.log(req.token);
  res.send(indexTmp(ReactDOM.renderToString(App()), req.token));
});

app.listen(port, () => {
  console.log(`Server has been started on http://localhost:${port}`);
});
