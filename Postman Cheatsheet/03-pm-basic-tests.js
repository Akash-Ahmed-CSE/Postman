// equals
pm.test("Something equals something", function () {
    pm.expect("test123").to.eql("test123");
});

// includes
pm.test("Text contains/includes text", function () {
    pm.expect("test123").to.include("123");
});

// not include
pm.test("Text does not contain/include text", function () {
    pm.expect("test123").to.not.include("456");
});

// one of 
pm.test("Value is one of Array", function () {
    pm.expect(2).to.be.oneOf([1, 2, 3]);
});

// expect true
pm.test("Result is true", function() {
    pm.expect(5>1).to.be.true;
});

// response code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});

// response header
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
}); 

// response body
pm.test("Body is present", function () {
    pm.response.to.have.body();
});

pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});

// response time
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
