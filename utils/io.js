module.exports=function(io) {
    //io관련 함수들 (on은 받는함수 emit은 보내는 함수)
    io.on("connection", async(socket) => {
        console.log("client is connected", socket.id);
    });
};