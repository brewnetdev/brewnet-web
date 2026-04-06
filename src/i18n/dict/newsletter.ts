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
  ja: {
    badge: "メーリングリスト",
    titlePrefix: "完全なホームサーバー ",
    titleHighlight: "Pro — 早期アクセスを取得",
    desc: "簡単セットアップ、強力なモニタリング、認証デバイスアクセス、サイト分析。",
    placeholder: "your@email.com",
    btnSubmitting: "登録中...",
    btnSubmit: "登録する",
    toastSuccess: "登録完了！最新情報をお届けします。",
    errorMessage: "問題が発生しました。もう一度お試しください。",
    privacyNote: "いつでも解除可能です。プライバシーは保護されます。",
  },
  zh: {
    badge: "邮件列表",
    titlePrefix: "完整家庭服务器 ",
    titleHighlight: "Pro — 获取早期访问",
    desc: "简易设置、强大监控、授权设备访问、站点分析。",
    placeholder: "your@email.com",
    btnSubmitting: "订阅中...",
    btnSubmit: "订阅",
    toastSuccess: "订阅成功！我们将为您推送最新动态。",
    errorMessage: "出现问题，请重试。",
    privacyNote: "随时可取消订阅。您的隐私受到保护。",
  },
};
