import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {
    public getProducts(): string[] {
        return ["Learning Angular 2", "Pro TypeScript", "ASP.NET","Havij2"];
    }


   

}