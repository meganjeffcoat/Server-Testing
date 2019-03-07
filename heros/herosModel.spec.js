const heros = require("./herosModel");
const db = require("../data/dbConfig.js");

afterEach(async () => {
    await db("heros").truncate();
  });

describe("the heros model", () => {
  
  it("should retrieve heros", async () => {
    const rows = await heros.fetch();
    expect(rows).toEqual([]);
  });
  it("should insert a user", async () => {
    const ids = await heros.insert({ name: 'Pandora' });

       expect(ids.length).toBe(1);
       expect(ids[0]).toBe(1);
  })
  it("should delete a user", async () => {
    const ids = await heros.insert({ name: 'Pandora' });
    const count = await heros.remove(1);

    expect(count).toBe(1);
  })
});