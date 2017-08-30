require("./test.less");
var fuc = {
    init() {
        $.ajax({
            type: "get",
            url: "/a/b/c",
            data: {
                a:1
            },
            success: function(data) {
                console.log(JSON.stringify(data))
            }
        })
    }
};

fuc.init();