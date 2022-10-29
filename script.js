let counter = 0; // เราสร้างตัวแปรด้วย let ชื่อว่า counter และกำหนดค่าเริ่มต้นเป็น 0

const visitFigma = () => {
    counter++; // ทุกครั้งที่ Function นี้ถูกเรียกใช้ ค่าของ counter จะเพิ่มขึ้น 1
    const topic = document.getElementById("blog-topic");
    const content = document.getElementById("blog-content");

    topic.innerHTML = "This is figma! 📝";
    content.innerHTML = "Today we're going to use figma for designing your first webapge. <br/>clicked time is " + counter;

    topic.style.color = "black"
}