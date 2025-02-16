import { HttpStatusCode } from "@angular/common/http";

export interface Response<T> {
    error: string[];
    message: string;
    statusCode: HttpStatusCode;
    data: T;
}