 <template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Activity name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {
  Form,
  FormItem,
  Input
} from 'element-ui'

@Component({
  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input
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
}
</script>