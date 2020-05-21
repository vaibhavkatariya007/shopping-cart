import {lazy} from 'react';

const ProductList = lazy(() => import('./ProductList'));
const Cart = lazy(() => import('./Cart'));

export {ProductList, Cart};
