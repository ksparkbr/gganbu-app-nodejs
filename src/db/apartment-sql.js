const runQuery = require("./run-query")

module.exports = {
    selectDistinctMilType : (callback)=>{
        let query = `select distinct mil_type from tb_apartment`
        runQuery(query, [], callback);
    },
    selectDistinctTroop : (param, callback)=>{
        let query = `select distinct troop_div from tb_apartment where mil_type=?`
        runQuery(query, param, callback);
    },
    selectDistinctAddress1 : (callback)=>{
        let query = `select distinct address1 from tb_apartment`
        runQuery(query, [], callback);
    },
    selectDistinctAddress2 : (param, callback)=>{
        let query = `select distinct address2 from tb_apartment where address1 = ?`
        runQuery(query, param, callback);
    },
    selectDistinctAddress3 : (param, callback)=>{
        let query = `select distinct address3 from tb_apartment where address1 = ? and address2=?`
        runQuery(query, param, callback);
    },
    selectDistinctAddress4 : (param, callback)=>{
        let query = `select distinct address4 from tb_apartment where address1 = ? and address2=? and address3=?`
        runQuery(query, param, callback);
    },
    selectApartment : (param, callback) => {
        let query = `
            select * from tb_apartment
            where 1=1
        `;
        let _param = []
        if(param.mil_type != undefined){
            _param.push(param.mil_type);
            query += `and mil_type=?`
        }
        if(param.troop_div != undefined){
            _param.push(param.troop_div);
            query += `and troop_div=?`
        }
        if(param.address1 != undefined){
            _param.push(param.address1);
            query += `and address1=?`
        }
        if(param.address2 != undefined){
            _param.push(param.address2);
            query += `and address2=?`
        }
        if(param.address3 != undefined){
            _param.push(param.address3);
            query += `and address3=?`
        }
        if(param.address4 != undefined){
            _param.push(param.address4);
            query += `and address4=?`
        }
        runQuery(query, _param, callback);
    }
}