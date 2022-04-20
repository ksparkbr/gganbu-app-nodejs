const bcrypt = require('bcrypt');
const sessionSql = require('../db/session-sql');

module.exports = (app)=>{
    app.post("/api/session/setSession", (request, response)=>{
        const loginInfo = request.body;
        console.log(loginInfo);

        sessionSql.selectUserInfo([loginInfo.user_id], (result)=>{
            if(result.length > 0){
                let userInfo = result[0];
                if(bcrypt.compareSync(loginInfo.password, userInfo.password)){
                    delete userInfo.password;
                    request.session.userInfo = userInfo;
                    response.json(userInfo);
                }
                else{
                    response.json({msg : "비밀번호가 틀렸습니다."});
                }
            }
            else{
                response.json({msg : "아이디를 찾을 수 없습니다."});
            }
        })
    })

    app.get("/api/session/checkSession", (request, response)=>{
        response.json(request.session.userInfo);
    })

    app.get("/api/session/invalidateSession", (request, response)=>{
        request.session.destroy(()=>response.json("logout"));
    })
}