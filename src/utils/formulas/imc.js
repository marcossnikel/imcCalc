const imc = (height, weight) => {
  
  const imcFormula = weight / height ** 2;
  console.log({weight,height})
  return Math.floor(imcFormula * 100) / 100;
};

export default imc;
