import RequestError from "../utils/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";
import { validate } from '../utils/validate.js';
import { userDal } from '../dal/userDal.js'
import { User } from "../types/users.js";

const register = async (userInput: User) => {

    // Validate email format
    validate.validateEmail(userInput.email);
    // hash password
    const hashedPassword = await validate.hashPassword(userInput.password);
    // Create user object    
    const newUser = {
        first_name: userInput.first_name,
        last_name: userInput.last_name,
        email: userInput.email,
        phone: userInput.phone,
        password: hashedPassword,
        permissions: userInput.permissions
    };
    // Register the user
    const addedUser = await userDal.addUser(newUser);
    return { message: "User registered successfully", user: addedUser };
};


const getUserByEmailService = async (email: string) => {
    
    const data = await userDal.getUserByEmail(email);
    
    if (data) return data
    throw new RequestError("error getting service", STATUS_CODES.INTERNAL_SERVER_ERROR)
}

const validatePasswordService = async (password: string, hashedPassword: string) => {
    const data = await validate.validatePassword(password, hashedPassword);
    if (data) return data
    throw new RequestError("error validate Password .service", STATUS_CODES.UNAUTHORIZED)
}


const deleteUser = async (id:string) => {
    const user = await userDal.deleteUser(id);
    if (!user) {
        throw new RequestError("error delete user", STATUS_CODES.NOT_FOUND)
    }
    return user
};



const allUsers =  async () => {
  const data = await userDal.getAllDal();
  if (data!) return data
  throw new RequestError("error getting all users .service", STATUS_CODES.INTERNAL_SERVER_ERROR)
};

export const userService = {
    register,
    getUserByEmailService,
    validatePasswordService,
    deleteUser,
    allUsers
}