
var todolist=[]
var donelist=[]
if (localStorage.getItem('todo') === null) {
    localStorage.setItem('todo', JSON.stringify([]));
}
var t= []
 t = JSON.parse(localStorage.getItem('todo'))

if (localStorage.getItem('done') === null) {
    localStorage.setItem('done', JSON.stringify([]));
}
var d=[]
 d = JSON.parse(localStorage.getItem('done'))
t.forEach(t => {
    todolist.push(t)
    addtodo(t)
    localStorage.todo = JSON.stringify(todolist)
});

d.forEach(d => {
    donelist.push(d)
    adddone(d)
    localStorage.done = JSON.stringify(donelist)
});

let currentInput = ''
const input = document.getElementById('input')
input.addEventListener('input', ev => {
    currentInput = ev.target.value

})

const maindiv = document.createElement('div')
maindiv.classList='flex flex-col-reverse'
const donediv = document.createElement('div')
donediv.classList='flex flex-col-reverse'
const addtask =(() =>{
    const taskdiv = document.createElement('div')
    taskdiv.classList='flex space-x-20'
    const p = document.createElement('p')
    p.innerHTML = currentInput
    p.setAttribute("class","font")
    const buttondiv = document.createElement('div')
    const done = document.createElement('button')
    done.innerText = "Done"
    done.setAttribute("class","donebutton")
    const del = document.createElement('button')
    del.setAttribute("class","delbutton")
    del.innerText = "Delete"
    taskdiv.addEventListener('mouseover', () => {
        done.style.visibility = "visible"
        del.style.visibility = "visible"
    })
    taskdiv.addEventListener('mouseout', () => {
        done.style.visibility = "hidden"
        del.style.visibility = "hidden"
    })
    done.style.visibility = "hidden"
    del.style.visibility = "hidden"
    done.addEventListener('click', () => {
        donediv.append(taskdiv)
        taskdiv.setAttribute("class", "doned")
        taskdiv.removeChild(taskdiv.childNodes[1])
        localStorage.todo = JSON.stringify(todolist)
        localStorage.done = JSON.stringify(donelist)
    })
    del.addEventListener('click', () => {
        taskdiv.style.display = "none";
        localStorage.todo = JSON.stringify(todolist)
        localStorage.done = JSON.stringify(donelist)
    })
    taskdiv.append(p, buttondiv)
    maindiv.append(taskdiv)
    buttondiv.append(done, del)
    document.body.append(maindiv, donediv)
    input.value = ''
    localStorage.todo = JSON.stringify(todolist)
    localStorage.done = JSON.stringify(donelist)




})
input.addEventListener('keydown', (ev) => {
    if(ev.key === 'Enter'){
        if (input.value) {
            addtask()
            localStorage.todo = JSON.stringify(todolist)
            localStorage.done = JSON.stringify(donelist)
        } else if (input.value === '') {
            alert("Plese filled the box!!!")
        }
    }
})


const addlist = () => {
    if (input.value) {
        addtask()
        localStorage.todo = JSON.stringify(todolist)
        localStorage.done = JSON.stringify(donelist)
    } else if (input.value === '') {
        alert("Plese filled the box!!!")
    }
}