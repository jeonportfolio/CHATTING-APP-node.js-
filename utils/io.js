const userController = require("../Controllers/user.controller") 

module.exports=function(io) {
    //io관련 함수들 (on은 받는함수 emit은 보내는 함수)
    io.on("connection", async(socket) => {
        console.log("client is connected", socket.id);

        socket.on("login", async(userName,cb) => {
            //유저 정보를 저장 -> Controllers
            try {
                const user = await userController.saveUser(userName, socket.id);
                cb({ok:true, data:user});
            } catch(error){
                 cb({ok:false, error: error.message});   
            }
        });

        socket.on("disconnect", () => {
            console.log("user is disconnected");
        });
    });
};