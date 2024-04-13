import jwt from "jsonwebtoken"

export const genAndSetJWT=(id,res)=>{
    const signedCookie=jwt.sign({id},process.env.jwtSecret)
    res.cookie("JWTtoken",signedCookie,{
        maxAge:5*60*1000,
        httpOnly:true,
        sameSite:"strict"
    })
}