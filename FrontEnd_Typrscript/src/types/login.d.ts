interface IError {
  response: { data: { message: string | string[] } };
}
interface ISneakerAuthDto {
  user: { id: number; username: string; cart: []; sessions: [] };
  token: string;
}
