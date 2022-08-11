const ships = require('./ships');

describe('ships', () => {
  it('ships is an object', () => {
    expect(typeof ships).toBe('object');
  });
  it('ships has 5 keys', () => {
    expect(Object.keys(ships).length).toBe(5);
  });
  it('ships has a Carrier value of 5', () => {
    expect(ships.Carrier).toBe(5);
  });
  it('ships has a Battleship value of 4', () => {
    expect(ships.Battleship).toBe(4);
  });
  it('ships has a Cruiser value of 3', () => {
    expect(ships.Cruiser).toBe(3);
  });
  it('ships has a Submarine value of 3', () => {
    expect(ships.Submarine).toBe(3);
  });
  it('ships has a Destroyer value of 2', () => {
    expect(ships.Destroyer).toBe(2);
  });
});
