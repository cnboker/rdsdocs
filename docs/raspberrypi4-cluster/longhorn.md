---
sidebar_position: 13
---

# Installation

## Add the Longhorn Helm repositoy

```bash
helm repo add longhorn https://charts.longhorn.io
```

## Fetch the latest charts from the repository

```bash
helm repo update
```

## Install Longhorn in the longhorn-system namespace

```bash

helm install longhorn longhorn/longhorn --namespace longhorn-system --create-namespace --version 1.5.3
```

## Confirm that the depoyment successed

```bash
kubectl -n longhorn-system get pod
```

The result should look like the following:
