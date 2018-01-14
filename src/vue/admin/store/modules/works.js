const works = {
    namespaced: true,
    state: {
      message:''
    },
    getters: {
      works(state){
        return state.data
      },
      message(state){
        return state.message
      }
    },
    mutations: {
      addWork(state, fields) {
        console.log(fields)
        fetch("../api/work", {
          method: 'POST',
          body: fields
        }).then(response => {
          return response.json()
        })
        .then(data => {
          state.message = data
        })
      },
    },
    actions: {
    }
  }
  
export default works