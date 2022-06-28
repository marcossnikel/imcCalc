import harris from '../../../utils/formulas/harrisMale';

describe('Testing Harris Formula', () => {
  it('Should calculate Harris Benedict (MALE)',() => {
    const calories = harris(65,175,20);
    expect(calories).toBe(1702);
    expect(typeof calories).toBe("number")
  });
});