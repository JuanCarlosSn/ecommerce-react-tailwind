
import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"

import './styles.css'

const ProductDetail = () => {
	const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShoppingCartContext)

	return (
		<aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`}>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>Detail</h2>
				<div onClick={() => closeProductDetail()}><XMarkIcon className="h-6 w-6 text-black cursor-pointer" /></div>
			</div>
			<figure className="px-6">
				<img src={productToShow.images} alt={productToShow.title} className='w-full h-full rounded-lg' />
			</figure>
			<p className="flex flex-col p-6">
        <span className='text-2xl font-medium mb-2'>{productToShow.price}</span>
        <span className='text-md font-medium'>{productToShow.title}</span>
        <span className='text-sm font-medium'>{productToShow.description}</span>
			</p>
		</aside>
	);
};
export default ProductDetail;
