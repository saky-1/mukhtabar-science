import type { ExperimentRecord } from '../types'

export const experiments: ExperimentRecord[] = [
  {
    id: 'ohm-law',
    title: 'قانون أوم',
    description: 'احسب شدة التيار والقدرة من الجهد والمقاومة مع تمثيل بصري لسطوع المصباح.',
    subject: 'الفيزياء',
    levels: ['متوسط', 'ثانوي', 'جامعي'],
    difficulty: 'سهل',
    status: 'مكتملة',
    objectives: [
      'ربط العلاقة بين الجهد والمقاومة وشدة التيار.',
      'تفسير تأثير التغير في المقاومة على سطوع المصباح.',
      'قراءة القدرة الكهربائية الناتجة بدقة وحداتية.',
    ],
    question: 'كيف تتغير شدة التيار والقدرة عند تغيير الجهد أو المقاومة؟',
    hypothesis: 'عند ثبات المقاومة يزيد التيار بزيادة الجهد، وعند ثبات الجهد يقل التيار بزيادة المقاومة.',
    variables: [
      { key: 'voltage', label: 'الجهد', unit: 'V', min: 1, max: 24, step: 0.5 },
      { key: 'resistance', label: 'المقاومة', unit: 'Ω', min: 0.1, max: 200, step: 0.1 },
    ],
    model: {
      equations: ['I = V / R', 'P = V × I', 'P = I² × R'],
      assumptions: ['الدارة مستمرة بسيطة بمقاومة ثابتة الحرارة.', 'لا توجد مقاومة داخلية للمصدر في النموذج.'],
      limits: ['لا يدعم النموذج العناصر غير الأومية.', 'القيم العالية جدًا قد لا تمثل سلوك مصباح حقيقي.'],
    },
    misconceptions: ['زيادة المقاومة لا تزيد التيار عند ثبات الجهد.', 'القدرة ليست ثابتة عند تغيير المقاومة.'],
    references: [
      'Halliday, Resnick & Walker, Fundamentals of Physics, Electric Current and Resistance chapter.',
      'Serway & Jewett, Physics for Scientists and Engineers, DC Circuits chapter.',
    ],
  },
  {
    id: 'series-parallel',
    title: 'التوالي والتوازي',
    description: 'قارن المقاومة المكافئة والتيارات في دائرتين بمقاومتين.',
    subject: 'الفيزياء',
    levels: ['ثانوي', 'جامعي'],
    difficulty: 'متوسط',
    status: 'مكتملة',
    objectives: [
      'حساب المقاومة المكافئة لتوصيل التوالي والتوازي.',
      'تمييز سلوك التيار الكلي وتيار كل فرع.',
      'اتخاذ قرار هندسي بناءً على نوع التوصيل.',
    ],
    question: 'متى يكون التوصيل على التوازي أفضل من التوالي لنفس المقاومات؟',
    hypothesis: 'التوازي يقلل المقاومة المكافئة ويرفع التيار الكلي مقارنة بالتوالي.',
    variables: [
      { key: 'voltage', label: 'الجهد', unit: 'V', min: 1, max: 24, step: 0.5 },
      { key: 'r1', label: 'المقاومة الأولى', unit: 'Ω', min: 0.1, max: 200, step: 0.1 },
      { key: 'r2', label: 'المقاومة الثانية', unit: 'Ω', min: 0.1, max: 200, step: 0.1 },
    ],
    model: {
      equations: ['R_eq(series) = R1 + R2', 'R_eq(parallel) = 1 / (1/R1 + 1/R2)', 'I_total = V / R_eq'],
      assumptions: ['المقاومات أومية مثالية.', 'الأسلاك عديمة المقاومة.'],
      limits: ['لا يشمل النموذج محاثات أو مكثفات.', 'غير صالح إذا كانت أي مقاومة غير موجبة.'],
    },
    misconceptions: ['في التوازي لا يتساوى التيار في كل فرع إذا اختلفت المقاومات.', 'المقاومة المكافئة في التوازي ليست مجموع المقاومات.'],
    references: [
      'Tipler & Mosca, Physics for Scientists and Engineers, Electric Circuits chapter.',
      'Horowitz & Hill, The Art of Electronics, basic resistor networks.',
    ],
  },
  {
    id: 'free-fall',
    title: 'السقوط الحر',
    description: 'استكشف زمن السقوط والسرعة النهائية من ارتفاع محدد دون مقاومة هواء.',
    subject: 'الفيزياء',
    levels: ['متوسط', 'ثانوي'],
    difficulty: 'سهل',
    status: 'مكتملة',
    objectives: [
      'حساب زمن السقوط من معادلات الحركة.',
      'مقارنة التأثير بين الجاذبية والارتفاع.',
      'قراءة جدول القيم أثناء الزمن ومتابعة الرسم.',
    ],
    question: 'كيف يتغير زمن السقوط والسرعة النهائية عند تغيير الارتفاع والجاذبية؟',
    hypothesis: 'يزداد زمن السقوط بزيادة الارتفاع وينخفض بزيادة قيمة الجاذبية.',
    variables: [
      { key: 'height', label: 'الارتفاع', unit: 'm', min: 1, max: 200, step: 1 },
      { key: 'gravity', label: 'الجاذبية', unit: 'm/s²', min: 1.62, max: 24.79, step: 0.01 },
    ],
    model: {
      equations: ['t = √(2h/g)', 'v = g × t', 'y(t) = h - 0.5 × g × t²'],
      assumptions: ['الجسم يبدأ من السكون.', 'لا توجد مقاومة هواء.'],
      limits: ['لا يصلح النموذج للأجسام ذات مساحة سطح كبيرة جدًا في الهواء.', 'غير صالح إذا كانت الجاذبية غير موجبة.'],
    },
    misconceptions: ['كتلة الجسم لا تظهر في زمن السقوط ضمن هذا النموذج المثالي.', 'السرعة الابتدائية ليست غير صفرية في هذه المحاكاة.'],
    references: [
      'OpenStax University Physics Volume 1, Motion Along a Straight Line.',
      'Serway & Jewett, kinematics sections.',
    ],
  },
  {
    id: 'dilution',
    title: 'تخفيف محلول كيميائي',
    description: 'احسب حجم المحلول المركز والمذيب للوصول إلى تركيز نهائي مستهدف.',
    subject: 'الكيمياء',
    levels: ['ثانوي', 'جامعي'],
    difficulty: 'متوسط',
    status: 'مكتملة',
    objectives: [
      'استخدام علاقة التخفيف لحساب الأحجام بدقة.',
      'تمييز ما إذا كان التركيز المستهدف ممكنًا من محلول مخزون معين.',
      'التأكد من صحة الوحدات والحجوم العملية.',
    ],
    question: 'كم حجم المحلول المركز المطلوب للوصول إلى التركيز النهائي؟',
    hypothesis: 'يزداد حجم المخزون المطلوب بزيادة التركيز النهائي أو الحجم النهائي.',
    variables: [
      { key: 'stockConcentration', label: 'تركيز المخزون', unit: 'mol/L', min: 0.1, max: 10, step: 0.1 },
      { key: 'targetConcentration', label: 'التركيز النهائي', unit: 'mol/L', min: 0.01, max: 9, step: 0.01 },
      { key: 'targetVolume', label: 'الحجم النهائي', unit: 'mL', min: 10, max: 2000, step: 10 },
    ],
    model: {
      equations: ['C₁V₁ = C₂V₂', 'V₁ = (C₂ × V₂) / C₁', 'V_المذيب = V₂ - V₁'],
      assumptions: ['الحجوم قابلة للجمع تقريبًا في المحاليل المخففة.', 'درجة الحرارة ثابتة أثناء التحضير.'],
      limits: ['يجب أن يكون C₂ أصغر أو يساوي C₁.', 'لا يشمل النموذج النشاط الكيميائي أو التمدد الحجمي الدقيق.'],
    },
    misconceptions: ['لا يمكن الوصول إلى تركيز نهائي أكبر من تركيز المخزون بالتخفيف.', 'الحجم النهائي ليس بالضرورة مساويًا لحجم المخزون المستخدم.'],
    references: [
      'Harris, Quantitative Chemical Analysis, solution preparation chapters.',
      'Skoog et al., Fundamentals of Analytical Chemistry, concentration calculations.',
    ],
    warning:
      'هذه المحاكاة تعليمية فقط ولا تُعد دليل أمان للتجارب الواقعية. استخدم معدات الوقاية وراجع مشرف مختبر عند التطبيق العملي.',
  },
]

export const experimentMap = new Map(experiments.map((experiment) => [experiment.id, experiment]))
