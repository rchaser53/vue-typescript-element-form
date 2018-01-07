<template>
  <el-form-item v-bind:for="inputKey" v-bind:label="label" v-bind:prop="inputKey" >
    <el-input v-bind:id="inputKey" v-bind:input="setter" v-model="value"
        v-bind:placeholder="placeholder" v-bind:value="value"></el-input>
  </el-form-item>
</template>

<script lang="ts">
// v-model="value"


import Vue from 'vue'
import Component from 'vue-class-component'
import {
  FormItem,
  Input
} from 'element-ui'

@Component({
  components: {
    'el-form-item': FormItem,
    'el-input': Input
  },
  props: {
    inputKey: String,
    label: String,
    placeholder: String,
    value: String,
    setter: Function
  },
})
export default class ElementInput extends Vue {
  // key: string
}
</script>