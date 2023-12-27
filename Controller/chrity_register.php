<?php

//問bard的結果：））
if (isset($_POST["password"]) && isset($_POST["confirm_password"])) {
  if ($_POST["password"] === $_POST["confirm_password"]) {
    // Password confirmed, proceed with registration
    // ...
  } else {
    // Password mismatch, display error message
    echo "<p>Error: Passwords do not match</p>";
  }
}
?>