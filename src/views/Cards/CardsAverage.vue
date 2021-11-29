<template>
  <div>
   
    <br />

    <div>
      <p class="text-white text-center text-4xl p-0 m-0">
        AVERAGE DOWN CALCULATOR
      </p>
      <br />
      <p class="text-white text-center text-2xl p-0 m-0">
        คำนวณต้นทุนเฉลี่ยของหุ้นของคุณเมื่อคุณซื้อหุ้นตัวเดียวกันหลายครั้ง
        จะทำให้ทราบต้นทุนเฉลี่ยสำหรับค่าเฉลี่ยลง หรือค่าเฉลี่ยขึ้น
      </p>
      <br />
    </div>

    <div>
      <b-img
        center
        src="https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.15752-9/258816658_221818760068945_8475534669980422421_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=I1W88_0ggJkAX-_8vWt&_nc_oc=AQlTE8oijrNBxIJKjGT7N3RufJgyb6sBvzY0PNl9yfFOqaR12-4T1ms7NAF6M1OIfeU&tn=9HuvVjk_7ElYvQ78&_nc_ht=scontent.fhdy3-1.fna&oh=9e0fc1fda4e526792757ea90b64ad15a&oe=61C8B873"
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
                ขั้นตอนแรก : ใส่จำนวนการซื้อแต่ละครั้ง ในช่อง Quantity </b-card-text
              ><br />
              <b-card-text class="text-left text-lg">
                ขั้นตอนที่ 2 : ใส่ราคาที่ซื้อในแต่ละครั้ง ในช่อง Purchase Price </b-card-text
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
