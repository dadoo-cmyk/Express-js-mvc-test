exports.getHome = (req, res) => {
    res.json({ message: "Welcome to the Home Route!" });
};

exports.getAbout = (req, res) => {
    res.json({ message: "This is the About response." });
};

exports.getContact = (req, res) => {
    res.json({ message: "This is the Contact response." });
};

exports.getGreeting = (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.json({ 
        greeting: "Hello, Developer!", 
        serverTime: currentTime 
    });
};

exports.handleData = (req, res) => {
    const userData = req.body;
    res.json({
        status: "Data received successfully",
        yourData: userData
    });
};
