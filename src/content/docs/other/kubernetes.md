---
title: Kubernetes Crash Course
---

> [Kubernetes Crash Course for Absolute Beginners](https://www.youtube.com/watch?v=s_o8dwzRlu4)


## What is Kubernetes?
- open source container **ochestration tool**
- developed by Google
- helps manage containerized applications in different deployment environments (physical, cloud, hybrid)

## Need for container orchestration tool
- trend from **monolithic** to **microservices** architecture
  - monolithic: one large application
  - microservices: many small applications
- increased usage of containers

## What feastures do orchestration tools provide?
- high availability
  - no downtime
- scalability
  - adjusts to increasing/decreasing load
- disaster recovery
  - backup and restore

## Kubernetes Architecture
- **cluster**
  - made up of **nodes**
- **master node**
  - runs important K8s processes
  - manages cluster
  - schedules applications
  - monitors cluster
  - API server
    - entrypoint  to K8s cluster
    - validates and processes requests
- **worker node**
  - runs applications
  - communicates with master node
  - 
- **kubelet**
  - a process that runs on each worker node