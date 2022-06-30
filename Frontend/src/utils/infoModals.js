import Swal from "sweetalert2";

export const successModal = (title, text, reload) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonText: 'Continuar',
    confirmButtonColor: '#00AFB9'
  }).then((result) => {
    if (reload && result.isConfirmed) window.location.reload();
  })
}

export const errorModal = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonText: 'Continuar',
    confirmButtonColor: '#00AFB9',
  })
}