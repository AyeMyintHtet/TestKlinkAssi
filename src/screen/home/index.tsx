import React from 'react'
import { HomeCom } from 'theme'
import Icon from 'assets'
import { CardCom, Cart, CategoryCom, TextCom } from 'components'
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
const SampleCardArr = [
  {
    image : '',
    desc : 'Something',
    Amount : '4000'
  },
  {
    image : '',
    desc : 'Something',
    Amount : '4000'
  },
  {
    image : '',
    desc : 'Something',
    Amount : '4000'
  },
  {
    image : '',
    desc : 'Something',
    Amount : '4000'
  },
  {
    image : '',
    desc : 'Something',
    Amount : '4000'
  },
  {
    desc : 'Something',
    Amount : '4000'
  }

]
type CategoryProps = {
  id:number,
  name: string
}
type CardComProps={
  image?:string,
  desc?:string,
  amount?:string
}
const Home = () => {
  return (
    <HomeCom>
      <div className="container-fluid">
        <section className='category'>
        <CategoryCom>All</CategoryCom>
          {
            CategoryArrr.map((item:CategoryProps,id)=>{return(
              <CategoryCom value={item.id} key={id}>{item.name}</CategoryCom>
            )})
          }
        </section>
        <section className='py-4 row'>
          {
            SampleCardArr.map((card:CardComProps,id)=>{
              return(
                <div className='col-lg-3 col-md-4 col-sm-6'>
                  <CardCom image={card?.image} desc={card?.desc} amount={card?.amount} key={id}/>
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