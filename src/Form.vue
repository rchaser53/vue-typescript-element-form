 <template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item for="name" label="name" style="display:flex;" >
      <el-input id="name" v-on:change="setName" placeholder="Please input" v-bind:value="name"></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
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
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }

  methods = {
    onSubmit() {
      console.log('submit!');
    }
  }

  get name() {
    return this.$store.state.form.name || ''
  }

}
</script>