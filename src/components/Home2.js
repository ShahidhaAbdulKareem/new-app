import React from 'react';
import './Home2.css';
import Itemcard from './Itemcard';
import data from './data';
const Home2 = () => {
    return (
        <div className='mainbody'>
        <h1 className = "text-center mt-3">Popular</h1>
        <section className='py-4 container'>
            <div className="row justify-content-center">
                     {data.productData.map((item,index) =>{
                    return(
                        <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} key={index}/>
                    )
                     })}
                    
            </div>

        </section>
        </div>
    );
};
export default Home2;
