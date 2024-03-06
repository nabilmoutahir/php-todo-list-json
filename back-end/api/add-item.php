<?php


// GET JSON CONTENT 
$get_json = file_get_contents('../data/items-list.json');

// // JSON ---> PHP
$json_content = json_decode($get_json, true);

$json_content[]= $_POST['task'];

$json_list = json_encode($json_content);

file_put_contents('../data/items-list.json', $json_list);

Header('Content-Type: application/json');

// // // ALERT BROWSER
echo $json_list;

