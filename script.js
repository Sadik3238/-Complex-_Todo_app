// // #### Elements selection
// const newTaskForm = document.getElementById("form");

// // ### utilities
// function getUID(){
//     return Date.now() + Math.round(Math.random() * 10000).toString();
// }

// // #### local storage
// // === get all tasks from local storage 1st step
// function getAllTasksFromLocalStorage(){
//     let tasks = [];
//     const rowTasks = localStorage.getItem('tasks');
//     if(rowTasks){
//         tasks = JSON.parse(rowTasks);
//     }
//     return tasks;
// }
// // === add tasks to local storage 3rd step
// function addTasksToLocalStorage(tasks){
//     localStorage.setItem('tasks', JSON.stringify(tasks))
// }
// // === add single task to local storage 2nd step
// function addSingleTaskToLocalStorage(task){
//     const tasks = getAllTasksFromLocalStorage(); //1st step call
//     tasks.push(task);
//     addTasksToLocalStorage(tasks); //3rd step call
// }

// // ### handler function

// // new task creation
// function newTaskFormHandler (e) {
//     e.preventDefault();
//     const id = getUID();
//     const tasks = {
//         id,
//         status: 0
//     };
//     [...newTaskForm.elements].forEach(element => {
//         if(element.name){
//             tasks[element.name] = element.value;
//         }
//     });
//     newTaskForm.reset();
//     addSingleTaskToLocalStorage(tasks);
// } 
// // UI handler
// function updateUI(){
//     const tasks = getAllTasksFromLocalStorage();
//     const tasksHtml = tasks.map(({name, priority, status, date, id}) => {
//         return `<tr>
//         <td></td>
//         <td>01</td>
//         <td>Cricket</td>
//         <td>High</td>
//         <td>Incomplete</td>
//         <td>2024-05-08</td>
//         <td>
//             <button id="edit"><i class="fa-solid fa-pen"></i></button>
//             <button id="check"><i class="fa-solid fa-check"></i></button>
//             <button id="delete"><i class="fa-solid fa-trash"></i></button>
//         </td> 
//     </tr>`;
//     });
// }

// // ##### event listeners
// newTaskForm.addEventListener("submit", newTaskFormHandler);