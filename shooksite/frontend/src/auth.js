import axios from 'axios';

const auth = {
    login: function(username, password, cb) {
        if (localStorage.token) {
            if (cb) cb(true)
            return
        }
        this.getToken(username, password, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
            } else {
                if (cb) cb(false)
            }
        })
    },

    logout: function() {
        delete localStorage.token
    },

    getUser: function(cb) {
      var token = localStorage.token
      axios({
        method: 'GET',
        url: '/api/token/',
        headers: {
          Authorization: "Token " + `${token}`
        }
      })
      .then( (res) => {
        console.log('SUCCESS GETTING USER', res)
        cb(res)
      })
      .catch( (err) => {
        console.log('ERROR', err)
      })
    },

    loggedIn: function() {
        return !!localStorage.token
    },

    signUp: function(request, cb) {
      console.log(request)
      axios({
        method: 'POST',
        url: '/api/user/create/',
        data: request
      })
      .then((response) => {
        console.log(response)
        if (response.headers.authorization) {
          localStorage.token = response.headers.authorization
          console.log('AUTHENTICATED, TOKEN STORED IN LOCAL STORAGE')
          cb({authenticated:true})
        }
      })
      .catch( (err) => {
        console.log('err', err)
      })
    },

    getUser: function(cb) {
      var token = localStorage.token
      axios({
        method: 'GET',
        url: '/api/token/',
        headers: {
          Authorization: "Token " + `${token}`
        }
      }).then( (res) => {
        console.log('SUCCESS GETTING USER', res)
        cb(res)
      })
      .catch( (err) => {
        console.log('ERROR', err)
      })
    },

    getToken: function(username, password, cb) {
        axios({
            method: 'POST',
            url: '/api/obtain-auth-token/',
            data: {
                username: username,
                password: password
            }}).then((response) => {
              console.log(response)
              cb({
                  authenticated: true,
                  token: response.data.token
              })
            })
        }
}

export default auth;
