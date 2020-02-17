import {clearPage} from './index';

const contactPage = (() => {
    const contactPageLoader = () => {
        clearPage();

        for (let i = 0; i < 2; i++){
            let div = document.createElement('div');

            switch (i){
                case 0:
                    div.classList.add('contact-container');
                    div.innerHTML = "<h2 class='contact-header'>Contact Us</h2>" + 
                                    "<p>89 The Crescent, SUTTON, SM37 8AY</p>" +
                                    "<p>+44 014 789 994</p>" + 
                                    "<p>hello@condes.co.uk</p>" 
                    content.appendChild(div); 
                    break;
                case 1:
                    div.classList.add('hours-container');
                    div.innerHTML = "<h2 class='hours-header'>Opening Hours</h2>" + 
                                    "<p>Monday - Thursday: 9am - 11pm</p>" +
                                    "<p>Friday - Saturday: 9am - 3am</p>" + 
                                    "<p>Sunday: 10am - 6pm</p>" 
                    content.appendChild(div); 
                    break; 
            }
        }
    }
    return {contactPageLoader}; 
})(); 

export {contactPage};