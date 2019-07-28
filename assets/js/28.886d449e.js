(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{226:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes-from-the-beginning-part-i-basics-deployment-and-minikube"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-from-the-beginning-part-i-basics-deployment-and-minikube","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes - from the beginning, Part I, Basics, Deployment and Minikube")]),e._v(" "),a("p",[e._v("Follow me on "),a("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/og54ug1i4yzrhen8q7ht.jpeg",alt:""}})]),e._v(" "),a("blockquote",[a("p",[e._v("Kubernetes is about orchestrating containerized apps. Docker is great for your first few containers. As soon as you need to run on multiple machines and need to scale/up down and distribute the load and so on, you need an orchestrator - you need Kubernetes")])]),e._v(" "),a("p",[e._v("This is the first part of a series of articles on Kubernetes, cause this topic is BIG!.")]),e._v(" "),a("ul",[a("li",[e._v("Part I - from the beginning, Part I, Basics, Deployment and Minikube\n"),a("strong",[e._v("we are here")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-two.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part II introducing Services and Labeling"),a("OutboundLink")],1),e._v("\nIn this part, we deepen our knowledge of Pods and Nodes. We also introduce Services and labeling using labels to query our artifacts.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-three.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part III Scaling"),a("OutboundLink")],1),e._v("\nHere we cover how to scale our app")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-four.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part IV - Auto scaling"),a("OutboundLink")],1),e._v(" In this part we look at how to set up auto-scaling so we can handle sudden large increases of incoming requests")])]),e._v(" "),a("p",[e._v("In this part I hope to cover the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Why Kubernetes")]),e._v(" and Orchestration in General")]),e._v(" "),a("li",[a("strong",[e._v("Hello world")]),e._v(": Minikube basics, talking through Minikube, simple deploy example")]),e._v(" "),a("li",[a("strong",[e._v("Cluster and basic commands")]),e._v(", Nodes,")]),e._v(" "),a("li",[a("strong",[e._v("Deployments")]),e._v(", what it is and deploying an app")]),e._v(" "),a("li",[a("strong",[e._v("Pods and Nodes")]),e._v(", explain concepts and troubleshooting")])]),e._v(" "),a("p",[e._v("## Why Orchestration\nWell, it all started with containers. Containers gave us the ability to create repeatable environments so dev, staging, and prod all looked and functioned the same way. We got predictability and they were also light-weight as they drew resources from the host operating system. Such a great breakthrough for Developers and Ops but the Container API is really only good for managing a few containers at a time. Larger systems might consist of 100s or 1000+ containers and needs to be managed as well so we can do things like "),a("em",[e._v("scheduling")]),e._v(", "),a("em",[e._v("load balancing")]),e._v(", "),a("em",[e._v("distribution")]),e._v(" and more.")]),e._v(" "),a("p",[e._v("At this point, we need "),a("em",[e._v("orchestration")]),e._v(" the ability for a system to handle all these container instances. This is where Kubernetes comes in.")]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubernetes.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes.io"),a("OutboundLink")],1),e._v("\nOne of the best resources to learn about Kubernetes is at this official Kubernetes site by Google.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/topic/kubernetes/?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes overview"),a("OutboundLink")],1),e._v(" An overview on Kubernetes, all its parts and how it works")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/free/?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Free Azure Account"),a("OutboundLink")],1),e._v(" If you want to try out AKS, Azure Kubernetes Service, you will need a free Azure account")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/services/kubernetes-service/?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes in the Cloud"),a("OutboundLink")],1),e._v(" Do you feel you know everything about Kubernetes already and just want to learn how to use a managed service? Then this link is for you")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-gb/azure/aks/?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation on AKS, Azure Kubernetes Service"),a("OutboundLink")],1),e._v("\nAzure Kubernetes Service, a managed Kubernetes")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/best-practices?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Best practices on AKS"),a("OutboundLink")],1),e._v(" You already know AKS and want to learn how to use it better?")])]),e._v(" "),a("h2",{attrs:{id:"kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes")]),e._v(" "),a("p",[e._v("So what do we know about Kubernetes?")]),e._v(" "),a("blockquote",[a("p",[e._v("It's an open-source system for automating deployment, scaling, and management of containerized applications")])]),e._v(" "),a("p",[e._v("Let'start with the name. It's Greek for "),a("strong",[e._v("Helmsman")]),e._v(", the person who steers the ship. Which is why the logo looks like this, a steering wheel on a boat:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/vku4umiwskzohzvl6uy7.png",alt:""}})]),e._v(" "),a("p",[e._v("It's Also called "),a("strong",[e._v("K8s")]),e._v(" so "),a("strong",[e._v("K")]),e._v(" ubernete "),a("strong",[e._v("s")]),e._v(", 8 characters in the middle are removed. Now you can impress your friends that you know why it's referred to as K8.")]),e._v(" "),a("p",[e._v("Here is some more Jeopardy knowledge on its origin. Kubernetes was born out of systems called Borg and Omega. It was donated to "),a("a",{attrs:{href:"https://www.cncf.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CNCF"),a("OutboundLink")],1),e._v(", Cloud Native Computing Foundation in 2014. It's written in Go/Golang.")]),e._v(" "),a("p",[e._v("If we see past all this trivia knowledge, it was built by Google as a response to their own experience handling a ton of containers. It's also Open Source and battle-tested to handle really large systems, like planet-scale large systems.")]),e._v(" "),a("p",[e._v("So the sales pitch is:")]),e._v(" "),a("blockquote",[a("p",[e._v("Run billions of containers a week, Kubernetes can scale without increasing your ops team")])]),e._v(" "),a("p",[e._v("Sounds amazing right, billions of containers cause we are all Google size. No? 😃 Well even if you have something like 10-100 containers, it's for you.")]),e._v(" "),a("p",[e._v("## Getting started\nOk ok, let's say I buy into all of this, how do I get started?")]),e._v(" "),a("blockquote",[a("p",[e._v("Impatient ey, sure let's start to do something practical with Minikube")])]),e._v(" "),a("p",[e._v("Ok, sounds good I'm a coder, I like practical stuff. What is Minikube?")]),e._v(" "),a("blockquote",[a("p",[e._v("Minikube is a tool that lets us run Kubernetes locally")])]),e._v(" "),a("p",[e._v("Oh, sweet, millions of containers on my little machine?")]),e._v(" "),a("blockquote",[a("p",[e._v("Well, no, let's start with a few and learn Kubernetes basics while at it.")])]),e._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("To install Minikube lets go to this "),a("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/",target:"_blank",rel:"noopener noreferrer"}},[e._v("installation page"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("It's just a few short steps that means we install")]),e._v(" "),a("ul",[a("li",[e._v("a Hypervisor")]),e._v(" "),a("li",[e._v("Kubectl (Kube control tool)")]),e._v(" "),a("li",[e._v("Minikube")])]),e._v(" "),a("p",[e._v("### Run")]),e._v(" "),a("p",[e._v("Get that thing up and running by typing:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("minikube start\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("It should look something like this:\n"),a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/oovr5vc6pyr0u382hnmo.png",alt:""}})]),e._v(" "),a("p",[e._v("You can also ensure that "),a("code",[e._v("kubectl")]),e._v(" have been correctly installed and running:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl version\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Should give you something like this in response:\n"),a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/jhaxnc774rhtjx3omh9y.png",alt:""}})]),e._v(" "),a("p",[e._v("Ok, now we are ready to learn Kubernetes.")]),e._v(" "),a("p",[e._v("## Learning kubectl and basic concepts\nIn learning Kubernetes lets do so by learning more about "),a("code",[e._v("kubectl")]),e._v(" a command line program that lets us interact with our Cluster and lets us deploy and manage applications on said Cluster.")]),e._v(" "),a("p",[e._v("The word Cluster just means a group of similar things but in the context of Kubernetes, it means a "),a("code",[e._v("Master")]),e._v(" and multiple worker machines called "),a("code",[e._v("Nodes")]),e._v(". Nodes were historically called Minions\n"),a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/ulp0pywus1ughch1pova.gif",alt:""}}),e._v("\n, but not so anymore.")]),e._v(" "),a("p",[e._v("The master decides what will run on the Nodes, which includes things like scheduled workloads or containerized apps. Which brings us to our next command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get nodes\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This should give us a result like this:\n"),a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/quf19x7deqbzzvm7ef0j.png",alt:""}}),e._v("\nWhat this tells us what Nodes we have available to do work.")]),e._v(" "),a("p",[e._v("Next up let's try to run our first app on Kubernetes with the "),a("code",[e._v("run")]),e._v(" command like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl run kubernetes-first-app --image=gcr.io/google-samples/kubernetes-bootcamp:v1 --port=8080\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This should give us a response like so:\n"),a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/4xmdywacngw5gntydxvm.png",alt:""}})]),e._v(" "),a("p",[e._v("Next up lets check that everything is up and running with the command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get deployments\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This shows the following in the terminal:\n"),a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/0y4q4f6ixkw3ehud1b6g.png",alt:""}})]),e._v(" "),a("p",[e._v("In putting our app on the Kluster, by invoking the "),a("code",[e._v("run")]),e._v(" command, Kubernetes performed a few things behind the scenes, it:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("searched")]),e._v(" for a suitable node where an instance of the application could be run, there was only one node so it got chosen")]),e._v(" "),a("li",[a("strong",[e._v("scheduled")]),e._v(" the application to run on that Node")]),e._v(" "),a("li",[a("strong",[e._v("configured")]),e._v(" the cluster to reschedule the instance on a new Node when needed")])]),e._v(" "),a("p",[e._v("Next up we are going to introduce the concept "),a("code",[e._v("Pod")]),e._v(", so what is a Pod?")]),e._v(" "),a("p",[e._v("A Pod is the smallest deployable unit and consists of one or many containers, for example, Docker containers. That's all we are going to say about Pods at the moment but if you really really want to know more have a read "),a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The reason for mentioning Pods at this point is that our container and app is placed inside of a Pod. Furthermore, Pods runs in a private isolated network that, although visible from other Pods and services, it cannot be accessed outside the network. Which means we can't reach our app with say a "),a("code",[e._v("curl")]),e._v(" command.")]),e._v(" "),a("p",[e._v("We can change that though. There is more than one way to expose our application to the outside world for now however we will use a proxy.")]),e._v(" "),a("p",[e._v("Now open up a 2nd terminal window and type:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl proxy\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This will expose the "),a("code",[e._v("kubectl")]),e._v(" as an API that we can query with HTTP request. The result should look like:\n"),a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/wtfsul9d2adtwznty8ws.png",alt:""}}),e._v("\nInstead of typing "),a("code",[e._v("kubectl version")]),e._v(" we can now type "),a("code",[e._v("curl http://localhost:8001/version")]),e._v(" and get the same results:\n"),a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/76x5cvo242ua1d8u5wuz.png",alt:""}})]),e._v(" "),a("p",[e._v("The API Server inside of Kubernetes have created an endpoint for each pod by its pod name. So the next step is to find out the pod name:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get pods\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This will list all the pods you have, it should just be one pod at this point and look something like this:\n"),a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/krb9t02drc4of97zjsj5.png",alt:""}})]),e._v(" "),a("p",[e._v("Then you can just save that down to a variable like so:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/zupuaoqzo57wosx6sdwr.png",alt:""}})]),e._v(" "),a("p",[e._v("Lastly, we can now do an HTTP call to learn more about our pod:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl http://localhost:8001/api/v1/namespaces/default/pods/$POD_NAME\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This will give us a long JSON response back (I trimmed it a bit but it goes on and on...)")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/qudludvb4jm5khhpsjfq.png",alt:""}})]),e._v(" "),a("p",[e._v("Maybe that's not super interesting for us as app developers. We want to know how our app is doing. Best way to know that is looking at the logs. Let's do that with this command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl logs $POD_NAME\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("As you can see below we know get logs from our app:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/i4f57ddfcxwq20xipzts.png",alt:""}})]),e._v(" "),a("p",[e._v("Now that we know the Pods name we can do all sorts of things like checking its environment variables or even step inside the container and look at the content.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl exec $POD_NAME env\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This yields the following result:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/zzf260ecdpdrsw11y0th.png",alt:""}})]),e._v(" "),a("p",[e._v("Now lets step inside the container:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl exec -ti $POD_NAME bash\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/mhfy1iunshteitx8zelm.png",alt:""}})]),e._v(" "),a("p",[e._v("We are inside! This means we can see what the source code looks like even:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat server.js\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/pd7hlljsiust9uh8tfkg.png",alt:""}})]),e._v(" "),a("p",[e._v("Inside of our container, we can now reach the running app by typing:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl http://localhost:8080\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("This is where we will stop for now.\nWhat did we actually learn?")]),e._v(" "),a("ul",[a("li",[e._v("Kubernetes, its origin what it is")]),e._v(" "),a("li",[e._v("Orchestration why you will soon need it")]),e._v(" "),a("li",[e._v("Concepts like Master, Nodes and Pods")]),e._v(" "),a("li",[e._v("Minikube, kubectl and how to deploy an image onto our Cluster")])]),e._v(" "),a("p",[e._v("Feel like you have a ton more to learn? You're right this is a big topic.")]),e._v(" "),a("p",[e._v("I hope you follow along on the next upcoming parts where we will learn more about Nodes, Pods, Services, Scaling, Updating and eventually how to use a managed service in the Cloud.")]),e._v(" "),a("p",[e._v("Click here for the "),a("a",{attrs:{href:"https://dev.to/azure/kubernetes-part-ii-revisiting-pods-and-nodes-and-introducing-services-and-labeling-5fi7",target:"_blank",rel:"noopener noreferrer"}},[e._v("Next part"),a("OutboundLink")],1)])])},[],!1,null,null,null);t.default=n.exports}}]);