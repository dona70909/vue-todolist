const app = new Vue({

    el:"#app",

    data: {

        listToDo: [],

        toDoContent: "",

    },

    methods: {

        getInput(input){
            if(input != ""){
                this.listToDo.push(input);
            } else {
                console.log("to-do item vuoto");
            }
        },

        removeInput(index){
            if(listToDo[index] != ""){
                listToDo.splice(index,1);
            } else {
                console.warn("you can't remove an element that doesn't exist!!");
            }
        }

    }
})