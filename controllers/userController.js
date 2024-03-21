const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Import bcrypt here

const multer = require('multer');
exports.upload = multer(); // Assuming you have multer configured properly

exports.register = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Hash with a salt of 10 rounds

        // Create a new user with the hashed password
        const user = new User({ email, password: hashedPassword });
        await user.save();

        res.status(201).send({ status: true, data: user, message: 'User registered successfully!' });
    } catch (error) {
        // Log the error for debugging
        console.error(error);

        // Provide a generic error message to the client
        res.status(500).send({ message: error });
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: 'User Not found.' });
        }
        // Compare the provided password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: 'Invalid Password!' });
        }
        // If passwords match, generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).send({ status:true,data:user,token:token });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

