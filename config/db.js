import mysql from "serverless-mysql";

export const pool = mysql({
  config: {
    host: "",
    user: "",
    password: "",
    port: "",
    database: "",
  },
});
