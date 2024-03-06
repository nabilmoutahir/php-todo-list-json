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
      
      axios.get('../back-end/api/get-list.php',
      {
        headers:{'Content-Type': 'multipart/form-data'}
      }).then((response) => {
        this.todoList = response.data;
      });

    },

    // ADD TASK
    addTask(){

      const task = { ...this.newTask };

      console.log(task)

      this.newTask.text = '';

      const data = { task };

      axios
        .post('../back-end/api/add-item.php', data, 
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then((response) => {
        this.todoList = response.data
      });

    },


  },

  mounted() {

    this.getTasks();

  },

}).mount('#app')