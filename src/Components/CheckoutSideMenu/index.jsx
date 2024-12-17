
import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard"

import './styles.css'

const CheckoutSideMenu = () => {
	const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } = useContext(ShoppingCartContext)

	return (
		<aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`}>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>My Order</h2>
				<div onClick={() => closeCheckoutSideMenu()}><XMarkIcon className="h-6 w-6 text-black cursor-pointer" /></div>
			</div>
            <div className="px-6 overflow-y-scroll">
                {
                    cartProducts.map((product) => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images[0]}
                            price={product.price}
                        />
                    ))
                }
            </div>
		</aside>
	);
};
export default CheckoutSideMenu;
