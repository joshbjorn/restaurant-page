import {content} from './dom-selectors';
import {clearPage} from './index';


const menuPage = (() => {

    const menuPageLoader = () => {
        clearPage(); 

        let div = document.createElement('div');
        let img = document.createElement('img'); 
        
        div.classList.add('menu-container');
        img.src = "../dist/assets/image_2.jpg";

        content.appendChild(div);
        div.appendChild(img); 
        
    }
    return {menuPageLoader} 
})(); 

export {menuPage}; 