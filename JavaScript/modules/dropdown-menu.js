export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick)
        })
    });

    function handleClick(event){
        event.preventDefault();
        this.classList.add("active");
        outsideClick(this, () => {
            this.classList.remove("active");
        });
    };

    function outsideClick(element, callback){
        const html = document.documentElement;
        const outsite = "data-outside" 

        html.addEventListener("click", handleOutsideClick);
        element.setAttribute(outsite, '');
        function handleOutsideClick(event){
            if(!element.contains(event.target)){
            html.removeEventListener("click", handleOutsideClick);
            callback();
            }
        }
    }
}

