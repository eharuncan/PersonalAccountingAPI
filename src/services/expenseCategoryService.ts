import { ExpenseCategory } from "../domain/expenseCategory";
import { apiURL } from "../utils/utils";

export class ExpenseCategoryService {

    constructor() {
    }

    public async getExpenseCategoriesOfUser(userId: bigint): Promise<ExpenseCategory[]> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/categories", {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <ExpenseCategory[]>result;
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async getExpenseCategoryOfUser(userId: bigint, id: bigint): Promise<ExpenseCategory> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/categories/" + id.toString(), {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <ExpenseCategory>result;
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async addExpenseCategoryOfUser(newExpenseCategory: ExpenseCategory): Promise<ExpenseCategory> {
        try {
            const response = await window.fetch(apiURL + "/users/" + newExpenseCategory.userId.toString() + "/categories", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    'userId': newExpenseCategory.userId.toString(),
                    'name': newExpenseCategory.name
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <ExpenseCategory>result;
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async editExpenseCategoryOfUser(newExpenseCategory: ExpenseCategory): Promise<ExpenseCategory> {
        console.log(newExpenseCategory);
        try {
            const response = await window.fetch(apiURL + "/users/" + newExpenseCategory.userId.toString() + "/categories/" + newExpenseCategory.id.toString(), {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    'id': newExpenseCategory.id.toString(),
                    'userId': newExpenseCategory.userId.toString(),
                    'name': newExpenseCategory.name
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            // console.log("result is: ", JSON.stringify(result, null, 4));
    
            return <ExpenseCategory>result;
    
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async deleteExpenseCategoryOfUser(userId: bigint, id: bigint): Promise<void> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/categories/" + id.toString(), {
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
