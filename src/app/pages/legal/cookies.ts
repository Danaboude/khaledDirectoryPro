import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  standalone: true,
  template: `
    <main class="pt-32 pb-20 px-6 max-w-4xl mx-auto text-right">
      <h1 class="text-4xl font-black mb-8 text-primary">سياسة ملفات تعريف الارتباط</h1>
      <div class="prose prose-lg max-w-none text-on-surface-variant space-y-6 leading-relaxed">
        <p>تستخدم منصة "بوابة" ملفات تعريف الارتباط (Cookies) لتحسين أداء الموقع وضمان سهولة استخدام لوحة التحكم.</p>
        
        <h2 class="text-2xl font-bold text-secondary mt-10">1. ملفات الضرورة القصوى</h2>
        <p>نستخدم ملفات تعريف الارتباط لحفظ حالة الدخول إلى لوحة التحكم (Password Unlock) وضمان استمرارية الجلسة دون الحاجة لإعادة إدخال البيانات في كل مرة.</p>
        
        <h2 class="text-2xl font-bold text-secondary mt-10">2. ملفات الأداء</h2>
        <p>قد نستخدم أدوات تحليلية لفهم كيفية تفاعل المستخدمين مع الدليل، مما يساعدنا في تحسين ميزات البحث والفلترة.</p>
        
        <h2 class="text-2xl font-bold text-secondary mt-10">3. التحكم في الملفات</h2>
        <p>يمكنكم إدارة أو تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بكم، ولكن قد يؤثر ذلك على بعض وظائف لوحة التحكم.</p>
      </div>
    </main>
  `
})
export class CookiesComponent {}
