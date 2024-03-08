function App() {
  const list = new Array(4).fill({
    nome: "Nicolas Andrei da Silva", 
    placa: "XXX-1234", 
    telefone: "(123) 456-7890",
    email: "motoboy@example.com"
  });

  return (
    <div>
      <header>
      <h1>Gestão de Motoboys</h1>
      </header>
      <section>
        {list.map((card) => {
          return(
            <div class="motoboy-card">
              <h2>{card.nome}</h2>
              <p>Placa: {card.placa}</p>
              <p>Telefone: {card.telefone}</p>
              <p>Email: {card.email}</p>
              <div class="motoboy-actions">
                <button>Editar</button>
                <button>Excluir</button>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default App;
