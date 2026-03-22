import type { Locale } from "../types";

export const contactDict: Record<
  Locale,
  {
    toastSuccess: string;
    badge: string;
    title: string;
    desc: string;
    labelEmail: string;
    labelPhone: string;
    labelSubject: string;
    labelMessage: string;
    placeholderEmail: string;
    placeholderPhone: string;
    placeholderSubject: string;
    placeholderMessage: string;
    optionGeneral: string;
    optionBug: string;
    optionFeature: string;
    optionPartnership: string;
    optionEnterprise: string;
    optionOther: string;
    btnSubmitting: string;
    btnSubmit: string;
    errorMessage: string;
    telegramTitle: string;
    telegramDesc: string;
  }
> = {
  en: {
    toastSuccess: "Thank you! We\u2019ll get back to you within 24 hours.",
    badge: "Get In Touch",
    title: "Developer Contact Form",
    desc: "Have a specific inquiry? Send us a message directly. We\u2019ll respond via email or Telegram.",
    labelEmail: "Email *",
    labelPhone: "Phone",
    labelSubject: "Subject *",
    labelMessage: "Message *",
    placeholderEmail: "your@email.com",
    placeholderPhone: "+82-10-0000-0000",
    placeholderSubject: "-- Select a topic --",
    placeholderMessage: "Tell us about your project or question...",
    optionGeneral: "General Inquiry",
    optionBug: "Bug Report",
    optionFeature: "Feature Request",
    optionPartnership: "Partnership",
    optionEnterprise: "Enterprise / Team Plan",
    optionOther: "Other",
    btnSubmitting: "Sending...",
    btnSubmit: "Send Message",
    errorMessage:
      "Something went wrong. Please try again or email us at hello@brewnet.dev.",
    telegramTitle: "Join our Telegram",
    telegramDesc: "Chat with the team and community in real-time",
  },
  ko: {
    toastSuccess: "감사합니다! 24시간 이내에 답변드리겠습니다.",
    badge: "문의하기",
    title: "개발자 문의 양식",
    desc: "궁금한 점이 있으신가요? 메시지를 보내주시면 이메일 또는 Telegram으로 답변드리겠습니다.",
    labelEmail: "이메일 *",
    labelPhone: "전화번호",
    labelSubject: "주제 *",
    labelMessage: "메시지 *",
    placeholderEmail: "your@email.com",
    placeholderPhone: "+82-10-0000-0000",
    placeholderSubject: "-- 주제를 선택하세요 --",
    placeholderMessage: "프로젝트 또는 질문에 대해 알려주세요...",
    optionGeneral: "일반 문의",
    optionBug: "버그 리포트",
    optionFeature: "기능 요청",
    optionPartnership: "파트너십",
    optionEnterprise: "엔터프라이즈 / 팀 플랜",
    optionOther: "기타",
    btnSubmitting: "전송 중...",
    btnSubmit: "메시지 보내기",
    errorMessage:
      "문제가 발생했습니다. 다시 시도하시거나 hello@brewnet.dev로 이메일을 보내주세요.",
    telegramTitle: "Telegram 참여하기",
    telegramDesc: "팀과 커뮤니티에서 실시간으로 소통하세요",
  },
};
