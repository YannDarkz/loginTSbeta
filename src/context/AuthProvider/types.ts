export interface IUser {
    email?: string;
    token?: string;
}

export interface IContext extends IUser {
    authenticateI: (email: string, password: string) => void;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}