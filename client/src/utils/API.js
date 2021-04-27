import axios from "axios";

export default {
  getBot: function () {
    return axios.get(`/api/user/stockCheck`);
  },


    saveUser: function (userData) {
        return axios.post ("/api/user/register", userData)
    }

};


