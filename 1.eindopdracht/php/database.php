<?php
// connects to pokemon sql database

// zegt tegen browser dat het een json is
header("Content-Type: application/json");

//database login info
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pokemon";
// verbind met db
$connect = mysqli_connect($servername, $username, $password, $dbname);
//verbinding check
if (mysqli_connect_errno()) {
    echo json_encode(["error" => "Connection failed"]);
    exit;
}
// zoekterm uit url halen
$q = $_GET['q'] ?? '';
// als zoeken leeg is, geef niks terug (lege lijst dan exit)
if ($q === '') {
    echo json_encode([]);
    exit;
}
// sql query
// ctype_digit checkt of het alleen nummers bevat
if (ctype_digit($q)) {
    $sql = "
    SELECT pokemon.*, types.type_name
    FROM pokemon
    LEFT JOIN pokemon_types USING (pok_id)
    LEFT JOIN types USING (type_id)
    WHERE pok_id = $q
    ";
} else {
    // als het letters is kan het afgerond worden door like
    $sql = "
    SELECT pokemon.*, types.type_name
    FROM pokemon
    LEFT JOIN pokemon_types USING (pok_id)
    LEFT JOIN types USING (type_id)
    WHERE pok_name = '$q'
       OR pok_name LIKE '$q%'
    ";
}

// doet de query
$result = $connect->query($sql);

//stopt data in een array en maakt kolom namen de key dus pok_id is key pok_name enzovoort
$data = $result->fetch_all(MYSQLI_ASSOC);
// verandert data naar json
echo json_encode($data);

// en sluit de verbindingen als alles gedaan is
$connect->close();