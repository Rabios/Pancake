p.st = {};

p.st.save = function(v, val) {
    st.setItem(v, val);
};

p.st.load = function(v) {
    return st.getItem(v);
};

p.st.remove = function(v) {
    st.removeItem(v)
};

p.st.name = function(i) {
    return st.key(i);
};

p.st.clear = function() {
    st.clear();
};
