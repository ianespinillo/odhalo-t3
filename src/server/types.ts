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
    name:string
    image: File
    chapter:number
}