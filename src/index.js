import {contactPage} from './contact-page'; 
import {menuPage} from './menu-page';
import {header} from './header';
import {content, quoteContainer, backgroundImage, imageNav} from './dom-selectors'; 

const homePage = (() => {

    const containerLoader = () => {
        for (let i = 0; i < 3; i++){
            let div = document.createElement('div'); 
        
            switch (i){
                case 0: 
                    div.id = "quote-container"; 
                    content.appendChild(div); 
                    break;
                case 1: 
                    div.id = "background-image-container";
                    content.appendChild(div); 
                    break;
                case 2: 
                    div.id = "image-nav-container";
                    content.appendChild(div); 
                    break; 
            }
        }
    }
    
    const quotesLoader = () => {   
        const saucyQuote = document.querySelector('#quote-container');
        
        const p = document.createElement("p"); 
        p.textContent = "\"The sauciest spot in town\"";
        saucyQuote.appendChild(p);
    }

    const imageNavLoader = () => {
        const imageNav = document.querySelector('#image-nav-container');
        const backgroundImage = document.querySelector('#background-image-container');

        // backgroundImage.classList.toggle('background-image-1');

        const img = document.createElement("img");
        img.src = "../assets/image_1.jpg"; 
        backgroundImage.appendChild(img);

        for (let i = 0; i < 3; i++){
            let p = document.createElement('p'); 
        
            switch (i){
                case 0:
                    p.textContent = "Eat.";
                    imageNav.appendChild(p);
                    break;
                case 1: 
                    p.textContent = "Work.";
                    imageNav.appendChild(p); 
                    break;
                case 2: 
                    p.textContent = "Dance.";
                    imageNav.appendChild(p); 
                    break;
            }
        }
    }
    
    return {containerLoader, quotesLoader, imageNavLoader}
})(); 

const clearPage = () => {
    let last = content.lastElementChild; 

    while (content.children.length > 1){
        last.remove();
        last = content.lastElementChild
    }
}; 

export {clearPage, homePage}; 


header(); 
homePage.containerLoader();
homePage.quotesLoader();
homePage.imageNavLoader();
