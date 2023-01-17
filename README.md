# mdotbaig.github.io

Creating a GitHub page:

Create a new repository on GitHub with the name 'username.github.io', where username is your GitHub username.

Clone the repository to your local machine and add your HTML, CSS, and JavaScript files to the repository.

Push the changes to the master branch of the repository on GitHub.

Wait for a few minutes for GitHub to build and deploy your site. You can then view your site by going to your username dot github dot io

---
To connect your domain to your GitHub Pages site, you'll need to configure your domain's DNS settings to point to GitHub's servers. You can do this by adding a CNAME record to your domain's DNS configuration that points to username.github.io.

Add a file named CNAME to your repository and put your domain name in it.

After making the above changes, you will be able to access your site by going to your domain name.

To add a CNAME record to your domain's DNS configuration to point to mdotbaig.github.io, you will need to follow these steps:

Log in to your domain registrar's account.

Locate the DNS settings for your domain. This may be under a section called "DNS Management," "Name Server Management," or something similar.

Add a new CNAME record to your DNS settings. The record should have the following values:

Hostname: "www" (or any other subdomain you want to use)
Points to: "mdotbaig.github.io"
Save the changes and wait for the DNS changes to propagate. This can take anywhere from a few minutes to a few hours, depending on your registrar and hosting service.
