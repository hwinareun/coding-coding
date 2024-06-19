//11w2d assignment

class Employee{
    constructor(
        private _empName: string, 
        private _empAge: number, 
        private _empJob: string
        ){
    }

    get empName(){
        return this._empName;
    }
    set empName(val: string){
        this._empName = val;
    }


    printEmp = () : void => {
        console.log(`name: ${this._empName}, age: ${this._empAge}, job: ${this._empJob}`);
    }
}

let employee1 = new Employee('kim', 30, 'develop');
employee1.empName = 'lee';
employee1.printEmp();
