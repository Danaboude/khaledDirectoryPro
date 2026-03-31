import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <main class="pt-32 pb-20 px-6 max-w-4xl mx-auto text-right">
      <h1 class="text-4xl font-black mb-8 text-primary">شروط الخدمة</h1>
      <div class="prose prose-lg max-w-none text-on-surface-variant space-y-6 leading-relaxed">
        <p>باستخدامكم لمنصة "بوابة"، فإنكم توافقون على الالتزام بالشروط والأحكام التالية التي تهدف لتنظيم العمل في بيئة ريادة الأعمال السورية.</p>
        
        <h2 class="text-2xl font-bold text-secondary mt-10">1. دقة المعلومات</h2>
        <p>يتحقق أصحاب الشركات من صحة البيانات المدخلة في لوحة التحكم. تحتفظ "بوابة" بالحق في تدقيق أو إزالة أي معلومات غير دقيقة.</p>
        
        <h2 class="text-2xl font-bold text-secondary mt-10">2. الملكية الفكرية</h2>
        <p>تظل جميع الشعارات والعلامات التجارية ملكاً لأصحابها الأصليين. استخدامها في "بوابة" هو لغرض التوثيق والعرض التحريري فقط.</p>
        
        <h2 class="text-2xl font-bold text-secondary mt-10">3. السلوك المهني</h2>
        <p>يُحظر استخدام المنصة لأي أغراض غير قانونية أو نشر محتوى مضلل. نحن ندعم التميز والنزاهة المهنية.</p>
        
        <h2 class="text-2xl font-bold text-secondary mt-10">4. المسؤولية</h2>
        <p>منصة "بوابة" هي دليل ومنسق رقمي، ولا تتحمل مسؤولية التعاقدات أو التعاملات التجارية التي تتم بين الأطراف خارج نطاق المنصة.</p>
      </div>
    </main>
  `
})
export class TermsComponent {}
