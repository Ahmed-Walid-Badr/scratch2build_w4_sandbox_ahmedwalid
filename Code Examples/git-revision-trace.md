## 1. Visual Commit Graph & Pointer Trace (00:00 – 00:05 | Laptops Closed)

Project or draw this graph on the board before anyone touches a keyboard:

```text
               [C3]  <-- feature/ahmed-card
              /
[C1] <--- [C2]  <-- main (origin/main)
              \
               [C4]  <-- feature/sara-card (HEAD - You are here)

```

### What to Say While Pointing at the Graph

* **Commits (`[C1]`, `[C2]`):** Not "diff files"—each commit is a complete snapshot of your project stamped with a unique SHA-1 hash (`a1b2c3d`) and pointing backward to its parent.


* **Branches (`main`, `feature/sara-card`):** Just lightweight, movable bookmarks pointing to a single commit.


* **`HEAD`:** Your active GPS pin showing which branch you are currently standing on.


* **Golden Rule of Team Git:** `main` is the **production source of truth**. Nobody codes directly on `main`; every feature or fix lives on an isolated branch (`feature/...`) and enters `main` only through a reviewed Pull Request (PR).



### Cold-Call Trace Question #1

> **Ask the room:** *"Partner A merges `feature/ahmed-card` into `main` on GitHub, so `main` moves forward to `[C5]`. Partner B is still locally on `feature/sara-card` and tries to run `git push origin main`. Why does Git reject it?"*
> 
> 
> **Expected Answer:** Remote `main` has new commits (`[C5]`) that Partner B does not have locally yet—Git blocks the push to prevent silently overwriting Partner A's work.
> 
> 

---

## 2. Syncing Safely: `git fetch` vs. `git pull` (00:05 – 00:08)

Use this side-by-side comparison to clear up the most common team Git confusion:

```bash
# OPTION A: Inspect First (Non-Destructive)
git fetch origin
# -> Downloads new commits from GitHub into `origin/main`
# -> Does NOT touch your working files or active branch!

# OPTION B: Fetch + Immediate Merge
git pull origin main
# -> Runs `git fetch origin` AND immediately runs `git merge origin/main`
# -> If your local edits overlap with incoming commits, Git pauses with a Merge Conflict!

```

### What to Say

* **`fetch` is looking in the mailbox; `pull` is dumping the mail onto your desk.**


* When starting work or syncing before opening a PR, run `git checkout main` $\rightarrow$ `git pull origin main` $\rightarrow$ `git checkout feature/your-branch` $\rightarrow$ `git merge main` so you resolve any conflicts on *your* feature branch, never on `main`.



---

## 3. Anatomy of a 3-Way Merge Conflict (00:08 – 00:12)

Project this exact 5-line conflict block on screen (this matches Exercise 2 so students recognize it immediately):

```javascript
const PORTAL_CONFIG = {
  appName: "FCAI Activity Portal",
<<<<<<< HEAD (Your current local branch)
  themeColor: "#f59e0b",
=======
  themeColor: "#10b981",
>>>>>>> origin/main (Incoming changes from GitHub)
  maxEventsPerPage: 6
};

```

### Line-by-Line Breakdown for Explanation

1. **`<<<<<<< HEAD`:** Start of **your** local changes on the branch you currently have checked out.


2. **`=======`:** The divider separating the two conflicting versions.


