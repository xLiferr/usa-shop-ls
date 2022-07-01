import Swal from "sweetalert2";

export const successModal = async (title, text, reload, timer) => {
  await Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonText: 'Continuar',
    confirmButtonColor: '#00AFB9',
    timer: timer
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