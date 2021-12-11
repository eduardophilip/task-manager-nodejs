const tasksDOM = document.querySelector('.tasks');
const loadingDOM = document.querySelector('.task-loading--text');
import { showTasks } from "./show-tasks.js";

tasksDOM.addEventListener('click', async (e) => {

    const element = e.target;
    const isClassDelete = element.parentElement.classList.contains('delete-btn');
    
    if (isClassDelete) {
        loadingDOM.style.visibility = 'visible';
        const id = element.parentElement.dataset.id;

        try {
            await axios.delete(`/api/v1/tasks/${id}`);
            showTasks();
        } catch(err) {
            console.log(err)
        }
        loadingDOM.style.visibility = 'hidden';
    }

});