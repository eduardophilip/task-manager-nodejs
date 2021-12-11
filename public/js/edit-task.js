const inputName = document.querySelector('.edit__text');
const inputCompleted = document.querySelector('.edit__checkbox');
const formSubmit = document.querySelector('.edit__form');
const editBtn = document.querySelector('.edit__btn');
const formAlertDOM = document.querySelector('.task-alert');
const params = window.location.search;
const id = new URLSearchParams(params).get('id');
import { showSuccessMessage, hiddenSuccessMessage } from "./message-success.js";

const showSingleTask = async () => {

    try {
        
        const { data: {task} } = await axios.get(`/api/v1/tasks/${id}`);
        const { name, completed } = task
        
        inputName.value = name;
        if(completed) {
            inputCompleted.checked = completed;
        }
        
    } catch(err) {
        console.log(err)
    }
}
showSingleTask()

formSubmit.addEventListener('submit', async (e) => {
    
    editBtn.textContent = 'Loading...';
    e.preventDefault();
    
    try {

        const taskName = inputName.value;
        const taskCompleted = inputCompleted.checked;

        const {
            data: {task}
        } = await axios.patch(`/api/v1/tasks/${id}`, {
            name: taskName,
            completed: taskCompleted
        });

        const { name, completed } = task;

        inputCompleted.value = name;
        inputCompleted.checked = completed;
        showSuccessMessage();

    } catch(err) {
        console.log(err)
        formAlertDOM.style.display = 'block'
        formAlertDOM.innerHTML = 'Please, try again!';
    }

    editBtn.textContent = 'edit';

    hiddenSuccessMessage();

});