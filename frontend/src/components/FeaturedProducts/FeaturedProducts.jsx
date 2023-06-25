import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id:1,
            img:"https://i.pinimg.com/236x/7a/96/68/7a9668f2f6ee0186b9cb6c2ae7b58ea5.jpg",
            img2:"https://5.imimg.com/data5/SELLER/Default/2020/12/QO/YP/HJ/119883756/topppp-500x500.jpg",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://cdn.shopify.com/s/files/1/0045/4701/8801/products/BLAZERB-223_1_large.jpg?v=1648618726",
            title:"Coat",
            isNew:true,
            oldPrice:25,
            price:19,
        },
        {
            id:3,
            img:"https://assets.ajio.com/medias/sys_master/root/20230321/fAPS/64196af0f997dde6f41e5ebd/-473Wx593H-465721399-black-MODEL.jpg",
            title:"Skirt",
            isNew:false,
            oldPrice:10,
            price:8,
        },
        {
            id:4,
            img:"https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/K19410.jpg",
            title:"Hat",
            isNew:false,
            oldPrice:19,
            price:12,
        },
    ];
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus reprehenderit natus illo dicta, facere delectus incidunt quos ex dignissimos tempore magnam quam repellendus qui repudiandae deleniti minima distinctio consequatur dolorum?
        </p>
      </div>
      <div className="bottom">
        {data.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
