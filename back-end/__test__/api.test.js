const request = require('supertest');
const app = require('../app');
const db =require('../db/connection');
const seed = require('../db/seed') 
const data = require('../db/data');


afterAll(()=>{
   return db.end();
});

beforeEach(() => {
    return seed(data);
})


describe('GET /api/healthcheck', () => {
    test('200: responds with an okey message', () => {
        return request(app)
        .get('/api/healthcheck')
        .expect(200)
        .then((res) => {
            expect(res.body.msg).toBe('We got it');
        });
    });
});

    describe('GET /api/parks', () => {
        test('200: responds with an okey message', () => {
            return request(app)
            .get('/api/parks')
            .expect(200)
            .then (({body})=> { 
                const parkData = body.parkArr;
                expect (parkData.length).toBe(4)

                parkData.forEach((park)=>{
                    expect(park).toEqual(
                        expect.objectContaining({
                            park_id: expect.any(Number),
                            park_name:expect.any(String), 
                            year_opened: expect.any(Number) })
                    )
                })
                
            });
         
            });
        });


    describe('GET /api/ride/:ride_id', () => {
        test('200: responds with an okey message', () => {
            return request(app)
            .get('/api/ride/2')
            .expect(200)
            .then (({body})=> {
                expect(body.ride).toMatchObject({
                    ride:  {
                        ride_id: 2,
                        ride_name: 'Stealth',
                        year_opened: 2006,
                        park_name: 'Thorpe Park',
                        votes: 4,
                      }
                })
            });
            });
        });
    
describe('POST /api/parks/:park_id/rides', () => {
    test('201: responds with new data', () => {
    const newRide = {
        ride_name: 'new ride',
        year_opened: 2023
    };

    return request(app)
    .post('/api/parks/1/rides')
    .send(newRide)
    .expect(201)
    .then(({body}) => {
        const newRide = body.ride
        expect(newRide.ride_id).toBeDefined()
        expect(newRide.ride_name).toBe('new ride')
        expect(newRide.year_opened).toBe(2023)
        expect(newRide.park_id).toBe(1)
        expect(newRide.votes).toBe(0)
    })
});
});
