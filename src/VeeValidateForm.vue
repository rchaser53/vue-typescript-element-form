 <template>
  <div class="column is-12">
      <label class="label" for="email">Email</label>
      <p :class="{ 'control': true }">
        <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </p>
    <input @change="validateCoupon" v-model="coupon" name="coupon" :class="{'input': true, 'is-danger': errors.has('coupon') }" type="text" placeholder="Enter Your Coupon">
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component'
  import Vue from 'vue'
  import { Validator } from 'vee-validate'
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
      return {
        coupon: '',
        discounted: ''
      }
    }
    discounted: string
    coupon: string


    getvalidateCoupon() {
      this.$validator.validate('coupon', this.coupon).then((result) => {
        this.discounted = result;
      });
    }

    created() {
      Validator.extend('verify_coupon', {
        getMessage: field => `The ${field} is not a valid coupon.`,
        validate: value => new Promise((resolve) => {
          // API call or database access.
          const validCoupons = ['SUMMER2016', 'WINTER2016', 'FALL2016'];

          setTimeout(() => {
            resolve({
              valid: value && validCoupons.indexOf(value.toUpperCase()) !== -1
            });
          }, 500);
        })
      });
      (this as any).$validator.attach({
        name: 'coupon',
        rules: 'required|verify_coupon'
      });
    }

    $refs: {}
  }
</script>