<template>
  <div>
    <img
      src="https://images4.alphacoders.com/113/thumbbig-1135100.webp"
      class="cradsA"
    />
    <br />

    <div class="center">
      <p class="text-white text-center text-4xl p-0 m-0">
        TRADE COMPOUND CALCULATOR
      </p>
      <br />
      <p class="text-white text-center text-2xl p-0 m-0">
        การหาค่าในการจำลองว่าการทบต้น
        ทุนเริ่มต้นและการเทรดที่ทำกำไรด้วยเปอร์เซ็นต์กำไรที่ตั้งไว้
        สามารถทำให้บัญชีเทรดเติบโตเมื่อเวลาผ่านไปได้อย่างไร
        มันทำงานโดยการจำลองการทบต้นและการลงทุนซ้ำของเปอร์เซ็นต์กำไรที่เลือกแบบเดียวกันของทุนทั้งหมดของบัญชี
      </p>
      <br />
    </div>

    <div>
      <b-img
        center
        src="https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.15752-9/260525449_1267509197100424_8560591728369453109_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=CXZ8oCWfBw4AX_dmHGT&_nc_ht=scontent.fhdy3-1.fna&oh=e81c9f36e7400f1eaf75b24dc73f8497&oe=61C7D87B"
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
              class="text-center text-2xl howto3"
            >
              <b-card-text class="text-left text-lg">
                ขั้นตอนแรก : ใส่ยอดเงินเริ่มต้นในการลงทุนของคุณ ในช่อง Base
                Amout </b-card-text
              ><br />
              <b-card-text class="text-left text-lg">
                ขั้นตอนที่ 2 : ใส่จำนวนช่วงในการลงทุนของคุณ ในช่อง Leverage on
                Base Amount </b-card-text
              ><br />
              <b-card-text class="text-left text-lg">
                ขั้นตอนที่ 3 : ใส่กำไร % ต่อช่วงในการลงทุน ในช่อง Interest rate
                gain per Trade </b-card-text
              ><br />
              <b-card-text class="text-left text-lg">
                ขั้นตอนที่ 4 :.ใส่หมายเลขของการtrade ของคุถณ ในช่อง Number of
                Trades </b-card-text
              ><br />
              <b-card-text class="text-left text-lg">
                ขั้นตอนที่ 5 : เมื่อใส่ตัวเลขทุกช่องตามที่ต้องการแล้ว ให้คุณกด
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
.howto3 {
  width: 20em;
  height: 25em;
}
</style>
