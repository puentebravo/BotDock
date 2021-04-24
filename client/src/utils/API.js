import axios from "axios";

export default {
//   getBot: function (query) {
//     return axios.get(`https://www.googleapis.com/bots/v1/volumes?q=${query}`);
//   },
//   // Deletes bot with id
//   deleteBot: function (id) {
//     return axios.delete("/api/bots/" + id).then(result => result.data);
//   },
//   // Saves bot
//   saveBot: function (botData) {
//     return axios.post("/api/bots", botData).then(result => result.data);
//   },
//   // Retrieve bot
//   savedBots: function () {
//     return axios.get("/api/bots").then(result => result.data);
//   }

    saveUser: function (userData) {
        return axios.post ("/api/user/register", userData)
    }

};


