<template>
  <div>
   
    <br />

    <div>
      <p class="text-white text-center text-4xl p-0 m-0">FEE CALCULATOR</p>
      <br />
      <p class="text-white text-center text-2xl p-0 m-0">
        การคิดหาค่าธรรมเนียมที่ต้องจ่ายเวลาคุณซื้อเหรียญ
      </p>
      <br />
    </div>

    <div>
      <b-img
        center
        src="https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.15752-9/262211856_911355049585694_7943491288528881624_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=oywODllEWOkAX9bcnZ1&_nc_ht=scontent.fhdy3-1.fna&oh=319fa6c03b972143f1d3369b9251e6b8&oe=61C7D25F"
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
                ขั้นตอนแรก : ใส่จำนวนจำนวนเหรียญของคุณ เช่น 100 เหรียญ ในช่อง
                Amount of coins </b-card-text
              ><br />
              <b-card-text class="text-left text-lg">
                ขั้นตอนที่ 2 : ใส่ค่าธรรมเนียมเหรียญ เช่น Bitkub 0.25 % ,Binance
                0.1 % ในช่อง Fee Rate / Funding Rate (%) </b-card-text
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
