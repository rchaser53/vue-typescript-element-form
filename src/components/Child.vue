<template>
  <div>
    {{hoge}}
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    hoge: String
  }
})
export default class Child extends Vue {}
</script>