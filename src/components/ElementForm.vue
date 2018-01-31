 <template>
  <div>
    <div class="error">{{errorMessage}}</div>
    <el-form ref="form" label-position="left" :rules="rules" :model="form" label-width="120px">
      <el-form-item for="name" label="name" prop="name" >
        <el-input id="name" v-model="form.name" @input="setName"
            placeholder="Please input" :value="form.name"></el-input>
      </el-form-item>

      <el-form-item label="Activity zone">
        <el-select id="region" v-model="form.region" :default-first-option="true"
          @change="setRegion" placeholder="please select your zone">
          <el-option label="-" value=""></el-option>
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item for="price" label="price" prop="price" >
        <el-input-number id="price" v-model="form.price" @input="setPrice"
            placeholder="Please input" :value="form.price"></el-input-number>
      </el-form-item>

      <el-form-item for="radio" label="radio" prop="radio" >
        <el-radio-group v-model="form.radio" @input="setRadio">
          <el-radio :label="1">Option A</el-radio>
          <el-radio :label="2">Option B</el-radio>
          <el-radio :label="3">Option C</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item for="date" label="date" prop="date">
        <el-date-picker id="date" v-model="form.date" type="datetime" @input="setDate"></el-date-picker>
      </el-form-item>
    </el-form>
    <child :hoge="23"></child>
    <el-button :disabled="!isSubmittable" @click="submitForm">submit</el-button>
  </div>
</template>

<script lang="ts">
import 'element-theme-chalk/lib/index'

// need to internationalization for datetimepicker
import lang from 'element-ui/lib/locale/lang/ja'
import locale from 'element-ui/lib/locale'
locale.use(lang)

import Vue from 'vue'
import { mapActions } from 'vuex'
import Component from 'vue-class-component'
import {
  parseSessionStorageValue,
  initialFormValue
} from '../store/mutations'
import {
  Button,
  DatePicker,
  Form,
  FormItem,
  Input,
  InputNumber,
  Option,
  Radio,
  RadioGroup,
  Select,
} from 'element-ui'

import Child from './Child.vue'

const createInputSetter = function(key: string) {
  return function(this: Vue, value: any) {
    this.$store.dispatch('changeFormState', { [key]: value })
  }
}

@Component({
  components: {
    'el-button': Button,
    'el-date-picker': DatePicker,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input,
    'el-input-number': InputNumber,
    'el-option': Option,
    'el-radio': Radio,
    'el-radio-group': RadioGroup,
    'el-select': Select,
    'child': Child
  },
  props: {
    hoge: String
  },
  methods: {
    ...mapActions([
      'changeFormState',
      'changeFormValidate'
    ]),
    setDate: createInputSetter('date'),
    setName: createInputSetter('name'),
    setRadio: createInputSetter('radio'),
    setRegion: createInputSetter('region'),
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
        ],
        date: [
          { required: true, message: 'Please input Date', trigger: 'blur' }
        ]
      },
      isSubmittable: false,
      errorMessage: ''
    }
  }

  $refs: {
    form: Form
  }

  async submitForm() {
    try {
      if (await this.asyncValidateForm() === false) return
      Vue.set<string>(this, 'errorMessage', 'out')
      sessionStorage.clear()
    } catch (err) {
      console.error(err)
    }
    return 
  }

  async beforeUpdate() {
    try {
      Vue.set(this, 'isSubmittable', await this.asyncValidateForm())
    } catch (err) {
      console.error(err)
    }
  }

  asyncValidateForm() {
    return new Promise((resolve, reject) => {
      this.$refs.form.validate(
        (isOk) => {
          if (isOk) {
            resolve(true)
          } else {
            resolve(false)
          }
        }
      )
    })
  }

  checkPrice(rule, value, callback) {
    setTimeout(() => {
      if (value !== 28)  callback(new Error("why don't you nyan"))
      callback()
    }, 1000)
  }

  beforeMount() {
    Vue.set(this, 'form', Object.assign({}, this.$store.state.form))
  }
}
</script>

<style>
  .error {
    color: red;
  }
</style>