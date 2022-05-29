<template>
  <q-page>
    <div class="q-pa-md">
    <div class="row">
      <div class="çol bg-red">
        Test
      </div>
      <div class="çol bg-green">
        Test
      </div>
    </div>
    </div>
p1
    <q-btn color="amber" glossy label="Amber" @click="doIt()"/>
    <br>
    {{x}}
          <q-input outlined v-model="x" label="Outlined" />

  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue';

export default defineComponent({
  name: 'P1',
  setup(){
      let x=ref(0)
      function doIt(){
          x.value=x.value+1
          console.log("test")
      }
      return{
          doIt,
          x

      }
  }
})

</script>
