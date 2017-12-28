 <template>
  <el-form ref="form" v-bind:label-position="'left'" v-bind:rules="rules" :model="form" label-width="120px">
    <el-form-item for="name" label="form.name" prop="name" >
      <el-input id="name" v-model="form.name" v-on:input="setName"
          placeholder="Please input" v-bind:value="form.name"></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import 'element-theme-chalk/lib/index'

import Vue from 'vue'
import { mapActions } from 'vuex'
import Component from 'vue-class-component'
import { parseSessionStorageValue } from './store/mutations'
import {
  Form,
  FormItem,
  Input
} from 'element-ui'

const createInputSetter = function(key: string) {
  return function(this: any, value: any) {
    this.$store.dispatch('changeFormState', { [key]: value })
  }
}

@Component({
  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input
  },
  methods: {
    ...mapActions([
      'changeFormState',
    ]),
    setName: createInputSetter('name')
  }
})
export default class ElForm extends Vue {
  data() {
    return {
      form: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ]
      }
    }
  }

  mounted() {
    Vue.set(this, 'form', Object.assign({}, this.$store.state.form))
  }
}
</script>