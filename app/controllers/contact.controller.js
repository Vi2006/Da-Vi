exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findALL = (req, res) => {
    res.send({ massage: "findALL handler" });
};

exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" });
};

exports.update = (req, res) => {
    res.send({ massage: "update handler" });
};

exports.delete = (req, res) => {
    res.send({ massage: "delete handler" });
};

exports.deletALL = (req, res) => {
    res.send({ massage: "deletALL handler" });
};

exports.findALLFavorite = (req, res) => {
    res.send({ massage: "findALLFavorite handler" });
};