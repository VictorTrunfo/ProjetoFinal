<h1>Projeto Final PPW 2</h1>
<p>Disponível publicamente na URL: <a>https://pfinalppw2.herokuapp.com/api/</a></p>

<h2>Estrutura dos recursos:</h2>

<h5>Desenvolvedoras (/desenvolvedoras)<h5>
<ul>
    <li>nome: String,</li>
    <li>jogo: Objectid,</li>
    <li>fundacao: String,</li>
    <li>dono: String</li>
    <li>pais: String</li>
</ul>

<h5>Jogos (/jogos)<h5>
<ul>
    <li>nome: String,</li>
    <li>lancamento: String,</li>
    <li>nota: Number,</li>
    <li>personagens: Object (Retirado de API externa)</li>
</ul>

<h2>Requisições:</h2>
<ul>
    <li><b>GET</b> /api/desenvolvedoras/ --> Retorna uma lista com todas as Desenvolvedoras</li>
    <li><b>POST</b> /api/desenvolvedoras/ --> Cria uma nova desenvolvedora</li>
    <li><b>GET</b> /api/desenvolvedoras/{id} --> Retorna uma única desenvolvedora</li>
    <li><b>PUT</b> /api/desenvolvedoras/{id} --> Altera uma desenvolvedora</li>
    <li><b>DELETE</b> /api/desenvolvedoras/{id} --> Deleta uma desenvolvedora</li>
    <li><b>GET</b> /api/jogos/ --> Retorna uma lista com todas os jogos</li>
    <li><b>GET</b> /api/jogos/{id} --> Retorna um único jogo</li>
    <li><b>POST</b> /api/jogos/ --> Cria um novo jogo</li>
    <li><b>GET</b> /api/jogos/{id} --> Retorna um único jogo</li>
    <li><b>PUT</b> /api/jogos/{id} --> Altera um jogo</l >
    <li><b>DELETE</b> /api/jogos/{id} --> Deleta um jogo<rli>
/tu