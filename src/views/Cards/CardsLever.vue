<template>
  <div>
    
    <br />

    <div>
      <p class="text-white text-center text-4xl p-0 m-0">
        LEVERGED MOVEMENT CALCULATOR
      </p>
      <br />
      <p class="text-white text-center text-2xl p-0 m-0">
        การคำนวณค่าเปอร์เซ็นต์ที่เปลี่ยนไป
      </p>
      <br />
    </div>

    <div>
      <b-img
        center
        src="https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.15752-9/258868337_2025443064278477_992455615209546543_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=paI_UpLchIsAX_Q9lR-&_nc_oc=AQl9JWY0LzO-M25xaxLNPhbAa8t6tkzZKLMvY6FNrmHewEgXKs9K4eWUG_HkUQIqHRc&_nc_ht=scontent.fhdy3-1.fna&oh=f3b28cd4be9d086f50ad079cc286a74f&oe=61CA51DD"
        style="max-width: 40rem"
        class="mb-3"
      ></b-img>
    </div>

    <div class="container1">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm text-white">
          <b-card-group deck>
            <b-card
              bg-variant="dark"
              text-variant="white"
              header="วิธีการใช้งาน"
              class="text-center text-2xl howto2"
            >
              <b-card-text class="text-left text-lg">
                ขั้นตอนแรก : ใส่จำนวนเงินที่คุณต้องการลงทุน ในช่อง Leverage on
                Base Amount </b-card-text
              ><br />
              <b-card-text class="text-left text-lg">
                ขั้นตอนที่ 2 : ใส่กำไรเป้าหมายที่คุณต้องการกี่เปอร์เซ็น ในช่อง
                Gain want to achieve in % </b-card-text
              ><br />
              <b-card-text class="text-left text-lg">
                ขั้นตอนที่ 3 : เมื่อใส่ตัวเลขทุกช่องตามที่ต้องการแล้ว ให้คุณกด
                ปุ่ม CALCULATATE เพื่อคำนวณผลลัพธ์
                เป็นอันเสร็จสิ้นการใช้งาน</b-card-text
              ><br />
            </b-card>
          </b-card-group>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cradsA {
  width: 100%;
  height: 12rem;
}
.howto2 {
  width: 20em;
  height: 15em;
}
</style>
