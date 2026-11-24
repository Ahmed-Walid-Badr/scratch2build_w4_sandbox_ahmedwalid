### Exercise 2: Theme Collision & Inline Peer Review (20 Mins — Pairs)

* **Time Window:** `00:40 – 01:00` (20 Minutes)


* **Format:** Pair Programming inside Capstone Squads (**Partner A** & **Partner B**)


* **Target File:** `portal/config.js` inside `fcai-eclub/scratch2build-w4-sandbox`


* **Core Learning Goal:** Intentionally trigger a single-line merge conflict on **Line 4**, resolve the `<<<<<<<`, `=======`, `>>>>>>>` conflict markers cleanly in VS Code, and leave a constructive inline code review comment on GitHub's **Files changed** tab.



---

### 1. Starter `portal/config.js` File (Pre-Loaded in `scratch2build-w4-sandbox`)

Have this exact 8-line file inside the `portal/` directory of `fcai-eclub/scratch2build-w4-sandbox`:

```javascript
// Exercise 2: Both Partner A and Partner B must edit LINE 4 on separate branches!
const PORTAL_CONFIG = {
  appName: "FCAI Activity Portal",
  themeColor: "#2563eb", // <-- Partner A changes to "#10b981" | Partner B changes to "#f59e0b"
  maxEventsPerPage: 6,
  updatedBy: "Initial Setup"
};

console.log("Loaded Portal Configuration:", PORTAL_CONFIG);

```

---

### 2. Student Step-by-Step Instructions (Display on Main Screen)

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



---

### 3. Mid-Lab Triage & Pod Lead Diagnostic Guide (At `00:50`)

If multiple tables run into issues around the 10-minute mark (`00:50`), pause the room for **60 seconds** to run a quick hall-wide triage:

* **Common Pitfall A: Partner B runs `git pull origin main` *before* committing their local edits**
* *Error:* `error: Your local changes to the following files would be overwritten by merge: portal/config.js`
* *Pod Lead Diagnostic Question:* "Did you save your local snapshot with `git add` and `git commit` before asking Git to merge incoming changes from `main`?"




* **Common Pitfall B: Leaving `=======` or `>>>>>>>` markers inside `portal/config.js**`
* *Pod Lead Diagnostic Question:* "Open `index.html` in Chrome and check the DevTools **Console** tab. If you see `Uncaught SyntaxError: Unexpected token`, which conflict marker line is still sitting in `portal/config.js`?"


* **Common Pitfall C: Commenting in the main PR conversation box instead of inline**
* *Pod Lead Diagnostic Question:* "Are you on the **Conversation** tab or the **Files changed** tab? Hover over Line 4 in **Files changed**—what blue icon appears on the left margin?"





---

### 4. Definition of Done (At `01:00`)

* Every pair has triggered and resolved a real merge conflict in `portal/config.js` with zero remaining conflict markers.


* Both partners have left at least one inline review comment on each other's PR under **Files changed**.



Would you like to move on to **Block 5 (`Official Capstone Announcement & Squad Workshop`)** including the `PROPOSAL.md` template and squad role breakdown next?