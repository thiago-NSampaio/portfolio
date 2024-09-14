export function getSaudation() {
  const time = new Date();
  const hours = time.getHours();
  let saudation = "";

  if (hours >= 0 && hours < 12) {
    saudation = "Bom dia!";
  } else if (hours >= 12 && hours < 18) {
    saudation = "Boa tarde!";
  } else {
    saudation = "Boa noite!";
  }

  return saudation;
}
