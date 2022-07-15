<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
     <v-list-item>
       <v-list-item-content>
         <v-list-item-title>
          Vintel
         </v-list-item-title>
         <v-list-item-subtitle>
           The movie blog
         </v-list-item-subtitle>
       </v-list-item-content>
     </v-list-item>
     <v-divider></v-divider>
     <v-list flat>
      
      <v-list-item-group
       
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" :to="item.link" link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
      <!-- <div>
  <input type="checkbox" value="a" v-model="val">
  <input type="checkbox" value="b" v-model="val">
  <p v-if="add1">value 1</p>
  <p v-if="add2">value 2</p>
  {{val}}
  </div> -->
    </v-main>
    
  </v-app>
 
</template>

<script>
import Block from './components/Block.vue'
import Result from './components/Result.vue'
import UserRegistration from './components/UserRegistration.vue'
  export default {
    components:{Block, Result, UserRegistration},
    data: () => ({ 
    drawer: null,
    items: [
        { title: 'Home', icon: 'mdi-home', link: "/" },
        { title: 'Add Post', icon: 'mdi-note-plus', link: "/add-post" },
        { title: 'About', icon: 'mdi-help-box', link: "/about" },
      ],
    title : 'Reaction Time Game',
    isPlaying : false,
    delay : null,
    score : null,
    showScore : false,
    add1 : true,
    add2 : true,
    val : []
    }),
    methods : {
    start(){
     this.isPlaying = true;
     this.delay = 2000 + Math.random() * 5000;
     this.showScore = false;
   
    },
    endGame(a){
      this.score = a;
      this.showScore = true;
      this.isPlaying = false;
    }
  },
  mounted(){
   this.add1 = true
   this.add2 = true
  },
  updated(){
    if(this.val == "a"){
      this.add2 = false;
    }
    else{
      this.add2 = true;
    }
     if(this.val == "b"){
      this.add1 = false;
    }
     else{
      this.add1 = true;
    }
  }
    
  }
</script>




        
        
        
        
        
        
        
        
        
        
         <h1>Reaction Timer Game </h1><br>
         <p>Click on the box as quick as possible... </p>
   <h5> Score board : [1st: The Ultimate Zoom, 2nd : The Flash, 3rd : Rapid reflexes, 4th : Normal speed, 5th : Snail's pace ]</h5><br>
      <button @click="start" :disabled=isPlaying >Start Game</button><br><br>
      
    <Block v-if="isPlaying" :title=title :delay=delay @end='endGame'/>
    <Result v-if="showScore" :score=score />
     <UserRegistration v-if="all" />
   
