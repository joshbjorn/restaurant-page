import {content} from './dom-selectors';
import {clearPage} from './index';
import imageTwo from './assets/image_2.jpg'


const menuPage = (() => {

    const menuPageLoader = () => {
        clearPage(); 

        let div = document.createElement('div');
        let img = document.createElement('img'); 
        
        div.classList.add('menu-container');
        img.src = imageTwo;

        content.appendChild(div);
        div.appendChild(img); 
        
    }
    return {menuPageLoader} 
})(); 

export {menuPage}; 