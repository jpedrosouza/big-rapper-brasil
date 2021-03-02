exports.init = async(db) => {
    await db.exec(`
    CREATE TABLE IF NOT EXISTS candidates (
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        name            TEXT NOT NULL,
        featured_music  TEXT NOT NULL,
        image_url       TEXT NOT NULL,
        votes           INTEGER DEFAULT 0 NOT NULL
    )
`);
}