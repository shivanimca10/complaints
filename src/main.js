import { createApp } from 'vue'  
import Vuex from 'vuex';
import App from './App.vue' 
import router from './router'

  const state ={
    complaints: [
      { id: 1, fname: "Shivani", lname: "Goyal",email:"shivani.goyal@coforge.com",description:"Sample complaint1",status:"Complated" ,completed : true},
      { id: 2, fname: "Shaan", lname: "Mehta",email:"shaan.mehta@coforge.com",description:"Sample complaint2",status:"New",completed:false },
      { id: 3, fname: "John", lname: "Dady",email:"john.day@coforge.com",description:"Sample complaint3",status:"InProgress",completed:false },
      { id: 4, fname: "Nitya", lname: "Jain",email:"nitya.jain@coforge.com",description:"Sample complaint 4",status:"Complated",completed:true },
     
    ]
  }
 

const store = new Vuex.Store({
    state: state,
    getters: {
      allComplaints: state => state.complaints
    } ,
    actions : {
      addComplaints(){
        alert('Compalint added')
      },
      filterComplaints({commit},e){
        const t = e.target.options[e.target.options.selectedIndex].innerText
        console.log('filter called ' + t);
        
        console.log(commit)
      }
    }   
  });
   

const app = createApp(App).use(router)

app.use(store)

app.mount('#app')
