export interface CommonDict {
  copy: string;
  copied: string;
}

export interface NavDict {
  features: string;
  usage: string;
  services: string;
  install: string;
  faq: string;
  contact: string;
  getStarted: string;
  star: string;
  changeLanguage: string;
  toggleNav: string;
}

export interface HeroDict {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  desc: string;
  tldr: string[];
  stackGit: string;
  stackWeb: string;
  stackMedia: string;
  stackRuntime: string;
  stackDatabase: string;
  stackCloud: string;
  stackMonitoring: string;
  stackCiCd: string;
  stackMore: string;
  btnGetStarted: string;
  btnGitHub: string;
}

export interface StatsDict {
  stats: { value: string; label: string }[];
}

export interface PainPointsDict {
  sectionBadge: string;
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  sectionDescPrefix: string;
  sectionDescHighlight: string;
  sectionDesc2: string;
  sectionDesc3: string;
  pains: { title: string; desc: string }[];
}

export interface FeaturesCardDict {
  title: string;
  desc: string;
}

export interface FeaturesDict {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  subtitle2: string;
  cards: {
    oneClickServerStack: FeaturesCardDict;
    secureByDefault: FeaturesCardDict;
    cleanUninstall: FeaturesCardDict;
    cloudflareTunnel: FeaturesCardDict;
    dockerOrchestration: FeaturesCardDict;
    slackTelegram: FeaturesCardDict;
    buildDeployConnect: FeaturesCardDict;
    crossPlatform: FeaturesCardDict;
    webDashboard: FeaturesCardDict;
  };
}

export interface HowItWorksDict {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  commandsTitle: string;
  steps: { number: string; title: string; desc: string; code: string }[];
}

export interface ServicesDict {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  desc: string;
}

export interface CatalogDict {
  title: string;
  desc: string;
  thCategory: string;
  thService: string;
  thImage: string;
  thPorts: string;
  thRam: string;
  note: string;
}

export interface InstallationCommandDict {
  command: string;
  description: string;
}

export interface InstallationDict {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  desc: string;
  sysReqTitle: string;
  sysReqCaption: string;
  thRequirement: string;
  thMinimum: string;
  thRecommended: string;
  rowOs: string;
  rowOsMin: string;
  rowOsRec: string;
  rowNode: string;
  rowNodeMin: string;
  rowNodeRec: string;
  rowDocker: string;
  rowDockerMin: string;
  rowDockerRec: string;
  rowRam: string;
  rowRamMin: string;
  rowRamRec: string;
  rowDisk: string;
  rowDiskMin: string;
  rowDiskRec: string;
  dockerNote: string;
  curlTitle: string;
  curlDesc: string;
  npmTitle: string;
  npmDesc: string;
  wizardTitle: string;
  postSetupTitle: string;
  postSetupCommands: InstallationCommandDict[];
  uninstallTitle: string;
  uninstallDesc: string;
  uninstallCommands: InstallationCommandDict[];
}

export interface PricingFeatureDict {
  text: string;
  star: boolean;
}

export interface PricingDict {
  badge: string;
  titleLine1: string;
  titleHighlight: string;
  desc: string;
  freeName: string;
  freePrice: string;
  freePeriod: string;
  freeDesc: string;
  freeCta: string;
  freeFeatures: string[];
  proName: string;
  proBadge: string;
  proPrice: string;
  proPeriod: string;
  proDesc: string;
  proCta: string;
  proFeatures: PricingFeatureDict[];
  teamName: string;
  teamPrice: string;
  teamPeriod: string;
  teamDesc: string;
  teamCta: string;
  teamFeatures: PricingFeatureDict[];
}

export interface NewsletterDict {
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

export interface FinalCtaDict {
  titlePrefix: string;
  titleHighlight: string;
  desc: string;
  btnGetStarted: string;
  btnGitHub: string;
  note: string;
}

export interface ContactDict {
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

export interface FooterDict {
  github: string;
  docs: string;
  license: string;
  privacy: string;
  reportBug: string;
  copyright: string;
}

export interface PrivacyDict {
  title: string;
  metaTitle: string;
  metaDesc: string;
  overviewHeading: string;
  overviewContent: string;
  dataHeading: string;
  dataContactLabel: string;
  dataContactContent: string;
  dataNewsletterLabel: string;
  dataNewsletterContent: string;
  selfHostedHeading: string;
  selfHostedContent: string;
  thirdPartyHeading: string;
  thirdPartyContent: string;
  contactHeading: string;
  contactContentBefore: string;
  contactLinkText: string;
  contactContentAfter: string;
  lastUpdated: string;
}

export interface Dictionary {
  common: CommonDict;
  nav: NavDict;
  hero: HeroDict;
  stats: StatsDict;
  painPoints: PainPointsDict;
  features: FeaturesDict;
  howItWorks: HowItWorksDict;
  services: ServicesDict;
  catalog: CatalogDict;
  installation: InstallationDict;
  pricing: PricingDict;
  newsletter: NewsletterDict;
  finalCta: FinalCtaDict;
  contact: ContactDict;
  footer: FooterDict;
  privacy: PrivacyDict;
}
