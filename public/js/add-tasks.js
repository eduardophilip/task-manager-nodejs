import { showTasks } from "./show-tasks.js";
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');
const formAlertDOM = document.querySelector('.task-alert');

const showSuccessMessage = () => {

    taskInputDOM.value = '';
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = 'Success, tasks went added';
    formAlertDOM.classList.add("text-success");

}

const hiddenSuccessMessage = () => {
   setTimeout(() => {
    formAlertDOM.style.display = 'none';
    formAlertDOM.classList.remove("text-success");
   }, 3000) 
}

formDOM.addEventListener('submit', async (e) => {

    e.preventDefault();
    const name = taskInputDOM.value;
    
    try {

        await axios.post('/api/v1/tasks', {name});
        showTasks();
        showSuccessMessage();

    } catch(err) {
        console.log(err)
        formAlertDOM.style.display = 'block'
        formAlertDOM.innerHTML = `error, please try again`
    }

    hiddenSuccessMessage();

});