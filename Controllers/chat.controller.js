const Chat = require("../Models/chat")
const chatContoller = {}

chatContoller.saveChat = async(message,user) => {
    const newMessage = new Chat({
        chat:message,
        user: {
            id: user._id,
            //_id는 몽고db에서 번호를 부여해주기 때문에
            name: user.name
        }
    });
    await newMessage.save();
    return newMessage;
}

module.exports = chatContoller