export const urls ={
auth :{
 login : "/auth/login",
 signup : "/auth/signup",
},
user : "/user",
sneaker :{
    list : "/sneaker",
    find : (id)=>`/sneaker/item/${id}`,
    brands : "/sneaker/brands",
}
}
