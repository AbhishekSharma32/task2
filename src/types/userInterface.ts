
export interface IUserInitialState {
  authStatus: boolean;
  user: IUser;

}

export interface IProductInitialState {

  product: IProduct

}
export interface RootState {
  user: {
    authStatus: boolean; 
  }
}

export interface FormData {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;

}

export interface IUserLoginPayload {
  email: string,
  password: string,
  registration_type: string,
}


export interface IProduct {
  id: number;
  title: string;
  thumbnail: string;
  price:number;
  images: string[];
}
export interface ProductState {
  product: {
    product: IProduct[]; 
  };
}
export interface UserLogin {
  username: string;
  password: string;
}