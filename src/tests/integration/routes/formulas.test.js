import request from 'supertest'
import app from '../../../app'

describe("Routes testing", ()=>{
    it("Should test the basic usage of imc formula route", async ()=>{
        await request(app)
        .post('/formulas/imc')
        .send({
            height: 1.70,
            weight: 65
        }).expect({
            result: 22.49
        })
    })
})