
const skills = {
    state : {
        data: []
    },
    getters:{
        skills(state){
            return state.data
        }
    },
    mutations:{
        addNewSkill(state, skill){
            fetch("../api/skill", {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(skill)
              }).then(response => {
                return response.json()
              })
              .then(data => {
                state.message = data
                fetch("../api/skill")
                .then(response => {
                    return response.json()
                }).then(data =>{
                    state.data = Object.assign(data['articles'])
                })
              })
            
        },
        removeExistedSkill(state, skillID){
                let id = {
                    'id': skillID
                };
                fetch("../api/skill", {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'delete',
                    body: JSON.stringify(id)
                })
                .then(response => {
                    return response.json()
                }).then(data =>{    
                    fetch("../api/skill")
                    .then(response => {
                        return response.json()
                    }).then(data =>{
                        state.data = Object.assign(data['articles'])
                    } )  
                })
            }
    },
    actions: {
        fetchSkills({state}) {
            fetch("../api/skill")
            .then(response => {
                return response.json()
            }).then(data =>{
                state.data = Object.assign(data['articles'])
            } )
        }
    } 
}

export default skills