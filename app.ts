console.clear()
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { TestAccount } from './class/testAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

const testAccount : TestAccount = new TestAccount('TST', 30)

testAccount.superDeposit(200)