import React from 'react'

import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';

export const revalidate = 0;

const HomePage = async () => {

  const billboard = await getBillboard("9dc43842-3851-41fc-bc15-ab5306e85e50");
  
  const products = await getProducts({ isFeatured: true})

  return (
    <Container>
        <div className='space-y-10 pb-10'>
          <Billboard data={billboard}/>
        
          <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
    </Container>
  )
}

export default HomePage