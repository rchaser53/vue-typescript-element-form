 <template>
 <div>
  <el-form ref="form" v-bind:label-position="'left'" v-bind:rules="rules" :model="form" label-width="120px">
    <el-form-item for="name" label="name" prop="name" >
      <el-input id="name" v-model="form.name" v-on:input="setName"
          placeholder="Please input" v-bind:value="form.name"></el-input>
    </el-form-item>

    <el-form-item label="Activity zone">
      <el-select v-model="form.region" :default-first-option="true"
         v-on:change="setRegion" placeholder="please select your zone">
        <el-option label="-" value="a"></el-option>
        <el-option label="Zone one" value="shanghai"></el-option>
        <el-option label="Zone two" value="beijing"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item for="price" label="price" prop="price" >
      <el-input-number id="price" v-model="form.price" v-on:input="setPrice"
          placeholder="Please input" v-bind:value="form.price"></el-input-number>
    </el-form-item>
  </el-form>
  <button @click="validateForm">validate</button>
</div>
</template>

<script lang="ts">
import 'element-theme-chalk/lib/index'

import Vue from 'vue'
import { mapActions } from 'vuex'
import Component from 'vue-class-component'
import {
  parseSessionStorageValue,
  initialFormValue
} from './store/mutations'
import {
  Form,
  FormItem,
  Input,
  InputNumber,
  Option,
  Select
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
    'el-input': Input,
    'el-input-number': InputNumber,
    'el-select': Select,
    'el-option': Option
  },
  methods: {
    ...mapActions([
      'changeFormState',
    ]),
    setRegion: createInputSetter('region'),
    setName: createInputSetter('name'),
    setPrice: createInputSetter('price'),
  }
})
export default class InputForm extends Vue {
  data() {
    return {
      form: initialFormValue,
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        price: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { validator: this.checkPrice, trigger: 'blur' }
        ]
      }
    }
  }

  validateForm() {
    (this as any).$refs.form.validate(
      (valid) => {
        console.log(valid, 11)
      }
    )
  }

  checkPrice(rule, value, callback) {
    setTimeout(() => {
      if (value !== 28)  callback(new Error("why don't you nyan"))
      callback()
    }, 1000)
  }

  mounted() {
    Vue.set(this, 'form', Object.assign({}, this.$store.state.form))
  }
}
</script>