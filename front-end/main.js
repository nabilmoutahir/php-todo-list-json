const { createApp } = Vue

createApp({
  data() {
    return {
        newTask:{
          text:'',
          done:false
        },

        todoList:[],
    }
  },


  methods: {

    // CHIAMA TASK DAL JSON
    getTasks(){
      
      axios.post('../back-end/api/get-list.php',
      {
        headers:{'Content-Type': 'multipart/form-data'}
      }).then((response) => {
        this.todoList = response.data;
      });

    },

    // MANDA TASK
    addTask(){



    },


  },

  mounted() {

    this.getTasks();

  },

}).mount('#app')