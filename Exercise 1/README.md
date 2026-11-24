# Exercise 1: Squad Member Onboarding Card (15 Mins — Individual)

* **Time Window:** `00:25 – 00:40` (15 Minutes)

* **Format:** Individual Hands-On Drill (seated at Capstone Squad tables)

* **Target Repository:** `fcai-eclub/scratch2build-w4-sandbox`

* **Core Learning Goal:** Practice repository cloning, isolated feature branching (`feature/yourname-card`), atomic commits (`feat: ...`), setting upstream tracking (`-u`), and opening a clean Pull Request targeting `main`.

---

## 1. Starter `index.html` File (Pre-Loaded in `scratch2build-w4-sandbox`)

Have this exact starter file in the root of `fcai-eclub/scratch2build-w4-sandbox` so participants immediately see where to add their card:

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scratch2Build — Week 4 Cohort Roster</title>
        <style>
            body {
                font-family: system-ui, sans-serif;
                background: #0f172a;
                color: #f8fafc;
                padding: 2rem;
            }
            h1 {
                color: #38bdf8;
            }
            #squad-roster {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                gap: 1rem;
                margin-top: 1.5rem;
            }
            .member-card {
                background: #1e293b;
                border: 1px solid #334155;
                border-radius: 8px;
                padding: 1rem;
            }
            .member-card h2 {
                margin: 0 0 0.5rem;
                font-size: 1.1rem;
                color: #f1f5f9;
            }
            .member-card p {
                margin: 0.25rem 0;
                font-size: 0.9rem;
                color: #94a3b8;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Scratch2Build — Week 4 Squad Roster</h1>
            <p>
                Add your onboarding card inside <code>#squad-roster</code> via a
                feature branch PR.
            </p>
        </header>

        <main>
            <section id="squad-roster">
                <!-- SAMPLE CARD (Do not delete — add yours below!) -->
                <article class="member-card">
                    <h2>Ahmed Wael</h2>
                    <p><strong>Squad:</strong> Tech Leadership</p>
                    <p><strong>Role:</strong> Tech Lead</p>
                </article>

                <!-- TODO: Paste your <article class="member-card"> block below this line -->
            </section>
        </main>
    </body>
</html>
```

---

## 2. Student Step-by-Step Instructions (Display on Main Screen)

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

---

## 3. Facilitation & Pod Lead Diagnostic Guide (100% Hands-Off Policy)

Instructors and Pod Leads must **never touch a student's keyboard** during these 15 minutes. Use these exact diagnostic questions if a student gets stuck:

* **Issue A: `fatal: The current branch feature/... has no upstream branch`**

  * *Pod Lead Question:* "Read the `fatal:` line out loud. What flag does Git suggest right underneath to link your local branch to `origin`?" (`git push -u origin feature/yourname-card`)

* **Issue B: `Permission denied (403)` when pushing**

  * *Pod Lead Question:* "Did you accept the GitHub collaborator invite to `fcai-eclub/scratch2build-w4-sandbox` in your email or GitHub notifications, and which GitHub account is signed into VS Code / terminal (`git config user.name`)?"

* **Issue C: Student edited `main` directly before creating their branch**
  * *Pod Lead Question:* "Run `git status` and `git branch`. Which branch has the `*` next to it? If you run `git checkout -b feature/yourname-card` right now before committing, what happens to your uncommitted changes?" *(They safely carry over to the new branch!)*



---

## 4. Definition of Done (At `00:40`)

* Every participant has an open Pull Request on `fcai-eclub/scratch2build-w4-sandbox` from `feature/yourname-card` $\rightarrow$ `main`.


* `index.html` changes are clean and properly nested inside `<section id="squad-roster">`.