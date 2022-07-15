<template>
  <div>
   
        <label for="username"> Username : </label>  <input type="text" name="username" v-model="name"><br>
         <label for="email"> Email :</label> <input type="email" name="email" v-model="email"><br>
          <label for="password">Password : </label><input type="password" name="password" v-model="password"><br><br>
          <button @click="reg">Sign Up</button><br><br>
          <p>{{name}}</p>
          <p>{{email}}</p>
          <p>{{password}}</p>
 
  </div>
</template>

<script>
export default {
 data(){
     return{
         name : null,
         password : null,
         email : null,
        
     }
 },
 methods:{
     reg(){
       this.$emit('uname',this.name);
     }
 }

}
</script>

<style>

</style>