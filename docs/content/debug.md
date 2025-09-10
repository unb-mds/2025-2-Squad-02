---
title: "Debug - Teste de URLs"
---

# Teste de URLs do Site

Este é um arquivo de debug para testar se as URLs estão funcionando.

**Data/Hora:** {{ now.Format "2006-01-02 15:04:05" }}

**Base URL:** {{ .Site.BaseURL }}

**URLs do Menu:**
{{ range .Site.Menus.main }}
- [{{ .Name }}]({{ .URL }}) - URL: `{{ .URL }}`
{{ end }}

**Links diretos para teste:**
- [Home](/) 
- [Sprints](/sprint/)
- [Arquitetura](/arquitetura/)
- [Sprint 0](/sprint/sprint-0/)
- [Sprint 1](/sprint/sprint-1/)

Se você consegue ver este conteúdo, significa que o Hugo está gerando as páginas corretamente.
