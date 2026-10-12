# Online Quiz Portal (Web Version)

This is a beginner-friendly browser version of the Java Swing quiz project. It uses HTML, CSS and JavaScript, so you do not need to compile Java to run this web version.

## Run on your computer
1. Extract this ZIP into a folder.
2. Open that folder in VS Code (File → Open Folder).
3. Install the VS Code extension **Live Server** (by Ritwick Dey), if it is not already installed.
4. Open `index.html`.
5. Right-click inside the editor and choose **Open with Live Server**.
6. Your browser should open the portal at a local address similar to `http://127.0.0.1:5500`.

You can also double-click `index.html` to preview it, but Live Server is recommended.

## Deploy using GitHub Pages
1. Create or sign in to a GitHub account.
2. Create a new repository, for example `online-quiz-portal`.
3. Upload `index.html`, `style.css`, `app.js`, and `README.md` to the repository root (not inside another nested folder).
4. Open the repository's **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then click **Save**.
7. Wait for the deployment to finish. GitHub will show a website URL in Settings → Pages.

## Important limitations
- This starter uses browser `localStorage` for demo accounts and quiz history. Data stays in the same browser/device and does not sync between students/devices.
- Password hashes are created in the browser for this demo, but this is **not production-grade authentication**. Do not use real or reused passwords.
- Questions are starter samples (5 Easy, 5 Medium, 3 Hard per subject). They are not the 50 distinct questions per subject requested for the final project.
- For a real college deployment, use a server-side backend (for example Java Spring Boot) and a database such as MySQL/PostgreSQL. Do not treat this demo's client-side login as secure.
