import axios from "axios";
import common from "../../constant/common";
class ParentCategoryService{
    getAllParentCatgory(){
        return axios.get(common.API + "parentcategory")
    }
}
export default new ParentCategoryService();