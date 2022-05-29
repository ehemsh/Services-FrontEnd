<template>
<div>
  <!-- <q-page class="flex flex-center">
     <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <q-btn label="p1" to="/p1"/>

    <div class="q-pa-md q-gutter-md">
    <q-btn color="teal" to="/login">
      <q-icon left size="3em" name="map" />
      <div>سرویس استعلام حقوقی</div>
    </q-btn>
    </div>



  </q-page> -->

  <!-- start loading -->
<!-- <div class="preloader">
	<img src="~assets/picsOfIndex/loader.gif" alt="Preloader image">
</div> -->
<!-- end loading -->

<!-- start intro section -->


<!-- start services section -->
<section id="services" class="section section-padded">
	<div class="container">
		<div class="row text-center title">
			<!-- start type cursor -->
			<div class="col-md-12 text-center">
				<h2 class="white typed">خدمات الکترونیکی دولت بر بستر (GSB)</h2>

			</div>
			<!-- end type cursor -->
			<!-- <h3> خدمات الکترونیکی قابل ارائه</h3>

			<h4 class="light muted" >جهت استفاده از هر خدمت بر روی آن کلیک نمایید </h4>
		-->
    </div>
		<div class="row services">
			<!-- start services section box1 -->
			<div class="col-md-4">
        <a href="#/EH">
				<div class="service">

					<div class="icon-holder">
						<img src="~assets/picsOfIndex/icons/heart-blue.png" alt="" class="icon">
					</div>

					<h4 class="heading">استعلام شناسه ملی اشخاص حقوقی</h4>
					<p class="description">استعلام شناسه ملی اشخاص حقوقی شامل شرکت‌ها و موسسات از طریق این خدمت قابل انجام می‌باشد</p>

        </div>
        </a>
			</div>

			<!-- end services section box1 -->
			<!-- start services section box2 -->
			<div class="col-md-4">
        <a href="#">
				<div class="service">
					<div class="icon-holder">
						<img src="~assets/picsOfIndex/icons/guru-blue.png" alt="" class="icon">
					</div>
					<h4 class="heading">استعلام وضعیت کرونا کارکنان</h4>
					<p class="description">استعلام وضعیت ابتلای به کرونا کارکنان سازمان از طریق این خدمت قابل انجام می‌باشد</p>
				</div>
        </a>
			</div>

			<!-- end services section box2 -->
			<!-- start services section box3 -->
			<div class="col-md-4">
        <a href="#">
				<div class="service">
					<div class="icon-holder">
						<img src="~assets/picsOfIndex/icons/weight-blue.png" alt="" class="icon">
					</div>
					<h4 class="heading">استعلام نرخ ارز</h4>
					<p class="description">جهت استعلام نرخ ارز از طریق این خدمت می‌توان اقدام نمود</p>
				</div>
        </a>
			</div>
			<!-- end services section box3 -->
		</div>
	</div>
	<!-- background -->

</section>
<!-- end services section -->
</div>
</template>

<!--
<script>
import { defineComponent } from 'vue';

export default {
mounted() {
let myScript = document.createElement('script')
    myScript.setAttribute(
      'src',
      '~assets/js/jquery-1.11.1.min.js'
    )
    document.head.appendChild(myScript)

    let myScript2 = document.createElement('script')
    myScript2.setAttribute(
      'src',
      '~assets/js/scripts.js'
    )
    document.head.appendChild(myScript2)

      //making an owl carousel rtl
  //$('.owl-carousel .owl-schedule').owlCarousel({
	//rtl:true
	//})
  }
}
</script>
-->

<style scoped>
  @import '~assets/css/animate.css';
  @import '~assets/css/bootstrap.css';
  @import '~assets/css/style.css';
</style>
