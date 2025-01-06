const db = require('../db/connection');


exports.selectRideById = (id)=>{
    return db
    .query(`
    SELECT ride_id, ride_name, rides.year_opened, park_name, votes
    FROM rides
    JOIN parks
    ON rides.park_id = parks.park_id
    WHERE ride_id = $1;`, [id])
    .then(({rows})=>{
    //    console.log(rows);

       return {ride: rows[0]};
    })   
}


exports.createRideByParkId = (park_id, newRideData) => {
    const { ride_name, year_opened } = newRideData;
    return db.query(
        `INSERT INTO rides (
            ride_name,
            year_opened,
            park_id,
            votes)
            VALUES
            ($1, $2, $3, 0)
            RETURNING *;`,
            [ride_name, year_opened, park_id]
    ).then(({ rows }) => {
        console.log(rows);
        return { ride: rows[0] };
    });
}
