let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe("Get fialo.info data. if it works?", function() {  
    let url = "https://fialo.info/"
    it("returns status 200", (done) => {
        chai.request(url)
            .get('/')
            .end((err, res) => {
                    res.should.have.status(200);
                done();
            });
    });
  });

describe("Get inara.cc data. if it works?", function() {
    let url = "https://inara.cc/"
    it("returns status 200", function() {
        request(url, (done) => {
            chai.request(url)
                .get('/')
                .end((err, res) => {
                        res.should.have.status(200);
                    done();
                });
      });
    });  
  });