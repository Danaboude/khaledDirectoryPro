import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <main class="pt-32 pb-20 px-6 max-w-4xl mx-auto text-right">
      <h1 class="text-4xl font-black mb-8 text-primary">سياسة الخصوصية</h1>
      <div class="prose prose-lg max-w-none text-on-surface-variant space-y-6 leading-relaxed">
        <p>نحن في منصة "بوابة" نولي أهمية قصوى لخصوصية بياناتكم. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات الخاصة بالمستخدمين والشركات الناشئة.</p>
        
        <h2 class="text-2xl font-bold text-secondary mt-10">1. جمع المعلومات</h2>
        <p>نقوم بجمع المعلومات التي تقدمونها عند التسجيل، بما في ذلك بيانات الحساب عبر Google، وتفاصيل الشركة الناشئة، وروابط التواصل، ومعلومات الموقع الجغرافي.</p>
        
        <h2 class="text-2xl font-bold text-secondary mt-10">2. استخدام البيانات</h2>
        <p>تُستخدم البيانات لعرض ملفات تعريف الشركات في الدليل، وتحسين تجربة البحث، وتسهيل التواصل بين المستثمرين ورواد الأعمال.</p>
        
        <h2 class="text-2xl font-bold text-secondary mt-10">3. حماية البيانات</h2>
        <p>نستخدم تقنيات تشفير متقدمة (عبر Firebase) لضمان أمن معلوماتكم ومنع الوصول غير المصرح به.</p>
        
        <h2 class="text-2xl font-bold text-secondary mt-10">4. مشاركة المعلومات</h2>
        <p>لا نقوم ببيع بياناتكم لأي طرف ثالث. يتم عرض المعلومات العامة للشركة فقط للجمهور وفقاً لما يتم إدخاله في لوحة التحكم.</p>
      </div>
    </main>
  `
})
export class PrivacyComponent {}
