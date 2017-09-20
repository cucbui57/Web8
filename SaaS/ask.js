function updateRemainingChars() {
  const textLength = JQuery("#question_tf").val().length;
  $("#text_counter").html(200-textLength);
}

$("#question_td").on("change keyup paste", updateRemainingChars);
