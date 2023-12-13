// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function contactPageReplacement() {
    let contactPage = document.querySelector('.contact-page');

    contactPage.innerHTML = '';
    contactPage.appendChild(tyMessage);

    let tyMessage  = document.createElement('p');
    tyMessage.textContent = 'Thank you for your message';
    tyMessage.style.fontSize = '24px';
}

let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', replaceContent);