function basicTeenager(age) {
  if (13 < age < 19)
  console.log("You are a teenager");
}

function teenager(age) {
  if (13 < age < 19)
  console.log("You are a teenager!");
} else {
  console.log("You are not a teenager");
  }
}

function ageChecker(age) {
  if (age > 13 && age < 19)
  console.log("You are a teenager!");

} else if (age <=12) {
  console.log("You are a kid");
} else if (age > 19) {
  console.log("You are a grownup");
}

function ternaryTeenager(age) {
  return age > 13 && age < 19 ? "You are a teenager" :
  "You are not a teenager"


}

function switchAge(age) {

}
