var common = {
  getstrlen: function (str, len) {
    if (str.length > len) {
      return str.substr(0, len) + "..."
    } else
      return str
  },

  
  format: function (num) {
    var time = num * 1000;
    var d = new Date(time);
    var year = d.getFullYear();
    var month = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1);
    var day = (d.getDate() + 1) < 10 ? "0" + (d.getDate()) : (d.getDate());
    return year + "-" + month + "-" + day;
  },
}
module.exports = common