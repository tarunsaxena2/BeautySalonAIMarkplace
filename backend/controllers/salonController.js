const pool = require("../config/db");

const getSalons = async (req, res) => {
    try {

        const salons = await pool.query("SELECT * FROM salons ORDER BY id");

        res.json(salons.rows);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }
};

module.exports = {
    getSalons
};