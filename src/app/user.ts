//Interfaz de 'User'

export interface User {
    userName: string;
    email: string;
    _id: string;
    birthDate: Date;
    password: string;
    avatar: string;
    createdEventsId: string[];
    joinedEventsId: string[];
    idCategories: string[];
    createdAt?: string;
    updatedAt?: string;
}