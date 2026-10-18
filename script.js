'use strict';
const stages = [
 {description:'Turn infrastructure into versioned, repeatable code with Terraform, Ansible, and Python.',tools:'TERRAFORM · ANSIBLE · PYTHON'},
 {description:'Connect configuration to delivery with GitOps workflows and container orchestration.',tools:'ARGOCD · KUBERNETES · DOCKER'},
 {description:'Bring metrics, logs, and traces together to understand what production systems are doing.',tools:'PROMETHEUS · GRAFANA · OPENTELEMETRY'}
];
document.querySelectorAll('[data-stage]').forEach(button=>button.addEventListener('click',()=>{
 const stage=stages[Number(button.dataset.stage)];
 document.querySelectorAll('[data-stage]').forEach(item=>{item.classList.toggle('selected',item===button);item.setAttribute('aria-pressed',String(item===button));});
 document.getElementById('stage-description').textContent=stage.description;
 document.getElementById('stage-tools').textContent=stage.tools;
}));
const stories={
  "pulsan": {
    "company": "PULSEN OMSORG / 2025 — PRESENT",
    "title": "Building the next chapter of the platform.",
    "context": "As a Site Reliability Engineer, I combine day-to-day platform operations with the migration from an Elastisys-managed environment to our own Kubernetes cluster. My work spans cluster setup, GitOps delivery, data services, observability, and infrastructure automation.",
    "contributions": [
      "Help build and operate the new Kubernetes environment using Talos, Cilium, and ArgoCD, while supporting the existing platform throughout the migration.",
      "Manage GitOps workflows and Harbor container registries to keep application configuration and delivery consistent.",
      "Operate RabbitMQ, Redis, and PostgreSQL services; automate RabbitMQ user management with Terraform and use Ansible for environment configuration.",
      "Maintain visibility and incident response tooling with Grafana, Prometheus, Grafana Alloy, OpenSearch, and Opsgenie.",
      "Implement and explore AI-agent ideas within the platform, bringing an SRE perspective to their integration and operational requirements."
    ],
    "focus": "Connecting platform migration with the operational foundations that make a cluster maintainable: configuration, delivery, telemetry, messaging, and data services.",
    "tools": "Kubernetes · Talos · Cilium · ArgoCD · GitOps · Harbor · RabbitMQ · Redis · PostgreSQL · Grafana · Prometheus · Alloy · OpenSearch · Opsgenie · Ansible · Terraform"
  },
  "scania": {
    "company": "SCANIA AB / 2024 — 2025",
    "title": "Cloud infrastructure for truck simulation.",
    "context": "At Scania, I worked on an AWS-based environment for truck simulation testing. The work brought together HPC nodes, developer environments, monitoring, and automation to support engineering workloads.",
    "contributions": [
      "Contributed to the architecture and setup of simulation environments on AWS, with a focus on high-performance computing nodes and the infrastructure around them.",
      "Investigated AWS HPC service options and Research and Engineering Studio (RES) for research and engineering environments.",
      "Developed and maintained monitoring for AWS HPC clusters to support performance analysis and operational troubleshooting.",
      "Automated user enrollment and environment configuration using Ansible and Rundeck.",
      "Provisioned Ubuntu environments for GPU-based simulations, including virtual desktops and developer devices, using AWX and Ansible."
    ],
    "focus": "Making cloud computing resources usable for simulation engineers through infrastructure design, consistent environments, user access automation, and monitoring.",
    "tools": "AWS · HPC · Research and Engineering Studio (evaluation) · Ansible · Rundeck · AWX · Python · Terraform · Ubuntu · VMware vSphere"
  },
  "fujitsu": {
    "company": "FUJITSU AB / 2020 — 2024",
    "title": "From Linux packages to the checkout.",
    "context": "At Fujitsu, I worked across the full delivery lifecycle of point-of-sale solutions for H&M and Primark—from creating Linux packages to building, deploying, and maintaining software on physical POS hardware.",
    "contributions": [
      "Developed and maintained packages for SUSE Linux Enterprise Server (SLES), using Open Build Service (OBS) to build the software delivered to POS systems.",
      "Worked across build pipelines, package deployment, and the operation of the end-to-end POS solution on retail hardware.",
      "Contributed to extensive platform migration work, including changes to the underlying infrastructure and delivery environment.",
      "Participated in architecture work for migrating the POS solution to Microsoft Azure.",
      "Combined Jenkins, GitLab, Rundeck, Ansible, Salt, and scripting with VMware administration and networking to support platform delivery and maintenance."
    ],
    "focus": "Treating the retail platform as an end-to-end system: source, packages, build infrastructure, deployment, hardware, and the path toward cloud infrastructure.",
    "tools": "SLES · Open Build Service · Azure · Jenkins · GitLab · Rundeck · Ansible · Salt · Docker · VMware · Terraform · Python · Bash · Groovy"
  },
  "cybercom": {
    "company": "CYBERCOM AB / 2017 — 2020",
    "title": "The infrastructure behind 5G testing.",
    "context": "As a Cybercom consultant at Ericsson, I worked as a CI and automation engineer on baseband infrastructure supporting 5G delivery. Most of my time focused on configuring test nodes and preparing the environments required by new test cases.",
    "contributions": [
      "Maintained Jenkins pipelines and Job DSL code supporting continuous integration and automated test workflows.",
      "Created a script-based framework for automatically selecting nodes for 5G test cases.",
      "Configured test nodes comprising digital and radio units, and prepared the environment for new test scenarios.",
      "Supported build environments and the infrastructure that connected software delivery with hardware-based testing.",
      "Alongside the Ericsson assignment, contributed roughly 20% of my time to internal Cybercom projects, including AWS-related work."
    ],
    "focus": "Reducing manual coordination between CI pipelines, node selection, and test environment preparation so new 5G test cases had the infrastructure they needed.",
    "tools": "Jenkins · Job DSL · CI automation · Baseband infrastructure · Digital units · Radio units · Build environments · AWS (internal projects)"
  },
  "aluminati": {
    "company": "ALUMINATI NETWORK GROUP LIMITED / VIA TOPTAL",
    "title": "A legacy stack. A 30-minute start.",
    "context": "For my first Toptal client, Aluminati Network Group Limited, I modernized a legacy Ubuntu-based development environment. The original VM combined web, database, cache, search, and messaging services in a single environment.",
    "contributions": [
      "Decomposed Apache, MySQL, Redis, Elasticsearch, and RabbitMQ into modular Docker services orchestrated with Docker Compose.",
      "Preserved service configuration and state using persistent volumes, with bootstrapped databases and secrets integration.",
      "Created a developer-friendly setup with mounted Git repositories and dynamic database provisioning.",
      "Integrated environment secrets handling through Bitwarden and avoided image rebuilds for routine source-code changes.",
      "Enabled developers to bring up the full stack within 30 minutes, making onboarding faster and the environment easier to reproduce."
    ],
    "focus": "Preserving the behavior of a complex legacy environment while making local development modular, repeatable, and easier for a new developer to start.",
    "tools": "Docker · Docker Compose · Ubuntu · Apache · MySQL · Redis · Elasticsearch · RabbitMQ · Git · Bitwarden"
  }
};
const dialog=document.getElementById('story-dialog');
let storyTrigger=null;
document.querySelectorAll('[data-story]').forEach(button=>button.addEventListener('click',()=>{
 const story=stories[button.dataset.story];storyTrigger=button;
 document.getElementById('story-company').textContent=story.company;
 document.getElementById('story-title').textContent=story.title;
 const content=document.getElementById('story-content');content.replaceChildren();
 const add=(tag,text)=>{const element=document.createElement(tag);element.textContent=text;content.append(element);};
 add('h3','The context');add('p',story.context);add('h3','My contribution');
 const list=document.createElement('ul');story.contributions.forEach(text=>{const li=document.createElement('li');li.textContent=text;list.append(li);});content.append(list);
 add('h3','The engineering focus');add('p',story.focus);add('h3','Tools & technologies');add('p',story.tools);
 dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');document.getElementById('close-story').focus();
}));
document.getElementById('close-story').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{const rect=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))dialog.close();});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');storyTrigger?.focus();});
document.getElementById('copy-email').addEventListener('click',async()=>{
 const status=document.getElementById('copy-status');
 try{await navigator.clipboard.writeText('prashantatla@gmail.com');status.textContent='Copied!';}
 catch{status.textContent='prashantatla@gmail.com';}
});
// The time is always formatted in Stockholm; the IANA zone handles daylight saving.
function clock(){document.getElementById('stockholm-time').textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Stockholm',hour:'2-digit',minute:'2-digit'}).format(new Date())+' / STOCKHOLM';}
clock();setInterval(clock,60000);document.getElementById('year').textContent=new Date().getFullYear();
const navigation=[...document.querySelectorAll('.nav-link')];
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navigation.forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});},{rootMargin:'-12% 0px -58% 0px',threshold:0});document.querySelectorAll('.page-section').forEach(section=>observer.observe(section));}
