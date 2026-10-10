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
 pulsan:{company:'PULSAN OMSORG / 2025 — PRESENT',title:'A more deliberate way to run production.',context:'My current role combines day-to-day platform operations with infrastructure automation and migration work. The environment includes containerized microservices running on Kubernetes and Docker Swarm.',contributions:['Manage GitOps deployments using ArgoCD and automate infrastructure with Terraform and Ansible.','Lead migration work from Elastisys to self-hosted Kubernetes infrastructure.','Maintain Harbor container registries and administer GitHub workflows and webhooks.','Implement metrics, logs, and distributed tracing with Prometheus, Grafana, OpenSearch, Fluentd, OpenTelemetry, Jaeger, and Kibana.','Support alerting through Alertmanager integrated with Opsgenie.'],focus:'This work brings deployment, infrastructure, telemetry, and alerting into the same operational picture.',tools:'Kubernetes · Docker Swarm · ArgoCD · Terraform · Ansible · Harbor · Azure'},
 scania:{company:'SCANIA AB / 2024 — 2025',title:'More time for engineering. Less time provisioning.',context:'Automotive developers needed Ubuntu environments to support GPU-based simulations. My role covered provisioning, operating system rollouts, and monitoring of high-performance computing infrastructure.',contributions:['Automated provisioning of virtual desktops, laptops, and desktops using AWX and Ansible.','Managed operating system rollouts across developer devices, with a focus on seamless updates and minimal disruption.','Developed and maintained a monitoring platform for HPC clusters running in AWS Cloud.','Worked with Python, Terraform, and VMware vSphere across the infrastructure stack.'],focus:'The work connected developer environments with the automation and monitoring needed to support them.',tools:'AWS · AWX · Ansible · Python · Terraform · VMware vSphere'},
 fujitsu:{company:'FUJITSU AB / 2020 — 2024',title:'Behind the scenes of everyday retail.',context:'At Fujitsu, I worked on point-of-sale platforms for H&M and Primark. The role spanned software delivery, infrastructure administration, cloud migration, and client-facing technical work.',contributions:['Developed and maintained build and deployment processes for point-of-sale platforms.','Supported VMware administration and networking across platform environments.','Contributed to Azure cloud migration and infrastructure as code using Terraform.','Worked with Jenkins, Open Build Service, Rundeck, Ansible, Salt, Docker, and GitLab.','Translated client requirements into technical work through proofs of concept and ongoing collaboration.'],focus:'The role required connecting delivery pipelines with the infrastructure and client needs behind retail platforms.',tools:'Azure · Jenkins · GitLab · Docker · Ansible · Terraform · Python · Bash · Groovy'}
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
