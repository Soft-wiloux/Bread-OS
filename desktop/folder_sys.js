

    
    const mmodal_sys = document.getElementById('modal_sys')
    const myInput = document.getElementById('app-system-btn')

    mmodal_sys.addEventListener('shown.bs.modal', () => {
    myInput.focus()
    })
