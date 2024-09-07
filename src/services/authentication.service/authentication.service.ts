import {  FindOne, InsertOneAuth } from "../../models/authentication.model/authentication.model"

export const Authentication={
    FindOne:async(gmail:string)=>{
        console.log(gmail)
        return await FindOne(gmail)
    },

    InsertOneAuth:async(data:any)=>{
        const obj={
            // Gmail: data?.gmail,
            // Name: data?.name,
            // PhoneNumber: data?.phone,
            // CurrentCountry: data?.currentcountry,
            // AbroadCountry: data?.abroadcountry,
            // Password: data?.password
            Name: data?.Name,
            Gmail: data?.Gmail,
            PhoneNumber: data?.PhoneNumber,
            CurrentCountry: data?.CurrentCountry,
            AbroadCountry: data?.AbroadCountry,
            Password: data?.Password
        }
        return InsertOneAuth(obj) 
    }

}