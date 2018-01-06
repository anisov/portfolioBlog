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
    actions: {

    }
  }
  
export default works