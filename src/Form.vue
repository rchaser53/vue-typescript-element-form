 <template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Activity name">
      <!-- <el-input v-on:change="changeInput" v-on:default-value="name"  v-on:value="name"></el-input> -->
      <input v-on:change="changeInput" v-bind:value="name" />
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

  changeInput(event: any) {
    this.$store.dispatch('changeFormState', { name: event.target.value })
  }

  mounted() {}

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