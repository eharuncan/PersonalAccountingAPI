import { Expense } from "../domain/expense";
import { apiURL } from "../utils/utils";

export class ExpenseService {

    constructor() {
    }

    public async getExpenses(userId: bigint): Promise<Expense[]> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/expenses", {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <Expense[]>JSON.parse(JSON.stringify(result, null, 4));
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async addExpense(newExpense: Expense): Promise<Expense> {
        try {
            const response = await window.fetch(apiURL + "/users/" + newExpense.userId.toString() + "/expenses", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    newExpense
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <Expense>JSON.parse(JSON.stringify(result, null, 4));
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async editExpense(newExpense: Expense): Promise<Expense> {
        try {
            const response = await window.fetch(apiURL + "/users/" + newExpense.userId.toString() + "/expenses/" + newExpense.id.toString, {
                method: "PUT",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    newExpense
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <Expense>JSON.parse(JSON.stringify(result, null, 4));
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async deleteExpense(userId: bigint, id: bigint): Promise<void> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/expenses/" + id.toString, {
                method: "DELETE",
                headers: {
                    Accept: "application/json"
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
        
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
        }
    }

}
