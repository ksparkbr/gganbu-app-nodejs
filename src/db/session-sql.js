const runQuery = require("./run-query")

module.exports = {
    selectUserInfo : (param, callback)=>{
        let query = `
            select * from app_user
            where user_id=?
        `
        runQuery(query, param, callback);
    }

}