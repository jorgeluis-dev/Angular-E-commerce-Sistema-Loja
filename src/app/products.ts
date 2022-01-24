export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    img: 'https://th.bing.com/th/id/R.7fca69514626c3394c0899b26662dfc9?rik=lmI1D%2bFGODRI9Q&pid=ImgRaw&r=0'
  },
  {
    id: 2,
    name: 'Poco X3 Pro',
    price: 1599,
    description: 'Smartphone Xiaomi Poco X3 Pro 256GB/8GB Ram Phantom Black',
    img: 'https://speedcell97.com.br/nova_loja/wp-content/uploads/2021/05/Poco-X3-Pro-Bronze.jpg'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    img: 'https://th.bing.com/th/id/R.7fca69514626c3394c0899b26662dfc9?rik=lmI1D%2bFGODRI9Q&pid=ImgRaw&r=0'

  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/