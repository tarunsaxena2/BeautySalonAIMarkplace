const pool = require("../config/db");

const createBooking = async (req, res) => {
    try {

        const {
            user_id,
            salon_id,
            service_name,
            booking_date,
            booking_time
        } = req.body;

        await pool.query(
            `INSERT INTO bookings
            (user_id,salon_id,service_name,booking_date,booking_time)
            VALUES($1,$2,$3,$4,$5)`,
            [
                user_id,
                salon_id,
                service_name,
                booking_date,
                booking_time
            ]
        );

        res.status(201).json({
            message: "Booking Successful"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }
};

const getBookings = async (req, res) => {

    try{

        const result = await pool.query(`
        SELECT bookings.*,
        salons.salon_name

        FROM bookings

        JOIN salons

        ON bookings.salon_id=salons.id

        ORDER BY bookings.id DESC
        `);

        res.json(result.rows);

    }catch(err){

        console.log(err);

        res.status(500).json({
            message:"Server Error"
        });

    }

};
const updateBooking = async (req, res) => {

    try {

        const { id } = req.params;
        const { status } = req.body;

        await pool.query(
            "UPDATE bookings SET status=$1 WHERE id=$2",
            [status, id]
        );

        res.json({
            message: "Booking Updated Successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports={
createBooking,
getBookings,
updateBooking
};