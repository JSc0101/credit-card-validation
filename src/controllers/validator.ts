class Validator {
  constructor() {}
  
  public isValid(ccn: string): void {
    const add = [];
    const arr: Array<string> = ccn.split("").reverse();
    const num: Array<number> = arr.map((num): number => parseInt(num));
  }
  
  public maskify(): void {}
}

export default Validator;
