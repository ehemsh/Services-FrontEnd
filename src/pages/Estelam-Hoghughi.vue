<template>
  <q-page>
    <div class="row" style="height: 90%">
    <div class="q-pa-md bg-image">
      <img src="~assets/eh.png" class="absolute-center" alt="eh">
    </div>
    </div>
    <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
         class="col-12 col-md-6 flex content-center">
      <q-card v-bind:style="$q.screen.lt.sm ? {'width': '20%'} : {'width': '20%'}">
        <br>
        <br>

        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="~assets/heart-blue.png" alt="avatar">
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">

            <div class="col text-h6 ellipsis flex justify-center">
              <h2 class= "text-h6 text-uppercase q-my-none text-weight-regular">استعلام شناسه ملی اشخاص حقوقی</h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" dir="rtl" @submit.prevent="submitForm">
           <q-input dir="rtl" clear-icon ="close" dense rounded outlined color="teal" bottom-slots v-model="text" label="شناسه ملی" placeholder="شناسه ملی یازده رقمی" hint="شناسه حداکثر یازده رقم می باشد" counter maxlength="11" >
          </q-input>
            <div class="col-6 col-md-6 flex justify-left content-center">
  نام شرکت: {{name}}
</div>
    <div class="col-6 col-md-6 flex justify-left content-center">
سال تاسیس: {{year}}

  </div>
           <div class="col-6 col-md-6 flex justify-center content-center">
    <q-btn color="primary" style="width: 200px" to = "/login">
      <div class="ellipsis">
        جستجو
      </div>
    </q-btn>
<br>
<br>


           </div>
          </q-form>
        </q-card-section>
      </q-card>

</div>

<br>

</q-page>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref('')
    }
  }
}

</script>
