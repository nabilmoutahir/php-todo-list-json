<?php

// GET JSON CONTENT 
$get_json = file_get_contents('../data/items-list.json');

// JSON ---> PHP
$json_content = json_decode($get_json, true);

$task_list = $json_content;

$json_list = json_encode($task_list);

file_put_contents('../data/items-list.json', $json_list);

// // ALERT BROWSER
Header('Content-Type: application/json');

echo ($json_list);

