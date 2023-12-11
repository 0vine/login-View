function handleModal(){
    const linkRegister = document.querySelector('.form__register-link')
    const modalContainer = document.querySelector('.modalContainer')

    linkRegister.addEventListener('click', () => {
        modalContainer.showModal()
        closeModal()
    })
}

handleModal()

function closeModal(){
   const button = document.querySelector('.buttonClose')
   const modalContainer = document.querySelector('modalContainer')

   button.addEventListener('click', () => {

    modalContainer.closest()
   })
}

