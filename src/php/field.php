<?php
// variable that stores error data
$erro = false;

// Create variables dynamically
foreach ($_POST as $key => $value) {
  // Remove all HTML tags and white spaces
  $$key = trim(strip_tags($value));
}

// If any errors exist, show the error.
if ($erro) {
  echo $erro;
} else {

  echo "<h1> Form Data </h1>";

  foreach ($_POST as $key => $value) {
    echo '<b>' . $key . '</b>: ' . $value . '<br><br>';
  }
}
