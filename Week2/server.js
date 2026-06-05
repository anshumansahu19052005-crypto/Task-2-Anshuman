const express = require("express");
const app = express();

app.use(express.json());
const port = 5000;

const profiles = [
    {
        id: 1,
        name: "Anshuman",
        role: "Developer"
    }
];

app.get("/api/profiles", (req, res) => {
    res.json(profiles);
});

app.post("/api/profiles", (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({
            message: "Name and Role are required"
        });
    }

    const newProfile = {
        id: profiles.length + 1,
        name,
        role
    };

    profiles.push(newProfile);
    res.status(201).json(newProfile);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.delete("/api/profiles/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = profiles.findIndex(profile => profile.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Profile not found"
        });
    }

    profiles.splice(index, 1);

    res.json({
        message: "Profile deleted successfully"
    });
});