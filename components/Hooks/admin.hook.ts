import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";


type apiAuth = (data:any)=>Promise<AxiosResponse<any,any>>
type handler = (data:any)=> void

export const useAdminAuthentication = (api:apiAuth,handler:handler)=>{
    return useMutation(api,{
        onSuccess:handler,
        onError:(error:any)=> console.log("error",error)
    })
}
 