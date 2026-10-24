import { buildLessonFields } from './lesson-fields.js';
export default{
  id: 23,
  level: 2,
  title: "What's the date today?",
  titleAr: "تاريخ اليوم",
  groups:[
    {
      label: "",
      lines:[
        [
          "Mike",
          "Happy Valentine!",
          "عيد حب سعيد!"
        ],
        [
          "Peter",
          "What is the date today?",
          "ما تاريخ اليوم؟"
        ],
        [
          "Mike",
          "It's the fourteenth of February.",
          "إنه الرابع عشر من فبراير."
        ]
      ]
    }
  ]
;\n\nexport default {\n  ...dialogue,\n  ...buildLessonFields({ dialogueId: 23, title: dialogue.title, titleAr: dialogue.titleAr, groups: dialogue.groups })\n};\n