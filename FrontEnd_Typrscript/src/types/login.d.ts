interface IError {
  response: { data: { message: string | string[]; statusCode: number; } };
}
interface ISneakerAuthDto {
  user: { id: number; username: string; };
  token: string;
}
