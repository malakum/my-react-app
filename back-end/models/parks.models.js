const db = require('../db/connection');


exports.selectParks = ()=>{
    return db
    .query(`SELECT park_id, park_name,year_opened FROM parks;`)
    .then(({rows})=>{
       // console.log(rows[0]);
        return rows;
    })        
}