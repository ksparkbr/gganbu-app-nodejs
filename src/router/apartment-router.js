const apartmentSql = require("../db/apartment-sql")

module.exports = (app)=>{

    app.get("/api/apartment/mil-type", (request, response)=>{
        apartmentSql.selectDistinctMilType((res)=>{
            response.json(res);
        })
    })

    app.get("/api/apartment/troop-div", (request, response)=>{
        const {mil_type} = request.query;
        console.log(mil_type);
        apartmentSql.selectDistinctTroop([mil_type], (res)=>{
            response.json(res);
        })
    })

    app.get("/api/apartment/search", (request, response)=>{
        const params = request.query;
        Object.keys(params).forEach((item)=>{
            if(params[item] == '')
                delete params[item]
        })
        apartmentSql.selectApartment(params, (res)=>{
            response.json(res);
        })
        
    })

}