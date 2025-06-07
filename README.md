<h1 align="center"> Weather App </h1>

אפליקציית React המציגה תחזית מזג אוויר עולמית עבור מספר ערים.  
הנתונים מתקבלים מ-API של OpenWeatherMap ומוצגים בעברית.

![צילום מסך של האפליקציה](screenshot.png)

<h2 dir="rtl">איך מריצים?</h2>
<p dir="rtl">
1. מתקינים את התלויות: <code>npm install</code><br>
2. מריצים את הפרויקט: <code>npm run dev</code>
</p>

<h2 dir="rtl">קבצים עיקריים</h2>
<ul dir="rtl">
  <li><code>src/App.jsx</code> - רכיב ראשי שמנהל את הנתונים ומציג את הכרטיסים.</li>
  <li><code>src/components/WeatherCard.jsx</code> - כרטיס תצוגה לכל עיר.</li>
  <li><code>src/components/weatherApi.js</code> - פונקציה לקבלת נתוני מזג אוויר מה-API.</li>
</ul>
