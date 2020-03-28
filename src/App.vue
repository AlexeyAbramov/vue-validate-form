<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <form class="col mt-5">
          <div class="progress mb-5">
            <div class="progress-bar" role="progressbar" :style="{width: `${calcW}%`}">{{calcW}}%</div>
          </div>
        <Input v-for="(input, index) in inputs" :key="index"
                                                :input="input"
                                                :index="index"
                                                @change="change($event)"/>
        </form>
      </div>
        <button class="btn btn-primary" :disabled="!isDisabled">Next</button>
    </div>
  </div>
</template>

<script>
 import { mapGetters} from 'vuex';
 import Input from './components/Input'

export default {
  name: 'App',
  data() {
    return {
      done: 0
    };
  },
  computed: {...mapGetters([
    'inputs'
  ]),
    calcW(){
      return Math.round(100/this.inputs.length*this.done)
    },
    isDisabled(){
      return this.done == this.inputs.length;
    }
  },
  methods: {
    change(e){
      this.inputs[e.index].activated = e.value;
      let done = 0;
      for (let i = 0; i< this.inputs.length; i++){
        if(this.inputs[i].activated){
          done++;
        }
      }
      return this.done = done;
    }
  },
  created(){
    this.inputs.forEach(i => i.activated = false)
  },
  components:{
    Input
  }
};
</script>

<style>
h2 {
  margin: 0;
  padding: 0;
}
i {
  font-size: 12px;

  padding: 10px 0 0 5px;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
