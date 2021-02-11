module.exports = (req, res) => {
    const date = new Date().toString();
    res.status(500).send(date);
};