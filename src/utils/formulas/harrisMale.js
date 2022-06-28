const harris = (weigth, heigth, age) => {

  const maleHarris = 66 + (13.8 * weigth) + (5 * heigth) - (6.8 * age);

  return Math.floor(maleHarris * 100) / 100
}


export default harris;