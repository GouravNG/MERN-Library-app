import monogoose from "mongoose"

export const mongoConnection = async (connetionURL) => {
    try {
        const mongoReply = await monogoose.connect(connetionURL)
        console.log(`Connected to mongodb on PORT: ${mongoReply.connection.port}`)
    }
    catch (err) {
        console.log("Connectionn to mongodb Failed")
        console.log(err)
    }
}