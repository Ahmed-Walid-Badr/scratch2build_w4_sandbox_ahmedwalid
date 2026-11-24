### Exercise 2: Theme Collision & Inline Peer Review (20 Mins — Pairs)

* **Time Window:** `00:40 – 01:00` (20 Minutes)


* **Format:** Pair Programming inside Capstone Squads (**Partner A** & **Partner B**)


* **Target File:** `portal/config.js` inside `fcai-eclub/scratch2build-w4-sandbox`


* **Core Learning Goal:** Intentionally trigger a single-line merge conflict on **Line 4**, resolve the `<<<<<<<`, `=======`, `>>>>>>>` conflict markers cleanly in VS Code, and leave a constructive inline code review comment on GitHub's **Files changed** tab.

---

#### Step 1: Pair Up & Create Separate Branches off `main`



Pair up with a teammate at your Capstone Squad table (**Partner A** & **Partner B**):

* **Partner A runs:**


    ```bash
    git checkout main
    git pull origin main
    git checkout -b feature/partner-a-theme
    ```


* **Partner B runs:**


    ```bash
    git checkout main
    git pull origin main
    git checkout -b feature/partner-b-theme
    ```



#### Step 2: Both Partners Edit Line 4 of `portal/config.js`



* **Partner A** edits `portal/config.js` to set `themeColor` to `"#10b981"` (Emerald Green) and updates `updatedBy` to their name.


* **Partner B** edits `portal/config.js` to set `themeColor` to `"#f59e0b"` (Amber Gold) and updates `updatedBy` to their name.



#### Step 3: Partner A Commits, Pushes & Merges First



1. Partner A stages, commits, and pushes:
    ```bash
    git add portal/config.js
    git commit -m "feat: update themeColor to emerald green"
    git push -u origin feature/partner-a-theme
    ```


2. Partner A opens a Pull Request on GitHub targeting `main` and clicks **Merge pull request**.



#### Step 4: Partner B Pulls `main` & Triggers the Merge Conflict



1. Partner B commits their local edit first:
    ```bash
    git add portal/config.js
    git commit -m "feat: update themeColor to amber gold"
    ```


2. Partner B pulls the updated `main` branch into their feature branch:
    ```bash
    git pull origin main
    ```


Git will pause and display: `CONFLICT (content): Merge conflict in portal/config.js`.



#### Step 5: Resolve the Conflict Cleanly in VS Code



Open `portal/config.js` in VS Code. You will see the 3-way conflict block:

```javascript
<<<<<<< HEAD
  themeColor: "#f59e0b",
=======
  themeColor: "#10b981",
>>>>>>> main
```

1. Choose one final `themeColor` hex value and combine both names in `updatedBy` (e.g., `"Partner A & Partner B"`).


2. **Delete all three conflict marker lines (`<<<<<<<`, `=======`, `>>>>>>>`)** and save the file.


3. Stage, commit, push, and open a PR:


    ```bash
    git add portal/config.js
    git commit -m "fix: resolve themeColor merge conflict in portal config"
    git push -u origin feature/partner-b-theme
    
    ```



#### Step 6: Execute Inline Peer Code Review on GitHub



* Both partners open each other's Pull Request on GitHub.


* Click the **Files changed** tab, hover over any modified line, click the blue **`+`** icon, and leave **1 constructive inline code review comment**.
* Both partners have left at least one inline review comment on each other's PR under **Files changed**.
