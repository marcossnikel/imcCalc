const { getImc, harrisBenedictFormula } = require('../controller/userController.js');

test(`expect to someone that have
 Weigth =  65 
 Heigth = 1.75  
 IMC = 21.22
 `, () => {
  expect(getImc(65, 1.75)).toBe(21.22);
});

test(`
Expected To Someona that have 
Weigth : 65
Heigth : 175 cm
Age : 20
Gender : Male
Activity : ? -> Increment 
Harris gives :
- Base Metabolism = 1696 Kcal
`, ()=>{
  expect(harrisBenedictFormula(65,175,20,1)).toBe(1696);
});
