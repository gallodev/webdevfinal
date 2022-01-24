export default class PersonIrpf {
  constructor(theTotalSalary, theDependentsNumber) {
    if (typeof theTotalSalary !== "number" || isNaN(theTotalSalary))
      throw Error(" is not a number");

    if (typeof theDependentsNumber !== "number" || isNaN(theDependentsNumber))
      throw Error("DependentsNumber is not a number");
      
    this.totalSalary = theTotalSalary;
    this.dependentsNumber = theDependentsNumber;
    this.irpf = null;
  }

  isValid() {
      return this.totalSalary && this.dependentsNumber;
  }

  get totalSalary() {
    return this._totalSalary;
  }

  set totalSalary(theTotalSalary) {
    this._totalSalary = theTotalSalary;
  }

  get dependentsNumber() {
    return this._dependentsNumber;
  }

  set dependentsNumber(theDependentsNumber) {
    this._dependentsNumber = theDependentsNumber;
  }

  get irpf() {
    return this._irpf;
  }

  set irpf(theIrpf) {
    this._irpf = theIrpf;
  }

  toObj() {
      return {
        totalSalary: this._totalSalary,
        dependentsNumber: this._dependentsNumber
      }
  }

  }
  