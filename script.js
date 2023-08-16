let counter = 0; // เราสร้างตัวแปรด้วย let ชื่อว่า counter และกำหนดค่าเริ่มต้นเป็น 0

const visitFigma = () => {
    counter++; // ทุกครั้งที่ Function นี้ถูกเรียกใช้ ค่าของ counter จะเพิ่มขึ้น 1
    const topic = document.getElementById("blog-topic");
    const content = document.getElementById("blog-content");
    const header = document.getElementsByClassName("topic");
   
    topic.innerHTML = "ผัดกระเพราใส่ใจไม่ได้อะไร! 📝";
    content.innerHTML = "กดปุ่มไปอีกกี่ทีเขาก็ยังไม่มองหรอก  😥. <br/>กดไปทำไมตั้ง " + counter + " ครั้งหละ.";
    header.innerHTML = "12345 ปาฉลามขึ้นบก"

    topic.style.color = "black"
}