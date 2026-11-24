const STORAGE_KEY = "fcai_portal_bookmarks";

function loadBookmarks() {
    const rawStorage = window.localStorage.getItem(STORAGE_KEY);

    // BUGGY LINE (Uncomment to show crash in DevTools Sources panel):
    // const bookmarks = JSON.parse(rawStorage);

    // SAFE FIX (Fallback to empty array when localStorage is null):
    const bookmarks = JSON.parse(rawStorage) || [];
    return bookmarks;
}

function addBookmark(title) {
    const bookmarks = loadBookmarks(); // <-- CLICK LINE NUMBER IN DEVTOOLS TO SET BREAKPOINT
    bookmarks.push({ title, savedAt: new Date().toLocaleTimeString() });

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    renderBookmarks();
}

function renderBookmarks() {
    const listEl = document.querySelector("#bookmark-list");
    const bookmarks = loadBookmarks();

    listEl.innerHTML = bookmarks
        .map((item) =>
            `<li><strong>${item.title}</strong> — saved at ${item.savedAt}</li>`,
        )
        .join("");
}

document.querySelector("#add-bookmark-btn").addEventListener("click", () => {
    addBookmark("Git & GitHub Build Lab");
});

renderBookmarks();
