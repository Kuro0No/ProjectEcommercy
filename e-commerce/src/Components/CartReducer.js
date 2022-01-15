import { toast } from 'react-toastify'

export const CartReducer = (state, action) => {

    const { shopingCart, qty, totalCost } = state

    let product;
    let index;
    let upDateQty;
    let updateCost


    switch (action.type) {
        case 'ADD_CART':
            const check = shopingCart.find(product => product.id === action.id)
            if (check) {
                toast.warning('Sản phẩm đã có trong giỏ hàng của bạn!', { autoClose: 2000 });

                return state
            } else {
                product = action.product
                product['qty'] = 1
                upDateQty = qty + 1
                updateCost = totalCost + product.cost;
                toast.success('Thêm vào giỏ hàng thành công!', { autoClose: 2000 });


                return { shopingCart: [product, ...shopingCart], qty: upDateQty, totalCost: updateCost }

            }
            break;
        case 'PLUS_PRODUCT':
            product = action.cart
            product.qty = product.qty + 1
            updateCost = totalCost + product.cost




            // index = shopingCart.findIndex(cart => cart.id === action.id)
            // shopingCart[index]=action.cart

            return { shopingCart: [...shopingCart,], qty: upDateQty, totalCost: updateCost, }
            break;
        case 'DELETE_CART':
            const filterd = shopingCart.filter((product, index) => product.id !== action.id)
            console.log([...filterd])
            return { shopingCart: [...filterd], qty: upDateQty }
            break;
        case 'DECREASE_PRODUCT':
            product = action.cart
            if (product.qty > 1) {

                product.qty = product.qty - 1
                upDateQty = qty - product.qty
                updateCost = totalCost - product.cost

            }
            else {
                return state
            }

            return { shopingCart: [...shopingCart], qty: upDateQty, totalCost: updateCost }
            break;

        default:
            break;
    }

}