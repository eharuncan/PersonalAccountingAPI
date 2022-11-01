import { User } from "../domain/user";
import { UserTypes } from "../enums/userTypes";

import { expenseCategoryService } from "../index";

export class UserService {
    private _currentUser: User;

    constructor() {
        this._currentUser = null as any;
    }

    public async getUsers(): Promise<User[]> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/users/", {
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

            return <User[]>JSON.parse(JSON.stringify(result, null, 4));

        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async getUserById(userId: number): Promise<User> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/users/" + userId.toString(), {
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

            return <User>JSON.parse(JSON.stringify(result, null, 4));

        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async register(name: string, surname: string, email: string, password: string, retypedPassword: string): Promise<boolean> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/register", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name,
                    surname,
                    email,
                    password,
                    retypedPassword
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

    public async editUser(id: number, editedName: string, editedSurname: string, editedEmail: string, editedPassword: string, retypedPassword: string): Promise<boolean> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/users/" + id.toString(), {
                method: "PUT",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    id,
                    editedName,
                    editedSurname,
                    editedEmail,
                    editedPassword,
                    retypedPassword
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

    public async deleteUser(id: number): Promise<boolean> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/users/" + id.toString(), {
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


    public async login(email: string, password: string): Promise<User> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/login/" + email, {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json());

            this.currentUser = <User>JSON.parse(JSON.stringify(result, null, 4));

            console.log("result is: ", JSON.stringify(result, null, 4));

            return <User>JSON.parse(JSON.stringify(result, null, 4));

        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async logout(id: number): Promise<boolean> {
        try {
            const response = await window.fetch("http://localhost:3001/api/v1/logout", {
                method: "POST",
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

            this.currentUser = null as any;

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

    get currentUser(): User {
        return this._currentUser;
    }
    set currentUser(currentUser: User) {
        this._currentUser = currentUser;
    }
}

