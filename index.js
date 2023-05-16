//Sidebar
const menuItems= document.querySelectorAll('.menu-items');

//Message
const messagesNotification = document.querySelector('#message-notification');
const messahes = document.querySelector('.messages');


//***************SIDEBAR**************

//removing active class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}
menuItems.forEach(item =>{
    item.addEventListener('click', () => {
        changeActiveItem();
        if(item.id !='notifications'){
            document.querySelector('.notifications-popup').getElementsByClassName.display = 'none';
        } else{
            document.querySelector('.notifications-popup').getElementsByClassName.display = 'block';
            document.querySelector('#notifications .notification-count').getElementsByClassName.display = 'none';
        }
    })
})
//***************Messages**************\
messagesNotification.addEventListener('click', () => {
    messages.style.boxshadow = '0 0 1rem var(--color-primary)';
})