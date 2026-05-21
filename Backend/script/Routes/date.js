const express = require("express");
const connection = require("../DB");
const router = express.Router();

router.get("/date", async (req, res) => {
  try {
    const sqlSelectPosteDate = `
            SELECT
                date_publication,
                CASE
                    WHEN NOW() - date_publication < INTERVAL '1 day'
                        THEN
                            TO_CHAR(EXTRACT(HOUR FROM (NOW() - date_publication)), 'FM00') || 'h' ||
                            TO_CHAR(EXTRACT(MINUTE FROM (NOW() - date_publication)), 'FM00')

                    WHEN NOW() - date_publication < INTERVAL '2 day'
                        THEN    
                            EXTRACT(DAY FROM (NOW() - date_publication))::int || ' jour ' ||
                            TO_CHAR(EXTRACT(HOUR FROM (NOW() - date_publication)), 'FM00') || 'h' ||
                            TO_CHAR(EXTRACT(MINUTE FROM (NOW() - date_publication)), 'FM00')

                    ELSE 
                        EXTRACT(DAY FROM (NOW() - date_publication))::int || ' jours ' ||
                        TO_CHAR(EXTRACT(HOUR FROM (NOW() - date_publication)), 'FM00') || 'h' ||
                        TO_CHAR(EXTRACT(MINUTE FROM (NOW() - date_publication)), 'FM00')
                END AS since_posted,
                NOW() - date_publication AS days_since_posted
            FROM poste
            ORDER BY date_publication ASC
        `;
    const selectPosteDateRequest = await connection.query(sqlSelectPosteDate);

    console.log("Posts found");
    return res.status(200).json(selectPosteDateRequest);
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
