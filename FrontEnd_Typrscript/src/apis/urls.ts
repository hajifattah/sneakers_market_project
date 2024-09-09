interface Auth {
  login: string;
  signup: string;
}
interface Sneaker {
  list: string;
  find: (id: number) => string;
  brands: string;
}
interface Urls{
    auth:Auth;
    user:string;
    sneaker:Sneaker;
}
export const urls:Urls = {
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
  },
  user: "/user",
  sneaker: {
    list: "/sneaker",
    find: (id) => `/sneaker/item/${id}`,
    brands: "/sneaker/brands",
  },
};
