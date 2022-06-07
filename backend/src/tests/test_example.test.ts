import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import sinon from "sinon";

import { app } from "../index"
import userReadOperations from "../db/read";
import userWriteRepo from "../db/write";
import User from "../models/user";

const should = chai.should();
chai.use(chaiHttp);

describe("Example routes", () => {
  const testUser = new User();
  testUser.firstName = "mocking";
  testUser.lastName = "worked";

  it("Simple test for example route", (done) => {
    chai
      .request(app)
      .get("/example/test")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("hello").eql("world");
        err ? console.error(err) : null;
        done();
      });
  });

  it("Simple test for read user route", (done) => {
    sinon.stub(userReadOperations, "getAllUsers").resolves([testUser]);
    chai
      .request(app)
      .get("/example/user")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.eql([testUser]);
        err ? console.error(err) : null;
        done();
      });
  });

  it("Simple test for read user route", (done) => {
    sinon.stub(userWriteRepo, "addUser").resolves(true);
    chai
      .request(app)
      .get("/example/add-user")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.eql({ response: "User created" });
        err ? console.error(err) : null;
        done();
      });
  });
});
