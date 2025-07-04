function checkArray(arr: any[]): boolean {
  let hasNumber = false;
  let hasString = false;

  for (const item of arr) {
    if (typeof item === 'number') hasNumber = true;
    if (typeof item === 'string') hasString = true;
  }

  return hasNumber && hasString;
}

// Testlar:
console.log(checkArray(['hello', 123, 'world'])); 
console.log(checkArray(['hello', '123', 'world']));