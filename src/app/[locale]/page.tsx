import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import InstallationManual from "@/components/InstallationManual";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import type { Locale } from "@/i18n/types";

const faqSchemaData: Record<Locale, { q: string; a: string }[]> = {
  en: [
    { q: "How do I install Brewnet?", a: "Install via npm (npm install -g @brewnet/cli) or build from source using curl. After installation, run brewnet init to start server setup." },
    { q: "How do I update?", a: "Run npm update -g @brewnet/cli for npm installations, or re-run the curl install script for source builds." },
    { q: "How do I completely uninstall?", a: "Run brewnet uninstall for interactive removal. Use --force for no confirmation, --keep-data to preserve Docker volumes, --keep-config to keep config files. Remove the CLI binary with npm uninstall -g @brewnet/cli." },
    { q: "How do I start/stop services?", a: "Use brewnet up to start all services, brewnet down to stop, brewnet status to check status, and brewnet logs to view service logs." },
    { q: "How do I access the admin dashboard?", a: "Run brewnet admin to automatically open http://localhost:8088. Use --port to change the port." },
    { q: "How do I develop and deploy an app?", a: "Use brewnet create-app with interactive selection or specify a stack directly. Supports 16 stacks including Node.js, Python, Go, Rust, Java, and Kotlin frameworks." },
    { q: "How do I connect a custom domain?", a: "Use brewnet domain connect with your domain. Requires a Cloudflare API Token with Zone:Read, DNS:Edit, and Tunnel:Edit permissions." },
    { q: "Do services stop after a reboot?", a: "No. All containers use restart: unless-stopped policy and automatically recover after reboot. Manually stopped services remain stopped." },
    { q: "How do I backup and restore?", a: "Use brewnet backup to create backups and brewnet restore to restore. Backups are stored in ~/.brewnet/backups/ as .tar.gz files." },
    { q: "Where is the data stored?", a: "Config and metadata in ~/.brewnet/. Project directories (docker-compose.yml, app source) at ~/brewnet/<project-name>/." },
  ],
  ko: [
    { q: "설치 방법이 뭔가요?", a: "npm(npm install -g @brewnet/cli) 또는 curl로 소스 빌드하여 설치합니다. 설치 후 brewnet init으로 서버 세팅을 시작합니다." },
    { q: "업데이트하려면?", a: "npm 설치인 경우 npm update -g @brewnet/cli, curl 설치인 경우 같은 설치 스크립트를 재실행합니다." },
    { q: "완전히 제거하려면?", a: "brewnet uninstall로 대화형 제거. --force로 확인 없이 제거, --keep-data로 Docker 볼륨 보존, --keep-config로 설정 파일만 보존합니다." },
    { q: "서비스를 시작/중지하려면?", a: "brewnet up으로 모든 서비스 시작, brewnet down으로 중지, brewnet status로 상태 확인, brewnet logs로 로그를 확인합니다." },
    { q: "관리 대시보드는 어떻게 접속하나요?", a: "brewnet admin 실행 시 http://localhost:8088이 자동으로 열립니다. --port 옵션으로 포트 변경 가능합니다." },
    { q: "앱을 개발하고 배포하려면?", a: "brewnet create-app으로 대화형 선택하거나 스택을 직접 지정합니다. Node.js, Python, Go, Rust, Java, Kotlin 등 16개 스택을 지원합니다." },
    { q: "커스텀 도메인을 연결하려면?", a: "brewnet domain connect로 도메인을 연결합니다. Cloudflare API Token(Zone:Read, DNS:Edit, Tunnel:Edit 권한)이 필요합니다." },
    { q: "재부팅하면 서비스가 꺼지나요?", a: "아니요. 모든 컨테이너는 restart: unless-stopped 정책으로 재부팅 후 자동 복구됩니다. brewnet down으로 직접 중지한 경우에는 중지 상태를 유지합니다." },
    { q: "백업/복원은 어떻게 하나요?", a: "brewnet backup으로 백업 생성, brewnet restore로 복원합니다. 백업은 ~/.brewnet/backups/에 .tar.gz 형식으로 저장됩니다." },
    { q: "데이터가 어디에 저장되나요?", a: "설정과 메타데이터는 ~/.brewnet/에, 프로젝트 디렉토리(docker-compose.yml, 앱 소스)는 ~/brewnet/<project-name>/에 저장됩니다." },
  ],
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "ko" ? "ko" : "en") as Locale;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchemaData[lang].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <PainPoints />
        <Features />
        <HowItWorks />
        <Services />
        <InstallationManual />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
