 <template>
    <h3>All Complaints here</h3>  
  <table>
      <tr v-for="complaint in allComplaints" :key="complaint.id" class="complaint"
          v-bind:class="{'is-complete':complaint.completed}">
          <td><router-link :to="`/modify/${complaint.id}`">
            <i class="fa fa-pen"> </i>      
        </router-link>
        <i @click="deleteComplaint(complaint.id)" class="fas fa-trash-alt"> </i></td>
          <td>{{complaint.fname}} {{complaint.lname}}</td>
          <td>{{complaint.email}}</td>
          <td>{{complaint.description}}</td>
          <td>{{complaint.status}}</td>
      </tr>
  </table>

 </template> 
 
<script>
import { mapGetters } from "vuex";

export default {
    name : "complaints",
    computed : mapGetters(["allComplaints"]) ,
    methods :{
      /* modifyComplaint(complaint){
          console.log("Complaint to be edited :" + complaint.id);
  
        const updComplaint = {
          id: complaint.id, 
          fname: complaint.fname,
          lname:complaint.lname,
          mobile:complaint.mobile,
          email:complaint.email,
          description:complaint.description,
          status:complaint.status,
        };
        
        console.log("Modify the complaint : " + updComplaint);

    }, */
    deleteComplaint(complaintId){
      alert(complaintId)
      let response = confirm('Do you want to delete the complaint?')
      if(response == 'y'){
        console.log("Complaint deleted." + complaintId);
      }
      else
      {
        return;
      }
      
    }

    }

};
//  background: #41b883;
</script>  


<style scoped>
.complaints {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.complaint {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #f8ee66;
}
.is-complete {
  background: #42ec5f;
  color: #fff;
} 
@media (max-width: 500px) {
  .complaints {
    grid-template-columns: 1fr;
  }
}


table{
  margin-left: 20%;
  background-color: #abf0d1 ;
}
</style>
