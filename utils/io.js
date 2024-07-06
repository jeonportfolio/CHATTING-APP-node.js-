const chatContoller = require("../Controllers/chat.controller");
const userController = require("../Controllers/user.controller") 

module.exports=function(io) {
    //io관련 함수들 (on은 받는함수 emit은 보내는 함수)
    io.on("connection", async(socket) => {
        console.log("client is connected", socket.id);

        socket.on("login", async(userName,cb) => {
            //유저 정보를 저장 -> Controllers
            try {
                const user = await userController.saveUser(userName, socket.id);
                const welcomeMessage = {
                    chat: `${user.name} is joined to this room`,
                    user: { id: null, name: "system"}
                }
                io.emit("message", welcomeMessage);
                cb({ok:true, data:user});
            } catch(error){
                 cb({ok:false, error: error.message});   
            }
        });
        
        socket.on("sendMessage", async(message, cb) => {
            try{
                //socket id로 유저 찾기 
                const user = await userController.checkUser(socket.id);
    
                //메세지 저장 
                const newMessage = await chatContoller.saveChat(message,user);
                io.emit("message", newMessage)
                cb({ok:true});
            }catch(error){
                cb({ok:false, error: error.message});   
            }
            
        });

        socket.on("disconnect", () => {
            console.log("user is disconnected");
        });
    });
};