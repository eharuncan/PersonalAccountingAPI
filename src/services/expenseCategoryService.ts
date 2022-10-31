import { ExpenseCategory } from "../domain/expenseCategory";


// type GetExpenseCategoriesResponse = {
//     data: ExpenseCategory[];
// };


async function APIgetExpenseCategoriesByUserId(userId: number): Promise<ExpenseCategory[]> {
    try {
        const response = await window.fetch("http://localhost:3001/api/v1/categories/" + userId, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = (await response.json());

        console.log("result is: ", JSON.stringify(result, null, 4));

        return <ExpenseCategory[]>JSON.parse(JSON.stringify(result, null, 4));

    } catch (error) {
        if (error instanceof Error) {
            console.log('error message: ', error.message);
            return error.message as any;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred' as any;
        }
    }
}

async function APIgetExpenseCategoryByUserIdAndExpenseCategoryId(categoryId: number, expenseCategoryId: number): Promise<ExpenseCategory> {
    try {
        const response = await window.fetch("http://localhost:3001/api/v1/categories/", {
            method: "GET",
            headers: {
                Accept: "application/json"
            },
            body: JSON.stringify({
                categoryId: categoryId,
                expenseCategoryId: expenseCategoryId
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
            return error.message as any;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred' as any;
        }
    }
}

async function APIaddExpenseCategory(userId: number, expenseCategoryName: string): Promise<boolean> {
    try {
        const response = await window.fetch("http://localhost:3001/api/v1/categories/", {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                expenseCategoryName: expenseCategoryName
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
            return error.message as any;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred' as any;
        }
    }
}

async function APIeditExpenseCategory(userId: number, id: number, editedName: string): Promise<boolean> {
    try {
        const response = await window.fetch("http://localhost:3001/api/v1/categories/", {
            method: "PUT",
            headers: {
                Accept: "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                id: id,
                editedName: editedName
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
            return error.message as any;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred' as any;
        }
    }
}

async function APIdeleteExpenseCategory(userId: number, expenseCategoryId: number): Promise<boolean> {
    try {
        const response = await window.fetch("http://localhost:3001/api/v1/categories/", {
            method: "DELETE",
            headers: {
                Accept: "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                expenseCategoryId: expenseCategoryId
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
            return error.message as any;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred' as any;
        }
    }
}






export class ExpenseCategoryService {

    // private defaultExpenseCategories: string[] = ["Çocuk", "Güvenlik", "Kitap", "Sağlık"];


    constructor() {
        // this.expenseCategoryListDB = expenseCategoryListDB;
    }

    public getExpenseCategoriesByUserId(userId: number): Promise<ExpenseCategory[]> {
        return APIgetExpenseCategoriesByUserId(userId);
    }

    public getExpenseCategoryByUserIdAndExpenseCategoryId(userId: number, expenseCategoryId: number): Promise<ExpenseCategory> {
        return APIgetExpenseCategoryByUserIdAndExpenseCategoryId(userId, expenseCategoryId);
    }

    public addExpenseCategory(userId: number, expenseCategoryName: string): Promise<boolean> {
        return APIaddExpenseCategory(userId, expenseCategoryName);
    }

    public editExpenseCategory(userId: number, id: number, editedName: string): Promise<boolean> {
        return APIeditExpenseCategory(userId, id, editedName);
    }

    public deleteExpenseCategory(userId: number, expenseCategoryId: number): Promise<boolean> {
        return APIdeleteExpenseCategory(userId, expenseCategoryId);
    }

}
