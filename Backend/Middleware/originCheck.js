const allowedOrigins = [
    "https://student-sup.netlify.app",
    "http://localhost:5173"
];

export const originCheck = (req, res, next) => {
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        next();
    } else {
        return res.status(403).json({ message: "Access denied: Invalid origin" });
    }
};
