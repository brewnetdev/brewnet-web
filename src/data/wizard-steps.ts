export const wizardSteps = [
  { step: 0, title: "System Check", description: "OS, Docker, ports (80/443), disk, RAM verification" },
  { step: 1, title: "Project Setup", description: "Project name, path, install type (Full / Partial)" },
  { step: 2, title: "Admin & Servers", description: "Admin account, Web/File/DB/Media/SSH selection" },
  { step: 3, title: "Dev Stack", description: "Backend language, framework, frontend, FileBrowser (optional)" },
  { step: 4, title: "Domain & Network", description: "Local (LAN) or Cloudflare Tunnel, Mail Server (conditional)" },
  { step: 5, title: "Review & Confirm", description: "Full config review, credential propagation targets, resource estimate" },
  { step: 6, title: "Generate & Deploy", description: "docker-compose.yml generation, image pull, container start, access verification" },
  { step: 7, title: "Complete", description: "Endpoints, credentials summary, tunnel status, status page auto-open" },
];
