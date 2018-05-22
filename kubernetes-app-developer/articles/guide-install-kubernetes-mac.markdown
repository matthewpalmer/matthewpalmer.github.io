This is a step-by-step guide to installing and running Kubernetes on your Mac so that you can develop applications locally. 

> This is an excerpt from my book, [Golden Guide to Certified Kubernetes Application Development](../). If you’re a web application developer who wants to become a Kubernetes expert very quickly, check out the book.

You will be guided through running and accessing a Kubernetes cluster on your local machine using the following tools:

* Homebrew
* Docker for Mac
* Minikube 
* virtualbox
* kubectl

## Installation Guide

The only pre-requisite for this guide is that you have [Homebrew](https://brew.sh) installed. Homebrew is a package manager for the Mac. You’ll also need [Homebrew Cask](https://caskroom.github.io), which you can install after Homebrew by running `brew tap caskroom/cask` in your Terminal.

1. Install [Docker for Mac](https://docs.docker.com/docker-for-mac/install/). Docker is used to create, manage, and run our containers. It lets us construct containers that will run in Kubernetes Pods.

2. Install [VirtualBox for Mac](https://www.virtualbox.org) using Homebrew. Run `brew cask install virtualbox` in your Terminal. VirtualBox lets you run virtual machines on your Mac (like running Windows inside macOS, except for a Kubernetes cluster.)

**Skip to step three if everything seems fine to this point. The note below might be useful for people like me with VirtualBox already installed.**

In my case, I already had the non-Homebrew VirtualBox app installed which caused issues when trying to start minikube. If you already have VirtualBox installed, start the installation as before with `brew cask install virtualbox`. You will get a warning that confirms this saying `Warning: Cask 'virtualbox' is already installed.`. Once this is confirmed, you can reinstall VirtualBox with Homebrew by running `brew cask reinstall virtualbox`. 

If you happen to have VirtualBox already running when you do this, you could see an error saying `Failed to unload org.virtualbox.kext.VBoxDrv - (libkern/kext) kext is in use or retained (cannot unload).` This is because the kernel extensions that VirtualBox uses were in use when the uninstall occurred. If you scroll up in the output of that command, beneath `Warning! Found the following active VirtualBox processes:` you’ll see a list of the processes that need to be killed. Kill each of these in turn by running `kill first_column_number` (`first_column_number` is the process identifier for that process).

Now re-run `brew cask reinstall virtualbox` and it should succeed.

3. Install [`kubectl`](https://kubernetes.io/docs/tasks/tools/install-kubectl/) for Mac. This is the command-line interface that lets you interact with Kuberentes. Run `brew install kubectl` in your Terminal.

4. Install [Minikube](https://kubernetes.io/docs/getting-started-guides/minikube/) via the [Installation > OSX instructions from the latest release](https://github.com/kubernetes/minikube/releases). At the time of writing, this meant running the following command in your Terminal: `curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.27.0/minikube-darwin-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/`. Minikube will run a Kubernetes cluster with a single node.

5. Everything should work! Start your Minikube cluster with `minikube start`. Then run `kubectl api-versions`. If you see a list of versions, everything’s working! `minikube start` might take a few minutes.

At this point, I got an error saying `Error starting host: Error getting state for host: machine does not exist.` because I had previously tried to run Minikube. You can fix this by running `open ~/.minikube/` to open Minikube’s data files, and then deleting and deleting the `machines` directory. Then run `minikube start` again.

![Running Minikube on Mac using VirtualBox](./minikube-mac.png)

## Come Together

You’ve installed all these tools and everything looks like it’s working. A quick explanation of how the components relate is needed.

* VirtualBox is a generic tool for running virtual machines. You can use it to run Ubuntu, Windows, etc. inside your macOS operating system host.
* Minikube is a Kubernetes-specific package that runs a Kubernetes cluster on your machine. That cluster has a single node and has some unique features that make it more suitable for local development. Minikube tells VirtualBox to run. Minikube can use other virtualization tools—not just VirtualBox—however these require extra configuration.
* `kubectl` is the command line application that lets you interact with your Minikube Kubernetes cluster. It sends request to the Kubernetes API server running on the cluser to manage your Kubernetes environment. `kubectl` is like any other application that runs on your Mac—it just makes HTTP requests to the Kubernetes API on the cluster.

