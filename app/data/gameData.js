// ملف بيانات الأسئلة المحدث
// imageUrl: '../../2.jpg'

export const sampleTopics = [
  {
    id: 'cars',
    name: 'السيارات',
    questions: [
  // أسئلة سهلة (200 نقطة)
  { 
    id: 'car1', 
    question: 'ما هو موديل هذه السيارة؟', 
    answer: 'تويوتا كامري', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../toyota.jpg'
  },
  { 
    id: 'car2', 
    question: 'ما هي شركة صناعة هذه السيارة؟', 
    answer: 'بي إم دبليو', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../bmw.jpg'
  },
  { 
    id: 'car3', 
    question: 'ما هو أكثر لون شائع للسيارات في العالم؟', 
    answer: 'الأبيض', 
    difficulty: 'easy', 
    points: 200
  },
 { 
  id: 'car4', 
  question: 'ما هو الجزء المسؤول عن توجيه السيارة؟', 
  answer: 'عجلة القيادة (الدركسيون)', 
  difficulty: 'easy', 
  points: 200
},
{ 
  id: 'car5', 
  question: 'ما هو الوقود الذي تستخدمه معظم السيارات التقليدية؟', 
  answer: 'البنزين', 
  difficulty: 'easy', 
  points: 200
},

  { 
    id: 'car6', 
    question: 'ما هو موديل هذه السيارة الرياضية؟', 
    answer: 'فيراري 488', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../ferrari.jpg'
  },
  { 
    id: 'car7', 
    question: 'ما هو موديل هذه السيارة الرياضية؟', 
    answer: 'بورش 911', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../porsche.jpg'
  },
  { 
    id: 'car8', 
    question: 'في أي عام تأسست شركة تويوتا؟', 
    answer: '1937', 
    difficulty: 'easy', 
    points: 200
  },

  // أسئلة متوسطة (400 نقطة)
{ 
  id: 'car9', 
  question: 'ما هو العنصر الذي يُستخدم في الوسائد الهوائية للسيارات لتفعيلها؟', 
  answer: 'النيتروجين (نتيجة تفاعل كيميائي)', 
  difficulty: 'medium', 
  points: 400
},
  { 
    id: 'car10', 
    question: 'كم عدد أسطوانات محرك V8؟', 
    answer: '8 أسطوانات', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'car11', 
    question: 'ما هو موديل هذه السيارة ', 
    answer: 'بوغاتي شيرون', 
    difficulty: 'medium', 
    points: 400,
    hasImage: true,
    imageUrl: '../../bugatti.jpg'
  },
  { 
    id: 'car12', 
    question: 'ما هو موديل هذه السيارة ', 
    answer: 'مكلارين 720S', 
    difficulty: 'medium', 
    points: 400,
    hasImage: true,
    imageUrl: '../../mclaren.jpg'
  },
  { 
    id: 'car13', 
    question: 'ما هي أسرع سيارة إنتاج في العالم؟', 
    answer: 'بوجاتي شيرون سوبر سبورت', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'car14', 
    question: 'من اخترع أول سيارة تعمل بالبنزين؟', 
    answer: 'كارل بنز', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'car19', 
    question: 'في أي دولة تقع شركة لامبورغيني؟', 
    answer: 'إيطاليا', 
    difficulty: 'medium', 
    points: 400 
  },
  { 
    id: 'car21', 
    question: 'ما اسم النظام الذي يمنع انغلاق المكابح؟', 
    answer: 'نظام ABS', 
    difficulty: 'medium', 
    points: 400 
  },

  // أسئلة صعبة (600 نقطة)
  { 
    id: 'car17', 
    question: 'ما هي أول سيارة كهربائية من شركة تسلا؟', 
    answer: 'تسلا رودستر', 
    difficulty: 'hard', 
    points: 600 
  },
  { 
    id: 'car18', 
    question: 'ما هو موديل هذه السيارة الكهربائية الفاخرة؟', 
    answer: 'تسلا موديل S', 
    difficulty: 'hard', 
    points: 600, 
    hasImage: true,
    imageUrl: '../../tesla.jpg'
  },
  { 
    id: 'car20', 
    question: 'ما هو اسم هذه السيارة  من لامبورغيني؟', 
    answer: 'لامبورغيني أفينتادور', 
    difficulty: 'hard', 
    points: 600, 
    hasImage: true,
    imageUrl: '../../Lamborghini.jpg'
  },
  { 
    id: 'car22', 
    question: 'ما اسم هذه السيارة  المشهورة في أوروبا؟', 
    answer: 'فولكس فاجن بيتل', 
    difficulty: 'hard', 
    points: 600,
    hasImage: true,
    imageUrl: '../../Volkswagen.jpg'
  },
  { 
    id: 'car23', 
    question: 'ما هو اسم أول سيارة في التاريخ؟', 
    answer: 'بنز باتنت موتورفاغن', 
    difficulty: 'hard', 
    points: 600 
  },
  { 
    id: 'car24', 
    question: 'ما اسم هذه السيارة  التي تُصنع في السويد؟', 
    answer: 'كوينيجسيج جيسكو', 
    difficulty: 'hard', 
    points: 600, 
    hasImage: true,
    imageUrl: '../../Koenigsegg.jpg'
  },
  { 
    id: 'car15', 
    question: 'ما هو معنى شعار مرسيدس بنز (النجمة الثلاثية)؟', 
    answer: 'البر والبحر والجو', 
    difficulty: 'hard', 
    points: 600 
  },
  { 
    id: 'car16', 
    question: 'ما هو معنى شعار مرسيدس بنز (النجمة الثلاثية)؟', 
    answer: 'البر والبحر والجو', 
    difficulty: 'hard', 
    points: 600 
  }
]

  },
  {
    id: 'currencies',
    name: 'العملات',
    questions: [
      { id: 'curr1'
        , question: 'ما هي عملة اليابان؟'
        , answer: 'الين'
        , difficulty: 'easy'
        , points: 200 
        
      },
      { id: 'curr2'
        , question: 'ما هي عملة الصين؟'
        , answer: 'اليوان'
        , difficulty: 'easy'
        , points: 200 
        
      },
      { id: 'curr3'
        , question: 'ما هي عملة المملكة المتحدة؟'
        , answer: 'الجنيه الإسترليني'
        , difficulty: 'easy'
        , points: 200 
        
      },
      { id: 'curr4'
        , question: 'ما هي عملة الولايات المتحدة؟'
        , answer: 'الدولار'
        , difficulty: 'easy'
        , points: 200 
        
      },
      { id: 'curr5'
        , question: 'ما هي عملة فرنسا وألمانيا؟'
        , answer: 'اليورو'
        , difficulty: 'easy'
        , points: 200
        
       },
      
      // أسئلة متوسطة (400 نقطة)
      { id: 'curr6'
        , question: 'كم دولار أمريكي يساوي اليورو تقريباً؟'
        , answer: '1.1 دولار'
        , difficulty: 'medium'
        , points: 400

       },
      { id: 'curr7'
        , question: 'كم ريال سعودي يساوي الدولار الأمريكي؟'
        , answer: '3.75 ريال'
        , difficulty: 'medium'
        , points: 400 

      },
      { id: 'curr8'
        , question: 'ما هي عملة سويسرا؟'
        , answer: 'الفرنك السويسري'
        , difficulty: 'medium'
        , points: 400 

      },
      { id: 'curr9'
        , question: 'ما هي عملة روسيا؟'
        , answer: 'الروبل'
        , difficulty: 'medium'
        , points: 400 

      },
      { id: 'curr10'
        , question: 'في أي عام تم إطلاق عملة اليورو؟'
        , answer: '1999'
        , difficulty: 'medium'
        , points: 400 

      },
      
      // أسئلة صعبة (600 نقطة)
      { id: 'curr11'
        , question: 'ما هي أقدم عملة مازالت مستخدمة؟'
        , answer: 'الجنيه الإسترليني'
        , difficulty: 'hard'
        , points: 600 

      },
      { id: 'curr12'
        , question: 'ما هي العملة المشفرة الأولى في العالم؟'
        , answer: 'البيتكوين'
        , difficulty: 'hard'
        , points: 600 

      },
      { id: 'curr13'
        , question: 'ما هي عملة جنوب أفريقيا؟', answer: 'الراند'
        , difficulty: 'hard'
        , points: 600 

      },
      { id: 'curr14'
        , question: 'من يظهر على عملة الدولار الأمريكي فئة 100؟'
        , answer: 'بنجامين فرانكلين'
        , difficulty: 'hard'
        , points: 600

       },
      { id: 'curr15'
        , question: 'ما هي أغلى عملة في العالم؟'
        , answer: 'الدينار الكويتي'
        , difficulty: 'hard'
        , points: 600 

      }
    ]
  },
  {
    id: 'flags',
    name: 'الأعلام',
    questions: [
  // أسئلة سهلة (200 نقطة)
  { 
    id: 'flag1', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'نيوزيلندا', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../new-zealand.jpg'
  },
  { 
    id: 'flag2', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'النرويج', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../norway.jpg'
  },
  { 
    id: 'flag3', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'السويد', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../sweden.jpg'
  },
  { 
    id: 'flag4', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'فنلندا', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../finland.jpg'
  },
  { 
    id: 'flag5', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'الدنمارك', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../denmark.jpg'
  },
  { 
    id: 'flag6', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'سنغافورة', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../singapore.jpg'
  },
  { 
    id: 'flag7', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'ماليزيا', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../malaysia.jpg'
  },
  { 
    id: 'flag8', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'نيبال', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../nepal.jpg'
  },

  // أسئلة متوسطة (400 نقطة)
  { 
    id: 'flag9', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'بوتان', 
    difficulty: 'medium', 
    points: 400,
    hasImage: true,
    imageUrl: '../../bhutan.jpg'
  },
  { 
    id: 'flag10', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'أستونيا', 
    difficulty: 'medium', 
    points: 400,
    hasImage: true,
    imageUrl: '../../estonia.jpg'
  },
  { 
    id: 'flag11', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'لاتفيا', 
    difficulty: 'medium', 
    points: 400,
    hasImage: true,
    imageUrl: '../../latvia.jpg'
  },
  { 
    id: 'flag12', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'ليتوانيا', 
    difficulty: 'medium', 
    points: 400,
    hasImage: true,
    imageUrl: '../../lithuania.jpg'
  },
  { 
    id: 'flag13', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'سلوفاكيا', 
    difficulty: 'medium', 
    points: 400,
    hasImage: true,
    imageUrl: '../../slovakia.jpg'
  },
  { 
    id: 'flag14', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'التشيك', 
    difficulty: 'medium', 
    points: 400,
    hasImage: true,
    imageUrl: '../../czech.jpg'
  },
  { 
    id: 'flag15', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'كازاخستان', 
    difficulty: 'medium', 
    points: 400,
    hasImage: true,
    imageUrl: '../../kazakhstan.jpg'
  },
  { 
    id: 'flag16', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'أوروغواي', 
    difficulty: 'medium', 
    points: 400,
    hasImage: true,
    imageUrl: '../../uruguay.jpg'
  },

  // أسئلة صعبة (600 نقطة)
  { 
    id: 'flag17', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: ' ميانمار', 
    difficulty: 'hard', 
    points: 600,
    hasImage: true,
    imageUrl: '../../myanmar.jpg'
  },
  { 
    id: 'flag18', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'الفلبين', 
    difficulty: 'hard', 
    points: 600,
    hasImage: true,
    imageUrl: '../../philitpin.jpg'
  },
  { 
    id: 'flag19', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'مولدوفا', 
    difficulty: 'hard', 
    points: 600,
    hasImage: true,
    imageUrl: '../../moldova.jpg'
  },
  { 
    id: 'flag20', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'مقدونيا الشمالية', 
    difficulty: 'hard', 
    points: 600,
    hasImage: true,
    imageUrl: '../../north-macedonia.jpg'
  },
  { 
    id: 'flag21', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'البوسنة', 
    difficulty: 'hard', 
    points: 600,
    hasImage: true,
    imageUrl: '../../Bosnia.jpg'
  },
  { 
    id: 'flag22', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'تونس', 
    difficulty: 'hard', 
    points: 600,
    hasImage: true,
    imageUrl: '../../tunisia.jpg'
  },
  { 
    id: 'flag23', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'منغوليا', 
    difficulty: 'hard', 
    points: 600,
    hasImage: true,
    imageUrl: '../../mongolia.jpg'
  },
  { 
    id: 'flag24', 
    question: 'ما هي الدولة التي يمثلها هذا العلم؟', 
    answer: 'سان مارينو', 
    difficulty: 'hard', 
    points: 600,
    hasImage: true,
    imageUrl: '../../san-marino.jpg'
  }
]
  },
  {
    id: 'capital',
    name: 'عواصم',
    questions: [
  // أسئلة سهلة (200 نقطة)
  { 
    id: 'capital1', 
    question: 'ما هي عاصمة فرنسا؟', 
    answer: 'باريس', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'capital2', 
    question: 'ما هي عاصمة ألمانيا؟', 
    answer: 'برلين', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'capital3', 
    question: 'ما هي عاصمة إيطاليا؟', 
    answer: 'روما', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'capital4', 
    question: 'ما هي عاصمة إسبانيا؟', 
    answer: 'مدريد', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'capital5', 
    question: 'ما هي عاصمة المملكة المتحدة؟', 
    answer: 'لندن', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'capital6', 
    question: 'ما هي عاصمة مصر؟', 
    answer: 'القاهرة', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'capital7', 
    question: 'ما هي عاصمة السعودية؟', 
    answer: 'الرياض', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'capital8', 
    question: 'ما هي عاصمة الإمارات العربية المتحدة؟', 
    answer: 'أبو ظبي', 
    difficulty: 'easy', 
    points: 200
  },

  // أسئلة متوسطة (400 نقطة)
  { 
    id: 'capital9', 
    question: 'ما هي عاصمة كازاخستان؟', 
    answer: 'نور سلطان (أستانا)', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'capital10', 
    question: 'ما هي عاصمة ميانمار؟', 
    answer: 'نايبيدو', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'capital11', 
    question: 'ما هي عاصمة سريلانكا؟', 
    answer: 'كولومبو', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'capital12', 
    question: 'ما هي عاصمة نيبال؟', 
    answer: 'كاتماندو', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'capital13', 
    question: 'ما هي عاصمة بنغلاديش؟', 
    answer: 'دكا', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'capital14', 
    question: 'ما هي عاصمة فيتنام؟', 
    answer: 'هانوي', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'capital15', 
    question: 'ما هي عاصمة النرويج؟', 
    answer: 'أوسلو', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'capital16', 
    question: 'ما هي عاصمة فنلندا؟', 
    answer: 'هلسنكي', 
    difficulty: 'medium', 
    points: 400
  },

  // أسئلة صعبة (600 نقطة)
  { 
    id: 'capital17', 
    question: 'ما هي عاصمة بوتان؟', 
    answer: 'تيمفو', 
    difficulty: 'hard', 
    points: 600
  },
  { 
    id: 'capital18', 
    question: 'ما هي عاصمة مولدوفا؟', 
    answer: 'كيشيناو', 
    difficulty: 'hard', 
    points: 600
  },
  { 
    id: 'capital19', 
    question: 'ما هي عاصمة مقدونيا الشمالية؟', 
    answer: 'سكوبيه', 
    difficulty: 'hard', 
    points: 600
  },
  { 
    id: 'capital20', 
    question: 'ما هي عاصمة إستونيا؟', 
    answer: 'تالين', 
    difficulty: 'hard', 
    points: 600
  },
  { 
    id: 'capital21', 
    question: 'ما هي عاصمة لاتفيا؟', 
    answer: 'ريغا', 
    difficulty: 'hard', 
    points: 600
  },
  { 
    id: 'capital22', 
    question: 'ما هي عاصمة ليتوانيا؟', 
    answer: 'فيلنيوس', 
    difficulty: 'hard', 
    points: 600
  },
  { 
    id: 'capital23', 
    question: 'ما هي عاصمة بوروندي؟', 
    answer: 'غيتيغا', 
    difficulty: 'hard', 
    points: 600
  },
  { 
    id: 'capital24', 
    question: 'ما هي عاصمة ناورو؟', 
    answer: 'يارين', 
    difficulty: 'hard', 
    points: 600
  }
]
  },
  {
    id: 'geography',
    name: 'الجغرافيا',
    questions: [
      // أسئلة سهلة (200 نقطة)
      { id: 'geo1',
         question: 'ما هي أكبر قارة في العالم؟'
        , answer: 'آسيا'
        , difficulty: 'easy'
        , points: 200 

      },
      { id: 'geo2',
         question: 'ما هي أكبر دولة في العالم من حيث المساحة؟'
        , answer: 'روسيا'
        , difficulty: 'easy'
        , points: 200 

      },
      { id: 'geo3',
         question: 'كم عدد القارات في العالم؟'
        , answer: '7 قارات'
        , difficulty: 'easy'
        , points: 200 

      },

      { id: 'geo4',
         question: 'ما هي عاصمة فرنسا؟'
        , answer: 'باريس'
        , difficulty: 'easy', points: 200 

      },
      { id: 'geo5',
         question: 'في أي قارة تقع مصر؟'
        , answer: 'أفريقيا'
        , difficulty: 'easy'
        , points: 200 

      },
      
      // أسئلة متوسطة (400 نقطة)
      { id: 'geo6'
        , question: 'كم عدد المحيطات في العالم؟'
        , answer: '5 محيطات'
        , difficulty: 'medium'
        , points: 400 

      },
      { id: 'geo7'
        , question: 'ما هي عاصمة أستراليا؟'
        , answer: 'كانبيرا'
        , difficulty: 'medium'
        , points: 400 

      },
      { id: 'geo8'
        , question: 'ما هي أكبر جزيرة في العالم؟'
        , answer: 'جرينلاند'
        , difficulty: 'medium'
        , points: 400 

      },
      { id: 'geo9'
        , question: 'ما هي أصغر دولة في العالم؟'
        , answer: 'الفاتيكان'
        , difficulty: 'medium'
        , points: 400 

      },
      { id: 'geo10'
        , question: 'ما هي أكبر صحراء في العالم؟'
        , answer: 'الصحراء الكبرى'
        , difficulty: 'medium'
        , points: 400 

      },
      
      // أسئلة صعبة (600 نقطة)
      { id: 'geo11'
        , question: 'ما هي أعمق نقطة في المحيط؟'
        , answer: 'خندق ماريانا'
        , difficulty: 'hard'
        , points: 600 

      },
      { id: 'geo12'
        , question: 'ما هو أطول نهر في العالم؟'
        , answer: 'نهر النيل'
        , difficulty: 'hard'
        , points: 600 

      },
      { id: 'geo13'
        , question: 'ما هي أعلى قمة جبلية في العالم؟'
        , answer: 'جبل إيفرست'
        , difficulty: 'hard'
        , points: 600 

      },
      { id: 'geo14'
        , question: 'كم عدد الدول في قارة أفريقيا؟'
        , answer: '54 دولة'
        , difficulty: 'hard'
        , points: 600 

      },
      { id: 'geo15'
        , question: 'ما هي أكبر بحيرة في العالم؟'
        , answer: 'بحر قزوين'
        , difficulty: 'hard'
        , points: 600 

      }
    ]
  },
  {
    id: 'history',
    name: 'التاريخ',
    questions: [
      // أسئلة سهلة (200 نقطة)
      { id: 'hist1', question: 'في أي عام انتهت الحرب العالمية الثانية؟', answer: '1945', difficulty: 'easy', points: 200 },
      { id: 'hist2', question: 'في أي عام بدأت الحرب العالمية الأولى؟', answer: '1914', difficulty: 'easy', points: 200 },
      { id: 'hist3', question: 'كم سنة في القرن الواحد؟', answer: '100 سنة', difficulty: 'easy', points: 200 },
      { id: 'hist4', question: 'في أي قرن نعيش الآن؟', answer: 'القرن الواحد والعشرون', difficulty: 'easy', points: 200 },
      { id: 'hist5', question: 'في أي عام تأسست المملكة العربية السعودية؟', answer: '1932', difficulty: 'easy', points: 200 },
      
      // أسئلة متوسطة (400 نقطة)
      { id: 'hist6', question: 'من بنى الأهرامات؟', answer: 'المصريون القدماء', difficulty: 'medium', points: 400 },
      { id: 'hist7', question: 'من اكتشف أمريكا؟', answer: 'كريستوفر كولومبوس', difficulty: 'medium', points: 400 },
      { id: 'hist8', question: 'في أي عام سقطت الإمبراطورية العثمانية؟', answer: '1922', difficulty: 'medium', points: 400 },
      { id: 'hist9', question: 'من أول رئيس للولايات المتحدة؟', answer: 'جورج واشنطن', difficulty: 'medium', points: 400 },
      { id: 'hist10', question: 'في أي عام وصل الإنسان للقمر؟', answer: '1969', difficulty: 'medium', points: 400 },
      
      // أسئلة صعبة (600 نقطة)
      { id: 'hist11', question: 'ما هي أطول إمبراطورية في التاريخ؟', answer: 'الإمبراطورية الرومانية', difficulty: 'hard', points: 600 },
      { id: 'hist12', question: 'في أي قرن عاش نابليون بونابرت؟', answer: 'القرن الثامن عشر والتاسع عشر', difficulty: 'hard', points: 600 },
      { id: 'hist13', question: 'من بنى سور الصين العظيم؟', answer: 'الإمبراطور تشين شي هوانغ', difficulty: 'hard', points: 600 },
      { id: 'hist14', question: 'في أي عام سقطت القسطنطينية؟', answer: '1453', difficulty: 'hard', points: 600 },
      { id: 'hist15', question: 'من كان آخر ملوك فرنسا؟', answer: 'لويس السادس عشر', difficulty: 'hard', points: 600 }
    ]
  },
  {
    id: 'science',
    name: 'العلوم',
    questions: [
      // أسئلة سهلة (200 نقطة)
      { id: 'sci1'
        , question: 'كم عدد الكواكب في النظام الشمسي؟'
        , answer: '8 كواكب'
        , difficulty: 'easy'
        , points: 200 

      },
      { id: 'sci2'
        , question: 'ما هو أكبر كوكب في النظام الشمسي؟'
        , answer: 'المشتري'
        , difficulty: 'easy', points: 200 

      },
      { id: 'sci3'
        , question: 'ما هو أقرب كوكب للشمس؟'
        , answer: 'عطارد'
        , difficulty: 'easy', points: 200 

      },
      { id: 'sci4'
        , question: 'كم عدد أيام السنة؟'
        , answer: '365 يوم'
        , difficulty: 'easy', points: 200

       },
      { id: 'sci5'
        , question: 'ما هو لون الشمس؟'
        , answer: 'أصفر'
        , difficulty: 'easy'
        , points: 200 

      },
      
      // أسئلة متوسطة (400 نقطة)
      { id: 'sci6'
        , question: 'ما هو الرمز الكيميائي للذهب؟'
        , answer: 'Au'
        , difficulty: 'medium'
        , points: 400 

      },
      { id: 'sci7'
        , question: 'ما هو الرمز الكيميائي للفضة؟'
        , answer: 'Ag'
        , difficulty: 'medium'
        , points: 400 

      },
      { id: 'sci8'
        , question: 'كم عدد الفصول في السنة؟'
        , answer: '4 فصول'
        , difficulty: 'medium'
        , points: 400 

      },
      { id: 'sci9'
        , question: 'ما هو الغاز الأكثر وفرة في الغلاف الجوي؟'
        , answer: 'النيتروجين'
        , difficulty: 'medium'
        , points: 400 

      },
      { id: 'sci10'
        , question: 'من اكتشف الجاذبية؟'
        , answer: 'إسحاق نيوتن'
        , difficulty: 'medium'
        , points: 400

       },
      
      // أسئلة صعبة (600 نقطة)
      { id: 'sci11'
        , question: 'ما هي سرعة الضوء؟'
        , answer: '299,792,458 متر/ثانية'
        , difficulty: 'hard'
        , points: 600 

      },
      { id: 'sci12'
        , question: 'كم عدد العظام في جسم الإنسان البالغ؟'
        , answer: '206 عظمة'
        , difficulty: 'hard'
        , points: 600 

      },
      { id: 'sci13'
        , question: 'ما هو العنصر الأكثر وفرة في الكون؟'
        , answer: 'الهيدروجين'
        , difficulty: 'hard'
        , points: 600 

      },
      { id: 'sci14'
        , question: 'كم عدد الكروموسومات في الخلية البشرية؟'
        , answer: '46 كروموسوم'
        , difficulty: 'hard'
        , points: 600 

      },
      { id: 'sci15'
        , question: 'من وضع نظرية النسبية؟'
        , answer: 'ألبرت أينشتاين'
        , difficulty: 'hard'
        , points: 600 

      }
    ]
  },
  {
    id: 'sports',
    name: 'كرة قدم ',
    questions:[
  // أسئلة سهلة (200 نقطة)
  { 
    id: 'football1', 
    question: 'كم عدد اللاعبين في الفريق الواحد داخل الملعب؟', 
    answer: '11 لاعب', 
    difficulty: 'easy', 
    points: 200,

  },
  { 
    id: 'football2', 
    question: 'من هو هداف كأس العالم 2018؟', 
    answer: 'هاري كين', 
    difficulty: 'easy', 
    points: 200,

  },
  { 
    id: 'football3', 
    question: 'أي دولة استضافت كأس العالم 1998', 
    answer: 'فرنسا ', 
    difficulty: 'easy', 
    points: 200,

  },
  { 
    id: 'football4', 
    question: 'ما لون قميص منتخب البرازيل الاحتياط', 
    answer: 'الأزرق', 
    difficulty: 'easy', 
    points: 200,

  },
  { 
    id: 'football5', 
    question: 'من فاز بكأس العالم 2002', 
    answer: 'البرازيل ', 
    difficulty: 'easy', 
    points: 200,

  },
  { 
    id: 'football6', 
    question: 'من بطل دوري الابطال 2011', 
    answer: 'برشلونة ', 
    difficulty: 'easy', 
    points: 200,

  },

  // أسئلة متوسطة (400 نقطة)
  { 
    id: 'football7', 
    question: 'من هو أكثر لاعب تسجيلاً للأهداف في تاريخ كرة القدم؟', 
    answer: 'كريستيانو رونالدو', 
    difficulty: 'medium', 
    points: 400,

  },
  { 
    id: 'football8', 
    question: ' من ثالث اكثر نادي تحقيقا لدوري الابطال ', 
    answer: ' ليفربول و بايرن ميونخ	', 
    difficulty: 'medium', 
    points: 400,

  },
  { 
    id: 'football9', 
    question: 'من هو أصغر لاعب سجل في كأس العالم؟', 
    answer: 'بيليه', 
    difficulty: 'medium', 
    points: 400,

  },
  { 
    id: 'football10', 
    question: 'كم عدد بطولات كأس العالم التي فازت بها ألمانيا؟', 
    answer: '4 بطولات', 
    difficulty: 'medium', 
    points: 400,

  },
  { 
    id: 'football11', 
    question: 'من هو أول حارس مرمى يفوز بالكرة الذهبية؟', 
    answer: 'ليف ياشين', 
    difficulty: 'medium', 
    points: 400,

  },
  { 
    id: 'football12', 
    question: 'أي دولة استضافت أول كأس عالم في التاريخ؟', 
    answer: 'الأوروغواي', 
    difficulty: 'medium', 
    points: 400,

  },

  // أسئلة صعبة (600 نقطة)
  { 
    id: 'football13', 
    question: 'من فاز ب الكرة الذهبية سنة 2000', 
    answer: ' لويس فيغو', 
    difficulty: 'hard', 
    points: 600,

  },
  { 
    id: 'football14', 
    question: 'من سجل أسرع هاتريك في تاريخ الدوري الانجليزي', 
    answer: 'ساديو ماني ', 
    difficulty: 'hard', 
    points: 600,

  },
  { 
    id: 'football15', 
    question: 'من هو اللاعب الذي سجل أكثر الأهداف في نسخة واحدة من دوري أبطال أوروبا؟', 
    answer: 'كريستيانو رونالدو (17 هدف في موسم 2013-14)', 
    difficulty: 'hard', 
    points: 600,

  },
  { 
    id: 'football16', 
    question: 'من اللاعب الذي سجل ب 5 نسخ كأس العالم', 
    answer: 'كريستيانو رونالدو', 
    difficulty: 'hard', 
    points: 600,

  },
  { 
    id: 'football17', 
    question: 'ما هو أكبر فوز في تاريخ كأس العالم؟', 
    answer: 'المجر 10-1 السلفادور (1982)', 
    difficulty: 'hard', 
    points: 600,

  },
  { 
    id: 'football18', 
    question: 'من هو أصغر مدرب فاز بدوري أبطال أوروبا؟', 
    answer: 'جوليان ناجلسمان (33 عام)', 
    difficulty: 'hard', 
    points: 600,

  },
  { 
    id: 'football19', 
    question: 'أي لاعب سجل أكثر الأهداف في مباراة واحدة في كأس العالم؟', 
    answer: 'أوليغ سالينكو (5 أهداف)', 
    difficulty: 'hard', 
    points: 600,

  },
  { 
    id: 'football20', 
    question: 'من هو أول لاعب عربي يفوز بدوري أبطال أوروبا؟', 
    answer: 'مصطفى حجي', 
    difficulty: 'hard', 
    points: 600,

  },
  { 
    id: 'football21', 
    question: 'كم عدد الأهداف التي سجلها جوست فونتين في كأس العالم 1958؟', 
    answer: '13 هدف', 
    difficulty: 'hard', 
    points: 600,

  },
  { 
    id: 'football22', 
    question: 'أي دولة فازت بأول بطولة أمم أوروبا؟', 
    answer: 'الاتحاد السوفيتي', 
    difficulty: 'hard', 
    points: 600,

  },
  { 
    id: 'football23', 
    question: 'من هو أكثر لاعب حصولاً على البطاقات الحمراء في تاريخ الدوري الإنجليزي؟', 
    answer: 'ريتشارد دن وباتريك فيييرا (8 بطاقات حمراء لكل منهما)', 
    difficulty: 'hard', 
    points: 600,

  },
 { 
    id: 'football24', 
    question: 'من هو أكثر لاعب مشاركة في نهائيات دوري أبطال أوروبا؟', 
    answer: 'فرانسيسكو خينتو (8 نهائيات)', 
    difficulty: 'hard', 
    points: 600,

  }
]
  },
  {
    id: 'food',
    name: 'الطعام والمأكولات',
    questions:[
  // أسئلة سهلة (200 نقطة)
  { 
    id: 'food1', 
    question: 'ما هو المكون الأساسي في الخبز؟', 
    answer: 'الدقيق', 
    difficulty: 'easy', 
    points: 200,
  },
  { 
    id: 'food2', 
    question: 'أي فاكهة تحتوي على فيتامين سي بكثرة؟', 
    answer: 'البرتقال', 
    difficulty: 'easy', 
    points: 200,
  },
  { 
    id: 'food3', 
    question: 'ما هو أشهر طبق في إيطاليا؟', 
    answer: 'البيتزا', 
    difficulty: 'easy', 
    points: 200,
  },
  { 
    id: 'food4', 
    question: 'ما هو المشروب الأكثر استهلاكاً في العالم بعد الماء؟', 
    answer: 'الشاي', 
    difficulty: 'easy', 
    points: 200,
  },
  { 
    id: 'food5', 
    question: 'ما لون الموز الناضج؟', 
    answer: 'الأصفر', 
    difficulty: 'easy', 
    points: 200,
  },
  { 
    id: 'food6', 
    question: 'ما هو الطبق الشعبي الأشهر في اليابان؟', 
    answer: 'السوشي', 
    difficulty: 'easy', 
    points: 200,
  },

  // أسئلة متوسطة (400 نقطة)
  { 
    id: 'food7', 
    question: 'ما هو أغلى نوع من التوابل في العالم؟', 
    answer: 'الزعفران', 
    difficulty: 'medium', 
    points: 400,
  },
  { 
    id: 'food8', 
    question: 'أي دولة هي موطن البرجر الأصلي؟', 
    answer: 'ألمانيا', 
    difficulty: 'medium', 
    points: 400,
  },
  { 
    id: 'food9', 
    question: 'ما هو المكون الرئيسي في الجواكامولي؟', 
    answer: 'الأفوكادو', 
    difficulty: 'medium', 
    points: 400,
  },
  { 
    id: 'food10', 
    question: 'أي دولة تشتهر بطبق الباييا؟', 
    answer: 'إسبانيا', 
    difficulty: 'medium', 
    points: 400,
  },
  { 
    id: 'food11', 
    question: 'أي دولة عربية تشتهر بالمنسف؟', 
    answer: 'الأردن', 
    difficulty: 'medium', 
    points: 400,
  },
  { 
    id: 'food12', 
    question: 'ما هو أكثر أنواع الشاي إستهلاكاً في العالم؟', 
    answer: 'الشاي الأسود', 
    difficulty: 'medium', 
    points: 400,
  },

  // أسئلة صعبة (600 نقطة)
  { 
    id: 'food13', 
    question: 'ما هو اسم الطبق الفرنسي المصنوع من كبد الإوز؟', 
    answer: 'فوا جرا', 
    difficulty: 'hard', 
    points: 600,
  },
  { 
    id: 'food14', 
    question: 'أي مطعم حصل على أكبر عدد من نجوم ميشلان في التاريخ؟', 
    answer: 'مطعم جويل روبوشون (32 نجمة)', 
    difficulty: 'hard', 
    points: 600,
  },
  { 
    id: 'food15', 
    question: 'ما هو أغلى نوع من الكافيار في العالم؟', 
    answer: 'كافيار البيلوغا الذهبي', 
    difficulty: 'hard', 
    points: 600,
  },
  { 
    id: 'food16', 
    question: 'أي فطر يُعتبر من أغلى الأطعمة في العالم؟', 
    answer: 'الكمأة البيضاء', 
    difficulty: 'hard', 
    points: 600,
  },
  { 
    id: 'food17', 
    question: 'كم عدد أصناف الأرز المزروعة في العالم تقريباً؟', 
    answer: 'أكثر من 40000 صنف', 
    difficulty: 'hard', 
    points: 600,
  },
  { 
    id: 'food18', 
    question: 'ما هو أقدم مشروب كحولي في التاريخ؟', 
    answer: 'البيرة', 
    difficulty: 'hard', 
    points: 600,
  },
  { 
    id: 'food19', 
    question: 'أي دولة تنتج أكثر من 80% من الفانيليا في العالم؟', 
    answer: 'مدغشقر', 
    difficulty: 'hard', 
    points: 600,
  },
  { 
    id: 'food20', 
    question: 'ما هو الاسم العلمي للشوكولاتة؟', 
    answer: 'ثيوبروما كاكاو', 
    difficulty: 'hard', 
    points: 600,
  },
  { 
    id: 'food21', 
    question: 'كم عدد البذور في الرمانة الواحدة تقريباً؟', 
    answer: '600 بذرة', 
    difficulty: 'hard', 
    points: 600,
  },
  { 
    id: 'food22', 
    question: 'أي طبق ياباني يتطلب ترخيصاً خاصاً لتحضيره؟', 
    answer: 'الفوغو (سمك السكين)', 
    difficulty: 'hard', 
    points: 600,
  },
  { 
    id: 'food23', 
    question: 'ما هو أكثر نوع فاكهة إنتاجاً في العالم؟', 
    answer: 'الطماطم', 
    difficulty: 'hard', 
    points: 600,
  },
  { 
    id: 'food24', 
    question: 'أي دولة تستهلك أكبر كمية من الشوكولاتة سنوياً للفرد الواحد؟', 
    answer: 'سويسرا', 
    difficulty: 'hard', 
    points: 600,
  }
]
  },
  {
    id: 'technology',
    name: 'التكنولوجيا',
    questions: [
      // أسئلة سهلة (200 نقطة)
      { id: 'tech1', question: 'من مؤسس شركة أبل؟', answer: 'ستيف جوبز', difficulty: 'easy', points: 200 },
      { id: 'tech2', question: 'ما هو أشهر محرك بحث في العالم؟', answer: 'جوجل', difficulty: 'easy', points: 200 },
      { id: 'tech3', question: 'ما معنى WWW؟', answer: 'الشبكة العنكبوتية العالمية', difficulty: 'easy', points: 200 },
      { id: 'tech4', question: 'في أي عام تم إطلاق أول آيفون؟', answer: '2007', difficulty: 'easy', points: 200 },
      { id: 'tech5', question: 'ما هو أكبر موقع تواصل اجتماعي؟', answer: 'فيسبوك', difficulty: 'easy', points: 200 },
      
      // أسئلة متوسطة (400 نقطة)
      { id: 'tech6', question: 'من مؤسس شركة مايكروسوفت؟', answer: 'بيل جيتس', difficulty: 'medium', points: 400 },
      { id: 'tech7', question: 'ما هو أول حاسوب شخصي؟', answer: 'آي بي إم بي سي', difficulty: 'medium', points: 400 },
      { id: 'tech8', question: 'في أي عام تم اختراع الإنترنت؟', answer: '1969', difficulty: 'medium', points: 400 },
      { id: 'tech9', question: 'ما هو معنى AI؟', answer: 'الذكاء الاصطناعي', difficulty: 'medium', points: 400 },
      { id: 'tech10', question: 'من اخترع لغة البرمجة بايثون؟', answer: 'جيدو فان روسم', difficulty: 'medium', points: 400 },
      
      // أسئلة صعبة (600 نقطة)
      { id: 'tech11', question: 'ما هو أول فيروس حاسوبي؟', answer: 'كريبر', difficulty: 'hard', points: 600 },
      { id: 'tech12', question: 'من اخترع البريد الإلكتروني؟', answer: 'راي توملينسون', difficulty: 'hard', points: 600 },
      { id: 'tech13', question: 'ما هو أسرع حاسوب عملاق في العالم؟', answer: 'فرونتيير', difficulty: 'hard', points: 600 },
      { id: 'tech14', question: 'في أي عام تم إطلاق أول قمر صناعي؟', answer: '1957', difficulty: 'hard', points: 600 },
      { id: 'tech15', question: 'ما هو اسم أول روبوت صناعي؟', answer: 'يونيمات', difficulty: 'hard', points: 600 }
    ]
  },
  {
    id: 'movies',
    name: 'الأفلام والسينما',
    questions: [
  // أسئلة سهلة (200 نقطة)
{
  id: 'movie1',
  question: 'من هو المخرج الشهير لفيلم "تايتانيك"؟',
  answer: 'جيمس كاميرون',
  difficulty: 'easy',
  points: 200
},
{
  id: 'movie2',
  question: 'ما اسم المسلسل الذي يحكي قصة والتر وايت؟',
  answer: 'Breaking Bad',
  difficulty: 'easy',
  points: 200
},
{
  id: 'movie3',
  question: 'في أي عام تم إنتاج فيلم "الأسد الملك" الأصلي؟',
  answer: '1994',
  difficulty: 'easy',
  points: 200
},
{
  id: 'movie4',
  question: 'من هو الممثل الرئيسي في سلسلة أفلام "Mission Impossible"؟',
  answer: 'توم كروز',
  difficulty: 'easy',
  points: 200
},
{
  id: 'movie5',
  question: 'ما اسم المسلسل الذي يدور حول عائلة ملكية في العصور الوسطى؟',
  answer: 'Game of Thrones',
  difficulty: 'easy',
  points: 200
},
{
  id: 'movie6',
  question: 'من هي الممثلة الرئيسية في فيلم "La La Land"؟',
  answer: 'إيما ستون',
  difficulty: 'easy',
  points: 200
},
{
  id: 'movie7',
  question: 'ما اسم الفيلم الذي فاز بجائزة الأوسكار لأفضل فيلم عام 2020؟',
  answer: 'Parasite',
  difficulty: 'easy',
  points: 200
},
{
  id: 'movie8',
  question: 'من هو الممثل الذي لعب دور "جاك سبارو" في أفلام قراصنة الكاريبي؟',
  answer: 'جوني ديب',
  difficulty: 'easy',
  points: 200
},

// أسئلة متوسطة (400 نقطة)
{
  id: 'movie9',
  question: 'ما اسم المسلسل الذي يحكي قصة محامية تدافع عن المتهمين في القضايا الجنائية؟',
  answer: 'How to Get Away with Murder',
  difficulty: 'medium',
  points: 400
},
{
  id: 'movie10',
  question: 'من هو مخرج فيلم "Pulp Fiction"؟',
  answer: 'كوينتين تارانتينو',
  difficulty: 'medium',
  points: 400
},
{
  id: 'movie11',
  question: 'ما اسم الشخصية التي يلعبها بريان كرانستون في مسلسل Malcolm in the Middle؟',
  answer: 'هال',
  difficulty: 'medium',
  points: 400
},
{
  id: 'movie12',
  question: 'في أي مدينة يدور أحداث مسلسل "The Wire"؟',
  answer: 'بالتيمور',
  difficulty: 'medium',
  points: 400
},
{
  id: 'movie13',
  question: 'ما اسم الفيلم الذي حصل فيه ليوناردو دي كابريو على أول أوسكار له؟',
  answer: 'The Revenant',
  difficulty: 'medium',
  points: 400
},
{
  id: 'movie14',
  question: 'من هو الممثل الذي لعب دور "هيث ليدجر" في فيلم The Dark Knight؟',
  answer: 'الجوكر',
  difficulty: 'medium',
  points: 400
},
{
  id: 'movie15',
  question: 'ما اسم المسلسل الذي يحكي قصة مجموعة من الأصدقاء في نيويورك في التسعينات؟',
  answer: 'Friends',
  difficulty: 'medium',
  points: 400
},
{
  id: 'movie16',
  question: 'من هو مؤلف رواية "The Shining" التي تم تحويلها إلى فيلم؟',
  answer: 'ستيفن كينج',
  difficulty: 'medium',
  points: 400
},

// أسئلة صعبة (600 نقطة)
{
  id: 'movie17',
  question: 'ما اسم المسلسل البريطاني الذي يحكي قصة شيرلوك هولمز في العصر الحديث؟',
  answer: 'Sherlock',
  difficulty: 'hard',
  points: 600
},
{
  id: 'movie18',
  question: 'من هو مخرج فيلم "2001: A Space Odyssey"؟',
  answer: 'ستانلي كوبريك',
  difficulty: 'hard',
  points: 600
},
{
  id: 'movie19',
  question: 'ما اسم الممثلة التي لعبت دور "كلاريس ستارلينغ" في فيلم "The Silence of the Lambs"؟',
  answer: 'جودي فوستر',
  difficulty: 'hard',
  points: 600
},
{
  id: 'movie20',
  question: 'في أي عام تم عرض الحلقة الأولى من مسلسل "The Sopranos"؟',
  answer: '1999',
  difficulty: 'hard',
  points: 600
},
{
  id: 'movie21',
  question: 'ما اسم الفيلم الياباني الذي ألهم فيلم "The Magnificent Seven"؟',
  answer: 'Seven Samurai',
  difficulty: 'hard',
  points: 600
},
{
  id: 'movie22',
  question: 'من هو الممثل الذي لعب دور "ترافيس بيكل" في فيلم "Taxi Driver"؟',
  answer: 'روبرت دي نيرو',
  difficulty: 'hard',
  points: 600
},
{
  id: 'movie23',
  question: 'ما اسم المسلسل الذي يحكي قصة دون درابر في وكالة إعلانات؟',
  answer: 'Mad Men',
  difficulty: 'hard',
  points: 600
},
{
  id: 'movie24',
  question: 'من هو مخرج فيلم "Citizen Kane"؟',
  answer: 'أورسون ويلز',
  difficulty: 'hard',
  points: 600
}
    ]
  },// إضافة موضوع لايفات عبسي إلى sampleTopics
{
  id: 'absi',
  name: 'لايفات عبسي',
  questions:  [ { 
      id: 'absi1', 
      question: 'كم حمار ب الصورة', 
      answer: '1 ', 
      difficulty: 'easy', 
      points: 200,
      mediaType: 'image',
      hasImage: true,
      imageUrl: '../../4.jpg'
    },
    { 
      id: 'absi2', 
      question: 'ماذا قال عبسي ', 
      answer: 'بدك حرية ولا', 
      difficulty: 'easy', 
      points: 200,
      mediaType: 'image',
      hasImage: true,
      imageUrl: '../../3.jpg'
    },
    { 
      id: 'absi3', 
      question: 'ماذا فعل عبسي ', 
      answer: 'ضرط ( خري)', 
      difficulty: 'easy', 
      points: 200,
      mediaType: 'image',
      hasImage: true,
      imageUrl: '../../2.jpg'
    },
      { 
        id: 'absi4', 
        question: 'ابن من كان يهدد عبسي ', 
        answer: ' ابن بلال الجوابرة', 
        difficulty: 'easy', 
        points: 200,
      mediaType: 'image',
      hasImage: true,
      imageUrl: '../../5.jpg'
      },
    { 
      id: 'absi5', 
      question: 'من كان يعطيهم الالوان', 
      answer: ' معاليك', 
      difficulty: 'easy', 
      points: 200,
      mediaType: 'image',
      hasImage: true,
      imageUrl: '../../6.jpg'
    },
,
      { 
        id: 'absi6', 
        question: 'من كان صاحب النصيب', 
        answer: '  زلوم', 
        difficulty: 'easy', 
        points: 200,
      mediaType: 'image',
      hasImage: true,
      imageUrl: '../../7.jpg'
      },
    { 
      id: 'absi7', 
      question: ' كم عدة عمل ', 
      answer: '0', 
      difficulty: 'medium', 
      points: 400,
      mediaType: 'image',
      hasImage: true,
      imageUrl: '../../8.jpg'
    },
    { 
      id: 'absi8', 
      question: 'من فاز بالنزال', 
      answer: 'عبسي', 
      difficulty: 'medium', 
      points: 400,
      mediaType: 'image',
      hasImage: true,
      imageUrl: '../../9.jpg'
    },
    { 
      id: 'absi9', 
      question: 'ماذا حصل هنا', 
      answer: 'وقع حالو', 
      difficulty: 'medium', 
      points: 400,
       mediaType: 'image',
      hasImage: true,
      imageUrl: '../../10.jpg'
    },
    { 
      id: 'absi10', 
      question: 'ما العبرة التي قالها ابو القلق', 
      answer: 'انتو رخاص ولا عليكم عرض خاص', 
      difficulty: 'medium', 
      points: 400,
       mediaType: 'image',
      hasImage: true,
      imageUrl: '../../11.jpg'
    },
    
    // أسئلة صعبة (600 نقطة)
    { 
      id: 'absi11', 
      question: 'من صاحب هذه الحركة', 
      answer: 'زلوم', 
      difficulty: 'medium', 
      points: 400,
      mediaType: 'image',
      hasImage: true,
      imageUrl: '../../23.jpg'
    },
    { 
      id: 'absi12', 
      question: 'ماذا قال معاليك ', 
      answer: 'والله بزمن بشار ما صار هيك', 
      difficulty: 'hard', 
      points: 600,
       mediaType: 'image',
      hasImage: true,
      imageUrl: '../../12.jpg'
    },
    { 
      id: 'absi13', 
      question: 'من صاحب النصيب', 
      answer: 'عبود (الخيل من خيالها )', 
      difficulty: 'hard', 
      points: 600,
       mediaType: 'image',
      hasImage: true,
      imageUrl: '../../14.jpg'
    },
    { 
      id: 'absi14', 
      question: 'ماذا كان يغني عبسي ', 
      answer: ' وا عيني ', 
      difficulty: 'hard', 
      points: 600,
     mediaType: 'image',
      hasImage: true,
      imageUrl: '../../15.jpg'
    },
    { 
      id: 'absi15', 
      question: ' ماذا قال ماهركو لعبسي', 
      answer: 'امسكلي ايا و انا بمسكهم لثنين', 
      difficulty: 'hard', 
      points: 600,
      mediaType: 'video',
      hasVideo: true,
      videoUrl: '../../25.mp4' 
    },
    { 
      id: 'absi16', 
      question: 'ماذا قال عبسي ', 
      answer: 'لم يقل شيئ', 
      difficulty: 'hard', 
      points: 600,
     mediaType: 'image',
      hasImage: true,
      imageUrl: '../../16.jpg'
    }
    ,
    { 
      id: 'absi17', 
      question: 'ماذا كان يغني عبسي للعسكر', 
      answer: 'ما ينلام', 
      difficulty: 'easy', 
      points: 200,
     mediaType: 'image',
      hasImage: true,
      imageUrl: '../../17.jpg'
    },
    { 
      id: 'absi18', 
      question: 'من صاحب النصيب', 
      answer: 'هلالي', 
      difficulty: 'medium', 
      points: 400,
     mediaType: 'image',
      hasImage: true,
      imageUrl: '../../18.jpg'
    },
    { 
      id: 'absi19', 
      question: 'ماذا كان يغني', 
      answer: 'الله يخلي الريس ', 
      difficulty: 'hard', 
      points: 600,
     mediaType: 'image',
      hasImage: true,
      imageUrl: '../../19.jpg'
    },
    { 
      id: 'absi20', 
      question: 'ماذا حصل هنا', 
      answer: 'وقع كالعادة', 
      difficulty: 'medium', 
      points: 400,
     mediaType: 'image',
      hasImage: true,
      imageUrl: '../../20.jpg'
    },
    { 
      id: 'absi21', 
      question: 'ما وظيفة عبسي', 
      answer: 'عامل قهوة', 
      difficulty: 'hard', 
      points: 600,
     mediaType: 'image',
      hasImage: true,
      imageUrl: '../../21.jpg'
    },
    { 
      id: 'absi22', 
      question: ' من الشخص يلي بدو يوقع عبسي', 
      answer: 'جوكر', 
      difficulty: 'hard', 
      points: 600,
      mediaType: 'video',
      hasVideo: true,
      videoUrl: '../../24.mp4' 
    },
    { 
      id: 'absi23', 
      question: ' متى اخر مرة نام عبسي بالليل', 
      answer: 'من ايام كورونا', 
      difficulty: 'medium', 
      points: 400,
     mediaType: 'image',
      hasImage: true,
      imageUrl: '../../22.jpg'
    },
    { 
      id: 'absi24', 
      question: ' ماذا قال عبسي هنا', 
      answer: 'والله لنيمكم من المغرب', 
      difficulty: 'easy', 
      points: 200,
     mediaType: 'image',
      hasImage: true,
      imageUrl: '../../13.jpg'
    }
]
},{
  id: 'babAlHara',
  name: 'باب الحارة',
  questions: [
  // أسئلة سهلة (200 نقطة)
  { 
    id: 'h1', 
    question: 'من هو أبو عصام في مسلسل باب الحارة؟', 
    answer: 'عباس النوري', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'h2', 
    question: 'ما هو اسم الحارة التي تدور فيها أحداث المسلسل؟', 
    answer: 'حارة الضبع', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'h3', 
    question: 'من هو زعيم الحارة في الجزء الأول؟', 
    answer: 'أبو صالح', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'h4', 
    question: 'من هو الشرطي في الحارة؟', 
    answer: 'أبو جودت', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'h5', 
    question: 'ما اسم الممثل الذي أدى دور معتز؟', 
    answer: 'وائل شرف', 
    difficulty: 'easy', 
    points: 200
  },
  { 
    id: 'h6', 
    question: 'ما اسم الممثل الذي أدى دور العكيد أبو شهاب؟', 
    answer: 'سامر المصري', 
    difficulty: 'easy', 
    points: 200
  },
{ 
  id: 'h7', 
  question: 'ما اسم القهوة التي يجتمع فيها رجال الحارة؟', 
  answer: 'قهوة أبو حاتم', 
  difficulty: 'easy', 
  points: 200
}
,
  { 
    id: 'h8', 
    question: 'ما هو اسم هذه الشخصية التي اشتهرت بعبارة "فهمت عليك"؟', 
    answer: 'أبو بدر', 
    difficulty: 'easy', 
    points: 200,
    hasImage: true,
    imageUrl: '../../abobdr.jpg'
  },

  // أسئلة متوسطة (400 نقطة)
{ 
  id: 'h9', 
  question: 'من هو الطبيب الذي عاد إلى الحارة بعد غياب طويل؟', 
  answer: 'أبو عصام', 
  difficulty: 'medium', 
  points: 400
}
,
  { 
    id: 'h10', 
    question: 'من تزوج معتز في الأجزاء المتقدمة؟', 
    answer: 'خيرية', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'h11', 
    question: 'ما هو اسم ابنة أبو عصام الكبرى؟', 
    answer: 'جميلة', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'h12', 
    question: 'من هو الفنان الذي أدى دور "النمس"؟', 
    answer: 'مصطفى الخاني', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'h13', 
    question: 'ما هو اسم زوجة "عصام" الأولى؟', 
    answer: 'لطفية', 
    difficulty: 'medium', 
    points: 400
  },
{ 
  id: 'h14', 
  question: 'من هي الشخصية التي كانت تُدعى "الداية "؟', 
  answer: ' ام زكي ', 
  difficulty: 'medium', 
  points: 400
},
  { 
    id: 'h15', 
    question: 'من الذي حل محل أبو شهاب كعكيد للحارة؟', 
    answer: 'معتز', 
    difficulty: 'medium', 
    points: 400
  },
  { 
    id: 'h16', 
    question: 'ما هي مهنة أبو حاتم؟', 
    answer: 'صاحب مقهى الحارة', 
    difficulty: 'medium', 
    points: 400
  },

  // أسئلة صعبة (600 نقطة)
{
  "id": 'h17',
  "question": 'كم عدد أجزاء مسلسل باب الحارة التي تم عرضها حتى عام 2024؟',
  "answer": '13 جزءًا',
  "difficulty": 'hard',
  "points": 600
},
{
  id: 'h18',
  question: 'من هو الشخص الذي اكتشف خيانة "أبو دراع" وتعاونه مع الاحتلال الفرنسي في الجزء السادس؟',
  answer: 'أبو ظافر',
  difficulty: 'hard',
  points: 600
}
,
{
  id: 'h19',
  question: 'من هو هذا الشخص الذي ظهر في أحد الأجزاء يرتدي زي الدراويش وكان في الحقيقة يبحث عن قاتل أخيه؟',
  answer: 'جواد',
  difficulty: 'hard',
  points: 600,

},
  { 
    id: 'h20', 
    question: 'ما اسم الشخصية التي قامت بها "منى واصف"؟', 
    answer: 'أم عصام', 
    difficulty: 'hard', 
    points: 600
  },
  { 
    id: 'h21', 
    question: 'في أي عام بدأ عرض مسلسل باب الحارة؟', 
    answer: '2006', 
    difficulty: 'hard', 
    points: 600
  },
  { 
    id: 'h22', 
    question: 'ما هي جنسية مخرج المسلسل بسام الملا؟', 
    answer: 'سوري', 
    difficulty: 'hard', 
    points: 600
  },
{
  id: 'h23',
  question: 'من هو الشخص الذي قام بتهريب الأسلحة إلى الثوار داخل صناديق الخضار؟',
  answer: 'أبو حاتم',
  difficulty: 'hard',
  points: 600
},
{
  id: 'h24',
  question: 'في أي جزء من باب الحارة ظهر "الشيخ بلال" لأول مرة كمؤثر في أحداث الحارة؟',
  answer: 'الجزء السابع',
  difficulty: 'hard',
  points: 600
}

]

}

];




