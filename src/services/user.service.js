const { User } = require("../models");
// Create user service
const create_user = async (reqBody) => {
  return User.create(reqBody);
};
// Get user list service
const get_user_list = async () => {
  return User.find();
};
// Get user by email service
const get_user_by_email = async (email) => {
  return User.findOne({ email });
};
// Get user details by id service
const get_user_by_id = async (user_id) => {
  return User.findById(user_id);
};
// User details update by id
const update_details = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};
// Delete user Service
const delete_user = async (userId) => {
  return User.findByIdAndDelete(userId);
};
// Update user controller
const update_user = async (userId,reqbody) => {
  return User.findByIdAndUpdate(userId,{$set:reqbody});
};
// Service object export
module.exports = {
  create_user,
  get_user_list,
  get_user_by_id,
  update_details,
  get_user_by_email,
  delete_user,
  update_user
};
