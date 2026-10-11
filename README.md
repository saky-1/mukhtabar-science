# مختبر (Mukhtabar)

**الشعار:** اكتشف العلم بالتجربة

منصة تعليمية عربية تفاعلية لمحاكاة التجارب العلمية من خلال نماذج رياضية/فيزيائية/كيميائية صريحة، دون توليد نتائج عشوائية.

## التقنيات

- React + TypeScript + Vite
- Vitest لاختبارات دوال الحسابات العلمية
- SVG للتمثيل البصري للمحاكاة
- GitHub Actions للتحقق المستمر والنشر

## التشغيل محليًا

```bash
npm ci
npm run dev
```

## الاختبارات والتحقق

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## النشر على GitHub Pages

- ملف سير العمل: `/home/runner/work/mukhtabar-science/mukhtabar-science/.github/workflows/deploy-pages.yml`
- تم ضبط `base` في Vite إلى `/mukhtabar-science/`.
- عند الدفع إلى الفرع `main` يعمل البناء ثم النشر تلقائيًا على GitHub Pages.

## بنية المجلدات

```text
src/
  components/
    experiments/      # مكونات المحاكاة لكل تجربة
  data/
    experiments.ts    # سجل مركزي للتجارب بالمخطط الموحد
  models/             # النماذج العلمية كدوال نقية + اختباراتها
  pages/              # الصفحات: الرئيسية، الاستكشاف، التجربة
  utils/              # أدوات تنسيق عامة
```

## التجارب المنفذة في المرحلة الأولى

1. **قانون أوم**: `I = V/R` و `P = V×I`
2. **التوالي والتوازي**: مقارنة `R_eq` و `I_total`
3. **السقوط الحر**: `t = √(2h/g)` و `v = g×t`
4. **تخفيف محلول كيميائي**: `C1V1 = C2V2`

## كيفية إضافة تجربة جديدة

1. إضافة تعريف التجربة في السجل المركزي:
   - `/home/runner/work/mukhtabar-science/mukhtabar-science/src/data/experiments.ts`
2. إضافة نموذج علمي (دالة نقية) في:
   - `/home/runner/work/mukhtabar-science/mukhtabar-science/src/models/`
3. إضافة اختبارات وحدة للنموذج في الملف نفسه بصيغة `*.test.ts`.
4. إنشاء مكوّن المحاكاة في:
   - `/home/runner/work/mukhtabar-science/mukhtabar-science/src/components/experiments/`
5. ربط المكوّن بمعرّف التجربة في:
   - `/home/runner/work/mukhtabar-science/mukhtabar-science/src/pages/ExperimentPage.tsx`

## النماذج العلمية المستخدمة

- **قانون أوم:** يفترض عنصرًا أوميًا مثاليًا في دائرة بسيطة دون مقاومة داخلية للمصدر.
- **التوالي/التوازي:** يفترض مقاومات أومية وأسلاكًا عديمة المقاومة.
- **السقوط الحر:** يفترض غياب مقاومة الهواء وبداية من السكون.
- **التخفيف الكيميائي:** يفترض ثبات الحرارة وإمكانية جمع الحجوم تقريبًا في المحاليل المخففة.

## ملاحظات السلامة

المحاكاة التعليمية لا تُعد دليل أمان للتجارب الواقعية، ويجب الالتزام بإجراءات السلامة المخبرية الفعلية عند التطبيق.
