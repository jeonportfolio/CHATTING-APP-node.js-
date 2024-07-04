const User = require("../Models/user")
const userController = {}

userController.saveUser = async(userName, sid) => {
    //재방문 유저 확인
    let user = await User.findOne({name: userName});

    //없는 유저라면 새로운 유저 정보 입력 
    if(!user){
        user = new User ({
            name: userName,
            token: sid,
            online: true,
        });
    }

    // 이미 존재하는 유저라면 토큰 값만 바꾸어준다. 

    user.token = sid;
    user.online = true; 

    await user.save();
    return user; 

};
module.exports = userController;