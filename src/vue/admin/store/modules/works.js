const works = {
    namespaced: true,
    state: {
      data: [{
        title: 'Тест',
        technology: 'Тест',
        file: 'Тест',
        }
      ]
    },
    getters: {
      works(state){
        return state.data
      }
    },
    mutations: {
      addWork(state, fields) {
        state.data.push(          
          {
          title: fields.get('title'),
          tech:fields.get('technology'),
          file:fields.get('file'),
          })
      },
    },
    actions: {

    }
  }
  
export default works