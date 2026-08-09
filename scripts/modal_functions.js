// Cart modal (mobile)
function attachCartModalCloseHandlers(modalRef, cartRef, closeRef) {
    modalRef.onclick = closeCartModal;
    cartRef.onclick= function (event) {
        event.stopPropagation();
    };
    closeRef.onclick = closeCartModal;
}

function openCartModal() {
    let cartRef = document.getElementById('shopping_cart');
    let modalRef = document.getElementById('cart_modal');
    let closeRef = document.getElementById('cart_modal_close_btn')

    modalRef.appendChild(cartRef);
    modalRef.classList.remove("hidden");
    cartRef.classList.remove("hidden");
 
    attachCartModalCloseHandlers(modalRef, cartRef, closeRef);
    closeRef.focus();
    document.body.classList.add("modal_open");
};

function closeCartModal() {
    let cartRef = document.getElementById('shopping_cart');
    let asideRef = document.querySelector('section.menu');

    asideRef.appendChild(cartRef);
    document.getElementById('cart_modal').classList.add("hidden");
    document.body.classList.remove("modal_open");
};

// Order confirmation modal

function openModal() {
    let modalRef = document.getElementById("order_modal");
    modalRef.classList.remove("hidden");
};

function closeModal() {
    let modalRef = document.getElementById("order_modal");
    modalRef.classList.add("hidden");
};