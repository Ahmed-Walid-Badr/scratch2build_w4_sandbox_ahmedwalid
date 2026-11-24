# Exercise 1: Squad Member Onboarding Card (15 Mins — Individual)

* **Time Window:** `00:25 – 00:40` (15 Minutes)

* **Format:** Individual Hands-On Drill (seated at Capstone Squad tables)

* **Target Repository:** `fcai-eclub/scratch2build-w4-sandbox`

* **Core Learning Goal:** Practice repository cloning, isolated feature branching (`feature/yourname-card`), atomic commits (`feat: ...`), setting upstream tracking (`-u`), and opening a clean Pull Request targeting `main`.

---

1. **Clone the repository and navigate inside:**

    ```bash
    git clone https://github.com/FCAI-E-Club-Tech-Committee/scratch2build_w4_sandbox.git
    cd scratch2build-w4-sandbox
    ```


2. **Create and switch to your isolated feature branch:**

    ```bash
    git checkout -b feature/<yourname>-card
    ```
    *(Example: `git checkout -b feature/sara-ahmed-card`)*

3. **Add your onboarding card in `index.html`:**
Open `index.html` in VS Code and paste your `<article class="member-card">` inside `<section id="squad-roster">` with your **Full Name**, **Capstone Squad Name**, and **Assigned Role**:

    ```html
    <article class="member-card">
        <h2>Your Full Name</h2>
        <p><strong>Squad:</strong> Your Squad Name</p>
        <p><strong>Role:</strong> Your Squad Role</p>
    </article>
    ```

4. **Stage, commit, and push your branch to GitHub:**

    ```bash
    git add index.html
    git commit -m "feat: add participant profile card for [Your Name]"
    git push -u origin feature/<yourname>-card
    ```

5. **Open a Pull Request (PR):**

   * Open [https://github.com/FCAI-E-Club-Tech-Committee/scratch2build_w4_sandbox.git](https://github.com/FCAI-E-Club-Tech-Committee/scratch2build_w4_sandbox.git) in your browser.
   * Click **Compare & pull request** next to your branch banner.

   * Verify the base branch is `main`, write a short description, and click **Create pull request**.

   * **Stop here—do NOT merge your PR yet** (wait for Exercise 2).
