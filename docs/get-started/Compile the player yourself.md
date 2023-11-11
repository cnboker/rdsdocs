---
sidebar_position: 2
---
# Compile the player yourself

## Compilation environment

* Ubuntu 16.04 LTS (Xenial Xerus) 64-bit
* Ubuntu 18.04 LTS (Bionic Beaver) 64-bit
* Ubuntu 20.04 LTS (Focal Fossa) 64-bit


## Install git

```bash
 sudo apt-get update
 sudo apt-get install git
 git --version
```

## Clone

```bash
git clone https://github.com/cnboker/bingo-raspberry-pi
cd bingo-raspberry-pi
```

## Compile image

``` bash
sudo ./bin/act --platform ubuntu-latest=lucasalt/act_base:latest -v
```

## Check the compiled image

* Raspberry PI 4 image directory:
 ./dist/alpine-rpi-latest-stable-aarch64.img.gz
