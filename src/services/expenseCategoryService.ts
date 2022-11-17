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
                    'content-type': 'application/json;charset=UTF-8'
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
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/categories/" + id.toString(), {
                method: "GET",
                headers: {
                    'content-type': 'application/json;charset=UTF-8'
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
                    'content-type': 'application/json;charset=UTF-8'
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
        console.log(newExpenseCategory);
        try {
            const response = await window.fetch(apiURL + "/users/" + newExpenseCategory.userId.toString() + "/categories/" + newExpenseCategory.id.toString(), {
                method: "PUT",
                headers: {
                    'content-type': 'application/json;charset=UTF-8'
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
            const response = await window.fetch(apiURL + "/users/" + userId.toString() + "/categories/" + id.toString(), {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json;charset=UTF-8'
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
