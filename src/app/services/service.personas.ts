import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import axios from "axios";
import { Persona } from "../models/persona";

@Injectable()
export class ServicePersonas{
    constructor(private _http:HttpClient) {
    }
    getPersonas():Promise<any> {
        let url = environment.urlPers
        let request = "api/personas"
        let promise = new Promise((resolve) => {
            this._http.get(url + request).subscribe(response => {
                resolve(response);
            })
            
        })
        return promise;
    }
    async getPersonasAxios(): Promise<Array<Persona>> {
        let url = environment.urlPers
        let request = "api/personas"
        let response = await axios.get(url + request)
        return response.data
    }
    
    async getPersonasFetch(): Promise<Array<Persona>> {
        let url = environment.urlPers
        let request = "api/personas"
        let response = await fetch(url + request)
        let data = await response.json()
        return data
    }
}