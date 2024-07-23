export interface Login{
    email:string;
    password:string;
}
export interface EmailInput {
    email:string
    subject:string
    message:string
}

export interface Picture{
    code: string;
    title:string;
    image: File;
    chapter:number;
}

export interface Chapter{
    number:number
}

export interface UpdatePicture{
    code: string;
    oldCode: string;
    title:string;
    chapter:number;
    image?: File;
}