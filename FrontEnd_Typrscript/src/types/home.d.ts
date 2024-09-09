interface IDataSneakerDto {
  id: number;
  pid: number;
  name: string;
  imageURL: string;
  colors: string;
  sizes: string;
  price: number;
  category: string;
  gender: string;
}
interface ISneakerListDto<T> {
  total: number;
  totalPages: number;
  page: number;
  perPage: 10;
  data: T[];
}

interface ISneakerUserDto {
  id: number;
  username: string;
}
