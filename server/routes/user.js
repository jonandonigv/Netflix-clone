const router = require('express').Router();
const User = require('../models/user');
const CryptoJs = require('crypto-js');
const verify = require('../utils/verifyToken');

// UPDATE

router.put('/:id', verify, async (req, res, next) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJs.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You can update only your account');
    }
});
// DELETE

router.delete('/:id', verify, async (req, res, next) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('User has been deleted');
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You can delete only your account');
    }
});
// GET

router.get('/find/:id', async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);
            const { password, ...info } = user._doc;
            res.status(200).json(info);
        } catch (error) {
            res.status(500).json(error);
        }
});
// GET ALL

router.delete('/', verify, async (req, res, next) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query ? await User.find().limit(10) : await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You are not allowed to see all users');
    }
});
// GET USER STATS

module.exports = router;