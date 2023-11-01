//Interfaz de 'Event'

export interface Event {
    coordinates: [number, number];
    eventName: string;
    idCategory: string[];
    date: Date;
    idUser: string;
    description: string;
    assistants: string[];
    link: string; //not required
    photo: string;
    idChat: string;
    idComments: string[];
    _id: string;
    createdAt?: string; 
    updatedAt?: string;
}