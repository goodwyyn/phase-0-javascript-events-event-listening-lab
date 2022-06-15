const input = document.getElementById('input');

// original
input.addEventListener('click', function() {
    alert('I was clicked!');

})

//binds an event listener in addingEventListener()

function addingEventListener (){
    input.addEventListener('click', function() {
        alert('I was clicked!');
    
    })
    
}

console.log ('addingEventListener')
