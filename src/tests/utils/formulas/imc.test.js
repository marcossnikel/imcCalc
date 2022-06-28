import res from 'express/lib/response';
import imc from '../../../utils/formulas/imc';

describe('Testing IMC formula', () => {
  it('should calculate imc', () => {
    const result = imc(1.70, 65);
    expect(result).toBe(22.49);
    expect(typeof result).toBe("number")
  });
});
