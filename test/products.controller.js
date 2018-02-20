import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Products', () => {
    it('should get paginated products', () =>
        request(Server)
            .get('/api/v1/products')
            .expect('Content-Type', /json/)
            .then(r => {
                expect(r.body)
                    .to.be.an.an('array')
                    .of.length(20);
            }));

    /* it('should add a new example', () =>
        request(Server)
            .post('/api/v1/products')
            .send({ name: 'test' })
            .expect('Content-Type', /json/)
            .then(r => {
                expect(r.body)
                    .to.be.an.an('object')
                    .that.has.property('name')
                    .equal('test');
            })); */

    it('should get an example by id', () =>
        request(Server)
            .get('/api/v1/products/2')
            .expect('Content-Type', /json/)
            .then(r => {
                expect(r.body)
                    .to.be.an.an('object')
                    .that.has.property('item_name')
                    .equal('Test prod');
            }));
});
