<template>
  <div>
    <!-- <img
      src="https://www.incimages.com/uploaded_files/image/1920x1080/calculating-panoramic_12716.jpg"
      class="cradsA"
    /> -->
    <br />

    <div>
      <p class="text-white text-center text-4xl p-0 m-0">APY Calculator</p>
      <br />
      <p class="text-white text-center text-2xl p-0 m-0">
        การคิดดอกเบี้ยที่เราได้จากการออมรายวัน
      </p>
      <br />
    </div>

    <div>
      <b-img
        center
        src="https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.15752-9/258843231_446446747059455_7790895181009414747_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=6Zbgp-k1mugAX8yuim0&_nc_ht=scontent.fhdy3-1.fna&oh=55285f73a29cc30b73d864bddffeae97&oe=61C91210"
        alt="Center image"
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
              class="text-center text-2xl howto"
            >
              <b-card-text class="text-left text-lg">
                ขั้นตอนแรก : ใส่เงินที่คุณต้องการฝาก ในช่อง Amount </b-card-text
              ><br />
              <b-card-text class="text-left text-lg">
                ขั้นตอนที่ 2 :
                ใส่ดอกเบี้ยที่ได้มาจากเว็บไซต์ที่คุณใช้ทำการเทรดของเหรียญต่างๆ
                ในช่อง APY </b-card-text
              ><br />
              <b-card-text class="text-left text-lg">
                ขั้นตอนที่ 3 : ใส่วันที่คุณต้องการวานแผนในการออมนั้นกี่วัน
                ในช่อง DAY </b-card-text
              ><br />
              <b-card-text class="text-left text-lg">
                ขั้นตอนที่ 4 : เมื่อใส่ตัวเลขทุกช่องตามที่ต้องการแล้ว ให้คุณกด
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
.howto {
  width: 20em;
  height: 20em;
}
</style>
