export default function Home() {
  return (
    <main className="main">
        <img src="hero.jpeg" alt="תמונה המציגה אדם משתמש במחשב באמצעות ממשק BCI" className="hero-image"/>
      <section id="hero">
        <h2>מהפכת BCI עם LLM עברי מהדור הבא</h2>
        <p>
          minds.software פורצת דרך בתחום BCI (Brain-Computer Interface) באמצעות פיתוח מודל שפה גדול (LLM) 
          חדשני בעברית. טכנולוגיה פורצת דרך זו פותחת עידן חדש של תקשורת בין אדם למחשב, ומאפשרת 
          תקשורת חלקה באמצעות אותות מוח בלבד.
        </p>
        <a href="#learn-more">למד עוד</a>
      </section>
      <section id="about">
        <h2>אודות minds.software</h2>
        <p>
          אנו צוות של מדענים, מהנדסים ויזמים שחולמים על עתיד שבו אנשים יוכלו לתקשר עם מחשבים בצורה 
          טבעית ואינטואיטיבית. אנו מאמינים שטכנולוגיית LLM עברית תאפשר קפיצת מדרגה משמעותית בתחום 
          ה-BCI ותפתח אפשרויות חדשות ומרתקות עבור אנשים בכל רחבי העולם.
        </p>
        <a href="#team">הצוות שלנו</a>
      </section>
      <section id="technology">
        <h2>טכנולוגיית LLM עברית</h2>
        <p>
          ה-LLM שלנו פותח במיוחד עבור השפה העברית, תוך שימוש בטכניקות למידת מכונה מתקדמות. 
          המודל מאומן על כמויות אדירות של טקסט בעברית, ומאפשר לו להבין ולייצר שפה טבעית בצורה 
          מדויקת וזורמת.
        </p>
        <a href="#applications">יישומים</a>
      </section>
      <section id="contact">
        <h2>צור קשר</h2>
        <p>
          רוצים לדעת יותר על הטכנולוגיה שלנו? צרו קשר עכשיו!
        </p>
        <input type="text" placeholder="שם מלא"/>
        <input type="email" placeholder="אימייל"/>
        <textarea placeholder="הודעה"></textarea>
        <button>שלח</button>
      </section>
    </main>
  );
}
