class Validator {
  constructor() {}

  public isValid(ccn: string): boolean {
    const add = [];
    const arr: Array<string> = ccn.split("").reverse();
    const num: Array<number> = arr.map((num): number => parseInt(num));

    const par: Array<number> = num.filter((n) => (n + 1) % 2 === 0);
    const impar: Array<number> = num.filter((n) => (n + 1) % 2 === 1);

    const __impar__: Array<number> = impar.map((n) => n);
    const __par__: Array<number> = par.map((n) => n * 2);

    const sum = __par__.reduce((acc: number, elem: number) => (acc += elem), 0);
    add.push(sum);

    const total = [...add, ...__impar__];
    const finish = total.reduce((acc: number, num: number) => (acc += num), 0);

    return (finish % 10 === 0) ? true : false;
  }

  public maskify(num: string): string {
    return num.slice(0,-4).replace(/./g, '#') + num.slice(4);
  }
}

export default Validator;
