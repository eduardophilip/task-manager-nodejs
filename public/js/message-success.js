const formAlertDOM = document.querySelector('.task__alert');

export const showSuccessMessage = () => {
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = 'Success!!';
    formAlertDOM.classList.add("text-success");
}

export const hiddenSuccessMessage = () => {
   setTimeout(() => {
    formAlertDOM.style.display = 'none';
    formAlertDOM.classList.remove("text-success");
   }, 3000) 
}