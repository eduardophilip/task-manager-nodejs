import { showTasks } from "./show-tasks.js";
import { showSuccessMessage, hiddenSuccessMessage } from "./message-success.js";
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');
const formAlertDOM = document.querySelector('.task-alert');

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
    taskInputDOM.value = '';
    hiddenSuccessMessage();

});