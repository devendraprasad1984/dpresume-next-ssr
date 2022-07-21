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
    $feedback = $conn->real_escape_string($data['feedback']);
    $ip = 'ip & location';

    $sql = "INSERT INTO dp_feedback(feedback) values('$feedback')";
    $result = $conn->query($sql);
    echo $success;
//    mysqli_close($conn);
}


function getFeedbacksAnonymous(){
    $qur="select * from dp_feedback order by `time` desc";
    $rows = returnDataset($qur);
    echo $rows;
}