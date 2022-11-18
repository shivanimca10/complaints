<template>
  <h3>Add your complaint</h3>
  <p>{{log}}</p>
   
  <form @submit="onSubmit" >
    <label for="fname">First name:</label><br>
    <input type="text" v-model="form.fname" ><br>
    <label for="lname">Last name:</label><br>
    <input type="text" v-model="form.lname" ><br>
    <label for="mobile ">mobile :</label><br>
    <input type="text" v-model="form.mobile " ><br>
    <label for="email">Email:</label><br>
    <input type="text" v-model="form.email" ><br>
    <label for="complaint">Complaint:</label><br>
    <textarea  v-model="form.description" rows="3" cols= "30"></textarea><br>
     
    <br>
    <input type="submit" value="Submit">
   </form> 
</template>

<script> 
//import {mapActions} from Vuex

export default {
    name : 'AddComplaint',
    data: function() {
return {
    form: {
      id : 0,
      fname: "",
      lname:"",
      mobile:"",
      email:"",
      description:"",
      status:"",
      log:"",
      alert: false
    }
  };
},
   methods: {
    //...mapActions(["addComplaint"]),
     
    generateComplaintId(){
      return this.id++;
    },

    onSubmit: function(event){
      
      if(this.fname == "" || this.mobile == "" || this.email == "" || this.description == "" ){
        this.alert = true
        this.log = "Field(s) is/are empty."
        event.preventDefault();
      }else{
        let complaintId = this.generateComplaintId();
        console.log("ComplaintId : "  + complaintId);
        this.log = "Complaint modified;"
      }   
      } 
      
      
  
  }

};
</script>  

<style scoped>
 
</style>