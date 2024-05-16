import { DioAccount } from "./DioAccount";


export class TestAccount extends DioAccount {
    constructor(name : string, accountNumber : number,){
        super(name, accountNumber)
    }
    
    superDeposit = (value: number): void => {
        if (this.validateStatus()){
            this.balance += value + 10
            console.log(`
            deposito de ${value}$ mais bônus de 10$ foram gerados!
            total de ${this.balance}$
            `);
            
            
            
        }


    }
}