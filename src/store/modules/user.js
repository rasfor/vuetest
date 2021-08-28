import axios from "axios";

const state = {
  user: {}
};

const getters = {};

const actions = {
  loginUser( {}, user) {
    axios.post('https://mobile.fakebook.press/api/login',
    {
      email: user.email,
      password: user.password
    })
    .then( response => {
      console.log(response.data);
    })
  },
    registUser( {}, user) {
    axios.post('https://mobile.fakebook.press/api/register',
    {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation
    })
    .then( response => {
      console.log(response.data);
    })
  }
}

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}