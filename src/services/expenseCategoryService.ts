import { ExpenseCategory } from "../domain/expenseCategory";

export class ExpenseCategoryService {

    constructor() {
    }

    public async getExpenseCategoriesByUserId(userId: number): Promise<ExpenseCategory[]> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/users/" + userId.toString() + "/categories", {
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

    public async getExpenseCategoryByUserIdAndExpenseCategoryId(userId: number, id: number): Promise<ExpenseCategory> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/users/" + userId.toString() + "/categories/" + id.toString, {
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

    public async addExpenseCategory(userId: number, name: string): Promise<boolean> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/users/" + userId.toString() + "/categories", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name
                })
            });
    
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            const result = (await response.json());
    
            console.log("result is: ", JSON.stringify(result, null, 4));
    
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

    public async editExpenseCategory(userId: number, id: number, editedName: string): Promise<boolean> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/users/" + userId.toString() + "/categories/" + id.toString, {
                method: "PUT",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    id,
                    editedName
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

    public async deleteExpenseCategory(userId: number, id: number): Promise<boolean> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/users/" + userId.toString() + "/categories/" + id.toString, {
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
