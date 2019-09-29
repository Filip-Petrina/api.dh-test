const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('POST /encode', ()=>{

    it('OK, encoding the string works (XXXYYYYZZQXX => X3Y4Z2Q1X2)', (done)=>{
        request(app).post('/encode')
            .send({ unEncodedString: 'XXXYYYYZZQXX'})
            .set({'Content-type': 'application/json', 'authorization': 'xyz0987654321'})
            .then((res)=>{
                const body = res.body;

                expect(body).to.contain.property('encodedString', 'X3Y4Z2Q1X2');

                done();
            })
            .catch((err)=>{
                done(err);
            })
    })

    it('OK, encoding the string works (AAsIkkd98JJ => A2s1I1k2d19181J2)', (done)=>{
        request(app).post('/encode')
            .send({ unEncodedString: 'AAsIkkd98JJ'})
            .set({'Content-type': 'application/json', 'authorization': 'xyz0987654321'})
            .then((res)=>{
                const body = res.body;

                expect(body).to.contain.property('encodedString', 'A2s1I1k2d19181J2');

                done();
            })
            .catch((err)=>{
                done(err);
            })
    })

    it('OK, encoding the string works (EEEEEEEEEE! => E10!1)', (done)=>{
        request(app).post('/encode')
            .send({ unEncodedString: 'EEEEEEEEEE!'})
            .set({'Content-type': 'application/json', 'authorization': 'xyz0987654321'})
            .then((res)=>{
                const body = res.body;

                expect(body).to.contain.property('encodedString', 'E10!1');

                done();
            })
            .catch((err)=>{
                done(err);
            })
    })

    it('OK, encoding the string works (YEET => Y1E2T1)', (done)=>{
        request(app).post('/encode')
            .send({ unEncodedString: 'YEET'})
            .set({'Content-type': 'application/json', 'authorization': 'xyz0987654321'})
            .then((res)=>{
                const body = res.body;

                expect(body).to.contain.property('encodedString', 'Y1E2T1');

                done();
            })
            .catch((err)=>{
                done(err);
            })
    })

    it('Fail, missing unEncodedString parameter', (done)=>{
        request(app).post('/encode')
            .send({ })
            .set({'Content-type': 'application/json', 'authorization': 'xyz0987654321'})
            .then((res)=>{
                const body = res.body;

                expect(res.status).to.equal(400);
                expect(body).to.contain.property('message', 'The request requires an "unEncodedString" property to be sent.')

                done();
            })
            .catch((err)=>{
                done(err);
            })
    })

    it('Fail, missing or wrong authorization token', (done)=>{
        request(app).post('/encode')
            .send({ })
            .set({'Content-type': 'application/json', 'authorization': 'xyz04321'})
            .then((res)=>{
                const body = res.body;

                expect(res.status).to.equal(401);

                done();
            })
            .catch((err)=>{
                done(err);
            })
    })

})