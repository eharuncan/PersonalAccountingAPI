import { Expense } from "../domain/expense";
import { apiURL, dateFormatter2 } from "../utils/utils";

export class ExpenseService {

    constructor() {
    }

    public async getExpensesOfUser(userId: bigint): Promise<Expense[]> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/expenses", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <Expense[]>result;
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async addExpenseOfUser(newExpense: Expense): Promise<Expense> {
        console.log(dateFormatter2(newExpense.date).toString());
        try {
            const response = await window.fetch(apiURL + "/users/" + newExpense.userId.toString() + "/expenses", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    'userId': newExpense.userId.toString(),
                    'name': newExpense.name,
                    'amount': newExpense.amount.toString(),
                    'date': dateFormatter2(newExpense.date).toString(),
                    'categoryId': newExpense.categoryId.toString()
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <Expense>result;
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async editExpenseOfUser(newExpense: Expense): Promise<Expense> {
        try {
            const response = await window.fetch(apiURL + "/users/" + newExpense.userId.toString() + "/expenses/" + newExpense.id.toString(), {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    'id': newExpense.id.toString(),
                    'userId': newExpense.userId.toString(),
                    'name': newExpense.name,
                    'amount': newExpense.amount.toString(),
                    'date': dateFormatter2(newExpense.date).toString(),
                    'categoryId': newExpense.categoryId.toString()
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <Expense>result;
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async deleteExpenseOfUser(userId: bigint, id: bigint): Promise<void> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/expenses/" + id.toString(), {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
         
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
        }
    }

}
