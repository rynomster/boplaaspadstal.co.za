# Boplaas Padstal website

A single-page, static website for Boplaas Padstal. It uses only HTML, CSS and a tiny JavaScript file for the current year.

## Files

- `index.html` — the complete one-page website
- `styles.css` — all visual and responsive styling
- `script.js` — updates the copyright year
- `images/` — logo, storefront and Open Day poster
- `CNAME` — connects GitHub Pages to `boplaaspadstal.co.za`
- `DESIGN.md` — design rules for future changes

There are no packages to install, no database, no server and no build command.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any basic static web server.

## Publish on GitHub Pages

1. Create a new empty GitHub repository.
2. Upload the **contents of this folder** to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages** in GitHub.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch `main`, folder `/ (root)`, then save.
7. Configure the domain's DNS according to the current GitHub Pages instructions. The included `CNAME` file already declares `boplaaspadstal.co.za` as the custom domain.

After DNS has propagated, enable **Enforce HTTPS** in the GitHub Pages settings.
