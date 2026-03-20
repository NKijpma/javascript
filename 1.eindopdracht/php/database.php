<?php
// connects to pokemon sql database
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
if (ctype_digit($q)) {
    $sql = "
    SELECT pokemon.*, types.type_name
    FROM pokemon
    LEFT JOIN pokemon_types USING (pok_id)
    LEFT JOIN types USING (type_id)
    WHERE pok_id = $q
    ";
} else {
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


//stopt data in een array
$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}
// verandert data naar json
echo json_encode($data);

// en sluit de verbindingen als alles gedaan is
$connect->close();