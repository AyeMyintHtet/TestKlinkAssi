import React, { useEffect } from 'react'
import { HomeCom } from 'theme'
import Icon from 'assets'
import { CardCom, Cart, CategoryCom, TextCom } from 'components'
import { useCart } from 'hook'
const CategoryArrr = [
  {
    id: 1,
    name: 'Category1'
  },
  {
    id: 2,
    name: 'Category2'
  },
  {
    id: 3,
    name: 'Category3'
  },
  {
    id: 4,
    name: 'Category4'
  },
  {
    id: 5,
    name: 'Category5'
  },
  
]
type CategoryProps = {
  id:number,
  name: string
}
type CardComProps={
  image?:string,
  desc?:string,
  Amount?:number
  id:number
}
const Home = () => {
  const {OrderDetail_data,CartAction,dispatch} = useCart()
  useEffect(() => {
    dispatch(CartAction.OrderDetail())
  }, [])

  return (
    <HomeCom>
      <div className="container-fluid">
        <section className='category'>
        <CategoryCom>All</CategoryCom>
          {
            CategoryArrr.map((item:CategoryProps,id:number)=>{return(
              <CategoryCom value={item.id} key={id}>{item.name}</CategoryCom>
            )})
          }
        </section>
        <section className='py-4 row'>
          {
            OrderDetail_data?.data?.map((card:CardComProps,id:number)=>{
              return(
                <div className='col-lg-3 col-md-4 col-sm-6'>
                  <CardCom image={card?.image} desc={card?.desc} itemId={id} amount={card?.Amount} key={id}/>
                  </div>
              )
            })
          }
        </section>
      </div>
      
    </HomeCom>
  )
}

export default Home