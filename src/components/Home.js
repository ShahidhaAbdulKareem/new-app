import React from 'react';
import './Home.css';

const Home = () => {
    return(
    <>
       <div className='home'>
        <div className='image'>
        <div className='overlay'>
                <h2 className='heading'>Exclusively for Comics & Manga</h2>
                <h3 className='content'>Comic books provide opportunities to exercise people’s imagination.<br/> With the intense visuals and focus on a plot and characters , comic <br/> books are more engaging than other literary media , such as novels <br/>  or short stories.</h3>
                <a href='' className='link-button'><div className='button-div'><h2 className='read-more'>Read More</h2></div></a>

                        
        </div>
        </div>    
        </div>
   
       <div className='home2'>
       <h1 className='heading-2'>GENRE</h1>
       <br/>
            <div className='flexbox'>
            <div className='flex'>
            <div className='box1'>
            <div className='box1-overlay'> 
            <a href='' className='link-genre'><h1 className='h1'>Romance</h1></a>
            </div>
            </div>
            
            <div className='box2'>
            <div className='box2-overlay'> 
            <a href='' className='link-genre'><h1 className='h1'>Super Hero <br/> for Kids</h1></a>
            </div>
            </div>

            <div className='box3'>
            <div className='box3-overlay'> 
            <a href='' className='link-genre'><h1 className='h1'>Horror</h1></a>
            </div>
            </div>
            </div>
    
            <div className='flex'>
            <div className='box4'>
            <div className='box4-overlay'> 
            <a href='' className='link-genre'><h1 className='h1'>Fantasy</h1></a>
            </div>
            </div>

            <div className='box5'>
            <div className='box5-overlay'> 
            <a href='' className='link-genre'><h1 className='h1'>Mystery<br/> for Boys</h1></a>
            </div>
            </div>

            <div className='box6'>
            <div className='box6-overlay'> 
            <a href='' className='link-genre'><h1 className='h1'>harem</h1></a>
            </div>
            </div>
            </div>    
        </div> 

            <a href='' className='link-button'>
            <div className='button2'>
            <h1 className='more'>More</h1>
            </div>
         </a>
     </div>

     <div className='home3'></div>
    </>
    );
}

export default Home;