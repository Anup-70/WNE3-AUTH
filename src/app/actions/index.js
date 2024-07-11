'use server'
import { redirect } from 'next/navigation';
import { signIn,signOut } from "../../auth";

export async function doSocialLogin(formData){
    const action = formData.get('action');
    await signIn(action,{redirctTo:"/home"});
    //console.log(action);
}

export async function doLogout(){
    await signOut({redirctTo:"/"})
}