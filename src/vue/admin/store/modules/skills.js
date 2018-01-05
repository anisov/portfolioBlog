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
            state.data.push(skill)
        },
        removeExistedSkill(state, skillID){
            state.data = state.data.filter(item=> item.id !== skillID)
        }
    },
    actions: {
        fetchSkills({state}) {
            fetch("./data.json")
            .then(response => {
                return response.json()
            }).then(data =>{
                state.data = data
            } )
        }
    } 
}

export default skills