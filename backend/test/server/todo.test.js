const request = require("supertest");

const server = require("../../src/server");

const app = server();

describe("bad path", () => {
  test("404: not found", () => {
    return request(app)
      .get("/api/notValidUrl")
      .expect(404)
      .then(({ body: { msg } }) => {
        expect(msg).toBe("Invalid url!");
      });
  });
});
