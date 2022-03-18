const app = new Vue({
    
    el:"#app",
    
    data: {
        
        listToDo: [
        ],
        
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
            
            newObject = this.creatNewObject();
            if(input != ""){
                newObject.text = input;
                this.listToDo.push(newObject);
                console.log(newObject.text);
                console.log(this.listToDo);
                this.toDoContent="";
            } else {
                console.log("to-do item empty");
            }
        },
        
      /*   todoClick(){
            for(let i = 0; i<this.listToDo.length - 1;i++){
                isClicked = true;
                newObject.done = isClicked;  
                return isClicked;  
            }
            
        }, */
        
        
        todoClick(index){
            isClicked = true;
            this.listToDo[index].done = isClicked;  
            return isClicked;      
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
        },
        
        creatNewObject(){
            return {
                text:"",
                done:false,
            }
        } 
        
    }
})