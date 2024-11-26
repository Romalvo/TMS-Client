export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    createdAt: Date
}

export interface Message {
    id: number;
    text: string;
    createdAt: Date;
    sender: User
}

export interface Ticket {
    id?: number;
    subject: string;
    department: string;
    customer: User;
    supportPersonnel?: User;
    priority: string;
    createdAt: Date;
    messages: Message[]
}

export interface LoginRequest {
    email: string;
    password: string
}
