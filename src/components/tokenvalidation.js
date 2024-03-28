const { jwtDecode } = require("jwt-decode");

const tokenvalidate = ()=>{

    const token = localStorage.getItem("token")
    // console.log(token, "herhetoekn")
    if (token) {
        const decodedtoken = jwtDecode(token);
    
        const currentTime = Math.floor(Date.now() / 1000);
        console.log(decodedtoken.exp > currentTime, "here")

        let isTokenvalid = decodedtoken.exp > currentTime
     
        return isTokenvalid
     
    }

    return false
    
}

export default tokenvalidate
