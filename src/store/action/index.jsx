const set_data=(data,data1)=>{
    return(dispatch)=>{
        dispatch({
            type:"SETDATA", data:data, data1:data1
        })
        
    }
}
export{
    set_data
}