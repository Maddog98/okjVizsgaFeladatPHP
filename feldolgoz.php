<?php

require './MySqlDB.php';

$mySql= new MySqlDB();

$adatok= array();

$result = $mySql ->lekerdez("adatok");

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {

        $adatok[] = $row;
    }
    echo json_encode($adatok);
}else{
    echo "0 eredmények";
}

