
let todo = JSON.parse(localStorage.getItem('Jtodo')) ;
!todo ? todo = [] : todo ;


function enter(event){
  event.key === 'Enter' ? add() :'';
}

function add(){
  const nameelm = document.querySelector('.input');
  const timeelm = document.querySelector('.time');
  const name = nameelm.value;
  const time = timeelm.value;

  if (name != '' && time != ''){
    todo.push({name,time});

    nameelm.value = '';
    timeelm.value = '';

    render() 
  } 
  else { alert('Mohon masukan nama tugas dan waktu dengan lengkap')}
}


function render(){
  const render = document.querySelector('.render');
  let html = '' ;

  if(todo.length != 0){
  todo.forEach(function (name,index) {
    name = todo[index].name;
    time = todo[index].time;
    html += `
      <p>${name}</p>
      <p>${time}</p>
      <button 
        class="del" 
        onclick="
          todo.splice(${index},1) ; 
          render()
        "
        >delete
      </button>`;
    render.innerHTML = html;
    })
  }
  else { render.innerHTML = ''}
  save();

  // if(todo.length != 0){
  //   for (let i=0 ; i < todo.length ; i++){
  //     const name = todo[i].name;
  //     const time = todo[i].time;
  //     html += `
  //       <p>${name}</p>
  //       <p>${time}</p>
  //       <button class="del" onclick="todo.splice(${i},1) ; render()">delete</button>`;
  //     render.innerHTML = html;
  //   }
  // }
  // else { render.innerHTML = ''}
  // save();
}

function save(){
  const Jtodo = JSON.stringify(todo);
  localStorage.setItem('Jtodo',Jtodo);
}

// console.log(todo);