---
title: "How I Structure AI Automation Backends"
date: "2025-07-14"
summary: "Notes on keeping actor-based Rust services maintainable when orchestrating browser automation at scale."
---

When building automation backends, the hardest part is rarely the scraping. It is keeping sessions isolated, failures contained, and retries sane.

I default to actor-based concurrency in Rust. Each user session gets its own actor. The actor owns cookies, proxy state, and the current step of a workflow. If a step fails, the supervisor restarts the actor from a known checkpoint rather than letting the whole service degrade.

For browser automation, I separate the controller from the browser. The controller decides what to do next; the browser just executes. This makes it easier to swap headless providers, add observability, and mock interactions in tests.

A few rules I follow:

- Never store global mutable session state.
- Use idempotency keys for every external action.
- Expose health checks per actor pool, not just the process.
- Log structured events; aggregate traces later.

The result is a backend that is easier to reason about and much simpler to scale horizontally.
