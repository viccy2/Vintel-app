<template>
   
   <v-card style="width:300px;height:100px;background:green" v-if="showBlock" @click.once="stopTimer">
      <p style="padding-top:40px;color:white">Click me </p>
   </v-card>
</template>

<script>
export default {
props : ['delay'],
 data () {
     return{
         showBlock : false,
         timer : '',
         reactionTime : 0
       
     }
 },
 mounted(){
     setTimeout(() => {
         this.showBlock = true,
         this.startTimer()
     },this.delay)
 },
methods : {
    startTimer(){
      this.timer = setInterval(() => {
            this.reactionTime +=10
        }, 10)
    },
    stopTimer(){
        clearInterval(this.timer);
        this.$emit('end', this.reactionTime);
    }
}
}   
</script>

<style>

</style>