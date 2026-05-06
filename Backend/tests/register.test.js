const request = require("supertest");
const express = require("express");

// On mock la db pour ne pas faire les test sur la vrai db
jest.mock("../DB", () => ({ query: jest.fn() }));

const db = require("../script/DB");
const router = require("../script/Routes/register");

const app = express();
app.use(express.json());
app.use("/auth", router);

// On reset les mocks a chaque test pour pas alterer un test
afterEach(() => jest.clearAllMocks());

// =================    TEST REGISTER  ========================= //
const user = {
  name: "Dupont",
  firstname: "Jean",
  email: "jean@example.com",
  password: "1234",
};

test("200 - inscription réussie", async () => {
  db.query.mockResolvedValueOnce({ rows: [] }).mockResolvedValueOnce({});
  const res = await request(app).post("/auth/register").send(user);
  expect(res.statusCode).toBe(200);
});

test("409 - email déjà utilisé", async () => {
  db.query.mockResolvedValueOnce({ rows: [user] });
  const res = await request(app).post("/auth/register").send(user);
  expect(res.statusCode).toBe(409);
});

test("500 - internal server error", async () => {
  db.query.mockResolvedValueOnce(new Error("DB crash"));
  const res = await request(app).post("/auth/register").send(user);
  expect(res.statusCode).toBe(500);
});

// =============================================================== //
