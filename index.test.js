const app = require("./app");
const supertest = require("supertest");

app.listen(5000, () => {
  console.log("Server has started!");
});

// importing models for POST Method Test
var Employees = require('./models/Employee');


test("GET /list", async () => {  
    await supertest(app).get("/list")
      .expect(200)
      .then((response) => {

        expect(
            (typeof response.body.success === "true") ? true : false 
        );

        expect(response.body.data.length).toBeGreaterThan(0);
  
        // Check data
        //expect(response.body[0]._id).toBe(post.id);
        //expect(response.body[0].title).toBe(post.title);
        //expect(response.body[0].content).toBe(post.content);
      });
});


test("POST /create", async () => {
    const employee = await Employees.create({ title: "Post 1", content: "Lorem ipsum" });
  
    await supertest(app).post("/employee/"+employee.id)
      .expect(200)
      .then((response) => {
        expect(
            (typeof response.body.success === "true") ? true : false 
        );      
    });
});



module.exports = app