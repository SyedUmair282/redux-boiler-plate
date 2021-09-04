

const Initial_state = {
    umair:"ali"
}
export default (state = Initial_state,action) => {

    switch(action.type){
        case "SETDATA":
            
            return({
                ...state,
                umair:"basit",
                khan:"sahib",
                name: "Umair",
                email:"umairsyed282@gmail.com",
                user:[{id:23}],
                country:action.data,
                new:action.data1
            })
        default: return state
    }
    
    
    
}