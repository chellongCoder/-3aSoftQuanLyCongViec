export default {
    getData(id) {
        var form = new FormData();
        form.append("idAccount", id);
        return { url: "index.php/First_controller/getDataController/getData", data: form };
    },
    createNewContent(kiHieu, ngayThang, hanNop, yeuCau, noiBanHanh, nguoiNhan, noiDung, ghiChu) {
        var form = new FormData();
        form.append('kiHieu', kiHieu);
        form.append("ngayThang", ngayThang);
        form.append("hanNop", hanNop);
        form.append("yeuCau", yeuCau);
        form.append('noiBanHanh', noiBanHanh);
        form.append("nguoiNhan", nguoiNhan);
        form.append("noiDung", noiDung);
        form.append("ghiChu", ghiChu);
        return { url: "index.php/First_controller/createNewContentController/createNewContent", data: form };
    },
    deleteItem(kiHieu) {
        var form = new FormData();
        form.append('kiHieu', kiHieu);
        return { url: 'index.php/First_controller/deleteItemController/deleteItem', data: form };
    }
};
//# sourceMappingURL=config.js.map