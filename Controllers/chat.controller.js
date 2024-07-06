const Chat = require("../Models/chat")
const chatContoller = {}

chatContoller.saveChat = async(message,user) => {
    const newMessage = new Chat({
        chat:message,
        user: {
            id: user._id,
            name: user.name
        }
    });
    await newMessage.save();
    return newMessage;
}

module.exports = chatContoller