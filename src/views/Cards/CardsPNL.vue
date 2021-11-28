<template>
    <div>
  
  <b-card 
    class="cradsA"
    overlay
    img-src=""
    img-alt="Card Image"
    text-variant=""
    title=""
    sub-title=""
    tag="article"
  >
  </b-card>
  <br>

  <div>
    <p class="text-white text-center text-4xl  p-0 m-0">PNL CALCULATOR</p> <br>
    <p class="text-white text-center text-2xl  p-0 m-0">  การคำนวณกำไรขาดทุนขึ้นอยู่กับหลักประกันของสัญญา ตัวอย่างเช่น สัญญาที่มีมาร์จิ้น USDⓈ จะถูกกำหนดเป็น USDT ในขณะที่สัญญา BTC Coin-margin จะถูกกำหนดเป็น BTC
โปรดทราบว่ากำไรและขาดทุนที่ยังไม่รับรู้จะคำนวณจากราคามาร์ค ในขณะที่กำไรขาดทุนที่รับรู้จะคำนวณตามราคาล่าสุด

 </p> <br>
    
  </div>

  <div>
  <b-img 
  center src="https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.15752-9/259995056_681620043246879_726936875359426073_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Dd6TqtoL_B0AX-__nsU&_nc_ht=scontent.fhdy3-1.fna&oh=3ca941e771a7b8edd3e765a7e394b1d1&oe=61CA709D"
  style="max-width: 40rem;"
  class="mb-3"
  ></b-img>
         
</div>

 
  <div>
  <b-container5 class="bv-example-row">
  <b-row class="text-center">
    <b-col>1 of 3</b-col>

    <b-col cols="8">2 of 3 (wider)

    <b-card-group deck>
    <b-card bg-variant="dark" text-variant="white" header="วิธีการใช้งาน" class="text-center text-2xl howto">

        <b-card-text class="text-left text-lg"> ขั้นตอนแรก : ใส่ราคาขายของคุณ ในช่อง Entry Price </b-card-text><br>
        <b-card-text class="text-left text-lg"> ขั้นตอนที่ 2 : ใส่ราคาซื้อของคุณ ในช่อง Exit Price   </b-card-text><br>   
        <b-card-text class="text-left text-lg"> ขั้นตอนที่ 3 : ใส่ปริมาณการซื้อ  หากคุณต้องการใช้ ปริมาณการซื้อ 7x คุณสามารถป้อน ”7” ในช่อง Quantity   </b-card-text><br>       
        <b-card-text class="text-left text-lg"> ขั้นตอนที่ 4 : เมื่อใส่ตัวเลขทุกช่องตามที่ต้องการแล้ว ให้คุณกด ปุ่ม CALCULATATE เพื่อคำนวณผลลัพธ์ เป็นอันเสร็จสิ้นการใช้งาน</b-card-text><br>
    </b-card>
    </b-card-group>
   </b-col>

  <b-col>3 of 3</b-col>
  </b-row>
  </b-container5>
    </div>
    </div>

    
</template>

<script>
    export default {
        
    }
</script>

<style >
.cradsA{
 width: 100%;
 height: 12rem;
}
.howto{
 width: 20em;
 height: 20em; 
}

</style>