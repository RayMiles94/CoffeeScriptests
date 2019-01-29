var key, student, value;

student = {
  name: "person",
  age: 20,
  phone: 123456789
};

for (key in student) {
  value = student[key];
  console.log(key + "::" + value);
}
