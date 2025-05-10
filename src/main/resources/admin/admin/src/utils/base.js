const base = {
    get() {
        return {
            url : "http://localhost:8080/registrationSystem/",
            name: "registrationSystem",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/registrationSystem/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于springboot的考试信息报名系统"
        } 
    }
}
export default base
