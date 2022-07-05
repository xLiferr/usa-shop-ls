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

export const askModal = async (title, text, cancelButton, confirmButton) => {
  let resp = false;
  await Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: '#B1B1B1',
    cancelButtonText: cancelButton,
    confirmButtonColor: '#d33',
    confirmButtonText: confirmButton
  }).then((result) => {
    if (result.isConfirmed) resp = true;
  })
  return resp;
}

export const inputModal = async (title, inputType, inputLabel, inputValue, confirmButtonText, validateMessage) => {
  let resp = {
    isConfirmed: false,
    value: ""
  }
  await Swal.fire({
    title: title,
    input: inputType,
    inputLabel: inputLabel,
    inputValue: inputValue,
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    confirmButtonColor: '#00AFB9',
    inputValidator: (validator) => {
      if(!validator) return validateMessage;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      resp.isConfirmed = true;
      resp.value = result.value;
    }
  })
  return resp;
}