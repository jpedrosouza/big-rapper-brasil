exports.createCandidate = async(candidate) => {
    const db = await require('../database').init();

    const responseData = await db.run(`
        INSERT INTO candidates(name, featured_music, image_url)
        VALUES (:name, :featured_music, :image_url)`, {
        ':name': candidate.name,
        ':featured_music': candidate.featured_music,
        ':image_url': candidate.image_url
    });

    return responseData;
}

exports.getAllCandidates = async() => {
    const db = await require('../database').init();

    const responseData = await db.all('SELECT * FROM candidates');

    return responseData;
}

exports.getWinner = async() => {
    const db = await require('../database').init();

    const responseData = await db.all(`
        SELECT * FROM candidates ORDER BY votes DESC LIMIT 1
    `);

    return responseData;
}

exports.vote = async(id) => {
    const db = await require('../database').init();

    const responseData = await db.run(`
        UPDATE candidates SET votes = votes + 1 WHERE id = ${id}
    `);

    return responseData;
}