import type { Locale } from "../types";

export const newsletterDict: Record<
  Locale,
  {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    desc: string;
    placeholder: string;
    btnSubmitting: string;
    btnSubmit: string;
    toastSuccess: string;
    errorMessage: string;
    privacyNote: string;
  }
> = {
  en: {
    badge: "Mailing List",
    titlePrefix: "Complete Home Server ",
    titleHighlight: "Pro — Get Early Access",
    desc: "Easy setup, powerful monitoring, authorized device access, site analytics.",
    placeholder: "your@email.com",
    btnSubmitting: "Subscribing...",
    btnSubmit: "Subscribe",
    toastSuccess:
      "Subscribed! We\u2019ll keep you posted on the latest updates.",
    errorMessage: "Something went wrong. Please try again.",
    privacyNote: "Unsubscribe anytime. Your privacy is protected.",
  },
  ko: {
    badge: "메일링 리스트",
    titlePrefix: "완전한 홈서버 ",
    titleHighlight: "Pro 버전의 소식을 빠르게 받아보세요",
    desc: "쉬운 설치, 강력한 모니터링, 인증된 기기 접근, 사이트 분석.",
    placeholder: "your@email.com",
    btnSubmitting: "구독 중...",
    btnSubmit: "구독하기",
    toastSuccess: "구독 완료! 최신 업데이트를 보내드리겠습니다.",
    errorMessage: "문제가 발생했습니다. 다시 시도해주세요.",
    privacyNote: "언제든지 구독 해지 가능합니다. 개인정보는 안전하게 보호됩니다.",
  },
};
