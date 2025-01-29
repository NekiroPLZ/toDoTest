const defaultConfig = { host: 'localhost', port: 3000 };
const userConfig = { port: 8080, database: 'postgres' };

const combinedConfig = {...defaultConfig,...userConfig};

console.log(combinedConfig);
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Mouse', price: 50 },
    { id: 3, name: 'Keyboard', price: 80 },
  ];
  

const a = products.filter(product => product.id !==2);
console.log(products);

console.log(a);


// const tasks = [
//     { id: 1, title: "Learn JavaScript", completed: false },
//     { id: 2, title: "Practice Sequelize", completed: false },
//   ];
  
//   // Crear una nueva referencia del array
//   const a = tasks.map(task => 
//     task.id === 1 ? { ...task, completed: true } : task
//   );
  
//   console.log(a);
//   console.log(tasks);  // El array original no ha cambiado
  


