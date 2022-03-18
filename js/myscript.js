const app = new Vue({

    el:"#app",

    data: {

        listToDo: [
        ],

        // * nuovo oggetto vuoto 
        newObjectInput: {
            text: "",
            done:false,
        },

        // * prendo l'input 
        toDoContent:"",

        isDone:"",

    },

    methods: {

        /**
         * function that get the input value and adds it to a property "text:" of a newObject
         * @param {*} input obtained from an html tag
         * 
         */
        getInput(input){
            if(input != ""){
                this.newObjectInput.text = input;
                this.listToDo.push(this.newObjectInput);
                console.log(this.newObjectInput.text);
                console.log(this.listToDo);
                this.toDoContent="";
            } else {
                console.log("to-do item empty");
            }
        },

        todoClick(){
            this.newObjectInput.done = true;
        },

        /**
         * Function that removes at the given index and checks if the item at that index exist
         * @param {*} index given index 
         */

        removeInput(index){
            if(this.listToDo[index] != ""){
                this.listToDo.splice(index,1);
            } else {
                console.warn("you can't remove an element that doesn't exist!!");
            }
        }

    }
})