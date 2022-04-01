import axios from "axios";

const UserAPI = {
    getUser() {
        return axios.get("https://gist.githubusercontent.com/RaiSaugat/00ef0e4d9a7ba65c9012a0f12b58207a/raw/ff6a7b1ab4967595ba38b4f16f88e6cd6175f6e9/users.json").catch(error => {
            throw new Error(error);
        });
    },
};
export default UserAPI;