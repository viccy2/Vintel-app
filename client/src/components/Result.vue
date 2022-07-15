<template>
 <div>
   <p > You'r reaction Time is {{score}} ms</p><br>
   <p v-if="score<=200" style='color:green'> The Ultimate Zoom  </p>
   <p v-if="score>200 && score<=300" style='color:black'> The Flash </p>
   <p v-else-if="score>300 && score <=500" style='color:blue'> Rapid reflexes </p>
   <p v-else-if="score >500 && score <=1000" style='color:yellow'> Normal speed </p>
   <p v-else-if ="score>1000" style='color:red'> Snail's pace  </p>
    

 </div>
</template>

<script>
export default {
  props : ['score'],
  data(){
    return{
      jobs : ''
    }
  },
  mounted(){
    fetch('http://localhost:5000/db.json')
    .then(response => response.json() )
    .then(data => console.log(this.jobs=data))
    .catch(err => console.log(err))
    
  }
}
</script>

<style>

</style>