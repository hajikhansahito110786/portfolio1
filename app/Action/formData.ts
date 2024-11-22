"use server"

export const formAction=async(formData:FormData)=>{
    const name1=await formData.get("name1");
    const id1=await formData.get("id1");

    console.log("formdata.....123",name1,id1);
    
}