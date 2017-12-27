<template>
  <div>
    <input v-model="msg">
    <p>prop: {{propMessage}}</p>
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greet">Greet</button>
    <hello ref="helloComponent"></hello>
    <el-form></el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Hello from './Hello.vue';
import Form from './Form.vue';

@Component({
  props: {
    propMessage: String
  },
  components: {
    Hello,
    'el-form': Form
  }
})
export default class App extends Vue {
  // props have to be declared for typescript
  propMessage: string

  // inital data
  msg: number = 123

  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage

  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  greet () {
    this.$refs.helloComponent.sayHello()
  }

  // dynamic component
  $refs: {
    helloComponent: Hello
  }
}
</script>
