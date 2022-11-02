import { Expense } from "../domain/expense";
import { apiURL } from "../utils/utils";

export class ExpenseService {

    constructor() {
    }

    public async getExpenses(userId: number): Promise<Expense[]> {
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

    public async addExpense(userId: number, name: string, amount: bigint, date: Date, categoryId: number): Promise<boolean> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/expenses", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name,
                    amount: amount.toString(),
                    date: date.toString(),
                    categoryId
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <boolean>JSON.parse(JSON.stringify(result, null, 4));
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return false;
        }
    }

    public async editExpense(userId: number, id: number, editedName: string, editedAmount: bigint, editedDate: Date, editedCategoryId: number): Promise<boolean> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/expenses/" + id.toString, {
                method: "PUT",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    userId,
                    id,
                    editedName,
                    editedAmount: editedAmount.toString(),
                    editedDate: editedDate.toString(),
                    editedCategoryId
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <boolean>JSON.parse(JSON.stringify(result, null, 4));
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return false;
        }
    }

    public async deleteExpense(userId: number, id: number): Promise<boolean> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/expenses/" + id.toString, {
                method: "DELETE",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    id
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <boolean>JSON.parse(JSON.stringify(result, null, 4));
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return false;
        }
    }

}
