var app = new Vue({
    el: '#app',
    data: {
        todoList: [
            {
                text: 'sveglia alle 8:00', 
                done: false
            },
            {
                text: 'colazione', 
                done: false
            },
            {
                text: 'fare la spesa', 
                done: false
            },
            {
                text: 'cucinare', 
                done: false
            },
        ],
        textInput: '',
    },
    methods: {
        rimuovoElemento(index){

            this.todoList.splice( index, 1)
        },
        todoCompleted( index, elem ){

            if( elem.done == false){
                elem.done = true;
            } else {
                elem.done = false;
            }
        },
        aggiungiTodo(){
            let newText = { text: this.textInput, done: false }
            this.todoList.push(newText)
        }
    }
})