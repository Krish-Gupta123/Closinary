// Example starter JavaScript for disabling form submissions if there are invalid fields
// below code taken from bootstrap documentation
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

// Additional client-side validation for required fields
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', function (e) {
            const inputs = form.querySelectorAll('[required]')
            let hasEmpty = false

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    hasEmpty = true
                    input.classList.add('is-invalid')
                } else {
                    input.classList.remove('is-invalid')
                }
            })

            if (hasEmpty) {
                e.preventDefault()
                e.stopPropagation()
            }
        })
    })
})