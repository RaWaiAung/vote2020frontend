const storeItem = localStorage.getItem('user')
const userInfo = storeItem && JSON.parse(storeItem)

const masterData =  userInfo && userInfo.user && {
    Created_By : userInfo.user.username,
    Updated_By : userInfo.user.username,
    Status : 'Active'

}
const OwnOrRent = (value) =>{
    if (value === "ကိုယ်ပိုင်"){
        return "ကိုယ်ပိုင်"
    }else if(value === "အငှား"){
        return "အငှား"
    }else{
        return ' '
    }
}
const Religion = (value) =>{
    if (value === "ဗုဒ္ဓ"){
        return "ဗုဒ္ဓ"
    }else if(value === "ခရစ်ယာန်"){
        return "ခရစ်ယာန်"
    }
    else if(value === "ဟိန္ဒူ"){
        return "ဟိန္ဒူ"
    }else if(value === "မွတ်ဆလင်"){
        return "မွတ်ဆလင်"
    }else{
        return ' '
    }
}
export {
masterData,
OwnOrRent ,
Religion           
}