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
    title: "Developer Contact",
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
    telegramDesc: "Got questions? Chat with us in real-time on our channel.",
  },
  ko: {
    toastSuccess: "감사합니다! 24시간 이내에 답변드리겠습니다.",
    badge: "문의하기",
    title: "개발자 문의",
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
    telegramDesc: "문의사항이 있으면 채널에서 실시간으로 소통하세요.",
  },
  ja: {
    toastSuccess: "ありがとうございます！24時間以内にご返信いたします。",
    badge: "お問い合わせ",
    title: "開発者への連絡",
    desc: "ご質問がありますか？メッセージをお送りください。メールまたはTelegramでご返信いたします。",
    labelEmail: "メール *",
    labelPhone: "電話番号",
    labelSubject: "件名 *",
    labelMessage: "メッセージ *",
    placeholderEmail: "your@email.com",
    placeholderPhone: "+81-90-0000-0000",
    placeholderSubject: "-- トピックを選択 --",
    placeholderMessage: "プロジェクトやご質問についてお聞かせください...",
    optionGeneral: "一般的なお問い合わせ",
    optionBug: "バグ報告",
    optionFeature: "機能リクエスト",
    optionPartnership: "パートナーシップ",
    optionEnterprise: "エンタープライズ / チームプラン",
    optionOther: "その他",
    btnSubmitting: "送信中...",
    btnSubmit: "メッセージを送信",
    errorMessage:
      "問題が発生しました。もう一度お試しいただくか、hello@brewnet.dev までメールをお送りください。",
    telegramTitle: "Telegramに参加",
    telegramDesc: "ご質問がある方はチャンネルでリアルタイムにお話しましょう。",
  },
  zh: {
    toastSuccess: "感谢您！我们将在24小时内回复。",
    badge: "联系我们",
    title: "开发者联系",
    desc: "有具体问题？直接给我们发消息，我们将通过邮件或Telegram回复。",
    labelEmail: "邮箱 *",
    labelPhone: "电话",
    labelSubject: "主题 *",
    labelMessage: "消息 *",
    placeholderEmail: "your@email.com",
    placeholderPhone: "+86-138-0000-0000",
    placeholderSubject: "-- 选择主题 --",
    placeholderMessage: "请告诉我们您的项目或问题...",
    optionGeneral: "一般咨询",
    optionBug: "Bug报告",
    optionFeature: "功能请求",
    optionPartnership: "合作伙伴",
    optionEnterprise: "企业 / 团队方案",
    optionOther: "其他",
    btnSubmitting: "发送中...",
    btnSubmit: "发送消息",
    errorMessage:
      "出现问题。请重试或发送邮件至 hello@brewnet.dev。",
    telegramTitle: "加入Telegram",
    telegramDesc: "有问题？在我们的频道实时沟通。",
  },
};
