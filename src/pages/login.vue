<template>
<div dir="rtl">
  <img src="~assets/wave.png" class="wave" alt="login-wave">
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img src="~assets/login-bg.png" class="responsive" alt="login-image">
    </div>
    <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
         class="col-12 col-md-6 flex content-center">
      <q-card v-bind:style="$q.screen.lt.sm ? {'width': '60%'} : {'width': '40%'}">
        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="~assets/logo.png" alt="avatar">
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">
            <div class= "col text-h6 ellipsis flex justify-center">
              <h4 class="text-h6 text-uppercase q-my-none text-weight-regular">ورود به سرویس استعلام حقوقی</h4>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" @submit.prevent="submitForm">
            <q-input label="نام کاربری" v-model="login.username">
            </q-input>
            <q-input label="کلمه عبور" type="password" v-model="login.password">
            </q-input>
            <div>
              <q-btn class="full-width" color="primary" label="ورود" type="submit" rounded></q-btn>
              <!--<div class="text-center q-mt-sm q-gutter-lg">
                <router-link class="text-white" to="/login">Forgot password?</router-link>
                <router-link class="text-white" to="/login">Create an account</router-link>
              </div>-->
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { mapActions } from 'vuex'

let $q

export default {
  name: 'Login',
  data () {
    return {
      login: {
        username: 'Ali',
        password: 'a123456'
      }
    }
  },
  methods: {
    submitForm () {
      if (!this.login.username || !this.login.password) {
        $q.notify({
          type: 'negative',
          message: 'The data entered is invalid.'
        })
      } else if (this.login.password.length < 6) {
        $q.notify({
          type: 'negative',
          message: 'The password must be 6 or more characters long.'
        })
      } else {
        console.log('login')

        }
      }
  },
  mounted () {
    $q = useQuasar()
  }
}
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>

