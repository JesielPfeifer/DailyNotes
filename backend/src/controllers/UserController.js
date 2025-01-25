const User = require('../models/UserData');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    async findUser(request, response) {
        const id = request.params.id;
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return response.status(401).json({ msg: 'Access Denied' });
        }
        try {
            const secret = process.env.SECRET;
            jwt.verify(token, secret);
        } catch (error) {
            return response.status(500).json({ msg: 'Token Invalido' });
        }

        const user = await User.findById(id, '-password');
        if (!user) {
            return response.status(404).json({ msg: 'User not found' });
        }
        response.status(200).json({ user });
    },

    async login(request, response) {
        const { email, password } = request.body;
        //checking if mandatory infos is valid
        if (!email) {
            return response.status(422).json({ msg: 'E-mail é obrigatorio' });
        }
        if (!password) {
            return response.json({ msg: 'Senha é obrigatoria' });
        }

        //checking if user exists
        const userExists = await User.findOne({ email: email });
        if (!userExists) {
            return response.json({ msg: 'User not found' });
        }

        //Comparing if informed password its the same when user got registered
        const checkPassword = await bcrypt.compare(
            password,
            userExists.password,
        );
        if (!checkPassword) {
            return response.json({ msg: 'Invalid password' });
        }

        try {
            const secret = process.env.SECRET;
            const token = jwt.sign(
                {
                    id: userExists._id,
                },
                secret,
                { expiresIn: '1h' },
            );
            return response
                .status(200)
                .json({ msg: 'Authentication success', token });
        } catch (err) {
            return response.status(500).json({ msg: 'Internal Error', err });
        }
    },

    async register(request, response) {
        const { name, email, password, confirmPassword } = request.body;
        if (!name) {
            return response.status(422).json({ msg: 'O nome é obrigatorio' });
        }
        if (!email) {
            return response.status(422).json({ msg: 'O email é obrigatorio' });
        }
        if (!password) {
            return response.status(422).json({ msg: 'A senha é obrigatorio' });
        }
        if (password != confirmPassword) {
            return response.status(422).json({ msg: 'Senhas não conferem' });
        }

        const UserExists = await User.findOne({ email: email });
        if (UserExists) {
            return response.status(422).json({
                msg: 'Já existe um usuário cadastrado com este e-mail',
            });
        }

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            password: passwordHash,
        });

        try {
            await user.save();
            response.status(200).json({ msg: 'User created with success' });
        } catch (error) {
            response.status(500).json({ msg: 'Internal Error' });
        }
    },
};
