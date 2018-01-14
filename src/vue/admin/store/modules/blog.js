
const posts = {
  namespaced: true,
  state: {
    data: [],
    message: ''
  },
  getters: {
    posts(state) {
      return state.data
    },
    message(state) {
      return state.message
    }
  },
  mutations: {
    addBlogPost(state, post) {
      var blog = { ...post}
      fetch("../api/blog", {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(blog)
        }).then(response => {
          return response.json()
        })
        .then(data => {
          state.message = data
        })

    }
  },
  actions: {}
}

export default posts