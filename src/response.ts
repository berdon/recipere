export class ErrorResponse
{
    public status: string;
    public code: number;
    public message: string;

    constructor(code: number, message: string)
    {
        this.status = "failure";
        this.code = code;
        this.message = message;
    }
}