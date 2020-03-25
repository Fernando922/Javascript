function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido ${area}m²`);
  } else {
    return area;
  }
}

console.log(area(2,2)) //2*2
console.log(area(2))  //2*undefined
console.log(area())  //undefined*undefined
console.log(area(2,3,4,5))  //utiliza só os dois primeiros
console.log(area(5,5))  //extrapolou o limite