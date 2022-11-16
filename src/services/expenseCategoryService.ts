import { ExpenseCategory } from "../domain/expenseCategory";
import { apiURL } from "../utils/utils";

export class ExpenseCategoryService {

    constructor() {
    }

    public async getExpenseCategoriesByUserId(userId: bigint): Promise<ExpenseCategory[]> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/categories", {
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
    
            return <ExpenseCategory[]>JSON.parse(JSON.stringify(result, null, 4));
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async getExpenseCategoryByUserIdAndExpenseCategoryId(userId: bigint, id: bigint): Promise<ExpenseCategory> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/categories/" + id.toString, {
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
    
            return <ExpenseCategory>JSON.parse(JSON.stringify(result, null, 4));
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async addExpenseCategory(newExpenseCategory: ExpenseCategory): Promise<ExpenseCategory> {
        try {
            const response = await window.fetch(apiURL + "/users/" + newExpenseCategory.userId.toString() + "/categories", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    newExpenseCategory
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <ExpenseCategory>JSON.parse(JSON.stringify(result, null, 4));
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async editExpenseCategory(newExpenseCategory: ExpenseCategory): Promise<ExpenseCategory> {
        try {
            const response = await window.fetch(apiURL + "/users/" + newExpenseCategory.userId.toString() + "/categories/" + newExpenseCategory.id.toString, {
                method: "PUT",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    newExpenseCategory
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <ExpenseCategory>JSON.parse(JSON.stringify(result, null, 4));
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async deleteExpenseCategory(userId: bigint, id: bigint): Promise<void> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/categories/" + id.toString, {
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
