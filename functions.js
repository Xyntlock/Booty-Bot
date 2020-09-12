function capitalise(s) {
    s = s[0].toUpperCase() + s.substring(1);
    console.log(s);
    return;
};

module.exports = {
  capitalise
};
