 <template>
  <div class="column is-12">
      <label class="label" for="email">Email</label>
      <p :class="{ 'control': true }">
        <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </p>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component'
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  import { mapActions } from 'vuex'

  Vue.use(VeeValidate)

@Component({
  components: {
  },
  methods: {
    ...mapActions([
    ]),
  }
})
export default class InputForm extends Vue {
  data() {
    return {}
  }

  $refs: {}
}
</script>