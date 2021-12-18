const tasksDOM = document.querySelector('.task__item');
const loadingDOM = document.querySelector('.task__loading');

export const showTasks = async () => {
    loadingDOM.style.visibility = 'visible';

    try {

        const { data: { tasks: tasks } } = await axios.get('/api/v1/tasks');
        if(tasks.length < 1) {
            tasksDOM.innerHTML = '<p class="empty__list">No tasks in your list</p>';
            loadingDOM.style.visibility = 'hidden';
            return
        } 

        const allTasks = tasks.map(task => {
            const { name, completed, _id} = task;
            const html = `
            <div class="single-task ${completed && 'task-completed'}">
            <p><span><i class="far fa-check-circle"></i></span>${name}</p>
            
            <div class="task-links">
            <a href="edit-task.html?id=${_id}" class="edit-link">
            <i class="fas fa-edit"></i>
            </a>
            <button type="button" class="delete-btn" data-id="${_id}">
                        <i class="fas fa-trash"></i>
            </button>
                </div>
            </div>`;
            return html;
        }).join('');

        tasksDOM.innerHTML = allTasks;

    } catch(err) {
        console.log(err);
        tasksDOM.innerHTML = '<h5 class="empty-list">There was an error,please try later....</h5>'
    }
    
    loadingDOM.style.visibility = 'hidden';
}

showTasks();