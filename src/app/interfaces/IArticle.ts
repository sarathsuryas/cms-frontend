import { IUser } from "./IUser";

export interface IArticle {
    id:number;
    userId:number;
    title:string;
    description:string;
    thumbNailLink:string
    content:string
    user: IUser;
}