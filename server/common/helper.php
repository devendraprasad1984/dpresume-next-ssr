<?php
include "../api/app.php";


function returnDataset($qur)
{
    global $conn;
    $sql = $conn->query($qur);
    $rows = $sql->fetch_all(MYSQLI_ASSOC);
    mysqli_free_result($sql);
    return json_encode($rows);
}

function handleFeedbackSave($data)
{
    global $success, $conn;
    $title = $conn->real_escape_string($data['title']);
    $feedback = $conn->real_escape_string($data['desc']);
    $ip = $_SERVER['REMOTE_ADDR'];

    $sql = "INSERT INTO dp_feedback(feedback,ip) values('$feedback','$ip')";
    $result = $conn->query($sql);
    echo $success;
//    mysqli_close($conn);
}


function getFeedbacksAnonymous(){
    $qur="select * from dp_feedback order by `time` desc";
    $rows = returnDataset($qur);
    echo $rows;
}