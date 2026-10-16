// server.js - الخادم الأساسي لمنصة شركة محيب والمبنى أصدقاؤه
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// مسار فحص عمل الخادم
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'success', 
        message: 'منصة شركة محيب والمبنى أصدقاؤه تعمل بنجاح!' 
    });
});

// مسار استقبال طلبات حجز الزيارات
app.post('/api/visits/schedule', (req, res) => {
    const { propertyId, tenantName, phone, visitDate } = req.body;
    // غداً سنربط هذا المسار بإرسال رسالة WhatsApp آلياً للمالك
    res.json({
        success: true,
        message: `تم تسجيل طلب الزيارة بنجاح للمستأجر ${tenantName}`
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
