import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <main class="pt-32 pb-24 px-6 max-w-6xl mx-auto text-right space-y-32">
      <!-- Hero Section -->
      <section class="text-center space-y-8 relative py-20 overflow-hidden">
        <div class="absolute inset-0 -z-10 flex justify-center items-center opacity-30">
          <div class="w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
          <div class="w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -ml-40"></div>
        </div>
        <h1 class="text-6xl md:text-7xl font-extrabold tracking-tight">
          <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">من نحن</span>
        </h1>
        <p class="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed font-medium">
          "بوابة": المنصة الرقمية الأولى والوحيدة المكرسة لربط وتمكين الشركات الناشئة ورواد الأعمال في سوريا.
        </p>
      </section>

      <!-- Vision & Values Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div class="order-2 lg:order-1 relative">
           <div class="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
           <div class="absolute -bottom-12 -left-12 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
           <div class="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100 flex items-center justify-center relative backdrop-blur-xl">
             <img src="/logo.png" class="w-2/3 object-contain opacity-80" alt="Bawaba Logo">
           </div>
        </div>
        <div class="space-y-10 order-1 lg:order-2">
          <div class="space-y-6">
            <div class="flex items-center gap-4 justify-start">
              <h2 class="text-4xl font-extrabold text-slate-900">رؤيتنا</h2>
              <div class="w-12 h-1.5 bg-gradient-to-l from-primary to-secondary rounded-full"></div>
            </div>
            <p class="text-xl text-on-surface-variant leading-relaxed font-medium">
              نطمح في "بوابة" إلى خلق بيئة ريادية متكاملة تجمع بين القوة الهندسية والروح الرقمية. نحن نؤمن بأن الشركات الناشئة السورية تمتلك الإمكانات الكافية للوصول إلى العالمية، ودورنا هو توفير "البوابة" التي تعبر من خلالها هذه الشركات نحو النجاح والنمو المستدام.
            </p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div class="p-6 bg-slate-50 rounded-3xl border border-white/50 space-y-3 hover:shadow-lg transition-all duration-300">
               <span class="material-symbols-outlined text-primary text-3xl">hub</span>
               <h4 class="font-bold text-lg">بناء الشبكات</h4>
               <p class="text-sm text-slate-500">تمكين التواصل بين المبتكرين والمستثمرين.</p>
             </div>
             <div class="p-6 bg-slate-50 rounded-3xl border border-white/50 space-y-3 hover:shadow-lg transition-all duration-300">
               <span class="material-symbols-outlined text-secondary text-3xl">auto_awesome</span>
               <h4 class="font-bold text-lg">التحول الرقمي</h4>
               <p class="text-sm text-slate-500">تزويد الشركات بأحدث الأدوات الرقمية عالمياً.</p>
             </div>
          </div>
        </div>
      </div>

      <!-- Founder Quote Section -->
      <section class="relative">
        <div class="absolute inset-0 bg-primary/5 rounded-[4rem] -rotate-1 skew-y-1"></div>
        <div class="bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-slate-50 relative overflow-hidden">
          <!-- Quote Icon decoration -->
          <span class="material-symbols-outlined absolute top-10 right-10 text-9xl opacity-5 text-primary rotate-12 select-none">format_quote</span>
          
          <div class="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div class="flex-shrink-0 relative">
              <div class="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-3 group hover:rotate-0 transition-transform duration-500">
                <img src="/khlaed dandal.png" class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500" alt="خالد دندل">
              </div>
              <!-- Floating Badge -->
              <div class="absolute -bottom-4 -left-4 bg-secondary text-white px-6 py-2 rounded-2xl font-bold text-sm shadow-lg">المؤسس</div>
            </div>
            
            <div class="flex-grow space-y-8 text-center md:text-right">
              <div class="space-y-2">
                <h3 class="text-3xl font-extrabold text-primary">خالد دندل</h3>
                <p class="text-secondary font-bold uppercase tracking-widest text-sm"> CEO</p>
              </div>
              <p class="text-2xl text-on-surface-variant leading-relaxed italic font-medium">
                "تم تأسيس بوابة لتكون أكثر من مجرد دليل؛ إنها مساحة منسقة تهدف إلى تسليط الضوء على الابتكار السوري وتوفير الأدوات اللازمة لرواد الأعمال لإدارة نموهم وتوسيع نطاق وصولهم المهني."
              </p>
         
            </div>
          </div>
        </div>
      </section>

      <!-- Partnership -->
      <section class="text-center space-y-16">
        <div class="space-y-4">
          <p class="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">الشراكة الاستراتيجية</p>
          <div class="w-20 h-1 bg-slate-200 mx-auto rounded-full"></div>
        </div>
        
        <div class="flex flex-col items-center justify-center gap-20">
          <div class="group cursor-pointer">
            <div class="bg-white px-12 py-8 rounded-full shadow-soft hover:shadow-glass hover:scale-105 transition-all duration-500 flex items-center justify-center border border-slate-50 mx-auto w-fit">
              <img src="/jci.png" class="h-25 w-auto grayscale group-hover:grayscale-0 transition-all duration-500" alt="JCI Syria">
            </div>
            <p class="mt-8 text-slate-400 font-medium max-w-sm mx-auto leading-relaxed">
              تعاون استراتيجي لدعم ريادة الأعمال والتمكين المجتمعي في المناطق المحلية.
            </p>
          </div>
        </div>
      </section>
    </main>
  `
})
export class AboutComponent { }
