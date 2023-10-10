const { Category } = require("../models");
// Create category service
const create_category = async (reqbody) => {
  return Category.create(reqbody);
};
// Get category list service
const get_category_list = async () => {
    return Category.find();
};
// Get categiry by name service
const get_category_by_name = async(category_name)=>{
  return Category.findOne({category_name})
}
// Get category by id service
const get_category_by_id = async(category_id) => {
  return Category.findById(category_id);
}
// Delete category service
const delete_category = async(category_id) => {
  return Category.findByIdAndDelete(category_id);
}
// Update category service
const update_category = async(category_id,reqbody) => {
  return Category.findByIdAndUpdate(category_id,{$set:reqbody});
}
// Service object export
module.exports = {
    create_category,
    get_category_list,
    get_category_by_name,
    get_category_by_id,
    delete_category,
    update_category
}