export const terminalCommands = [
  {
    cmd: "npx brewnet init",
    output: [
      '<span class="out-green">&#10003;</span> <span class="out-bold">System Check</span> <span class="out-muted">&mdash; OS: Linux, Docker: v27.0, Ports: Available</span>',
      '<span class="out-green">&#10003;</span> <span class="out-bold">Project Setup</span> <span class="out-muted">&mdash; Name: my-server, Path: ~/brewnet-server</span>',
      '<span class="out-green">&#10003;</span> <span class="out-bold">Server Components</span> <span class="out-muted">&mdash; Traefik, PostgreSQL, Nextcloud, Gitea</span>',
      '<span class="out-green">&#10003;</span> <span class="out-bold">Domain</span> <span class="out-muted">&mdash; my-server.dpdns.org + Cloudflare Tunnel</span>',
      '<span class="out-green">&#10003;</span> <span class="out-bold">Docker Compose</span> <span class="out-muted">&mdash; Generated &amp; services started</span>',
      "",
      '<span class="out-cyan">&#9670;</span> <span class="out-bold">Server is ready!</span>',
      '  Dashboard  <span class="out-cyan">https://my-server.dpdns.org</span>',
      '  Nextcloud  <span class="out-cyan">https://files.my-server.dpdns.org</span>',
      '  Gitea      <span class="out-cyan">https://git.my-server.dpdns.org</span>',
    ],
  },
  {
    cmd: "brewnet status",
    output: [
      '<span class="out-bold">SERVICE        STATUS      PORT    URL</span>',
      '<span class="out-green">traefik</span>        <span class="out-green">running</span>     80/443  <span class="out-cyan">my-server.dpdns.org</span>',
      '<span class="out-green">postgresql</span>     <span class="out-green">running</span>     5432    <span class="out-muted">internal</span>',
      '<span class="out-green">nextcloud</span>      <span class="out-green">running</span>     8080    <span class="out-cyan">files.my-server.dpdns.org</span>',
      '<span class="out-green">gitea</span>          <span class="out-green">running</span>     3000    <span class="out-cyan">git.my-server.dpdns.org</span>',
      '<span class="out-green">redis</span>          <span class="out-green">running</span>     6379    <span class="out-muted">internal</span>',
      "",
      '<span class="out-muted">5 services running | Uptime: 3d 12h | Tunnel: active</span>',
    ],
  },
  {
    cmd: "brewnet add jellyfin",
    output: [
      '<span class="out-cyan">&#9654;</span> Pulling jellyfin/jellyfin:latest...',
      '<span class="out-green">&#10003;</span> Image pulled successfully',
      '<span class="out-cyan">&#9654;</span> Updating docker-compose.yml...',
      '<span class="out-green">&#10003;</span> Service added: <span class="out-bold">jellyfin</span>',
      '<span class="out-cyan">&#9654;</span> Configuring reverse proxy...',
      '<span class="out-green">&#10003;</span> Route: <span class="out-cyan">https://media.my-server.dpdns.org</span>',
      "",
      '<span class="out-green">&#10003;</span> <span class="out-bold">Jellyfin is ready!</span> <span class="out-muted">Open the URL above to get started.</span>',
    ],
  },
];
