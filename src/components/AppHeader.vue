<template>
   
  <div class="topnav">
    <!-- <a class="active" href="#home">Home</a> 
    <a href="#contact">Modify</a>
    <a href="#about">About</a> -->

    <router-link class="active" to="/">Home</router-link>
    <router-link to="/add">Add</router-link>

</div>
</template>

<style>
/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: 'lightblue';
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

 
</style>