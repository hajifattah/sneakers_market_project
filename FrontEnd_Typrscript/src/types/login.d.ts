interface IError {
  response: { data: { message: string | string[]; statusCode: number } };
}
interface ISneakerAuthDto {
  data: {
    user: { id: number; username: string };
    token: string;
  };
}
