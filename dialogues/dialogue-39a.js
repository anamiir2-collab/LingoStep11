import { buildLessonFields } from './lesson-fields.js';
export default{
  id: 39,
  level: 2,
  title: "If I were you",
  titleAr: "تقديم النصيحة",
  groups:[
    {
      label: "",
      lines:[
        [
          "A",
          "I need some advice.",
          "أحتاج إلى نصيحة."
        ],
        [
          "B",
          "I can help you.",
          "أستطيع مساعدتك."
        ]
      ]
    }
  ]
,
  ...buildLessonFields({ dialogueId: 39, title, titleAr, groups })
};