3. **`>>>>>>> origin/main`:** End of the **incoming** changes coming from `main` (or your teammate's merged PR).



### Cold-Call Trace Questions #2 & #3

> **Question 2:** *"Does seeing `<<<<<<< HEAD` mean our repository is corrupted?"*
> **Answer:** No! Git is simply pausing and asking a human engineer to decide which business value belongs on Line 4.
> 
> 
> **Question 3:** *"What happens if you edit the color to `#10b981`, save, and commit—but forget to delete the `=======` line?"*
> **Answer:** JavaScript crashes at runtime with `SyntaxError: Unexpected token '=='`. All three marker lines (`<<<<<<<`, `=======`, `>>>>>>>`) must be completely deleted before staging and committing.
> 
> 

---

## 4. Safe Undo on Shared Teams: `git revert` vs. `git reset` (00:12 – 00:15)

Project this terminal comparison:

```bash
# ❌ DANGEROUS ON SHARED BRANCHES (Rewrites history & breaks teammates' branches)
git reset --hard HEAD~1

# ✅ SAFE FOR TEAMS (Creates a brand-new inverse commit)
git log --oneline          # Find the broken commit hash (e.g., 8f3a91c)
git revert 8f3a91c         # Safely undoes 8f3a91c by adding a new commit on top
git push origin feature/your-branch

```

### What to Say

* If you already pushed a broken commit to GitHub, **never** use `git reset --hard`—it erases history that teammates may have already pulled.


* `git revert <hash>` preserves the audit trail and creates a clean new commit that reverses the bug.



---

## 5. Pre-Built Reference Walkthrough: PRs, Code Review & DevTools Debugging (00:15 – 00:25 | Watch Only)

Keep laptops closed and walk through these two live demonstrations on the projector:

### Demo A: Clean PR & Inline Code Review (5 Mins)

1. Open `fcai-eclub/scratch2build-w4-sandbox` in VS Code.


2. Show the clean feature branch flow in terminal:


```bash
git checkout -b feature/demo-theme
git add portal/config.js
git commit -m "feat: update portal theme configuration"
git push -u origin feature/demo-theme
```

3. Switch to GitHub $\rightarrow$ Open a Pull Request $\rightarrow$ Click the **Files changed** tab.


4. Hover over a line number, click the blue **`+`** icon, and leave an inline review comment (e.g., *"Clean hex update! Let's make sure we verify color contrast against the dark background before merging into main."*). Explain that **Code Review is collaborative quality assurance, not criticism**.





### Demo B: Chrome DevTools `Sources` Breakpoints & BOM `localStorage` (5 Mins)

*(Covers the DevTools debugging topic skipped during the online session)*

Project this exact snippet in VS Code / Chrome DevTools (`devtools-bom-demo.js`):

```javascript
const STORAGE_KEY = "fcai_portal_bookmarks";

function loadBookmarks() {
  const rawStorage = window.localStorage.getItem(STORAGE_KEY);

  // ❌ BUGGY LINE (Crashes on fresh browser because rawStorage is null):
  // const bookmarks = JSON.parse(rawStorage);

  // ✅ DEFENSIVE FIX (Fallback to empty array when localStorage is null):
  const bookmarks = JSON.parse(rawStorage) || [];
  return bookmarks;
}

function addBookmark(title) {
  const bookmarks = loadBookmarks(); // <-- CLICK LINE NUMBER IN DEVTOOLS TO SET BREAKPOINT
  bookmarks.push({ title, savedAt: new Date().toLocaleTimeString() });

  // BOM localStorage only stores strings -> serialize with JSON.stringify()
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  renderBookmarks();
}

```

### Live Projector Steps for Demo B

1. Open Chrome DevTools (`F12`) $\rightarrow$ Go to the **`Sources`** tab $\rightarrow$ Open `devtools-bom-demo.js`.


2. Click the line number next to `const bookmarks = loadBookmarks();` to drop a **blue breakpoint**.


3. Trigger the button click in the browser so execution freezes mid-function.


4. Point out three panels on the right side of DevTools:


   * **Scope Panel:** Show `rawStorage: null` on a fresh browser (proving why `JSON.parse(null)` returns `null` instead of `[]`, causing `.push()` to throw `TypeError: Cannot read properties of null`).


   * **Watch Panel:** Type `window.location.href` or `typeof bookmarks` to inspect live BOM state without polluting code with `console.log()`.


   * **Call Stack Panel:** Show the exact chain of functions that triggered the event.




5. Click **Resume script execution (`F8`)** and transition directly to Exercise 1.



---

## Quick Checklist Before You Start Speaking

* [ ] Visual commit graph (`C1 <- C2 <- C3 / C4`) drawn on whiteboard or loaded on Slide 3.


* [ ] `fcai-eclub/scratch2build-w4-sandbox` open in VS Code and GitHub in browser tabs.


* [ ] Chrome DevTools **`Sources`** tab open with a breakpoint ready on `devtools-bom-demo.js`.


* [ ] Laptops closed enforced until **00:25**.