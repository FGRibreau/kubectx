# kubectx

kubectx is an utility to manage and switch between kubectl contexts.

![kubectx](/docs/kubectx.gif)

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

- [ ] rewrite in Rust
- [ ] support namespace switch as well (kubens)

#### Related work

kubectx is completly inspired by [kubectx](https://github.com/ahmetb/kubectx) from Ahmet Alp Balkan. I personally prefer the interactive way that's why this project exist :).
