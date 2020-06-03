import {content} from './dom-selectors';
import {contactPage} from './contact-page';
import { menuPage } from './menu-page';
import {homePage} from './index'; 
import {clearPage} from './index'; 

const header = () => {

    (function containerLoader(){
        let div = document.createElement('div'); 
        div.id = "nav-bar-container";
        content.appendChild(div); 

        for (let i = 0; i < 2; i++){
            let navBar = document.querySelector('#nav-bar-container'); 
            let childDiv = document.createElement('div');
            switch (i){
                case 0: 
                    childDiv.id = "nav-bar-left"; 
                    navBar.appendChild(childDiv); 
                    break;
                case 1: 
                    childDiv.id = "nav-bar-right";
                    navBar.appendChild(childDiv); 
                    break;
            }
        }
    })(); 

    (function logoLoader(){
        const navBarLeft = document.querySelector('#nav-bar-left'); 
        const h1 = document.createElement("h1");

        h1.addEventListener('click', () => {
            clearPage();
            homePage.containerLoader();
            homePage.quotesLoader();
            homePage.imageNavLoader();
        });
        h1.textContent = "Conde's.";
        navBarLeft.appendChild(h1);
    })();

    (function tabsLoader(){
        const navBarRight = document.querySelector('#nav-bar-right');

        for (let i = 0; i < 3; i++){
            let p = document.createElement('p'); 
        
            switch (i){
                case 0:
                    p.textContent = "Menu";
                    p.addEventListener('click', () => {
                        menuPage.menuPageLoader();
                    });
                    navBarRight.appendChild(p);
                    break;
                case 1: 
                    p.textContent = "Contact";
                    p.addEventListener('click', () => {
                        contactPage.contactPageLoader();
                    });
                    navBarRight.appendChild(p); 
                    break;
            }
        }
    })();
};

export {header};