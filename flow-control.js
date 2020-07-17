function basicTeenager(age) {
  if (age <= 19 && age >= 13) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age <= 19 && age >= 13) {
    console.log("You are a teenager!");
  } else {
    console.log("You are not a teeanger");
  }
}

function ageChecker(age) {
  if (age < 19 && age > 13) {
    console.log("You are a teenager!");
  } else if (age <= 12) {
    console.log("You are a kid");
  } else if (age > 19) {
    console.log("You are a grownup");
  }
}

function ternaryTeenager(age) {
  return age > 13 && age < 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch (age) {
    case 13, 14, 15, 16, 17, 18, 19 :
      console.log("You are a teenager");
      break;
    default:
      console.log("You have an age");
  }
}
