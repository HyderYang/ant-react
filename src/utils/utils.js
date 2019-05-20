export default {
  formatDate(time) {
    if (!time) return '';
    let date = new Date(time);
    let formatTime = date.getFullYear() + '-';
    formatTime += this._prefixZero(date.getMonth() + 1) + '-';
    formatTime += this._prefixZero(date.getDate()) + ' ';
    formatTime += this._prefixZero(date.getHours()) + ':';
    formatTime += this._prefixZero(date.getMinutes()) + ':';
    formatTime += this._prefixZero(date.getSeconds());
    return formatTime;
  },

  _prefixZero(num) {
    return num >= 10 ? num : '0' + num;
  }
}