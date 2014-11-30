---
layout: post
category: web
title: "How to Deploy Node.js Apps on DigitalOcean with Dokku"
---

[DigitalOcean](https://www.digitalocean.com/?refcode=b6e88bd5d84c) is a great place to host your web apps, being cheaper than other, managed services like Nodejitsu or Heroku. It has a $5/month plan, and using the DigitalOcean promo code `OMGSSD10` gives you $10 credit (two months) for free to try it out. This might expire, so Google for promo codes if it has.

Nodejitsu and Heroku justify their higher pricetag by offering better support and ease of deployment—the former is hard to gauge, but the complexities of the latter, when using DigitalOcean, can be mitigated thanks to [Dokku](https://github.com/progrium/dokku).

Dokku is an awesome abstraction of Docker. Basically, Dokku provides a better interface to app deployment, comparable to the offerings of Heroku and Nodejitsu. It works for any VPS, but I like DigitalOcean. Here is a guide on how to set up and deploy your first application to DigitalOcean using Dokku.


## Sign up

Sign up for DigitalOcean. 

Add a credit card—I would love to not have to do this, but they don't charge you. Don't forget to use the free promo code.

## SSH Keys

Click `SSH Keys` in the sidebar. Setting up an SSH key first isn't mandatory, but it's better in the long run.

In your local Terminal, change into your `~/.ssh` directory.

    cd ~/.ssh

Generate an SSH key. **Note:** I *didn't* use the default `/Users/username/.ssh/id_rsa` because I prefer to name my SSH keys more explicitly. I recommend saving it to `/Users/username/.ssh/id_rsa_digitalocean_appname`—the rest of the guide assumes the keys are saved to this location.

    ssh-keygen -t rsa -C "email@example.com"


Enter a passphrase if you want.
Copy the public key contents to your clipboard.

    cat ~/.ssh/id_rsa_digitalocean_appname.pub | pbcopy

Click `Add SSH Key` at the top of the DigitalOcean SSH Key page. Paste the contents in. Name it something explicit.

## The Droplet

We now have to create a new Drop on the DigitalOcean website.

- Click Create Droplet on the DigitalOcean website.
- Enter a hostname.
- Select the plan you want.
- Select a region.
- Under *Select Image*, click the tab for `Applications` and choose `Dokku-v...`.
- Select the SSH key you created before.
- Click `Create Droplet`.

## Initial Access

SSH into your new Droplet. Your IP address is available from the DigitalOcean website; it's in the top information bar.

    ssh root@YOUR.DROPLET.IP.ADDRESS

If prompted, enter the password emailed to you. You might have to have your password reset and then emailed to you. Do this from the *Access* tab in the main DigitalOcean web interface.

After a few seconds, you'll be running commands on the remote Droplet.

Visit the Droplet in your web browser by opening `YOUR.DROPLET.IP.ADDRESS`. 

Everything should be configured properly by default, but if it isn't, you can change your settings here. Hit `Finish Set up`.

## Configuring The App

Create a garden-variety Node.js application, such as the Hello World example on the Node.js homepage. You can also use your own.

We need to create a Procfile in the root of your application directory.

    touch Procfile && open Procfile

Add the command to run the application (or whatever your main app file is) to the `Procfile`

    web: node app.js

Create a `package.json` file. I used `npm init` and followed the interactive prompt.

    npm init

Here is the result, which you can use as an example `package.json`:

    {      
        "name": "YOUR-APP-NAME", 
        "version": "0.0.0",      
        "description": "",      
        "main": "app.js",      
        "scripts": {        
            "test": "echo \"Error: no test specified\" && exit 1"      
        },      
        "author": "",
        "license": "BSD-2-Clause" 
    }

Initialise a git repository in this directory, add and commit your changes.

    git init && git add -A && git commit -m "Initial commit"

Replicate your public SSH Key on your Droplet. 

    cat ~/.ssh/id_rsa_digitalocean_appname.pub | ssh root@YOUR.DROPLET.IP.ADDRESS "sudo sshcommand acl-add dokku YOUR-APP-NAME"

If you used the non-default (i.e. anything other than `~/.ssh/id_rsa`) location for the SSH Key (I used `/Users/username/.ssh/id_rsa_digitalocean_appname`), then you need to adjust your SSH config file.

    open ~/.ssh/config

Add information so that git knows where the proper SSH Keys are saved. Remember to change both the `IP ADRESS` and the SSH Key location.

    Host YOUR.DROPLET.IP.ADDRESS
        IdentityFile ~/.ssh/id_rsa_digitalocean_appname

Add the remote production server to the git repository. 

    git remote add production dokku@YOUR.DROPLET.IP.ADDRESS:YOUR-APP-NAME

## Deployment
Push the app to the production Droplet 

    git push -u production master

On Mac OS X, if you set a passphrase for the SSH key, you might be asked to enter your password. Do that.

If successful, your last lines of output will be 

    ----->Application deployed: 
        http://YOUR.DROPLET.IP.ADDRESS:PORT

You now need to tell the app to run. SSH into your Droplet.

    ssh root@YOUR.DROPLET.IP.ADDRESS

Change into your application directoy.

    cd /home/dokku/YOUR-APP-NAME

Tell the application to run.

    dokku run YOUR-APP-NAME node app.js

You should now be able to access your application by visting `YOUR.DROPLET.IP.ADDRESS:PORT` in your web browser.

If something doesn't work, or if you have trouble, feel free to [contact me on Twitter](http://twitter.com/_matthewpalmer).

