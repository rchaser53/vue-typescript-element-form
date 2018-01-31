<template>
  <div @click="gyan">
    {{hoge}}
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const MixinA = {
  methods: {
    nyan() {
      return 28
    }
  }
}

@Component({
  props: {
    hoge: String
  },
  mixins: [ MixinA ]
})
export default class Child extends Vue {
  nyan: () => number
  gyan() {
    console.log(this.nyan())
  }
}
</script>