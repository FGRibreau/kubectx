# kubectx

:star::star::star::star::star::star::star::star::star::star::star::star::star::star::star::star::star::star:

**Checkout [kubectx-rs](https://github.com/FGRibreau/kubectx-rs) the rust equivalent ([smaller and faster](https://twitter.com/FGRibreau/status/890998705100292096)) with [pre-compiled binairies](https://github.com/FGRibreau/kubectx-rs)**.

:star::star::star::star::star::star::star::star::star::star::star::star::star::star::star::star::star::star:

Fastest switch between Kubernetes contexts 🏎.

![kubectx](/docs/kubectx.gif)

### Setup

```bash
npm i kubectx -g
```

### Usage

```sh
➜  / kubectx
? Select kubectl context (Use arrow keys)
  image-charts-production
❯ killbug-development
  minikube
  ouest-france-development
```

#### Next steps

I wish I could find an [inquirer](https://github.com/SBoudrias/Inquirer.js)-like library in Rust and rewrite this little tool in Rust instead.

- [x] rewrite in Rust
- [ ] support namespace switch as well (kubens)

#### Related work

kubectx is completly inspired by [kubectx](https://github.com/ahmetb/kubectx) from Ahmet Alp Balkan. I personally prefer the interactive way that's why this project exist :).
